import type { ReactNode } from "react";
import styles from "./PageHeading.module.css";

/** Every inner route uses this static, image-free heading. */
export default function PageHeading({ children }: { children: ReactNode }) {
  return <section className={styles.heading} data-page-heading>{children}</section>;
}
