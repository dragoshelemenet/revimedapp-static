"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    REVIMED_PIXEL_CONFIG?: {
      metaPixelId?: string;
      ga4Id?: string;
      googleAdsId?: string;
    };
    openRevimedCookieSettings?: () => void;
  }
}

const ENV_META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || "";
const ENV_GA4_ID = process.env.NEXT_PUBLIC_GA4_ID?.trim() || "";
const ENV_GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || "";

const CONSENT_KEY = "revimed_cookie_consent_v2";
const CONSENT_TS_KEY = "revimed_cookie_consent_ts";

function makeEventId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function clearNonEssentialCookies() {
  if (typeof document === "undefined") return;
  const names = ["_fbp", "_fbc", "_ga", "_gid", "_gat", "_gcl_au"];
  const host = window.location.hostname;
  const rootDomain = "." + host.replace(/^www\./, "");
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${host}; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${rootDomain}; SameSite=Lax`;
  }
}

export default function CookieConsentAndMeta() {
  const [consent, setConsent] = useState<"unknown" | "accepted" | "rejected">("unknown");
  const [mounted, setMounted] = useState(false);
  const [isRu, setIsRu] = useState(false);

  const metaPixelId =
    ENV_META_PIXEL_ID ||
    (typeof window !== "undefined" ? window.REVIMED_PIXEL_CONFIG?.metaPixelId || "" : "");
  const ga4Id =
    ENV_GA4_ID || (typeof window !== "undefined" ? window.REVIMED_PIXEL_CONFIG?.ga4Id || "" : "");
  const googleAdsId =
    ENV_GOOGLE_ADS_ID ||
    (typeof window !== "undefined" ? window.REVIMED_PIXEL_CONFIG?.googleAdsId || "" : "");

  useEffect(() => {
    setIsRu(
      window.location.pathname.startsWith("/ru") ||
        document.documentElement.lang?.toLowerCase().startsWith("ru")
    );

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = window.gtag || gtag;
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
      wait_for_update: 500,
    });

    try {
      const saved = window.localStorage.getItem(CONSENT_KEY);
      if (saved === "accepted" || saved === "rejected") {
        setConsent(saved);
        if (saved === "accepted") {
          window.gtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
            analytics_storage: "granted",
          });
        }
      }
    } catch {
      setConsent("unknown");
    }

    window.openRevimedCookieSettings = () => setConsent("unknown");
    setMounted(true);
  }, []);

  const decide = (choice: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
      window.localStorage.setItem(CONSENT_TS_KEY, new Date().toISOString());
    } catch {
      // ignore
    }
    setConsent(choice);
    if (choice === "accepted") {
      window.gtag?.("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
      window.fbq?.("consent", "grant");
    } else {
      window.gtag?.("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
      window.fbq?.("consent", "revoke");
      clearNonEssentialCookies();
    }
  };

  useEffect(() => {
    if (consent !== "accepted") return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const pagePath = window.location.pathname || "/";
      const eventId = makeEventId("rm");

      if (href.startsWith("tel:")) {
        window.gtag?.("event", "contact_phone", { page_path: pagePath, event_id: eventId });
        window.fbq?.("track", "Contact", { channel: "phone", page_path: pagePath }, { eventID: eventId });
      } else if (href.includes("wa.me") || href.includes("whatsapp.com") || href.includes("viber")) {
        window.gtag?.("event", "contact_chat", { page_path: pagePath, event_id: eventId });
        window.fbq?.("track", "Lead", { channel: "chat", page_path: pagePath }, { eventID: eventId });
      } else if (href.includes("maps.google") || href.includes("goo.gl/maps") || href.includes("maps.app.goo.gl")) {
        window.gtag?.("event", "find_location", { page_path: pagePath, event_id: eventId });
        window.fbq?.("track", "FindLocation", { page_path: pagePath }, { eventID: eventId });
      } else if (href.includes("/preturi")) {
        window.gtag?.("event", "view_prices", { page_path: pagePath, event_id: eventId });
        window.fbq?.("track", "ViewContent", { content_category: "preturi", page_path: pagePath }, { eventID: eventId });
      }
    };

    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  if (!mounted) return null;

  const hasConsent = consent === "accepted";

  return (
    <>
      {consent === "unknown" ? (
        <aside
          role="region"
          data-glass-card
          aria-label={isRu ? "Настройки файлов cookie" : "Preferințe cookies și confidențialitate"}
          style={{
            position: "fixed",
            bottom: "18px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(760px, calc(100vw - 28px))",
            zIndex: 9995,
            padding: "14px 20px",
            borderRadius: "22px",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(242, 250, 255, 0.82) 50%, rgba(216, 240, 255, 0.88) 100%)",
            backdropFilter: "blur(22px) saturate(180%)",
            WebkitBackdropFilter: "blur(22px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.92)",
            boxShadow:
              "inset 0 2px 3px rgba(255, 255, 255, 0.98), inset 0 -2px 5px rgba(11, 143, 216, 0.18), 0 18px 42px rgba(7, 31, 63, 0.14), 0 4px 14px rgba(11, 143, 216, 0.10)",
            color: "#0f2942",
            fontSize: "13px",
            lineHeight: 1.45,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "14px",
            }}
          >
            <div style={{ flex: "1 1 420px", color: "#1e3a5f" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "2px 9px",
                  marginRight: "8px",
                  borderRadius: "999px",
                  background: "rgba(11, 143, 216, 0.12)",
                  color: "#0969a8",
                  fontWeight: 700,
                  fontSize: "11.5px",
                }}
              >
                {isRu ? "Конфиденциальность · Закон № 133/2011" : "Confidențialitate · Legea nr. 133/2011"}
              </span>
              {isRu
                ? "Используем только технически необходимые настройки и, с вашего согласия, анонимную статистику (Google / Meta)."
                : "Folosim stocare tehnică necesară și, doar cu acordul dvs., statistici anonime (Google / Meta)."}{" "}
              <Link
                href={isRu ? "/ru/cookies/" : "/cookies/"}
                style={{ color: "#0b8fd8", textDecoration: "underline", fontWeight: 700 }}
              >
                {isRu ? "Политика Cookies" : "Politica Cookies"}
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
              <button
                type="button"
                onClick={() => decide("rejected")}
                style={{
                  padding: "8px 15px",
                  borderRadius: "999px",
                  border: "1px solid rgba(11, 143, 216, 0.26)",
                  background: "rgba(255, 255, 255, 0.82)",
                  color: "#0f2942",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.9)",
                }}
              >
                {isRu ? "Только необходимые" : "Doar Necesare"}
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(11, 143, 216, 0.5)",
                  background: "linear-gradient(180deg, #1d9bf0 0%, #0b8fd8 100%)",
                  color: "#ffffff",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 6px 16px rgba(11, 143, 216, 0.26)",
                }}
              >
                {isRu ? "Принять" : "Acceptă"}
              </button>
            </div>
          </div>
        </aside>
      ) : null}

      {hasConsent && (ga4Id || googleAdsId) ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id || googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="revimed-gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('consent', 'update', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted'
              });
              ${ga4Id ? `gtag('config', '${ga4Id}', { anonymize_ip: true });` : ""}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      ) : null}

      {hasConsent && metaPixelId ? (
        <Script id="revimed-meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('consent', 'grant');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}
    </>
  );
}
