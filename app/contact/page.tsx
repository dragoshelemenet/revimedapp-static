import { getContactContent, getContentBlock } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact",
  description: "Contact Revimed PLUS+ Chișinău, telefon, adresă, program, hartă și transport."
};

export default function ContactPage() {
  const contact = getContactContent("ro");
  const hero = getContentBlock("ro", "contact", "hero");

  return (
    <>
      <section className="pageHero contactHero">
        <div className="rmShell">
          <p className="crumb">Acasă / Contact</p>
          <h1>{hero?.title || "Contactați-ne"}</h1>
          <p className="lead">
            {hero?.text || "Adresă, telefon, program, transport și hartă pentru Centrul Medical Revimed PLUS+."}
          </p>
        </div>
      </section>

      <section className="rmSection contactModernSection">
        <div className="rmShell contactModernGrid">
          <div className="contactPrimaryCard">
            <span className="contactBadge">Revimed PLUS+</span>
            <h2>Date de contact</h2>
            <p className="contactIntro">
              Pentru programare, informații despre servicii sau orientare spre centru, utilizați datele de mai jos.
            </p>

            <div className="contactInfoList">
              <a href={`tel:${contact.fixed_phone.replaceAll(" ", "")}`}>
                <span>☎</span>
                <div>
                  <b>Fix</b>
                  <strong>{contact.fixed_phone}</strong>
                </div>
              </a>

              <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
                <span>📞</span>
                <div>
                  <b>Telefon</b>
                  <strong>{contact.phone}</strong>
                </div>
              </a>

              <a href={`tel:${contact.phone_alt.replaceAll(" ", "")}`}>
                <span>📱</span>
                <div>
                  <b>Telefon alternativ</b>
                  <strong>{contact.phone_alt}</strong>
                </div>
              </a>

              <a href={`mailto:${contact.email}`}>
                <span>✉</span>
                <div>
                  <b>Email</b>
                  <strong>{contact.email}</strong>
                </div>
              </a>

              <div className="contactInfoStatic">
                <span>📍</span>
                <div>
                  <b>Adresă</b>
                  <strong>{contact.address}</strong>
                </div>
              </div>
            </div>

            <div className="contactActionRow">
              <a className="blueBtn" href={`tel:${contact.phone.replaceAll(" ", "")}`}>Sună acum</a>
              <a className="softBtn" href={contact.map_link} target="_blank" rel="noopener noreferrer">
                Deschide harta
              </a>
            </div>
          </div>

          <aside className="contactSidePanel">
            <div className="contactMiniCard">
              <h3>Program de lucru</h3>
              <p>{contact.hours_week}</p>
              <p>{contact.hours_weekend}</p>
            </div>

            <div className="contactMiniCard">
              <h3>Transport</h3>
              <div className="transportModern">
                <span>🚌 Autobuz: <b>{contact.bus}</b></span>
                <span>🚎 Troleibuz: <b>{contact.trolleybus}</b></span>
                <span>🚕 Tramvai: <b>{contact.tram}</b></span>
              </div>
            </div>

            <div className="contactPhotoPair">
              <a href={contact.image_one} target="_blank" rel="noopener noreferrer">
                <img src={contact.image_one} alt="Reper pentru Revimed PLUS+" />
              </a>
              <a href={contact.image_two} target="_blank" rel="noopener noreferrer">
                <img src={contact.image_two} alt="Hartă pentru Revimed PLUS+" />
              </a>
            </div>
          </aside>
        </div>

        <div className="rmShell contactMapModern">
          <div className="mapHeader">
            <div>
              <span className="contactBadge">Hartă</span>
              <h2>Cum ajungi la Revimed PLUS+</h2>
            </div>
            <a className="softBtn" href={contact.map_link} target="_blank" rel="noopener noreferrer">
              Google Maps
            </a>
          </div>

          <iframe
            src={contact.map_embed}
            title="Harta Revimed PLUS+"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
