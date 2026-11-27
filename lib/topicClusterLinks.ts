import { type Lang, withLang } from "@/lib/i18n";
import { getStaticPublishedPosts } from "@/lib/staticBlogPosts";

export type ClusterPageLink = {
  href: string;
  label: string;
  keywords: string;
};

export const RO_CLINICAL_PAGES: ClusterPageLink[] = [
  {
    "href": "/acupunctura-reflexoterapie-chisinau/",
    "label": "Acupunctură Chișinău",
    "keywords": "acupunctura reflexoterapie chisinau acupunctura-reflexoterapie-chisinau acupunctura-reflexoterapie-chisinau"
  },
  {
    "href": "/adhd-hiperactivitate-copii-neuropediatru-chisinau/",
    "label": "ADHD & Atenție Copii",
    "keywords": "adhd hiperactivitate copii neuropediatru chisinau adhd-hiperactivitate-copii-neuropediatru-chisinau adhd-hiperactivitate-copii-neuropediatru-chisinau"
  },
  {
    "href": "/ameteli-vertij-chisinau/",
    "label": "Amețeli & Vertij Chișinău",
    "keywords": "ameteli vertij chisinau ameteli-vertij-chisinau ameteli-vertij-chisinau"
  },
  {
    "href": "/amorteli-picioare-polineuropatie-chisinau/",
    "label": "Amorțeli Picioare & Polineuropatie",
    "keywords": "amorteli picioare polineuropatie chisinau amorteli-picioare-polineuropatie-chisinau amorteli-picioare-polineuropatie-chisinau"
  },
  {
    "href": "/atacuri-de-panica-anxietate-neurolog-chisinau/",
    "label": "Atacuri de Panică & Anxietate Chișinău",
    "keywords": "atacuri de panica anxietate neurolog chisinau atacuri-de-panica-anxietate-neurolog-chisinau atacuri-de-panica-anxietate-neurolog-chisinau"
  },
  {
    "href": "/autism-tsa-copii-neuropediatru-chisinau/",
    "label": "Neuropediatru Autism & TSA Copii Chișinău",
    "keywords": "autism tsa copii neuropediatru chisinau autism-tsa-copii-neuropediatru-chisinau autism-tsa-copii-neuropediatru-chisinau"
  },
  {
    "href": "/boala-parkinson-tremor-memorie-chisinau/",
    "label": "Parkinson, Tremor & Memorie",
    "keywords": "boala parkinson tremor memorie chisinau boala-parkinson-tremor-memorie-chisinau boala-parkinson-tremor-memorie-chisinau"
  },
  {
    "href": "/camera-salina-bai-namol-chisinau/",
    "label": "Cameră Salină & Băi cu Nămol",
    "keywords": "camera salina bai namol chisinau camera-salina-bai-namol-chisinau camera-salina-bai-namol-chisinau"
  },
  {
    "href": "/cartografierea-creierului-chisinau/",
    "label": "Cartografierea Creierului (600 MDL)",
    "keywords": "cartografierea creierului chisinau cartografierea-creierului-chisinau cartografierea-creierului-chisinau"
  },
  {
    "href": "/cefalee-abuz-medicamentos-cluster-neurolog-chisinau/",
    "label": "Cefalee de Abuz & Cluster",
    "keywords": "cefalee abuz medicamentos cluster neurolog chisinau cefalee-abuz-medicamentos-cluster-neurolog-chisinau cefalee-abuz-medicamentos-cluster-neurolog-chisinau"
  },
  {
    "href": "/cefalee-tensiune-vs-migrena-chisinau/",
    "label": "Cefalee vs. Migrenă (Ghid)",
    "keywords": "cefalee tensiune vs migrena chisinau cefalee-tensiune-vs-migrena-chisinau cefalee-tensiune-vs-migrena-chisinau"
  },
  {
    "href": "/contraindicatii-fizioterapie-siguranta-chisinau/",
    "label": "Contraindicații Fizioterapie",
    "keywords": "contraindicatii fizioterapie siguranta chisinau contraindicatii-fizioterapie-siguranta-chisinau contraindicatii-fizioterapie-siguranta-chisinau"
  },
  {
    "href": "/convulsii-febrile-copii-eeg-neuropediatru-chisinau/",
    "label": "Convulsii Febrile Copii",
    "keywords": "convulsii febrile copii eeg neuropediatru chisinau convulsii-febrile-copii-eeg-neuropediatru-chisinau convulsii-febrile-copii-eeg-neuropediatru-chisinau"
  },
  {
    "href": "/diagnostic-amp-chisinau/",
    "label": "Diagnostic AMP Chișinău",
    "keywords": "diagnostic amp chisinau diagnostic-amp-chisinau diagnostic-amp-chisinau"
  },
  {
    "href": "/distonie-neurovegetativa-chisinau/",
    "label": "Distonie Neurovegetativă (DNV)",
    "keywords": "distonie neurovegetativa chisinau distonie-neurovegetativa-chisinau distonie-neurovegetativa-chisinau"
  },
  {
    "href": "/durere-umar-periartrita-plexita-chisinau/",
    "label": "Durere de Umăr & Periartrită Chișinău",
    "keywords": "durere umar periartrita plexita chisinau durere-umar-periartrita-plexita-chisinau durere-umar-periartrita-plexita-chisinau"
  },
  {
    "href": "/dureri-de-cap-copii-neuropediatru-chisinau/",
    "label": "Dureri de Cap la Copii Chișinău",
    "keywords": "dureri de cap copii neuropediatru chisinau dureri-de-cap-copii-neuropediatru-chisinau dureri-de-cap-copii-neuropediatru-chisinau"
  },
  {
    "href": "/dureri-de-spate-sciatica-chisinau/",
    "label": "Dureri de spate & Sciatică",
    "keywords": "dureri de spate sciatica chisinau dureri-de-spate-sciatica-chisinau dureri-de-spate-sciatica-chisinau"
  },
  {
    "href": "/dureri-spate-sciatica-sarcina-chisinau/",
    "label": "Spate & Sciatică în Sarcină",
    "keywords": "dureri spate sciatica sarcina chisinau dureri-spate-sciatica-sarcina-chisinau dureri-spate-sciatica-sarcina-chisinau"
  },
  {
    "href": "/ecografie-ecg-chisinau/",
    "label": "Ecografie & ECG Chișinău",
    "keywords": "ecografie ecg chisinau ecografie-ecg-chisinau ecografie-ecg-chisinau"
  },
  {
    "href": "/eeg-chisinau/",
    "label": "EEG Chișinău",
    "keywords": "eeg chisinau eeg-chisinau eeg-chisinau"
  },
  {
    "href": "/eeg-copii-chisinau/",
    "label": "EEG Copii Chișinău",
    "keywords": "eeg copii chisinau eeg-copii-chisinau eeg-copii-chisinau"
  },
  {
    "href": "/eho-encefalografie-chisinau/",
    "label": "EHO-Encefalografie (250 MDL)",
    "keywords": "eho encefalografie chisinau eho-encefalografie-chisinau eho-encefalografie-chisinau"
  },
  {
    "href": "/electroforeza-amplipuls-chisinau/",
    "label": "Electroforeză & Amplipuls",
    "keywords": "electroforeza amplipuls chisinau electroforeza-amplipuls-chisinau electroforeza-amplipuls-chisinau"
  },
  {
    "href": "/electrospondilografie-chisinau/",
    "label": "Electrospondilografie Chișinău",
    "keywords": "electrospondilografie chisinau electrospondilografie-chisinau electrospondilografie-chisinau"
  },
  {
    "href": "/enurezis-nocturn-copii-neuropediatru-chisinau/",
    "label": "Enurezis Nocturn Copii",
    "keywords": "enurezis nocturn copii neuropediatru chisinau enurezis-nocturn-copii-neuropediatru-chisinau enurezis-nocturn-copii-neuropediatru-chisinau"
  },
  {
    "href": "/epilepsie-convulsii-chisinau/",
    "label": "Epilepsie & EEG Chișinău",
    "keywords": "epilepsie convulsii chisinau epilepsie-convulsii-chisinau epilepsie-convulsii-chisinau"
  },
  {
    "href": "/evaluare-biomecanica-ergonomie-birou-chisinau/",
    "label": "Biomecanică & Ergonomie",
    "keywords": "evaluare biomecanica ergonomie birou chisinau evaluare-biomecanica-ergonomie-birou-chisinau evaluare-biomecanica-ergonomie-birou-chisinau"
  },
  {
    "href": "/evaluare-neuropsihologica-testare-cognitiva-chisinau/",
    "label": "Evaluare Neuropsihologică & Cognitivă",
    "keywords": "evaluare neuropsihologica testare cognitiva chisinau evaluare-neuropsihologica-testare-cognitiva-chisinau evaluare-neuropsihologica-testare-cognitiva-chisinau"
  },
  {
    "href": "/fitoterapeut-chisinau/",
    "label": "Fitoterapeut Chișinău",
    "keywords": "fitoterapeut chisinau fitoterapeut-chisinau fitoterapeut-chisinau"
  },
  {
    "href": "/fizioterapie-ciocana-chisinau/",
    "label": "Fizioterapie Ciocana",
    "keywords": "fizioterapie ciocana chisinau fizioterapie-ciocana-chisinau fizioterapie-ciocana-chisinau"
  },
  {
    "href": "/ghid-diagnostic-functional-eeg-reg-amp-chisinau/",
    "label": "Ghid Diagnostic Funcțional",
    "keywords": "ghid diagnostic functional eeg reg amp chisinau ghid-diagnostic-functional-eeg-reg-amp-chisinau ghid-diagnostic-functional-eeg-reg-amp-chisinau"
  },
  {
    "href": "/gonartroza-coxartroza-fizioterapie-recuperare-chisinau/",
    "label": "Gonartroză & Coxartroză",
    "keywords": "gonartroza coxartroza fizioterapie recuperare chisinau gonartroza-coxartroza-fizioterapie-recuperare-chisinau gonartroza-coxartroza-fizioterapie-recuperare-chisinau"
  },
  {
    "href": "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/",
    "label": "Hernie Cervicală C5–C6 & Amețeli",
    "keywords": "hernie cervicala c5 c6 dureri gat ameteli chisinau hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau"
  },
  {
    "href": "/hernie-de-disc-chisinau/",
    "label": "Hernie de disc Chișinău",
    "keywords": "hernie de disc chisinau hernie-de-disc-chisinau hernie-de-disc-chisinau"
  },
  {
    "href": "/insomnie-tratament-chisinau/",
    "label": "Tratament insomnie Chișinău",
    "keywords": "insomnie tratament chisinau insomnie-tratament-chisinau insomnie-tratament-chisinau"
  },
  {
    "href": "/intarziere-vorbire-copii-neuropediatru-chisinau/",
    "label": "Întârziere de Vorbire Copii",
    "keywords": "intarziere vorbire copii neuropediatru chisinau intarziere-vorbire-copii-neuropediatru-chisinau intarziere-vorbire-copii-neuropediatru-chisinau"
  },
  {
    "href": "/kinetoterapie-chisinau/",
    "label": "Kinetoterapie Chișinău",
    "keywords": "kinetoterapie chisinau kinetoterapie-chisinau kinetoterapie-chisinau"
  },
  {
    "href": "/lumbago-blocaj-spate-acut-chisinau/",
    "label": "Lumbago & Blocaj Acut de Spate Chișinău",
    "keywords": "lumbago blocaj spate acut chisinau lumbago-blocaj-spate-acut-chisinau lumbago-blocaj-spate-acut-chisinau"
  },
  {
    "href": "/magnetoterapie-laser-chisinau/",
    "label": "Magnetoterapie & Laser Chișinău",
    "keywords": "magnetoterapie laser chisinau magnetoterapie-laser-chisinau magnetoterapie-laser-chisinau"
  },
  {
    "href": "/masaj-terapeutic-chisinau/",
    "label": "Masaj Terapeutic Chișinău",
    "keywords": "masaj terapeutic chisinau masaj-terapeutic-chisinau masaj-terapeutic-chisinau"
  },
  {
    "href": "/neurolog-ciocana-chisinau/",
    "label": "Neurolog Ciocana Chișinău",
    "keywords": "neurolog ciocana chisinau neurolog-ciocana-chisinau neurolog-ciocana-chisinau"
  },
  {
    "href": "/neuropatie-diabetica-arsuri-talpi-chisinau/",
    "label": "Neuropatie Diabetică Chișinău",
    "keywords": "neuropatie diabetica arsuri talpi chisinau neuropatie-diabetica-arsuri-talpi-chisinau neuropatie-diabetica-arsuri-talpi-chisinau"
  },
  {
    "href": "/nevralgie-intercostala-durere-omoplati-chisinau/",
    "label": "Nevralgie Intercostală & Omoplați",
    "keywords": "nevralgie intercostala durere omoplati chisinau nevralgie-intercostala-durere-omoplati-chisinau nevralgie-intercostala-durere-omoplati-chisinau"
  },
  {
    "href": "/nevralgie-neuropatie-chisinau/",
    "label": "Nevralgie & Neuropatie",
    "keywords": "nevralgie neuropatie chisinau nevralgie-neuropatie-chisinau nevralgie-neuropatie-chisinau"
  },
  {
    "href": "/nevralgie-occipitala-arnold-durere-ceafa-chisinau/",
    "label": "Nevralgie Occipitală Arnold",
    "keywords": "nevralgie occipitala arnold durere ceafa chisinau nevralgie-occipitala-arnold-durere-ceafa-chisinau nevralgie-occipitala-arnold-durere-ceafa-chisinau"
  },
  {
    "href": "/nevralgie-trigemen-pareza-faciala-chisinau/",
    "label": "Nevralgie Trigemen & Pareză Facială",
    "keywords": "nevralgie trigemen pareza faciala chisinau nevralgie-trigemen-pareza-faciala-chisinau nevralgie-trigemen-pareza-faciala-chisinau"
  },
  {
    "href": "/oboseala-cronica-burnout-biofeedback-chisinau/",
    "label": "Oboseală Cronică & Biofeedback",
    "keywords": "oboseala cronica burnout biofeedback chisinau oboseala-cronica-burnout-biofeedback-chisinau oboseala-cronica-burnout-biofeedback-chisinau"
  },
  {
    "href": "/osteocondroza-cervicala-chisinau/",
    "label": "Osteocondroză Chișinău",
    "keywords": "osteocondroza cervicala chisinau osteocondroza-cervicala-chisinau osteocondroza-cervicala-chisinau"
  },
  {
    "href": "/ozonoterapie-darsonval-chisinau/",
    "label": "Ozonoterapie & Darsonval",
    "keywords": "ozonoterapie darsonval chisinau ozonoterapie-darsonval-chisinau ozonoterapie-darsonval-chisinau"
  },
  {
    "href": "/paralizie-nerv-facial-bell-chisinau/",
    "label": "Paralizie Nerv Facial (Bell) Chișinău",
    "keywords": "paralizie nerv facial bell chisinau paralizie-nerv-facial-bell-chisinau paralizie-nerv-facial-bell-chisinau"
  },
  {
    "href": "/pinten-calcanean-artroza-chisinau/",
    "label": "Pinten Calcanean & Artroză",
    "keywords": "pinten calcanean artroza chisinau pinten-calcanean-artroza-chisinau pinten-calcanean-artroza-chisinau"
  },
  {
    "href": "/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau/",
    "label": "Protruzie L4–L5 / L5–S1 & Stenoză",
    "keywords": "protruzie discala l4 l5 l5 s1 stenoza chisinau protruzie-discala-l4-l5-l5-s1-stenoza-chisinau protruzie-discala-l4-l5-l5-s1-stenoza-chisinau"
  },
  {
    "href": "/reabilitare-medicala-neurologica-chisinau/",
    "label": "Reabilitare Medicală Chișinău",
    "keywords": "reabilitare medicala neurologica chisinau reabilitare-medicala-neurologica-chisinau reabilitare-medicala-neurologica-chisinau"
  },
  {
    "href": "/recuperare-comotie-cerebrala-traumatism-chisinau/",
    "label": "Recuperare Comoție Cerebrală",
    "keywords": "recuperare comotie cerebrala traumatism chisinau recuperare-comotie-cerebrala-traumatism-chisinau recuperare-comotie-cerebrala-traumatism-chisinau"
  },
  {
    "href": "/recuperare-dupa-avc-chisinau/",
    "label": "Recuperare după AVC Chișinău",
    "keywords": "recuperare dupa avc chisinau recuperare-dupa-avc-chisinau recuperare-dupa-avc-chisinau"
  },
  {
    "href": "/recuperare-postoperatorie-coloana-chisinau/",
    "label": "Recuperare Post-Operatorie Coloană",
    "keywords": "recuperare postoperatorie coloana chisinau recuperare-postoperatorie-coloana-chisinau recuperare-postoperatorie-coloana-chisinau"
  },
  {
    "href": "/reoencefalografie-chisinau/",
    "label": "Reoencefalografie Chișinău",
    "keywords": "reoencefalografie chisinau reoencefalografie-chisinau reoencefalografie-chisinau"
  },
  {
    "href": "/scolioza-postura-copii-adulti-chisinau/",
    "label": "Scolioză & Postură Chișinău",
    "keywords": "scolioza postura copii adulti chisinau scolioza-postura-copii-adulti-chisinau scolioza-postura-copii-adulti-chisinau"
  },
  {
    "href": "/sindrom-canal-cubital-nerv-ulnar-chisinau/",
    "label": "Canal Cubital (Nerv Ulnar)",
    "keywords": "sindrom canal cubital nerv ulnar chisinau sindrom-canal-cubital-nerv-ulnar-chisinau sindrom-canal-cubital-nerv-ulnar-chisinau"
  },
  {
    "href": "/sindrom-piriform-durere-fesa-picior-chisinau/",
    "label": "Sindrom Piriform",
    "keywords": "sindrom piriform durere fesa picior chisinau sindrom-piriform-durere-fesa-picior-chisinau sindrom-piriform-durere-fesa-picior-chisinau"
  },
  {
    "href": "/sindromul-picioarelor-nelinistite-neurolog-chisinau/",
    "label": "Picioare Neliniștite",
    "keywords": "sindromul picioarelor nelinistite neurolog chisinau sindromul-picioarelor-nelinistite-neurolog-chisinau sindromul-picioarelor-nelinistite-neurolog-chisinau"
  },
  {
    "href": "/spasmofilie-crize-hiperexcitabilitate-chisinau/",
    "label": "Spasmofilie & Spasme",
    "keywords": "spasmofilie crize hiperexcitabilitate chisinau spasmofilie-crize-hiperexcitabilitate-chisinau spasmofilie-crize-hiperexcitabilitate-chisinau"
  },
  {
    "href": "/spondilolistezis-alunecare-vertebra-neurochirurg-chisinau/",
    "label": "Spondilolistezis Coloană",
    "keywords": "spondilolistezis alunecare vertebra neurochirurg chisinau spondilolistezis-alunecare-vertebra-neurochirurg-chisinau spondilolistezis-alunecare-vertebra-neurochirurg-chisinau"
  },
  {
    "href": "/spondiloza-cervicala-sindrom-artera-vertebrala-chisinau/",
    "label": "Spondiloză Cervicală & Arteră Vertebrală Chișinău",
    "keywords": "spondiloza cervicala sindrom artera vertebrala chisinau spondiloza-cervicala-sindrom-artera-vertebrala-chisinau spondiloza-cervicala-sindrom-artera-vertebrala-chisinau"
  },
  {
    "href": "/stenoza-canal-spinal-lombar-neurochirurg-chisinau/",
    "label": "Stenoză Canal Spinal Chișinău",
    "keywords": "stenoza canal spinal lombar neurochirurg chisinau stenoza-canal-spinal-lombar-neurochirurg-chisinau stenoza-canal-spinal-lombar-neurochirurg-chisinau"
  },
  {
    "href": "/tensiune-intracraniana-simptome-neurolog-chisinau/",
    "label": "Tensiune Intracraniană",
    "keywords": "tensiune intracraniana simptome neurolog chisinau tensiune-intracraniana-simptome-neurolog-chisinau tensiune-intracraniana-simptome-neurolog-chisinau"
  },
  {
    "href": "/terapie-ultrasunete-epicondilita-tendinita-chisinau/",
    "label": "Ultrasunete, Cot & Umăr",
    "keywords": "terapie ultrasunete epicondilita tendinita chisinau terapie-ultrasunete-epicondilita-tendinita-chisinau terapie-ultrasunete-epicondilita-tendinita-chisinau"
  },
  {
    "href": "/ticuri-nervoase-balbaiala-copii-chisinau/",
    "label": "Ticuri & Logonevroză Copii",
    "keywords": "ticuri nervoase balbaiala copii chisinau ticuri-nervoase-balbaiala-copii-chisinau ticuri-nervoase-balbaiala-copii-chisinau"
  },
  {
    "href": "/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau/",
    "label": "Tinitus & Spondiloză Cervicală",
    "keywords": "tinitus zgomote urechi spondiloza cervicala chisinau tinitus-zgomote-urechi-spondiloza-cervicala-chisinau tinitus-zgomote-urechi-spondiloza-cervicala-chisinau"
  },
  {
    "href": "/torticolis-gat-intepenit-fizioterapie-chisinau/",
    "label": "Torticolis & Gât Înțepenit Chișinău",
    "keywords": "torticolis gat intepenit fizioterapie chisinau torticolis-gat-intepenit-fizioterapie-chisinau torticolis-gat-intepenit-fizioterapie-chisinau"
  },
  {
    "href": "/tratament-migrene-chisinau/",
    "label": "Tratament migrene Chișinău",
    "keywords": "tratament migrene chisinau tratament-migrene-chisinau tratament-migrene-chisinau"
  },
  {
    "href": "/tremor-esential-tremur-maini-neurolog-chisinau/",
    "label": "Tremor Esențial & Tremur Mâini Chișinău",
    "keywords": "tremor esential tremur maini neurolog chisinau tremor-esential-tremur-maini-neurolog-chisinau tremor-esential-tremur-maini-neurolog-chisinau"
  },
  {
    "href": "/tulburari-de-memorie-dementa-neurolog-chisinau/",
    "label": "Tulburări de Memorie & Demență Chișinău",
    "keywords": "tulburari de memorie dementa neurolog chisinau tulburari-de-memorie-dementa-neurolog-chisinau tulburari-de-memorie-dementa-neurolog-chisinau"
  },
  {
    "href": "/tulburari-de-somn-copii-neuropediatru-chisinau/",
    "label": "Tulburări de Somn la Copii Chișinău",
    "keywords": "tulburari de somn copii neuropediatru chisinau tulburari-de-somn-copii-neuropediatru-chisinau tulburari-de-somn-copii-neuropediatru-chisinau"
  },
  {
    "href": "/tunel-carpian-amorteli-maini-chisinau/",
    "label": "Tunel Carpian & Amorțeli Mâini",
    "keywords": "tunel carpian amorteli maini chisinau tunel-carpian-amorteli-maini-chisinau tunel-carpian-amorteli-maini-chisinau"
  },
  {
    "href": "/zona-zoster-nevralgie-postherpetica-chisinau/",
    "label": "Nevralgie Postherpetică",
    "keywords": "zona zoster nevralgie postherpetica chisinau zona-zoster-nevralgie-postherpetica-chisinau zona-zoster-nevralgie-postherpetica-chisinau"
  }
];

