import { GalleryTemplate } from "@/lib/pageTemplates";
import { getGalleryLabel } from "@/lib/galleryLabels";
export const dynamic = "force-dynamic";
export const metadata = { title: "Galerie" };
export default function Page() {
  return <GalleryTemplate lang="ro" />;
}
