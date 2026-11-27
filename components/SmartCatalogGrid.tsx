"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ContentLayout.module.css";
import InfoPopover from "./InfoPopover";

export type SmartCatalogItem = {
  id: string;
  href: string;
  title: string;
  description: string;
  badge?: string;
  highlights?: string[];
  image?: string;
  action: string;
};

type SmartCatalogGridProps = {
  items: SmartCatalogItem[];
  initialCount?: number;
  groupByCategory?: boolean;
  moreLabel?: string;
  lessLabel?: string;
  closeLabel?: string;
  useInfoPopover?: boolean;
};

function CardItem({ item, useInfoPopover, priority = false }: { item: SmartCatalogItem; useInfoPopover?: boolean; priority?: boolean }) {
  const shortDesc =
    useInfoPopover && item.description.length > 105
      ? `${item.description.slice(0, 102).trimEnd()}…`
      : item.description;

  return (
    <article className={`${styles.card} rm-listing-card`} data-glass-card>
      {item.image && (
        <Link href={item.href} tabIndex={-1} aria-hidden="true">
          <img
            className={styles.cover}
            src={item.image}
            alt={item.title}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            width={640}
            height={360}
          />
        </Link>
      )}
      <div className={styles.cardBody}>
        {item.badge && <span className={styles.badge}>{item.badge}</span>}
        <div className="rm-title-with-info">
          <h2>
            <Link href={item.href}>{item.title}</Link>
          </h2>
          {useInfoPopover && item.description.length > 105 && (
            <InfoPopover title={item.title}>
              <p>{item.description}</p>
            </InfoPopover>
          )}
        </div>
        <p>{shortDesc}</p>
        {item.highlights && item.highlights.length > 0 && (
          <div className="rm-service-highlights-row">
            {item.highlights.map((h) => (
              <span key={h} className="rm-service-highlight-chip">{h}</span>
            ))}
          </div>
        )}
        <Link href={item.href} className={styles.action}>
          {item.action} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function SmartCatalogGrid({
  items,
  initialCount = 3,
  groupByCategory = false,
  moreLabel = "Mai multe +",
  lessLabel = "Restrânge",
  closeLabel = "✕",
  useInfoPopover = false
}: SmartCatalogGridProps) {
  const [expanded, setExpanded] = useState(false);
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const expandRef = useRef<HTMLDivElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const visibleInitial = items.slice(0, initialCount);
  const hiddenRest = items.slice(initialCount);

  const folders = useMemo(() => {
    if (!groupByCategory || hiddenRest.length === 0) return [];
    const map = new Map<string, SmartCatalogItem[]>();
    for (const item of hiddenRest) {
      const cat = item.badge || "Altele";
      const list = map.get(cat) || [];
      list.push(item);
      map.set(cat, list);
    }
    return Array.from(map.entries()).map(([category, groupItems]) => ({
      category,
      items: groupItems
    }));
  }, [groupByCategory, hiddenRest]);

  const useFolders = groupByCategory && folders.length >= 2;

  // Auto-close expanded section or inline drawer when it scrolls completely above viewport,
  // compensating scroll position synchronously to avoid any visual jump.
  useEffect(() => {
    if (!expanded && !openFolder) return;

    const onScroll = () => {
      const target = openFolder ? drawerRef.current : expandRef.current;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      if (rect.bottom < -140) {
        const heightLost = target.offsetHeight;
        if (openFolder) {
          setOpenFolder(null);
        } else {
          setExpanded(false);
        }
        window.requestAnimationFrame(() => {
          window.scrollBy({ top: -heightLost, behavior: "instant" as ScrollBehavior });
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [expanded, openFolder]);

  return (
    <div>
      {/* First clean row */}
      <div className="rm-smart-grid">
        {visibleInitial.map((item, idx) => (
          <CardItem key={item.id} item={item} useInfoPopover={useInfoPopover} priority={idx === 0} />
        ))}
      </div>

      {/* SSR SEO links for Googlebot when remaining items are lazily unmounted */}
      {hiddenRest.length > 0 && !expanded && !openFolder && (
        <nav className="sr-only" aria-label="Toate elementele">
          {hiddenRest.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      )}

      {/* Grouped Liquid Glass Folders with Inline Full-Width Drawer */}
      {useFolders && (
        <div className="rm-folders-grid">
          {folders.map((folder) => {
            const isOpen = openFolder === folder.category;
            return (
              <div key={folder.category} style={{ display: "contents" }}>
                <button
                  type="button"
                  className="rm-glass-folder"
                  data-glass-card
                  aria-expanded={isOpen}
                  onClick={() => setOpenFolder(isOpen ? null : folder.category)}
                >
                  <div className="rm-folder-head">
                    <strong>{folder.category}</strong>
                    <span className="rm-folder-count">{folder.items.length}</span>
                  </div>
                  <div className="rm-folder-previews">
                    {folder.items.slice(0, 4).map((preview) => (
                      <span key={preview.id} className="rm-folder-chip">
                        {preview.title}
                      </span>
                    ))}
                  </div>
                </button>

                {isOpen && (
                  <div ref={drawerRef} className="rm-inline-drawer">
                    <div className="rm-drawer-head">
                      <h3>{folder.category}</h3>
                      <button
                        type="button"
                        className="rm-info-popover-close"
                        aria-label="Închide"
                        onClick={() => setOpenFolder(null)}
                      >
                        {closeLabel}
                      </button>
                    </div>
                    <div className="rm-smart-grid">
                      {folder.items.map((item) => (
                        <CardItem key={item.id} item={item} useInfoPopover={useInfoPopover} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Standard "Mai multe +" lazy-mounted expansion */}
      {!useFolders && hiddenRest.length > 0 && (
        <>
          {expanded && (
            <div ref={expandRef} className="rm-smart-grid" style={{ marginTop: 8 }}>
              {hiddenRest.map((item) => (
                <CardItem key={item.id} item={item} useInfoPopover={useInfoPopover} />
              ))}
            </div>
          )}

          <div className="rm-more-wrap">
            <button
              type="button"
              className="rm-more-btn"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? `${lessLabel} ▴` : `${moreLabel} (${hiddenRest.length})`}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
