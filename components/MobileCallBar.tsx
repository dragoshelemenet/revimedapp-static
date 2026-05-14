import { site } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="mobileCallBar">
      <a href={`tel:${site.phone2.replaceAll(" ", "")}`}>Sună</a>
      <a href="/contact">Contact</a>
    </div>
  );
}
