export default function HomeStats() {
 const stats = [
  { value: "Neurologie", label: "consultații și orientare medicală" },
  { value: "Reabilitare", label: "recuperare funcțională și terapii" },
  { value: "Diagnostic", label: "evaluări și instrumente educaționale" }
 ];

 return (
  <section className="homeStatsBand">
   <div className="rmShell homeStatsGrid">
    {stats.map((item) => (
     <article key={item.value}>
      <b>{item.value}</b>
      <span>{item.label}</span>
     </article>
    ))}
   </div>
  </section>
 );
}
