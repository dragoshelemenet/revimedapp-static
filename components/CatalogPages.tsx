import Link from "next/link";
import PageHeading from "./PageHeading";
import { ContentSection, CardGrid, ListingCard, ReadingCard, ContentNote } from "./ContentLayout";

type Item = { slug: string; title: string; short: string; category: string; sections: {title: string; body: string[]}[] };
type Labels = { home: string; nav: string; title: string; subtitle: string; open: string; note: string; back: string };
type Props = { base: string; labels: Labels };
export function CatalogList({base, labels, items}: Props & {items: Item[]}) {
 return <>
  <PageHeading><div><p><Link href={base.split('/').slice(0,-1).join('/') || '/'}>{labels.home}</Link> / {labels.nav}</p><h1>{labels.title}</h1><p>{labels.subtitle}</p></div></PageHeading>
  <ContentSection><CardGrid>{items.map(item=><ListingCard key={item.slug} href={`${base}/${item.slug}/`} title={item.title} description={item.short} badge={item.category} action={labels.open} />)}</CardGrid></ContentSection>
 </>;
}
export function CatalogDetail({base, labels, item}: Props & {item: Item}) {
 return <>
  <PageHeading><div><p><Link href={`${base}/`}>{labels.nav}</Link> / {item.title}</p><h1>{item.title}</h1><p>{item.short}</p></div></PageHeading>
  <ContentSection narrow><ReadingCard>
   {item.sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.body.length>1 ? <ul>{section.body.map((line,index)=><li key={index}>{line}</li>)}</ul> : <p>{section.body[0]}</p>}</section>)}
   <ContentNote>{labels.note}</ContentNote><Link href={`${base}/`}>← {labels.back}</Link>
  </ReadingCard></ContentSection>
 </>;
}