export const RU_CLINICAL_PAGES: ClusterPageLink[] = [
  {
    "href": "/ru/abuzusnaya-golovnaya-bol-klasternaya-nevrolog-kishinev/",
    "label": "Абузусная и кластерная боль",
    "keywords": "abuzusnaya golovnaya bol klasternaya nevrolog kishinev abuzusnaya-golovnaya-bol-klasternaya-nevrolog-kishinev abuzusnaya-golovnaya-bol-klasternaya-nevrolog-kishinev"
  },
  {
    "href": "/ru/autizm-ras-u-detey-nevrolog-kishinev/",
    "label": "Детский невролог при РАС (аутизме) в Кишинёве",
    "keywords": "autizm ras u detey nevrolog kishinev autizm-ras-u-detey-nevrolog-kishinev autizm-ras-u-detey-nevrolog-kishinev"
  },
  {
    "href": "/ru/biomehanicheskaya-otsenka-ergonomika-ofis-kishinev/",
    "label": "Биомеханика и Эргономика",
    "keywords": "biomehanicheskaya otsenka ergonomika ofis kishinev biomehanicheskaya-otsenka-ergonomika-ofis-kishinev biomehanicheskaya-otsenka-ergonomika-ofis-kishinev"
  },
  {
    "href": "/ru/bol-v-pleche-periartroz-pleksit-kishinev/",
    "label": "Боль в плече и периартроз Кишинёв",
    "keywords": "bol v pleche periartroz pleksit kishinev bol-v-pleche-periartroz-pleksit-kishinev bol-v-pleche-periartroz-pleksit-kishinev"
  },
  {
    "href": "/ru/bol-v-spine-ishias-pri-beremennosti-kishinev/",
    "label": "Спина и ишиас при беременности",
    "keywords": "bol v spine ishias pri beremennosti kishinev bol-v-spine-ishias-pri-beremennosti-kishinev bol-v-spine-ishias-pri-beremennosti-kishinev"
  },
  {
    "href": "/ru/bolezn-parkinsona-tremor-kishinev/",
    "label": "Паркинсон, Тремор и Память",
    "keywords": "bolezn parkinsona tremor kishinev bolezn-parkinsona-tremor-kishinev bolezn-parkinsona-tremor-kishinev"
  },
  {
    "href": "/ru/boli-v-spine-ishias-kishinev/",
    "label": "Боль в спине и ишиас",
    "keywords": "boli v spine ishias kishinev boli-v-spine-ishias-kishinev boli-v-spine-ishias-kishinev"
  },
  {
    "href": "/ru/detskiy-nevrolog-kishinev/",
    "label": "Детский невролог Кишинёв",
    "keywords": "detskiy nevrolog kishinev detskiy-nevrolog-kishinev detskiy-nevrolog-kishinev"
  },
  {
    "href": "/ru/diabeticheskaya-neyropatiya-zhzhenie-stop-kishinev/",
    "label": "Диабетическая нейропатия Кишинёв",
    "keywords": "diabeticheskaya neyropatiya zhzhenie stop kishinev diabeticheskaya-neyropatiya-zhzhenie-stop-kishinev diabeticheskaya-neyropatiya-zhzhenie-stop-kishinev"
  },
  {
    "href": "/ru/diagnostika-amp-kishinev/",
    "label": "Диагностика АМП Кишинёв",
    "keywords": "diagnostika amp kishinev diagnostika-amp-kishinev diagnostika-amp-kishinev"
  },
  {
    "href": "/ru/eeg-detyam-kishinev/",
    "label": "ЭЭГ детям Кишинёв",
    "keywords": "eeg detyam kishinev eeg-detyam-kishinev eeg-detyam-kishinev"
  },
  {
    "href": "/ru/eeg-kishinev/",
    "label": "ЭЭГ Кишинёв",
    "keywords": "eeg kishinev eeg-kishinev eeg-kishinev"
  },
  {
    "href": "/ru/ehoentsefalografiya-eho-eg-kishinev/",
    "label": "Эхо-ЭГ (250 MDL)",
    "keywords": "ehoentsefalografiya eho eg kishinev ehoentsefalografiya-eho-eg-kishinev ehoentsefalografiya-eho-eg-kishinev"
  },
  {
    "href": "/ru/elektroforez-amplipuls-kishinev/",
    "label": "Электрофорез и Амплипульс",
    "keywords": "elektroforez amplipuls kishinev elektroforez-amplipuls-kishinev elektroforez-amplipuls-kishinev"
  },
  {
    "href": "/ru/elektroson-kishinev/",
    "label": "Электросон Кишинёв",
    "keywords": "elektroson kishinev elektroson-kishinev elektroson-kishinev"
  },
  {
    "href": "/ru/elektrospondilografiya-kishinev/",
    "label": "Электроспондилография",
    "keywords": "elektrospondilografiya kishinev elektrospondilografiya-kishinev elektrospondilografiya-kishinev"
  },
  {
    "href": "/ru/enurez-u-detey-nevrolog-kishinev/",
    "label": "Энурез у детей Кишинёв",
    "keywords": "enurez u detey nevrolog kishinev enurez-u-detey-nevrolog-kishinev enurez-u-detey-nevrolog-kishinev"
  },
  {
    "href": "/ru/epilepsiya-kishinev/",
    "label": "Эпилепсия и ЭЭГ",
    "keywords": "epilepsiya kishinev epilepsiya-kishinev epilepsiya-kishinev"
  },
  {
    "href": "/ru/essentsialnyy-tremor-drozh-v-rukah-nevrolog-kishinev/",
    "label": "Эссенциальный тремор и дрожь в руках Кишинёв",
    "keywords": "essentsialnyy tremor drozh v rukah nevrolog kishinev essentsialnyy-tremor-drozh-v-rukah-nevrolog-kishinev essentsialnyy-tremor-drozh-v-rukah-nevrolog-kishinev"
  },
  {
    "href": "/ru/febrilnye-sudorogi-u-detey-eeg-kishinev/",
    "label": "Фебрильные судороги у детей",
    "keywords": "febrilnye sudorogi u detey eeg kishinev febrilnye-sudorogi-u-detey-eeg-kishinev febrilnye-sudorogi-u-detey-eeg-kishinev"
  },
  {
    "href": "/ru/fitoterapevt-kishinev/",
    "label": "Фитотерапевт Кишинёв",
    "keywords": "fitoterapevt kishinev fitoterapevt-kishinev fitoterapevt-kishinev"
  },
  {
    "href": "/ru/fizioterapiya-chekany-kishinev/",
    "label": "Физиотерапия Чеканы",
    "keywords": "fizioterapiya chekany kishinev fizioterapiya-chekany-kishinev fizioterapiya-chekany-kishinev"
  },
  {
    "href": "/ru/gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev/",
    "label": "Гид по диагностике (ЭЭГ/РЭГ/АМП)",
    "keywords": "gid funktsionalnaya diagnostika eeg reg amp kishinev gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev"
  },
  {
    "href": "/ru/golovnaya-bol-napryazheniya-vs-migren-kishinev/",
    "label": "Головная боль vs. Мигрень",
    "keywords": "golovnaya bol napryazheniya vs migren kishinev golovnaya-bol-napryazheniya-vs-migren-kishinev golovnaya-bol-napryazheniya-vs-migren-kishinev"
  },
  {
    "href": "/ru/golovnye-boli-u-detey-nevrolog-kishinev/",
    "label": "Головные боли у детей Кишинёв",
    "keywords": "golovnye boli u detey nevrolog kishinev golovnye-boli-u-detey-nevrolog-kishinev golovnye-boli-u-detey-nevrolog-kishinev"
  },
  {
    "href": "/ru/golovokruzhenie-kishinev/",
    "label": "Головокружение Кишинёв",
    "keywords": "golovokruzhenie kishinev golovokruzhenie-kishinev golovokruzhenie-kishinev"
  },
  {
    "href": "/ru/gonartroz-koksartroz-fizioterapiya-kishinev/",
    "label": "Гонартроз и коксартроз",
    "keywords": "gonartroz koksartroz fizioterapiya kishinev gonartroz-koksartroz-fizioterapiya-kishinev gonartroz-koksartroz-fizioterapiya-kishinev"
  },
  {
    "href": "/ru/gryzha-diska-kishinev/",
    "label": "Грыжа диска Кишинёв",
    "keywords": "gryzha diska kishinev gryzha-diska-kishinev gryzha-diska-kishinev"
  },
  {
    "href": "/ru/gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishinev/",
    "label": "Грыжа шеи C5–C6 и Головокружение",
    "keywords": "gryzha sheynogo otdela c5 c6 golovokruzhenie kishinev gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishinev gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishinev"
  },
  {
    "href": "/ru/hronicheskaya-ustalost-vygoranie-biofidbek-kishinev/",
    "label": "Хроническая усталость и Биофидбек",
    "keywords": "hronicheskaya ustalost vygoranie biofidbek kishinev hronicheskaya-ustalost-vygoranie-biofidbek-kishinev hronicheskaya-ustalost-vygoranie-biofidbek-kishinev"
  },
  {
    "href": "/ru/igloukalyvanie-kishinev/",
    "label": "Иглоукалывание Кишинёв",
    "keywords": "igloukalyvanie kishinev igloukalyvanie-kishinev igloukalyvanie-kishinev"
  },
  {
    "href": "/ru/kartirovanie-mozga-kishinev/",
    "label": "Картирование мозга (600 MDL)",
    "keywords": "kartirovanie mozga kishinev kartirovanie-mozga-kishinev kartirovanie-mozga-kishinev"
  },
  {
    "href": "/ru/kinezoterapiya-kishinev/",
    "label": "Кинезотерапия Кишинёв",
    "keywords": "kinezoterapiya kishinev kinezoterapiya-kishinev kinezoterapiya-kishinev"
  },
  {
    "href": "/ru/krivosheya-zaklinilo-sheyu-nevrolog-kishinev/",
    "label": "Заклинило шею (кривошея) Кишинёв",
    "keywords": "krivosheya zaklinilo sheyu nevrolog kishinev krivosheya-zaklinilo-sheyu-nevrolog-kishinev krivosheya-zaklinilo-sheyu-nevrolog-kishinev"
  },
  {
    "href": "/ru/lechebnyy-massazh-kishinev/",
    "label": "Лечебный массаж Кишинёв",
    "keywords": "lechebnyy massazh kishinev lechebnyy-massazh-kishinev lechebnyy-massazh-kishinev"
  },
  {
    "href": "/ru/lechenie-bessonnitsy-kishinev/",
    "label": "Лечение бессонницы",
    "keywords": "lechenie bessonnitsy kishinev lechenie-bessonnitsy-kishinev lechenie-bessonnitsy-kishinev"
  },
  {
    "href": "/ru/lechenie-migreni-kishinev/",
    "label": "Лечение мигрени Кишинёв",
    "keywords": "lechenie migreni kishinev lechenie-migreni-kishinev lechenie-migreni-kishinev"
  },
  {
    "href": "/ru/lechenie-skolioza-kishinev/",
    "label": "Лечение сколиоза Кишинёв",
    "keywords": "lechenie skolioza kishinev lechenie-skolioza-kishinev lechenie-skolioza-kishinev"
  },
  {
    "href": "/ru/lyumbago-prostrel-v-poyasnitse-kishinev/",
    "label": "Люмбаго и прострел в пояснице Кишинёв",
    "keywords": "lyumbago prostrel v poyasnitse kishinev lyumbago-prostrel-v-poyasnitse-kishinev lyumbago-prostrel-v-poyasnitse-kishinev"
  },
  {
    "href": "/ru/magnitoterapiya-lazer-kishinev/",
    "label": "Магнитотерапия и Лазер",
    "keywords": "magnitoterapiya lazer kishinev magnitoterapiya-lazer-kishinev magnitoterapiya-lazer-kishinev"
  },
  {
    "href": "/ru/meditsinskaya-reabilitatsiya-kishinev/",
    "label": "Медицинская реабилитация",
    "keywords": "meditsinskaya reabilitatsiya kishinev meditsinskaya-reabilitatsiya-kishinev meditsinskaya-reabilitatsiya-kishinev"
  },
  {
    "href": "/ru/mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kishinev/",
    "label": "Межрёберная невралгия и лопатки",
    "keywords": "mezhrebernaya nevralgiya bol mezhdu lopatkami kishinev mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kishinev mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kishinev"
  },
  {
    "href": "/ru/narusheniya-pamyati-dementsiya-nevrolog-kishinev/",
    "label": "Нарушения памяти и деменция Кишинёв",
    "keywords": "narusheniya pamyati dementsiya nevrolog kishinev narusheniya-pamyati-dementsiya-nevrolog-kishinev narusheniya-pamyati-dementsiya-nevrolog-kishinev"
  },
  {
    "href": "/ru/narusheniya-sna-u-detey-nevrolog-kishinev/",
    "label": "Нарушения сна у детей Кишинёв",
    "keywords": "narusheniya sna u detey nevrolog kishinev narusheniya-sna-u-detey-nevrolog-kishinev narusheniya-sna-u-detey-nevrolog-kishinev"
  },
  {
    "href": "/ru/nervnye-tiki-zaikanie-detyam-kishinev/",
    "label": "Тики и заикание у детей",
    "keywords": "nervnye tiki zaikanie detyam kishinev nervnye-tiki-zaikanie-detyam-kishinev nervnye-tiki-zaikanie-detyam-kishinev"
  },
  {
    "href": "/ru/nevralgiya-neyropatiya-kishinev/",
    "label": "Невралгия и нейропатия",
    "keywords": "nevralgiya neyropatiya kishinev nevralgiya-neyropatiya-kishinev nevralgiya-neyropatiya-kishinev"
  },
  {
    "href": "/ru/nevralgiya-troynichnogo-nerva-kishinev/",
    "label": "Невралгия тройничного нерва",
    "keywords": "nevralgiya troynichnogo nerva kishinev nevralgiya-troynichnogo-nerva-kishinev nevralgiya-troynichnogo-nerva-kishinev"
  },
  {
    "href": "/ru/nevralgiya-zatylochnogo-nerva-arnolda-kishinev/",
    "label": "Невралгия затылочного нерва",
    "keywords": "nevralgiya zatylochnogo nerva arnolda kishinev nevralgiya-zatylochnogo-nerva-arnolda-kishinev nevralgiya-zatylochnogo-nerva-arnolda-kishinev"
  },
  {
    "href": "/ru/nevrit-litsevogo-nerva-paralich-bella-kishinev/",
    "label": "Неврит лицевого нерва (паралич Белла) Кишинёв",
    "keywords": "nevrit litsevogo nerva paralich bella kishinev nevrit-litsevogo-nerva-paralich-bella-kishinev nevrit-litsevogo-nerva-paralich-bella-kishinev"
  },
  {
    "href": "/ru/nevrolog-chekany-kishinev/",
    "label": "Невролог Чеканы Кишинёв",
    "keywords": "nevrolog chekany kishinev nevrolog-chekany-kishinev nevrolog-chekany-kishinev"
  },
  {
    "href": "/ru/neyropsihologicheskoe-obsledovanie-pamyat-mmpi-kishinev/",
    "label": "Нейропсихология и MMPI",
    "keywords": "neyropsihologicheskoe obsledovanie pamyat mmpi kishinev neyropsihologicheskoe-obsledovanie-pamyat-mmpi-kishinev neyropsihologicheskoe-obsledovanie-pamyat-mmpi-kishinev"
  },
  {
    "href": "/ru/onemenie-nog-polineyropatiya-kishinev/",
    "label": "Онемение ног и Полинейропатия",
    "keywords": "onemenie nog polineyropatiya kishinev onemenie-nog-polineyropatiya-kishinev onemenie-nog-polineyropatiya-kishinev"
  },
  {
    "href": "/ru/osteohondroz-kishinev/",
    "label": "Остеохондроз Кишинёв",
    "keywords": "osteohondroz kishinev osteohondroz-kishinev osteohondroz-kishinev"
  },
  {
    "href": "/ru/ozonoterapiya-darsonval-kishinev/",
    "label": "Озонотерапия и Дарсонваль",
    "keywords": "ozonoterapiya darsonval kishinev ozonoterapiya-darsonval-kishinev ozonoterapiya-darsonval-kishinev"
  },
  {
    "href": "/ru/panicheskie-ataki-trevoga-nevrolog-kishinev/",
    "label": "Панические атаки и тревога Кишинёв",
    "keywords": "panicheskie ataki trevoga nevrolog kishinev panicheskie-ataki-trevoga-nevrolog-kishinev panicheskie-ataki-trevoga-nevrolog-kishinev"
  },
  {
    "href": "/ru/postgerpeticheskaya-nevralgiya-lishay-kishinev/",
    "label": "Постгерпетическая невралгия",
    "keywords": "postgerpeticheskaya nevralgiya lishay kishinev postgerpeticheskaya-nevralgiya-lishay-kishinev postgerpeticheskaya-nevralgiya-lishay-kishinev"
  },
  {
    "href": "/ru/protivopokazaniya-k-fizioterapii-kishinev/",
    "label": "Противопоказания к физиотерапии",
    "keywords": "protivopokazaniya k fizioterapii kishinev protivopokazaniya-k-fizioterapii-kishinev protivopokazaniya-k-fizioterapii-kishinev"
  },
  {
    "href": "/ru/protruziya-diska-l4-l5-l5-s1-stenoz-kishinev/",
    "label": "Протрузия L4–L5 / L5–S1 и Стеноз",
    "keywords": "protruziya diska l4 l5 l5 s1 stenoz kishinev protruziya-diska-l4-l5-l5-s1-stenoz-kishinev protruziya-diska-l4-l5-l5-s1-stenoz-kishinev"
  },
  {
    "href": "/ru/pyatochnaya-shpora-artroz-kishinev/",
    "label": "Пяточная шпора и Артроз",
    "keywords": "pyatochnaya shpora artroz kishinev pyatochnaya-shpora-artroz-kishinev pyatochnaya-shpora-artroz-kishinev"
  },
  {
    "href": "/ru/reabilitatsiya-posle-insulta-kishinev/",
    "label": "Реабилитация после инсульта",
    "keywords": "reabilitatsiya posle insulta kishinev reabilitatsiya-posle-insulta-kishinev reabilitatsiya-posle-insulta-kishinev"
  },
  {
    "href": "/ru/reabilitatsiya-posle-operatsii-pozvonochnika-kishinev/",
    "label": "После операции на позвоночнике",
    "keywords": "reabilitatsiya posle operatsii pozvonochnika kishinev reabilitatsiya-posle-operatsii-pozvonochnika-kishinev reabilitatsiya-posle-operatsii-pozvonochnika-kishinev"
  },
  {
    "href": "/ru/reoentsefalografiya-kishinev/",
    "label": "РЭГ Кишинёв",
    "keywords": "reoentsefalografiya kishinev reoentsefalografiya-kishinev reoentsefalografiya-kishinev"
  },
  {
    "href": "/ru/sdvg-giperaktivnost-u-detey-nevrolog-kishinev/",
    "label": "СДВГ и внимание у детей",
    "keywords": "sdvg giperaktivnost u detey nevrolog kishinev sdvg-giperaktivnost-u-detey-nevrolog-kishinev sdvg-giperaktivnost-u-detey-nevrolog-kishinev"
  },
  {
    "href": "/ru/shum-v-ushah-tinnitus-spondilez-kishinev/",
    "label": "Шум в ушах (Тиннитус) и Шея",
    "keywords": "shum v ushah tinnitus spondilez kishinev shum-v-ushah-tinnitus-spondilez-kishinev shum-v-ushah-tinnitus-spondilez-kishinev"
  },
  {
    "href": "/ru/sindrom-bespokoynyh-nog-nevrolog-kishinev/",
    "label": "Синдром беспокойных ног",
    "keywords": "sindrom bespokoynyh nog nevrolog kishinev sindrom-bespokoynyh-nog-nevrolog-kishinev sindrom-bespokoynyh-nog-nevrolog-kishinev"
  },
  {
    "href": "/ru/sindrom-grushevidnoy-myshtsy-bol-yagoditsa-kishinev/",
    "label": "Синдром грушевидной мышцы",
    "keywords": "sindrom grushevidnoy myshtsy bol yagoditsa kishinev sindrom-grushevidnoy-myshtsy-bol-yagoditsa-kishinev sindrom-grushevidnoy-myshtsy-bol-yagoditsa-kishinev"
  },
  {
    "href": "/ru/sindrom-kubitalnogo-kanala-loktevoy-nerv-kishinev/",
    "label": "Кубитальный канал (локтевой нерв)",
    "keywords": "sindrom kubitalnogo kanala loktevoy nerv kishinev sindrom-kubitalnogo-kanala-loktevoy-nerv-kishinev sindrom-kubitalnogo-kanala-loktevoy-nerv-kishinev"
  },
  {
    "href": "/ru/sindrom-pozvonochnoy-arterii-spondilez-kishinev/",
    "label": "Синдром позвоночной артерии Кишинёв",
    "keywords": "sindrom pozvonochnoy arterii spondilez kishinev sindrom-pozvonochnoy-arterii-spondilez-kishinev sindrom-pozvonochnoy-arterii-spondilez-kishinev"
  },
  {
    "href": "/ru/solyanaya-peshchera-gryazevye-vanny-kishinev/",
    "label": "Соляная пещера и Грязи",
    "keywords": "solyanaya peshchera gryazevye vanny kishinev solyanaya-peshchera-gryazevye-vanny-kishinev solyanaya-peshchera-gryazevye-vanny-kishinev"
  },
  {
    "href": "/ru/sotryasenie-mozga-vosstanovlenie-kishinev/",
    "label": "После сотрясения мозга",
    "keywords": "sotryasenie mozga vosstanovlenie kishinev sotryasenie-mozga-vosstanovlenie-kishinev sotryasenie-mozga-vosstanovlenie-kishinev"
  },
  {
    "href": "/ru/spazmofiliya-sudorogi-nevrolog-kishinev/",
    "label": "Спазмофилия и судороги",
    "keywords": "spazmofiliya sudorogi nevrolog kishinev spazmofiliya-sudorogi-nevrolog-kishinev spazmofiliya-sudorogi-nevrolog-kishinev"
  },
  {
    "href": "/ru/spondilolistez-pozvonochnika-neyrohirurg-kishinev/",
    "label": "Спондилолистез позвоночника",
    "keywords": "spondilolistez pozvonochnika neyrohirurg kishinev spondilolistez-pozvonochnika-neyrohirurg-kishinev spondilolistez-pozvonochnika-neyrohirurg-kishinev"
  },
  {
    "href": "/ru/stenoz-pozvonochnogo-kanala-neyrohirurg-kishinev/",
    "label": "Стеноз позвоночного канала Кишинёв",
    "keywords": "stenoz pozvonochnogo kanala neyrohirurg kishinev stenoz-pozvonochnogo-kanala-neyrohirurg-kishinev stenoz-pozvonochnogo-kanala-neyrohirurg-kishinev"
  },
  {
    "href": "/ru/tunnelnyy-sindrom-onemenie-ruk-kishinev/",
    "label": "Туннельный синдром и онемение рук",
    "keywords": "tunnelnyy sindrom onemenie ruk kishinev tunnelnyy-sindrom-onemenie-ruk-kishinev tunnelnyy-sindrom-onemenie-ruk-kishinev"
  },
  {
    "href": "/ru/ultrazvukovaya-terapiya-fonoforez-epikondilit-kishinev/",
    "label": "Ультразвук, локоть и плечо",
    "keywords": "ultrazvukovaya terapiya fonoforez epikondilit kishinev ultrazvukovaya-terapiya-fonoforez-epikondilit-kishinev ultrazvukovaya-terapiya-fonoforez-epikondilit-kishinev"
  },
  {
    "href": "/ru/uzi-ekg-kishinev/",
    "label": "УЗИ и ЭКГ Кишинёв",
    "keywords": "uzi ekg kishinev uzi-ekg-kishinev uzi-ekg-kishinev"
  },
  {
    "href": "/ru/vnutricherepnoe-davlenie-simptomy-nevrolog-kishinev/",
    "label": "Внутричерепное давление",
    "keywords": "vnutricherepnoe davlenie simptomy nevrolog kishinev vnutricherepnoe-davlenie-simptomy-nevrolog-kishinev vnutricherepnoe-davlenie-simptomy-nevrolog-kishinev"
  },
  {
    "href": "/ru/vsd-distoniya-kishinev/",
    "label": "Лечение ВСД Кишинёв",
    "keywords": "vsd distoniya kishinev vsd-distoniya-kishinev vsd-distoniya-kishinev"
  },
  {
    "href": "/ru/zaderzhka-rechi-u-rebenka-nevrolog-kishinev/",
    "label": "Задержка речи у ребёнка",
    "keywords": "zaderzhka rechi u rebenka nevrolog kishinev zaderzhka-rechi-u-rebenka-nevrolog-kishinev zaderzhka-rechi-u-rebenka-nevrolog-kishinev"
  }
];

