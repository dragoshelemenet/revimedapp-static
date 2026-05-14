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

      <section className="rmSection contactCleanSection">
        <div className="rmShell contactOldLayout">
          <div className="contactOldTop">
            <div className="contactOldInfo">
              <p><b>Fix:</b> {contact.fixed_phone}</p>
              <p><b>Telefon:</b> {contact.phone}</p>
              <p><b>Telefon Alternativ:</b> {contact.phone_alt}</p>
              <p><b>Email:</b> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              <p><b>Adresa:</b> {contact.address}</p>
            </div>

            <div className="workingHoursCard">
              <h2>Program de lucru:</h2>
              <p>{contact.hours_week}</p>
              <p>{contact.hours_weekend}</p>
            </div>
          </div>

          <div className="mapButtonLine">
            <a className="mapSmallBtn" href={contact.map_link} target="_blank" rel="noopener noreferrer">
              📍 Aici Mapa
            </a>
          </div>

          <div className="transportLine">
            <span>🚌 Autobuz: {contact.bus}</span>
            <span>🚎 Troleibuz: {contact.trolleybus}</span>
            <span>🚕 Tramvai: {contact.tram}</span>
          </div>

          <div className="oldRouteImages">
            <a href={contact.image_one} target="_blank" rel="noopener noreferrer">
              <img src={contact.image_one} alt="Cum ajungi la Revimed PLUS+" />
            </a>
            <a href={contact.image_two} target="_blank" rel="noopener noreferrer">
              <img src={contact.image_two} alt="Harta sau reper Revimed PLUS+" />
            </a>
          </div>

          <div className="oldMapEmbed">
            <iframe
              src={contact.map_embed}
              title="Harta Revimed PLUS+"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
