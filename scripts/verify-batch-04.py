#!/usr/bin/env python3
"""Check every published static page, metadata target and main landmark."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import xml.etree.ElementTree as ET

class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.meta={};self.links=[];self.mains=0;self.lang=None;self.title='';self.in_title=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='html':self.lang=a.get('lang')
  if tag=='meta':self.meta[a.get('name',a.get('property'))]=a.get('content','')
  if tag=='link':self.links.append(a)
  if tag=='main':self.mains+=1
  if tag=='title':self.in_title=True
 def handle_endtag(self,tag):
  if tag=='title':self.in_title=False
 def handle_data(self,s):
  if self.in_title:self.title+=s

out=Path('out')
assert out.is_dir(), 'Run npm run build before verification.'
urls=[e.text for e in ET.parse(out/'sitemap.xml').iter() if e.tag.endswith('}loc')]
assert len(urls)>=228, f'Unexpected sitemap coverage: {len(urls)}'
for url in urls:
 path=urlparse(url).path
 file=out/unquote(path).lstrip('/')/'index.html'
 p=Page();p.feed(file.read_text())
 canonical=[a['href'] for a in p.links if a.get('rel')=='canonical']
 assert canonical==[url], (path,'canonical',canonical)
 assert p.title and p.meta.get('description'), (path,'missing title/description')
 assert p.meta.get('og:url')==url, (path,'OpenGraph URL')
 assert p.meta.get('twitter:title'), (path,'Twitter title')
 assert p.mains==1, (path,'main landmarks',p.mains)
 locale=path.split('/')[1]
 assert p.lang==({'ua':'uk','en':'en','ru':'ru'}.get(locale,'ro')), (path,'HTML lang',p.lang)
 for a in p.links:
  if a.get('rel')=='alternate' and a.get('hreflang'):
   target=out/unquote(urlparse(a['href']).path).lstrip('/')/'index.html'
   assert target.exists(), (path,'missing alternate',a['href'])
for lang in ['en','ru','ua']:
 p=Page();p.feed((out/lang/'video-uri/index.html').read_text())
 assert 'noindex' in p.meta.get('robots',''), (lang,'placeholder indexable')
print(f'PASS: {len(urls)} published pages have canonical, social metadata, valid language alternates, correct HTML language and one main landmark; placeholders are noindex.')