const STOP_WORDS = new Set([
  "chisinau", "chișinău", "kishinev", "кишинев", "кишинёв", "кишиневе", "кишинёве",
  "revimed", "plus", "tratament", "лечение", "centrul", "medical", "medic", "врач",
  "neurolog", "невролог", "pentru", "după", "dupa", "fara", "fără", "când", "cand",
  "este", "sunt", "care", "prin", "dintre", "sau", "ori", "cum", "ce", "la", "in", "în",
  "de", "si", "și", "cu", "pe", "din", "ale", "unei", "unui", "при", "как", "что", "для",
  "или", "после", "без", "чеканы", "ciocana", "moldova", "молдова", "the", "and", "for",
  "with", "from", "that", "this", "what", "when", "your", "що", "для", "при", "або"
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-zа-яёăâîșțієїґ0-9\s]/gi, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 4 && !STOP_WORDS.has(w))
    .map((w) => w.slice(0, 6));
}

function scoreOverlap(tokensA: string[], textB: string): number {
  if (!tokensA.length) return 0;
  const setB = new Set(tokenize(textB));
  let score = 0;
  for (const t of tokensA) {
    if (setB.has(t)) score += 3;
  }
  return score;
}

/**
 * Returns 6 semantically matched + ring-connected blog posts so every single blog post
 * in the 132-article catalog receives strong incoming contextual links.
 */
