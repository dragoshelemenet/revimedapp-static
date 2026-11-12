import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./ContentLayout.module.css";

export function ContentSection({children, narrow = false}: {children: ReactNode; narrow?: boolean}) {
 return <section className={styles.section}><div className={narrow ? styles.reading : styles.shell}>{children}</div></section>;
}
export function CardGrid({children}: {children: ReactNode}) { return <div className={styles.grid}>{children}</div>; }
export function ListingCard({href,title,description,badge,image,action}: {href: string; title: string; description: string; badge?: string; image?: string; action: string}) {
 return <Link href={href} className={styles.card}>
  {image && <img className={styles.cover} src={image} alt="" loading="lazy" width={640} height={360} />}
  <div className={styles.cardBody}>
   {badge && <span className={styles.badge}>{badge}</span>}
   <h2>{title}</h2><p>{description}</p><span className={styles.action}>{action} <span aria-hidden="true">→</span></span>
  </div>
 </Link>;
}
export function ReadingCard({children}: {children: ReactNode}) { return <article className={styles.article}>{children}</article>; }
export function ContentNote({children}: {children: ReactNode}) { return <p className={styles.note}>{children}</p>; }
export function Question({title,children}: {title: string; children: ReactNode}) { return <details className={styles.question}><summary>{title}</summary><div>{children}</div></details>; }
