import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
 return {
  name: "Centrul Medical Revimed PLUS+",
  short_name: "Revimed PLUS+",
  description: "Centru medical în Chișinău pentru neurologie, recuperare, fizioterapie și diagnostic funcțional.",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#0b8fd8",
  icons: [
   {
    src: "/icon.svg",
    sizes: "any",
    type: "image/svg+xml"
   }
  ]
 };
}