export function getRelatedBlogPostsForPost(
  currentSlug: string,
  lang: Lang,
  count = 6,
  fallbackText?: string
): { slug: string; title: string; href: string }[] {
  const allPosts = getStaticPublishedPosts(lang);
  if (allPosts.length <= 1) return [];

  const currentIdx = allPosts.findIndex((p) => p.slug === currentSlug);
  const textToTokenize =
    currentIdx >= 0
      ? `${allPosts[currentIdx].title} ${allPosts[currentIdx].excerpt}`
      : `${currentSlug.replace(/-/g, " ")} ${fallbackText || ""}`;
  const tokens = tokenize(textToTokenize);

  const n = allPosts.length;
  const ringIndices = new Set<number>();
  if (currentIdx >= 0) {
    ringIndices.add((currentIdx + 1) % n);
    ringIndices.add((currentIdx + 2) % n);
    ringIndices.add((currentIdx + 13) % n);
  } else {
    let hash = 0;
    for (let i = 0; i < currentSlug.length; i++) {
      hash = (hash * 31 + currentSlug.charCodeAt(i)) >>> 0;
    }
    ringIndices.add(hash % n);
    ringIndices.add((hash + 17) % n);
  }

  const scored = allPosts
    .map((p, idx) => {
      if (p.slug === currentSlug) return { post: p, idx, score: -999 };
      const semantic = scoreOverlap(tokens, `${p.title} ${p.excerpt}`);
      const ringBonus = ringIndices.has(idx) ? 4 : 0;
      return { post: p, idx, score: semantic + ringBonus };
    })
    .filter((x) => x.score > -900)
    .sort((a, b) => b.score - a.score || a.idx - b.idx);

  const selected: { slug: string; title: string; href: string }[] = [];
  const used = new Set<string>();

  // Ensure at least 2 deterministic ring neighbors first so no article is ever orphaned
  for (const rIdx of ringIndices) {
    const p = allPosts[rIdx];
    if (p && p.slug !== currentSlug && !used.has(p.slug) && selected.length < 2) {
      used.add(p.slug);
      selected.push({
        slug: p.slug,
        title: p.title,
        href: withLang(`/blog/${p.slug}/`, lang)
      });
    }
  }

  for (const item of scored) {
    if (selected.length >= count) break;
    if (!used.has(item.post.slug)) {
      used.add(item.post.slug);
      selected.push({
        slug: item.post.slug,
        title: item.post.title,
        href: withLang(`/blog/${item.post.slug}/`, lang)
      });
    }
  }

  return selected;
}

