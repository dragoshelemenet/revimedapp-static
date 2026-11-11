from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse

class Tags(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.meta=[]
 def handle_starttag(self,tag,attrs):
  if tag=='link':self.links.append(dict(attrs))
  if tag=='meta':self.meta.append(dict(attrs))
count=0
for section in ['despre-noi','preturi','contact','galerie','blog']:
 for prefix in ['', 'en/', 'ru/', 'ua/']:
  route=f'{prefix}{section}/';p=Tags();p.feed((Path('out')/route/'index.html').read_text())
  canon=[l['href'] for l in p.links if l.get('rel')=='canonical'];assert len(canon)==1,route
  assert urlparse(canon[0]).path=='/'+route,route
  alternate={l.get('hreflang'):l['href'] for l in p.links if l.get('rel')=='alternate'}
  for lang,other in [('ro',''),('en','en/'),('ru','ru/'),('uk','ua/'),('x-default','')]:
   assert urlparse(alternate[lang]).path==f'/{other}{section}/',(route,lang)
   assert (Path('out')/f'{other}{section}/index.html').is_file()
  assert any(m.get('name')=='description' and m.get('content') for m in p.meta),route
  count+=1
print(f'PASS: {count} section pages have matching canonicals, five valid language alternates and descriptions.')
for prefix in ['', 'en/', 'ru/', 'ua/']:
 html=(Path('out')/prefix/'index.html').read_text()
 for bad in [f'/{prefix}aplicatii/teste-si-instrumente"',f'/{prefix}cookies"' if prefix else 'href="/INVALID"',f'/{prefix}termeni-si-conditii"' if prefix else 'href="/INVALID"',f'/{prefix}intrebari"' if prefix else 'href="/INVALID"']:
  assert 'href="'+bad not in html,bad
print('PASS: home navigation avoids missing localized legal/FAQ routes and the missing tools index.')
