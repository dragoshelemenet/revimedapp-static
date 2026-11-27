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
          aria-label={isRu ? "Настройки файлов cookie" : "Preferințe cookies și confidențialitate"}
          style={{
            position: "fixed",
            bottom: "74px",
            left: "16px",
            right: "16px",
            maxWidth: "540px",
            zIndex: 9995,
            padding: "13px 16px",
            borderRadius: "16px",
            background: "rgba(10, 26, 44, 0.94)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            boxShadow: "0 14px 34px rgba(4, 15, 29, 0.36)",
            color: "#f2f7fc",
            fontSize: "12.5px",
            lineHeight: 1.45,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <strong style={{ color: "#ffffff" }}>
                {isRu ? "Конфиденциальность и Cookies (Закон № 133/2011):" : "Confidențialitate & Cookies (Legea nr. 133/2011):"}
              </strong>{" "}
              {isRu
                ? "Мы используем только технически необходимые настройки и, исключительно с вашего согласия, анонимную статистику и оценку рекламы (Google / Meta)."
                : "Folosim stocare tehnică necesară și, exclusiv cu acordul dvs., statistici anonime și măsurarea campaniilor (Google / Meta)."}{" "}
              <Link
                href={isRu ? "/ru/cookies/" : "/cookies/"}
                style={{ color: "#67e8f9", textDecoration: "underline", fontWeight: 600 }}
              >
                {isRu ? "Подробнее" : "Politica Cookies"}
              </Link>
              .
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={() => decide("rejected")}
                style={{
                  padding: "6px 13px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {isRu ? "Только необходимые" : "Doar Necesare"}
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                style={{
                  padding: "6px 15px",
                  borderRadius: "999px",
                  border: "1px solid rgba(56, 189, 248, 0.5)",
                  background: "linear-gradient(180deg, #0ea5e9 0%, #0284c7 100%)",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
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