/**
 * Returns 6 matched Local Clinical Condition Pages for any blog post.
 */
export function getRelatedClinicalPagesForPost(
  currentSlug: string,
  title: string,
  excerpt: string,
  lang: Lang,
  count = 6
): { href: string; label: string }[] {
  const pool = lang === "ru" || lang === "ua" ? RU_CLINICAL_PAGES : RO_CLINICAL_PAGES;
  if (!pool.length) return [];

  const tokens = tokenize(`${currentSlug.replace(/-/g, " ")} ${title} ${excerpt}`);
  let hash = 0;
  for (let i = 0; i < currentSlug.length; i++) {
    hash = (hash * 31 + currentSlug.charCodeAt(i)) >>> 0;
  }

  const ringA = hash % pool.length;
  const ringB = (hash + 19) % pool.length;

  const scored = pool
    .map((item, idx) => {
      const semantic = scoreOverlap(tokens, item.keywords);
      const ringBonus = idx === ringA || idx === ringB ? 3 : 0;
      return { item, idx, score: semantic + ringBonus };
    })
    .sort((a, b) => b.score - a.score || a.idx - b.idx);

  return scored.slice(0, count).map((x) => ({
    href: x.item.href,
    label: x.item.label
  }));
}

/**
 * For a LocalConditionLanding page (RO or RU), returns:
 * 1) 4 semantically matched Blog Articles in that language
 * 2) 5 additional sibling clinical pages (semantic + deterministic ring) not already in existingRelatedHrefs
 */
