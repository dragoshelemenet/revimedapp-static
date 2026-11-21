"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type InfoPopoverProps = {
  title: string;
  ariaLabel?: string;
  children: ReactNode;
};

const MARGIN = 12;

export default function InfoPopover({ title, ariaLabel, children }: InfoPopoverProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; ready: boolean }>({
    top: MARGIN,
    left: MARGIN,
    ready: false
  });
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const popoverId = useId();

  const updatePosition = useCallback(() => {
    const btn = btnRef.current;
    const panel = panelRef.current;
    if (!btn || !panel) return;

    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    const btnRect = btn.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();

    let left = btnRect.left + btnRect.width / 2 - panelRect.width / 2;
    left = Math.max(MARGIN, Math.min(left, vw - panelRect.width - MARGIN));

    let top = btnRect.bottom + 10;
    if (top + panelRect.height > vh - MARGIN) {
      const above = btnRect.top - panelRect.height - 10;
      top = above >= MARGIN ? above : Math.max(MARGIN, vh - panelRect.height - MARGIN);
    }

    setCoords({ top, left, ready: true });
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (btnRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const startY = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - startY) > 48) {
        setOpen(false);
        return;
      }
      updatePosition();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open, updatePosition]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        className="rm-info-btn"
        aria-label={ariaLabel || title}
        aria-expanded={open}
        aria-controls={open ? popoverId : undefined}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        i
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={panelRef}
            id={popoverId}
            role="dialog"
            aria-label={title}
            className="rm-info-popover"
            style={{
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              visibility: coords.ready ? "visible" : "hidden"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rm-info-popover-head">
              <strong>{title}</strong>
              <button
                type="button"
                className="rm-info-popover-close"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            {children}
          </div>,
          document.body
        )}
    </>
  );
}