export function getClusterMeshForClinicalPage(
  currentPath: string,
  h1: string,
  lead: string,
  lang: "ro" | "ru",
  existingRelatedHrefs: string[] = []
): {
  blogGuides: { href: string; title: string; excerpt: string }[];
  siblingPages: { href: string; label: string }[];
} {
  const cleanCurrent = `${currentPath.replace(/\/+$/, "")}/`;
  const existingSet = new Set(existingRelatedHrefs.map((h) => `${h.replace(/\/+$/, "")}/`));
  existingSet.add(cleanCurrent);

  const tokens = tokenize(`${currentPath.replace(/-/g, " ")} ${h1} ${lead}`);

  // 1. Match 4 Blog Articles
  const posts = getStaticPublishedPosts(lang);
  const currentPool = lang === "ru" ? RU_CLINICAL_PAGES : RO_CLINICAL_PAGES;
  const currentIdx = Math.max(
    0,
    currentPool.findIndex((p) => p.href === cleanCurrent)
  );

  const ringPostA = posts.length ? (currentIdx * 2) % posts.length : 0;
  const ringPostB = posts.length ? (currentIdx * 2 + 1) % posts.length : 0;

  const scoredPosts = posts
    .map((p, idx) => {
      const semantic = scoreOverlap(tokens, `${p.title} ${p.excerpt}`);
      const ringBonus = idx === ringPostA || idx === ringPostB ? 4 : 0;
      return { post: p, idx, score: semantic + ringBonus };
    })
    .sort((a, b) => b.score - a.score || a.idx - b.idx)
    .slice(0, 4)
    .map((x) => ({
      href: withLang(`/blog/${x.post.slug}/`, lang),
      title: x.post.title,
      excerpt: x.post.excerpt
    }));

  // 2. Match 5 Sibling Clinical Pages
  const n = currentPool.length;
  const ringSibA = n ? (currentIdx + 1) % n : 0;
  const ringSibB = n ? (currentIdx + 2) % n : 0;
  const ringSibC = n ? (currentIdx + 11) % n : 0;

  const scoredSiblings = currentPool
    .map((item, idx) => {
      if (existingSet.has(item.href)) return { item, idx, score: -999 };
      const semantic = scoreOverlap(tokens, item.keywords);
      const ringBonus = idx === ringSibA || idx === ringSibB || idx === ringSibC ? 4 : 0;
      return { item, idx, score: semantic + ringBonus };
    })
    .filter((x) => x.score > -900)
    .sort((a, b) => b.score - a.score || a.idx - b.idx)
    .slice(0, 5)
    .map((x) => ({
      href: x.item.href,
      label: x.item.label
    }));

  return {
    blogGuides: scoredPosts,
    siblingPages: scoredSiblings
  };
}
