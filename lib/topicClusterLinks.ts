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
    "label": "acupunctura-reflexoterapie-chisinau",
    "keywords": "acupunctura reflexoterapie chisinau acupunctura-reflexoterapie-chisinau acupunctura-reflexoterapie-chisinau"
  },
  {
    "href": "/adhd-hiperactivitate-copii-neuropediatru-chisinau/",
    "label": "adhd-hiperactivitate-copii-neuropediatru-chisinau",
    "keywords": "adhd hiperactivitate copii neuropediatru chisinau adhd-hiperactivitate-copii-neuropediatru-chisinau adhd-hiperactivitate-copii-neuropediatru-chisinau"
  },
  {
    "href": "/ameteli-vertij-chisinau/",
    "label": "ameteli-vertij-chisinau",
    "keywords": "ameteli vertij chisinau ameteli-vertij-chisinau ameteli-vertij-chisinau"
  },
  {
    "href": "/amorteli-picioare-polineuropatie-chisinau/",
    "label": "amorteli-picioare-polineuropatie-chisinau",
    "keywords": "amorteli picioare polineuropatie chisinau amorteli-picioare-polineuropatie-chisinau amorteli-picioare-polineuropatie-chisinau"
  },
  {
    "href": "/atacuri-de-panica-anxietate-neurolog-chisinau/",
    "label": "atacuri-de-panica-anxietate-neurolog-chisinau",
    "keywords": "atacuri de panica anxietate neurolog chisinau atacuri-de-panica-anxietate-neurolog-chisinau atacuri-de-panica-anxietate-neurolog-chisinau"
  },
  {
    "href": "/autism-tsa-copii-neuropediatru-chisinau/",
    "label": "autism-tsa-copii-neuropediatru-chisinau",
    "keywords": "autism tsa copii neuropediatru chisinau autism-tsa-copii-neuropediatru-chisinau autism-tsa-copii-neuropediatru-chisinau"
  },
  {
    "href": "/boala-parkinson-tremor-memorie-chisinau/",
    "label": "boala-parkinson-tremor-memorie-chisinau",
    "keywords": "boala parkinson tremor memorie chisinau boala-parkinson-tremor-memorie-chisinau boala-parkinson-tremor-memorie-chisinau"
  },
  {
    "href": "/camera-salina-bai-namol-chisinau/",
    "label": "camera-salina-bai-namol-chisinau",
    "keywords": "camera salina bai namol chisinau camera-salina-bai-namol-chisinau camera-salina-bai-namol-chisinau"
  },
  {
    "href": "/cartografierea-creierului-chisinau/",
    "label": "cartografierea-creierului-chisinau",
    "keywords": "cartografierea creierului chisinau cartografierea-creierului-chisinau cartografierea-creierului-chisinau"
  },
  {
    "href": "/cefalee-abuz-medicamentos-cluster-neurolog-chisinau/",
    "label": "cefalee-abuz-medicamentos-cluster-neurolog-chisinau",
    "keywords": "cefalee abuz medicamentos cluster neurolog chisinau cefalee-abuz-medicamentos-cluster-neurolog-chisinau cefalee-abuz-medicamentos-cluster-neurolog-chisinau"
  },
  {
    "href": "/cefalee-tensiune-vs-migrena-chisinau/",
    "label": "cefalee-tensiune-vs-migrena-chisinau",
    "keywords": "cefalee tensiune vs migrena chisinau cefalee-tensiune-vs-migrena-chisinau cefalee-tensiune-vs-migrena-chisinau"
  },
  {
    "href": "/contraindicatii-fizioterapie-siguranta-chisinau/",
    "label": "contraindicatii-fizioterapie-siguranta-chisinau",
    "keywords": "contraindicatii fizioterapie siguranta chisinau contraindicatii-fizioterapie-siguranta-chisinau contraindicatii-fizioterapie-siguranta-chisinau"
  },
  {
    "href": "/convulsii-febrile-copii-eeg-neuropediatru-chisinau/",
    "label": "convulsii-febrile-copii-eeg-neuropediatru-chisinau",
    "keywords": "convulsii febrile copii eeg neuropediatru chisinau convulsii-febrile-copii-eeg-neuropediatru-chisinau convulsii-febrile-copii-eeg-neuropediatru-chisinau"
  },
  {
    "href": "/diagnostic-amp-chisinau/",
    "label": "diagnostic-amp-chisinau",
    "keywords": "diagnostic amp chisinau diagnostic-amp-chisinau diagnostic-amp-chisinau"
  },
  {
    "href": "/distonie-neurovegetativa-chisinau/",
    "label": "distonie-neurovegetativa-chisinau",
    "keywords": "distonie neurovegetativa chisinau distonie-neurovegetativa-chisinau distonie-neurovegetativa-chisinau"
  },
  {
    "href": "/durere-umar-periartrita-plexita-chisinau/",
    "label": "durere-umar-periartrita-plexita-chisinau",
    "keywords": "durere umar periartrita plexita chisinau durere-umar-periartrita-plexita-chisinau durere-umar-periartrita-plexita-chisinau"
  },
  {
    "href": "/dureri-de-cap-copii-neuropediatru-chisinau/",
    "label": "dureri-de-cap-copii-neuropediatru-chisinau",
    "keywords": "dureri de cap copii neuropediatru chisinau dureri-de-cap-copii-neuropediatru-chisinau dureri-de-cap-copii-neuropediatru-chisinau"
  },
  {
    "href": "/dureri-de-spate-sciatica-chisinau/",
    "label": "dureri-de-spate-sciatica-chisinau",
    "keywords": "dureri de spate sciatica chisinau dureri-de-spate-sciatica-chisinau dureri-de-spate-sciatica-chisinau"
  },
  {
    "href": "/dureri-spate-sciatica-sarcina-chisinau/",
    "label": "dureri-spate-sciatica-sarcina-chisinau",
    "keywords": "dureri spate sciatica sarcina chisinau dureri-spate-sciatica-sarcina-chisinau dureri-spate-sciatica-sarcina-chisinau"
  },
  {
    "href": "/ecografie-ecg-chisinau/",
    "label": "ecografie-ecg-chisinau",
    "keywords": "ecografie ecg chisinau ecografie-ecg-chisinau ecografie-ecg-chisinau"
  },
  {
    "href": "/eeg-chisinau/",
    "label": "eeg-chisinau",
    "keywords": "eeg chisinau eeg-chisinau eeg-chisinau"
  },
  {
    "href": "/eeg-copii-chisinau/",
    "label": "eeg-copii-chisinau",
    "keywords": "eeg copii chisinau eeg-copii-chisinau eeg-copii-chisinau"
  },
  {
    "href": "/eho-encefalografie-chisinau/",
    "label": "eho-encefalografie-chisinau",
    "keywords": "eho encefalografie chisinau eho-encefalografie-chisinau eho-encefalografie-chisinau"
  },
  {
    "href": "/electroforeza-amplipuls-chisinau/",
    "label": "electroforeza-amplipuls-chisinau",
    "keywords": "electroforeza amplipuls chisinau electroforeza-amplipuls-chisinau electroforeza-amplipuls-chisinau"
  },
  {
    "href": "/electrospondilografie-chisinau/",
    "label": "electrospondilografie-chisinau",
    "keywords": "electrospondilografie chisinau electrospondilografie-chisinau electrospondilografie-chisinau"
  },
  {
    "href": "/enurezis-nocturn-copii-neuropediatru-chisinau/",
    "label": "enurezis-nocturn-copii-neuropediatru-chisinau",
    "keywords": "enurezis nocturn copii neuropediatru chisinau enurezis-nocturn-copii-neuropediatru-chisinau enurezis-nocturn-copii-neuropediatru-chisinau"
  },
  {
    "href": "/epilepsie-convulsii-chisinau/",
    "label": "epilepsie-convulsii-chisinau",
    "keywords": "epilepsie convulsii chisinau epilepsie-convulsii-chisinau epilepsie-convulsii-chisinau"
  },
  {
    "href": "/evaluare-biomecanica-ergonomie-birou-chisinau/",
    "label": "evaluare-biomecanica-ergonomie-birou-chisinau",
    "keywords": "evaluare biomecanica ergonomie birou chisinau evaluare-biomecanica-ergonomie-birou-chisinau evaluare-biomecanica-ergonomie-birou-chisinau"
  },
  {
    "href": "/evaluare-neuropsihologica-testare-cognitiva-chisinau/",
    "label": "evaluare-neuropsihologica-testare-cognitiva-chisinau",
    "keywords": "evaluare neuropsihologica testare cognitiva chisinau evaluare-neuropsihologica-testare-cognitiva-chisinau evaluare-neuropsihologica-testare-cognitiva-chisinau"
  },
  {
    "href": "/fitoterapeut-chisinau/",
    "label": "fitoterapeut-chisinau",
    "keywords": "fitoterapeut chisinau fitoterapeut-chisinau fitoterapeut-chisinau"
  },
  {
    "href": "/fizioterapie-ciocana-chisinau/",
    "label": "fizioterapie-ciocana-chisinau",
    "keywords": "fizioterapie ciocana chisinau fizioterapie-ciocana-chisinau fizioterapie-ciocana-chisinau"
  },
  {
    "href": "/ghid-diagnostic-functional-eeg-reg-amp-chisinau/",
    "label": "ghid-diagnostic-functional-eeg-reg-amp-chisinau",
    "keywords": "ghid diagnostic functional eeg reg amp chisinau ghid-diagnostic-functional-eeg-reg-amp-chisinau ghid-diagnostic-functional-eeg-reg-amp-chisinau"
  },
  {
    "href": "/gonartroza-coxartroza-fizioterapie-recuperare-chisinau/",
    "label": "gonartroza-coxartroza-fizioterapie-recuperare-chis…",
    "keywords": "gonartroza coxartroza fizioterapie recuperare chisinau gonartroza-coxartroza-fizioterapie-recuperare-chisinau gonartroza-coxartroza-fizioterapie-recuperare-chisinau"
  },
  {
    "href": "/hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau/",
    "label": "hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau",
    "keywords": "hernie cervicala c5 c6 dureri gat ameteli chisinau hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau hernie-cervicala-c5-c6-dureri-gat-ameteli-chisinau"
  },
  {
    "href": "/hernie-de-disc-chisinau/",
    "label": "hernie-de-disc-chisinau",
    "keywords": "hernie de disc chisinau hernie-de-disc-chisinau hernie-de-disc-chisinau"
  },
  {
    "href": "/insomnie-tratament-chisinau/",
    "label": "insomnie-tratament-chisinau",
    "keywords": "insomnie tratament chisinau insomnie-tratament-chisinau insomnie-tratament-chisinau"
  },
  {
    "href": "/intarziere-vorbire-copii-neuropediatru-chisinau/",
    "label": "intarziere-vorbire-copii-neuropediatru-chisinau",
    "keywords": "intarziere vorbire copii neuropediatru chisinau intarziere-vorbire-copii-neuropediatru-chisinau intarziere-vorbire-copii-neuropediatru-chisinau"
  },
  {
    "href": "/kinetoterapie-chisinau/",
    "label": "kinetoterapie-chisinau",
    "keywords": "kinetoterapie chisinau kinetoterapie-chisinau kinetoterapie-chisinau"
  },
  {
    "href": "/lumbago-blocaj-spate-acut-chisinau/",
    "label": "lumbago-blocaj-spate-acut-chisinau",
    "keywords": "lumbago blocaj spate acut chisinau lumbago-blocaj-spate-acut-chisinau lumbago-blocaj-spate-acut-chisinau"
  },
  {
    "href": "/magnetoterapie-laser-chisinau/",
    "label": "magnetoterapie-laser-chisinau",
    "keywords": "magnetoterapie laser chisinau magnetoterapie-laser-chisinau magnetoterapie-laser-chisinau"
  },
  {
    "href": "/masaj-terapeutic-chisinau/",
    "label": "masaj-terapeutic-chisinau",
    "keywords": "masaj terapeutic chisinau masaj-terapeutic-chisinau masaj-terapeutic-chisinau"
  },
  {
    "href": "/neurolog-ciocana-chisinau/",
    "label": "neurolog-ciocana-chisinau",
    "keywords": "neurolog ciocana chisinau neurolog-ciocana-chisinau neurolog-ciocana-chisinau"
  },
  {
    "href": "/neuropatie-diabetica-arsuri-talpi-chisinau/",
    "label": "neuropatie-diabetica-arsuri-talpi-chisinau",
    "keywords": "neuropatie diabetica arsuri talpi chisinau neuropatie-diabetica-arsuri-talpi-chisinau neuropatie-diabetica-arsuri-talpi-chisinau"
  },
  {
    "href": "/nevralgie-intercostala-durere-omoplati-chisinau/",
    "label": "nevralgie-intercostala-durere-omoplati-chisinau",
    "keywords": "nevralgie intercostala durere omoplati chisinau nevralgie-intercostala-durere-omoplati-chisinau nevralgie-intercostala-durere-omoplati-chisinau"
  },
  {
    "href": "/nevralgie-neuropatie-chisinau/",
    "label": "nevralgie-neuropatie-chisinau",
    "keywords": "nevralgie neuropatie chisinau nevralgie-neuropatie-chisinau nevralgie-neuropatie-chisinau"
  },
  {
    "href": "/nevralgie-occipitala-arnold-durere-ceafa-chisinau/",
    "label": "nevralgie-occipitala-arnold-durere-ceafa-chisinau",
    "keywords": "nevralgie occipitala arnold durere ceafa chisinau nevralgie-occipitala-arnold-durere-ceafa-chisinau nevralgie-occipitala-arnold-durere-ceafa-chisinau"
  },
  {
    "href": "/nevralgie-trigemen-pareza-faciala-chisinau/",
    "label": "nevralgie-trigemen-pareza-faciala-chisinau",
    "keywords": "nevralgie trigemen pareza faciala chisinau nevralgie-trigemen-pareza-faciala-chisinau nevralgie-trigemen-pareza-faciala-chisinau"
  },
  {
    "href": "/oboseala-cronica-burnout-biofeedback-chisinau/",
    "label": "oboseala-cronica-burnout-biofeedback-chisinau",
    "keywords": "oboseala cronica burnout biofeedback chisinau oboseala-cronica-burnout-biofeedback-chisinau oboseala-cronica-burnout-biofeedback-chisinau"
  },
  {
    "href": "/osteocondroza-cervicala-chisinau/",
    "label": "osteocondroza-cervicala-chisinau",
    "keywords": "osteocondroza cervicala chisinau osteocondroza-cervicala-chisinau osteocondroza-cervicala-chisinau"
  },
  {
    "href": "/ozonoterapie-darsonval-chisinau/",
    "label": "ozonoterapie-darsonval-chisinau",
    "keywords": "ozonoterapie darsonval chisinau ozonoterapie-darsonval-chisinau ozonoterapie-darsonval-chisinau"
  },
  {
    "href": "/paralizie-nerv-facial-bell-chisinau/",
    "label": "paralizie-nerv-facial-bell-chisinau",
    "keywords": "paralizie nerv facial bell chisinau paralizie-nerv-facial-bell-chisinau paralizie-nerv-facial-bell-chisinau"
  },
  {
    "href": "/pinten-calcanean-artroza-chisinau/",
    "label": "pinten-calcanean-artroza-chisinau",
    "keywords": "pinten calcanean artroza chisinau pinten-calcanean-artroza-chisinau pinten-calcanean-artroza-chisinau"
  },
  {
    "href": "/protruzie-discala-l4-l5-l5-s1-stenoza-chisinau/",
    "label": "protruzie-discala-l4-l5-l5-s1-stenoza-chisinau",
    "keywords": "protruzie discala l4 l5 l5 s1 stenoza chisinau protruzie-discala-l4-l5-l5-s1-stenoza-chisinau protruzie-discala-l4-l5-l5-s1-stenoza-chisinau"
  },
  {
    "href": "/reabilitare-medicala-neurologica-chisinau/",
    "label": "reabilitare-medicala-neurologica-chisinau",
    "keywords": "reabilitare medicala neurologica chisinau reabilitare-medicala-neurologica-chisinau reabilitare-medicala-neurologica-chisinau"
  },
  {
    "href": "/recuperare-comotie-cerebrala-traumatism-chisinau/",
    "label": "recuperare-comotie-cerebrala-traumatism-chisinau",
    "keywords": "recuperare comotie cerebrala traumatism chisinau recuperare-comotie-cerebrala-traumatism-chisinau recuperare-comotie-cerebrala-traumatism-chisinau"
  },
  {
    "href": "/recuperare-dupa-avc-chisinau/",
    "label": "recuperare-dupa-avc-chisinau",
    "keywords": "recuperare dupa avc chisinau recuperare-dupa-avc-chisinau recuperare-dupa-avc-chisinau"
  },
  {
    "href": "/recuperare-postoperatorie-coloana-chisinau/",
    "label": "recuperare-postoperatorie-coloana-chisinau",
    "keywords": "recuperare postoperatorie coloana chisinau recuperare-postoperatorie-coloana-chisinau recuperare-postoperatorie-coloana-chisinau"
  },
  {
    "href": "/reoencefalografie-chisinau/",
    "label": "reoencefalografie-chisinau",
    "keywords": "reoencefalografie chisinau reoencefalografie-chisinau reoencefalografie-chisinau"
  },
  {
    "href": "/scolioza-postura-copii-adulti-chisinau/",
    "label": "scolioza-postura-copii-adulti-chisinau",
    "keywords": "scolioza postura copii adulti chisinau scolioza-postura-copii-adulti-chisinau scolioza-postura-copii-adulti-chisinau"
  },
  {
    "href": "/sindrom-canal-cubital-nerv-ulnar-chisinau/",
    "label": "sindrom-canal-cubital-nerv-ulnar-chisinau",
    "keywords": "sindrom canal cubital nerv ulnar chisinau sindrom-canal-cubital-nerv-ulnar-chisinau sindrom-canal-cubital-nerv-ulnar-chisinau"
  },
  {
    "href": "/sindrom-piriform-durere-fesa-picior-chisinau/",
    "label": "sindrom-piriform-durere-fesa-picior-chisinau",
    "keywords": "sindrom piriform durere fesa picior chisinau sindrom-piriform-durere-fesa-picior-chisinau sindrom-piriform-durere-fesa-picior-chisinau"
  },
  {
    "href": "/sindromul-picioarelor-nelinistite-neurolog-chisinau/",
    "label": "sindromul-picioarelor-nelinistite-neurolog-chisinau",
    "keywords": "sindromul picioarelor nelinistite neurolog chisinau sindromul-picioarelor-nelinistite-neurolog-chisinau sindromul-picioarelor-nelinistite-neurolog-chisinau"
  },
  {
    "href": "/spasmofilie-crize-hiperexcitabilitate-chisinau/",
    "label": "spasmofilie-crize-hiperexcitabilitate-chisinau",
    "keywords": "spasmofilie crize hiperexcitabilitate chisinau spasmofilie-crize-hiperexcitabilitate-chisinau spasmofilie-crize-hiperexcitabilitate-chisinau"
  },
  {
    "href": "/spondilolistezis-alunecare-vertebra-neurochirurg-chisinau/",
    "label": "spondilolistezis-alunecare-vertebra-neurochirurg-c…",
    "keywords": "spondilolistezis alunecare vertebra neurochirurg chisinau spondilolistezis-alunecare-vertebra-neurochirurg-chisinau spondilolistezis-alunecare-vertebra-neurochirurg-chisinau"
  },
  {
    "href": "/spondiloza-cervicala-sindrom-artera-vertebrala-chisinau/",
    "label": "spondiloza-cervicala-sindrom-artera-vertebrala-chi…",
    "keywords": "spondiloza cervicala sindrom artera vertebrala chisinau spondiloza-cervicala-sindrom-artera-vertebrala-chisinau spondiloza-cervicala-sindrom-artera-vertebrala-chisinau"
  },
  {
    "href": "/stenoza-canal-spinal-lombar-neurochirurg-chisinau/",
    "label": "stenoza-canal-spinal-lombar-neurochirurg-chisinau",
    "keywords": "stenoza canal spinal lombar neurochirurg chisinau stenoza-canal-spinal-lombar-neurochirurg-chisinau stenoza-canal-spinal-lombar-neurochirurg-chisinau"
  },
  {
    "href": "/tensiune-intracraniana-simptome-neurolog-chisinau/",
    "label": "tensiune-intracraniana-simptome-neurolog-chisinau",
    "keywords": "tensiune intracraniana simptome neurolog chisinau tensiune-intracraniana-simptome-neurolog-chisinau tensiune-intracraniana-simptome-neurolog-chisinau"
  },
  {
    "href": "/terapie-ultrasunete-epicondilita-tendinita-chisinau/",
    "label": "terapie-ultrasunete-epicondilita-tendinita-chisinau",
    "keywords": "terapie ultrasunete epicondilita tendinita chisinau terapie-ultrasunete-epicondilita-tendinita-chisinau terapie-ultrasunete-epicondilita-tendinita-chisinau"
  },
  {
    "href": "/ticuri-nervoase-balbaiala-copii-chisinau/",
    "label": "ticuri-nervoase-balbaiala-copii-chisinau",
    "keywords": "ticuri nervoase balbaiala copii chisinau ticuri-nervoase-balbaiala-copii-chisinau ticuri-nervoase-balbaiala-copii-chisinau"
  },
  {
    "href": "/tinitus-zgomote-urechi-spondiloza-cervicala-chisinau/",
    "label": "tinitus-zgomote-urechi-spondiloza-cervicala-chisinau",
    "keywords": "tinitus zgomote urechi spondiloza cervicala chisinau tinitus-zgomote-urechi-spondiloza-cervicala-chisinau tinitus-zgomote-urechi-spondiloza-cervicala-chisinau"
  },
  {
    "href": "/torticolis-gat-intepenit-fizioterapie-chisinau/",
    "label": "torticolis-gat-intepenit-fizioterapie-chisinau",
    "keywords": "torticolis gat intepenit fizioterapie chisinau torticolis-gat-intepenit-fizioterapie-chisinau torticolis-gat-intepenit-fizioterapie-chisinau"
  },
  {
    "href": "/tratament-migrene-chisinau/",
    "label": "tratament-migrene-chisinau",
    "keywords": "tratament migrene chisinau tratament-migrene-chisinau tratament-migrene-chisinau"
  },
  {
    "href": "/tremor-esential-tremur-maini-neurolog-chisinau/",
    "label": "tremor-esential-tremur-maini-neurolog-chisinau",
    "keywords": "tremor esential tremur maini neurolog chisinau tremor-esential-tremur-maini-neurolog-chisinau tremor-esential-tremur-maini-neurolog-chisinau"
  },
  {
    "href": "/tulburari-de-memorie-dementa-neurolog-chisinau/",
    "label": "tulburari-de-memorie-dementa-neurolog-chisinau",
    "keywords": "tulburari de memorie dementa neurolog chisinau tulburari-de-memorie-dementa-neurolog-chisinau tulburari-de-memorie-dementa-neurolog-chisinau"
  },
  {
    "href": "/tulburari-de-somn-copii-neuropediatru-chisinau/",
    "label": "tulburari-de-somn-copii-neuropediatru-chisinau",
    "keywords": "tulburari de somn copii neuropediatru chisinau tulburari-de-somn-copii-neuropediatru-chisinau tulburari-de-somn-copii-neuropediatru-chisinau"
  },
  {
    "href": "/tunel-carpian-amorteli-maini-chisinau/",
    "label": "tunel-carpian-amorteli-maini-chisinau",
    "keywords": "tunel carpian amorteli maini chisinau tunel-carpian-amorteli-maini-chisinau tunel-carpian-amorteli-maini-chisinau"
  },
  {
    "href": "/zona-zoster-nevralgie-postherpetica-chisinau/",
    "label": "zona-zoster-nevralgie-postherpetica-chisinau",
    "keywords": "zona zoster nevralgie postherpetica chisinau zona-zoster-nevralgie-postherpetica-chisinau zona-zoster-nevralgie-postherpetica-chisinau"
  }
];

export const RU_CLINICAL_PAGES: ClusterPageLink[] = [
  {
    "href": "/ru/abuzusnaya-golovnaya-bol-klasternaya-nevrolog-kishinev/",
    "label": "abuzusnaya-golovnaya-bol-klasternaya-nevrolog-kish…",
    "keywords": "abuzusnaya golovnaya bol klasternaya nevrolog kishinev abuzusnaya-golovnaya-bol-klasternaya-nevrolog-kishinev abuzusnaya-golovnaya-bol-klasternaya-nevrolog-kishinev"
  },
  {
    "href": "/ru/autizm-ras-u-detey-nevrolog-kishinev/",
    "label": "autizm-ras-u-detey-nevrolog-kishinev",
    "keywords": "autizm ras u detey nevrolog kishinev autizm-ras-u-detey-nevrolog-kishinev autizm-ras-u-detey-nevrolog-kishinev"
  },
  {
    "href": "/ru/biomehanicheskaya-otsenka-ergonomika-ofis-kishinev/",
    "label": "biomehanicheskaya-otsenka-ergonomika-ofis-kishinev",
    "keywords": "biomehanicheskaya otsenka ergonomika ofis kishinev biomehanicheskaya-otsenka-ergonomika-ofis-kishinev biomehanicheskaya-otsenka-ergonomika-ofis-kishinev"
  },
  {
    "href": "/ru/bol-v-pleche-periartroz-pleksit-kishinev/",
    "label": "bol-v-pleche-periartroz-pleksit-kishinev",
    "keywords": "bol v pleche periartroz pleksit kishinev bol-v-pleche-periartroz-pleksit-kishinev bol-v-pleche-periartroz-pleksit-kishinev"
  },
  {
    "href": "/ru/bol-v-spine-ishias-pri-beremennosti-kishinev/",
    "label": "bol-v-spine-ishias-pri-beremennosti-kishinev",
    "keywords": "bol v spine ishias pri beremennosti kishinev bol-v-spine-ishias-pri-beremennosti-kishinev bol-v-spine-ishias-pri-beremennosti-kishinev"
  },
  {
    "href": "/ru/bolezn-parkinsona-tremor-kishinev/",
    "label": "bolezn-parkinsona-tremor-kishinev",
    "keywords": "bolezn parkinsona tremor kishinev bolezn-parkinsona-tremor-kishinev bolezn-parkinsona-tremor-kishinev"
  },
  {
    "href": "/ru/boli-v-spine-ishias-kishinev/",
    "label": "boli-v-spine-ishias-kishinev",
    "keywords": "boli v spine ishias kishinev boli-v-spine-ishias-kishinev boli-v-spine-ishias-kishinev"
  },
  {
    "href": "/ru/detskiy-nevrolog-kishinev/",
    "label": "detskiy-nevrolog-kishinev",
    "keywords": "detskiy nevrolog kishinev detskiy-nevrolog-kishinev detskiy-nevrolog-kishinev"
  },
  {
    "href": "/ru/diabeticheskaya-neyropatiya-zhzhenie-stop-kishinev/",
    "label": "diabeticheskaya-neyropatiya-zhzhenie-stop-kishinev",
    "keywords": "diabeticheskaya neyropatiya zhzhenie stop kishinev diabeticheskaya-neyropatiya-zhzhenie-stop-kishinev diabeticheskaya-neyropatiya-zhzhenie-stop-kishinev"
  },
  {
    "href": "/ru/diagnostika-amp-kishinev/",
    "label": "diagnostika-amp-kishinev",
    "keywords": "diagnostika amp kishinev diagnostika-amp-kishinev diagnostika-amp-kishinev"
  },
  {
    "href": "/ru/eeg-detyam-kishinev/",
    "label": "eeg-detyam-kishinev",
    "keywords": "eeg detyam kishinev eeg-detyam-kishinev eeg-detyam-kishinev"
  },
  {
    "href": "/ru/eeg-kishinev/",
    "label": "eeg-kishinev",
    "keywords": "eeg kishinev eeg-kishinev eeg-kishinev"
  },
  {
    "href": "/ru/ehoentsefalografiya-eho-eg-kishinev/",
    "label": "ehoentsefalografiya-eho-eg-kishinev",
    "keywords": "ehoentsefalografiya eho eg kishinev ehoentsefalografiya-eho-eg-kishinev ehoentsefalografiya-eho-eg-kishinev"
  },
  {
    "href": "/ru/elektroforez-amplipuls-kishinev/",
    "label": "elektroforez-amplipuls-kishinev",
    "keywords": "elektroforez amplipuls kishinev elektroforez-amplipuls-kishinev elektroforez-amplipuls-kishinev"
  },
  {
    "href": "/ru/elektroson-kishinev/",
    "label": "elektroson-kishinev",
    "keywords": "elektroson kishinev elektroson-kishinev elektroson-kishinev"
  },
  {
    "href": "/ru/elektrospondilografiya-kishinev/",
    "label": "elektrospondilografiya-kishinev",
    "keywords": "elektrospondilografiya kishinev elektrospondilografiya-kishinev elektrospondilografiya-kishinev"
  },
  {
    "href": "/ru/enurez-u-detey-nevrolog-kishinev/",
    "label": "enurez-u-detey-nevrolog-kishinev",
    "keywords": "enurez u detey nevrolog kishinev enurez-u-detey-nevrolog-kishinev enurez-u-detey-nevrolog-kishinev"
  },
  {
    "href": "/ru/epilepsiya-kishinev/",
    "label": "epilepsiya-kishinev",
    "keywords": "epilepsiya kishinev epilepsiya-kishinev epilepsiya-kishinev"
  },
  {
    "href": "/ru/essentsialnyy-tremor-drozh-v-rukah-nevrolog-kishinev/",
    "label": "essentsialnyy-tremor-drozh-v-rukah-nevrolog-kishinev",
    "keywords": "essentsialnyy tremor drozh v rukah nevrolog kishinev essentsialnyy-tremor-drozh-v-rukah-nevrolog-kishinev essentsialnyy-tremor-drozh-v-rukah-nevrolog-kishinev"
  },
  {
    "href": "/ru/febrilnye-sudorogi-u-detey-eeg-kishinev/",
    "label": "febrilnye-sudorogi-u-detey-eeg-kishinev",
    "keywords": "febrilnye sudorogi u detey eeg kishinev febrilnye-sudorogi-u-detey-eeg-kishinev febrilnye-sudorogi-u-detey-eeg-kishinev"
  },
  {
    "href": "/ru/fitoterapevt-kishinev/",
    "label": "fitoterapevt-kishinev",
    "keywords": "fitoterapevt kishinev fitoterapevt-kishinev fitoterapevt-kishinev"
  },
  {
    "href": "/ru/fizioterapiya-chekany-kishinev/",
    "label": "fizioterapiya-chekany-kishinev",
    "keywords": "fizioterapiya chekany kishinev fizioterapiya-chekany-kishinev fizioterapiya-chekany-kishinev"
  },
  {
    "href": "/ru/gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev/",
    "label": "gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev",
    "keywords": "gid funktsionalnaya diagnostika eeg reg amp kishinev gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev gid-funktsionalnaya-diagnostika-eeg-reg-amp-kishinev"
  },
  {
    "href": "/ru/golovnaya-bol-napryazheniya-vs-migren-kishinev/",
    "label": "golovnaya-bol-napryazheniya-vs-migren-kishinev",
    "keywords": "golovnaya bol napryazheniya vs migren kishinev golovnaya-bol-napryazheniya-vs-migren-kishinev golovnaya-bol-napryazheniya-vs-migren-kishinev"
  },
  {
    "href": "/ru/golovnye-boli-u-detey-nevrolog-kishinev/",
    "label": "golovnye-boli-u-detey-nevrolog-kishinev",
    "keywords": "golovnye boli u detey nevrolog kishinev golovnye-boli-u-detey-nevrolog-kishinev golovnye-boli-u-detey-nevrolog-kishinev"
  },
  {
    "href": "/ru/golovokruzhenie-kishinev/",
    "label": "golovokruzhenie-kishinev",
    "keywords": "golovokruzhenie kishinev golovokruzhenie-kishinev golovokruzhenie-kishinev"
  },
  {
    "href": "/ru/gonartroz-koksartroz-fizioterapiya-kishinev/",
    "label": "gonartroz-koksartroz-fizioterapiya-kishinev",
    "keywords": "gonartroz koksartroz fizioterapiya kishinev gonartroz-koksartroz-fizioterapiya-kishinev gonartroz-koksartroz-fizioterapiya-kishinev"
  },
  {
    "href": "/ru/gryzha-diska-kishinev/",
    "label": "gryzha-diska-kishinev",
    "keywords": "gryzha diska kishinev gryzha-diska-kishinev gryzha-diska-kishinev"
  },
  {
    "href": "/ru/gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishinev/",
    "label": "gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishi…",
    "keywords": "gryzha sheynogo otdela c5 c6 golovokruzhenie kishinev gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishinev gryzha-sheynogo-otdela-c5-c6-golovokruzhenie-kishinev"
  },
  {
    "href": "/ru/hronicheskaya-ustalost-vygoranie-biofidbek-kishinev/",
    "label": "hronicheskaya-ustalost-vygoranie-biofidbek-kishinev",
    "keywords": "hronicheskaya ustalost vygoranie biofidbek kishinev hronicheskaya-ustalost-vygoranie-biofidbek-kishinev hronicheskaya-ustalost-vygoranie-biofidbek-kishinev"
  },
  {
    "href": "/ru/igloukalyvanie-kishinev/",
    "label": "igloukalyvanie-kishinev",
    "keywords": "igloukalyvanie kishinev igloukalyvanie-kishinev igloukalyvanie-kishinev"
  },
  {
    "href": "/ru/kartirovanie-mozga-kishinev/",
    "label": "kartirovanie-mozga-kishinev",
    "keywords": "kartirovanie mozga kishinev kartirovanie-mozga-kishinev kartirovanie-mozga-kishinev"
  },
  {
    "href": "/ru/kinezoterapiya-kishinev/",
    "label": "kinezoterapiya-kishinev",
    "keywords": "kinezoterapiya kishinev kinezoterapiya-kishinev kinezoterapiya-kishinev"
  },
  {
    "href": "/ru/krivosheya-zaklinilo-sheyu-nevrolog-kishinev/",
    "label": "krivosheya-zaklinilo-sheyu-nevrolog-kishinev",
    "keywords": "krivosheya zaklinilo sheyu nevrolog kishinev krivosheya-zaklinilo-sheyu-nevrolog-kishinev krivosheya-zaklinilo-sheyu-nevrolog-kishinev"
  },
  {
    "href": "/ru/lechebnyy-massazh-kishinev/",
    "label": "lechebnyy-massazh-kishinev",
    "keywords": "lechebnyy massazh kishinev lechebnyy-massazh-kishinev lechebnyy-massazh-kishinev"
  },
  {
    "href": "/ru/lechenie-bessonnitsy-kishinev/",
    "label": "lechenie-bessonnitsy-kishinev",
    "keywords": "lechenie bessonnitsy kishinev lechenie-bessonnitsy-kishinev lechenie-bessonnitsy-kishinev"
  },
  {
    "href": "/ru/lechenie-migreni-kishinev/",
    "label": "lechenie-migreni-kishinev",
    "keywords": "lechenie migreni kishinev lechenie-migreni-kishinev lechenie-migreni-kishinev"
  },
  {
    "href": "/ru/lechenie-skolioza-kishinev/",
    "label": "lechenie-skolioza-kishinev",
    "keywords": "lechenie skolioza kishinev lechenie-skolioza-kishinev lechenie-skolioza-kishinev"
  },
  {
    "href": "/ru/lyumbago-prostrel-v-poyasnitse-kishinev/",
    "label": "lyumbago-prostrel-v-poyasnitse-kishinev",
    "keywords": "lyumbago prostrel v poyasnitse kishinev lyumbago-prostrel-v-poyasnitse-kishinev lyumbago-prostrel-v-poyasnitse-kishinev"
  },
  {
    "href": "/ru/magnitoterapiya-lazer-kishinev/",
    "label": "magnitoterapiya-lazer-kishinev",
    "keywords": "magnitoterapiya lazer kishinev magnitoterapiya-lazer-kishinev magnitoterapiya-lazer-kishinev"
  },
  {
    "href": "/ru/meditsinskaya-reabilitatsiya-kishinev/",
    "label": "meditsinskaya-reabilitatsiya-kishinev",
    "keywords": "meditsinskaya reabilitatsiya kishinev meditsinskaya-reabilitatsiya-kishinev meditsinskaya-reabilitatsiya-kishinev"
  },
  {
    "href": "/ru/mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kishinev/",
    "label": "mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kish…",
    "keywords": "mezhrebernaya nevralgiya bol mezhdu lopatkami kishinev mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kishinev mezhrebernaya-nevralgiya-bol-mezhdu-lopatkami-kishinev"
  },
  {
    "href": "/ru/narusheniya-pamyati-dementsiya-nevrolog-kishinev/",
    "label": "narusheniya-pamyati-dementsiya-nevrolog-kishinev",
    "keywords": "narusheniya pamyati dementsiya nevrolog kishinev narusheniya-pamyati-dementsiya-nevrolog-kishinev narusheniya-pamyati-dementsiya-nevrolog-kishinev"
  },
  {
    "href": "/ru/narusheniya-sna-u-detey-nevrolog-kishinev/",
    "label": "narusheniya-sna-u-detey-nevrolog-kishinev",
    "keywords": "narusheniya sna u detey nevrolog kishinev narusheniya-sna-u-detey-nevrolog-kishinev narusheniya-sna-u-detey-nevrolog-kishinev"
  },
  {
    "href": "/ru/nervnye-tiki-zaikanie-detyam-kishinev/",
    "label": "nervnye-tiki-zaikanie-detyam-kishinev",
    "keywords": "nervnye tiki zaikanie detyam kishinev nervnye-tiki-zaikanie-detyam-kishinev nervnye-tiki-zaikanie-detyam-kishinev"
  },
  {
    "href": "/ru/nevralgiya-neyropatiya-kishinev/",
    "label": "nevralgiya-neyropatiya-kishinev",
    "keywords": "nevralgiya neyropatiya kishinev nevralgiya-neyropatiya-kishinev nevralgiya-neyropatiya-kishinev"
  },
  {
    "href": "/ru/nevralgiya-troynichnogo-nerva-kishinev/",
    "label": "nevralgiya-troynichnogo-nerva-kishinev",
    "keywords": "nevralgiya troynichnogo nerva kishinev nevralgiya-troynichnogo-nerva-kishinev nevralgiya-troynichnogo-nerva-kishinev"
  },
  {
    "href": "/ru/nevralgiya-zatylochnogo-nerva-arnolda-kishinev/",
    "label": "nevralgiya-zatylochnogo-nerva-arnolda-kishinev",
    "keywords": "nevralgiya zatylochnogo nerva arnolda kishinev nevralgiya-zatylochnogo-nerva-arnolda-kishinev nevralgiya-zatylochnogo-nerva-arnolda-kishinev"
  },
  {
    "href": "/ru/nevrit-litsevogo-nerva-paralich-bella-kishinev/",
    "label": "nevrit-litsevogo-nerva-paralich-bella-kishinev",
    "keywords": "nevrit litsevogo nerva paralich bella kishinev nevrit-litsevogo-nerva-paralich-bella-kishinev nevrit-litsevogo-nerva-paralich-bella-kishinev"
  },
  {
    "href": "/ru/nevrolog-chekany-kishinev/",
    "label": "nevrolog-chekany-kishinev",
    "keywords": "nevrolog chekany kishinev nevrolog-chekany-kishinev nevrolog-chekany-kishinev"
  },
  {
    "href": "/ru/neyropsihologicheskoe-obsledovanie-pamyat-mmpi-kishinev/",
    "label": "neyropsihologicheskoe-obsledovanie-pamyat-mmpi-kis…",
    "keywords": "neyropsihologicheskoe obsledovanie pamyat mmpi kishinev neyropsihologicheskoe-obsledovanie-pamyat-mmpi-kishinev neyropsihologicheskoe-obsledovanie-pamyat-mmpi-kishinev"
  },
  {
    "href": "/ru/onemenie-nog-polineyropatiya-kishinev/",
    "label": "onemenie-nog-polineyropatiya-kishinev",
    "keywords": "onemenie nog polineyropatiya kishinev onemenie-nog-polineyropatiya-kishinev onemenie-nog-polineyropatiya-kishinev"
  },
  {
    "href": "/ru/osteohondroz-kishinev/",
    "label": "osteohondroz-kishinev",
    "keywords": "osteohondroz kishinev osteohondroz-kishinev osteohondroz-kishinev"
  },
  {
    "href": "/ru/ozonoterapiya-darsonval-kishinev/",
    "label": "ozonoterapiya-darsonval-kishinev",
    "keywords": "ozonoterapiya darsonval kishinev ozonoterapiya-darsonval-kishinev ozonoterapiya-darsonval-kishinev"
  },
  {
    "href": "/ru/panicheskie-ataki-trevoga-nevrolog-kishinev/",
    "label": "panicheskie-ataki-trevoga-nevrolog-kishinev",
    "keywords": "panicheskie ataki trevoga nevrolog kishinev panicheskie-ataki-trevoga-nevrolog-kishinev panicheskie-ataki-trevoga-nevrolog-kishinev"
  },
  {
    "href": "/ru/postgerpeticheskaya-nevralgiya-lishay-kishinev/",
    "label": "postgerpeticheskaya-nevralgiya-lishay-kishinev",
    "keywords": "postgerpeticheskaya nevralgiya lishay kishinev postgerpeticheskaya-nevralgiya-lishay-kishinev postgerpeticheskaya-nevralgiya-lishay-kishinev"
  },
  {
    "href": "/ru/protivopokazaniya-k-fizioterapii-kishinev/",
    "label": "protivopokazaniya-k-fizioterapii-kishinev",
    "keywords": "protivopokazaniya k fizioterapii kishinev protivopokazaniya-k-fizioterapii-kishinev protivopokazaniya-k-fizioterapii-kishinev"
  },
  {
    "href": "/ru/protruziya-diska-l4-l5-l5-s1-stenoz-kishinev/",
    "label": "protruziya-diska-l4-l5-l5-s1-stenoz-kishinev",
    "keywords": "protruziya diska l4 l5 l5 s1 stenoz kishinev protruziya-diska-l4-l5-l5-s1-stenoz-kishinev protruziya-diska-l4-l5-l5-s1-stenoz-kishinev"
  },
  {
    "href": "/ru/pyatochnaya-shpora-artroz-kishinev/",
    "label": "pyatochnaya-shpora-artroz-kishinev",
    "keywords": "pyatochnaya shpora artroz kishinev pyatochnaya-shpora-artroz-kishinev pyatochnaya-shpora-artroz-kishinev"
  },
  {
    "href": "/ru/reabilitatsiya-posle-insulta-kishinev/",
    "label": "reabilitatsiya-posle-insulta-kishinev",
    "keywords": "reabilitatsiya posle insulta kishinev reabilitatsiya-posle-insulta-kishinev reabilitatsiya-posle-insulta-kishinev"
  },
  {
    "href": "/ru/reabilitatsiya-posle-operatsii-pozvonochnika-kishinev/",
    "label": "reabilitatsiya-posle-operatsii-pozvonochnika-kishi…",
    "keywords": "reabilitatsiya posle operatsii pozvonochnika kishinev reabilitatsiya-posle-operatsii-pozvonochnika-kishinev reabilitatsiya-posle-operatsii-pozvonochnika-kishinev"
  },
  {
    "href": "/ru/reoentsefalografiya-kishinev/",
    "label": "reoentsefalografiya-kishinev",
    "keywords": "reoentsefalografiya kishinev reoentsefalografiya-kishinev reoentsefalografiya-kishinev"
  },
  {
    "href": "/ru/sdvg-giperaktivnost-u-detey-nevrolog-kishinev/",
    "label": "sdvg-giperaktivnost-u-detey-nevrolog-kishinev",
    "keywords": "sdvg giperaktivnost u detey nevrolog kishinev sdvg-giperaktivnost-u-detey-nevrolog-kishinev sdvg-giperaktivnost-u-detey-nevrolog-kishinev"
  },
  {
    "href": "/ru/shum-v-ushah-tinnitus-spondilez-kishinev/",
    "label": "shum-v-ushah-tinnitus-spondilez-kishinev",
    "keywords": "shum v ushah tinnitus spondilez kishinev shum-v-ushah-tinnitus-spondilez-kishinev shum-v-ushah-tinnitus-spondilez-kishinev"
  },
  {
    "href": "/ru/sindrom-bespokoynyh-nog-nevrolog-kishinev/",
    "label": "sindrom-bespokoynyh-nog-nevrolog-kishinev",
    "keywords": "sindrom bespokoynyh nog nevrolog kishinev sindrom-bespokoynyh-nog-nevrolog-kishinev sindrom-bespokoynyh-nog-nevrolog-kishinev"
  },
  {
    "href": "/ru/sindrom-grushevidnoy-myshtsy-bol-yagoditsa-kishinev/",
    "label": "sindrom-grushevidnoy-myshtsy-bol-yagoditsa-kishinev",
    "keywords": "sindrom grushevidnoy myshtsy bol yagoditsa kishinev sindrom-grushevidnoy-myshtsy-bol-yagoditsa-kishinev sindrom-grushevidnoy-myshtsy-bol-yagoditsa-kishinev"
  },
  {
    "href": "/ru/sindrom-kubitalnogo-kanala-loktevoy-nerv-kishinev/",
    "label": "sindrom-kubitalnogo-kanala-loktevoy-nerv-kishinev",
    "keywords": "sindrom kubitalnogo kanala loktevoy nerv kishinev sindrom-kubitalnogo-kanala-loktevoy-nerv-kishinev sindrom-kubitalnogo-kanala-loktevoy-nerv-kishinev"
  },
  {
    "href": "/ru/sindrom-pozvonochnoy-arterii-spondilez-kishinev/",
    "label": "sindrom-pozvonochnoy-arterii-spondilez-kishinev",
    "keywords": "sindrom pozvonochnoy arterii spondilez kishinev sindrom-pozvonochnoy-arterii-spondilez-kishinev sindrom-pozvonochnoy-arterii-spondilez-kishinev"
  },
  {
    "href": "/ru/solyanaya-peshchera-gryazevye-vanny-kishinev/",
    "label": "solyanaya-peshchera-gryazevye-vanny-kishinev",
    "keywords": "solyanaya peshchera gryazevye vanny kishinev solyanaya-peshchera-gryazevye-vanny-kishinev solyanaya-peshchera-gryazevye-vanny-kishinev"
  },
  {
    "href": "/ru/sotryasenie-mozga-vosstanovlenie-kishinev/",
    "label": "sotryasenie-mozga-vosstanovlenie-kishinev",
    "keywords": "sotryasenie mozga vosstanovlenie kishinev sotryasenie-mozga-vosstanovlenie-kishinev sotryasenie-mozga-vosstanovlenie-kishinev"
  },
  {
    "href": "/ru/spazmofiliya-sudorogi-nevrolog-kishinev/",
    "label": "spazmofiliya-sudorogi-nevrolog-kishinev",
    "keywords": "spazmofiliya sudorogi nevrolog kishinev spazmofiliya-sudorogi-nevrolog-kishinev spazmofiliya-sudorogi-nevrolog-kishinev"
  },
  {
    "href": "/ru/spondilolistez-pozvonochnika-neyrohirurg-kishinev/",
    "label": "spondilolistez-pozvonochnika-neyrohirurg-kishinev",
    "keywords": "spondilolistez pozvonochnika neyrohirurg kishinev spondilolistez-pozvonochnika-neyrohirurg-kishinev spondilolistez-pozvonochnika-neyrohirurg-kishinev"
  },
  {
    "href": "/ru/stenoz-pozvonochnogo-kanala-neyrohirurg-kishinev/",
    "label": "stenoz-pozvonochnogo-kanala-neyrohirurg-kishinev",
    "keywords": "stenoz pozvonochnogo kanala neyrohirurg kishinev stenoz-pozvonochnogo-kanala-neyrohirurg-kishinev stenoz-pozvonochnogo-kanala-neyrohirurg-kishinev"
  },
  {
    "href": "/ru/tunnelnyy-sindrom-onemenie-ruk-kishinev/",
    "label": "tunnelnyy-sindrom-onemenie-ruk-kishinev",
    "keywords": "tunnelnyy sindrom onemenie ruk kishinev tunnelnyy-sindrom-onemenie-ruk-kishinev tunnelnyy-sindrom-onemenie-ruk-kishinev"
  },
  {
    "href": "/ru/ultrazvukovaya-terapiya-fonoforez-epikondilit-kishinev/",
    "label": "ultrazvukovaya-terapiya-fonoforez-epikondilit-kish…",
    "keywords": "ultrazvukovaya terapiya fonoforez epikondilit kishinev ultrazvukovaya-terapiya-fonoforez-epikondilit-kishinev ultrazvukovaya-terapiya-fonoforez-epikondilit-kishinev"
  },
  {
    "href": "/ru/uzi-ekg-kishinev/",
    "label": "uzi-ekg-kishinev",
    "keywords": "uzi ekg kishinev uzi-ekg-kishinev uzi-ekg-kishinev"
  },
  {
    "href": "/ru/vnutricherepnoe-davlenie-simptomy-nevrolog-kishinev/",
    "label": "vnutricherepnoe-davlenie-simptomy-nevrolog-kishinev",
    "keywords": "vnutricherepnoe davlenie simptomy nevrolog kishinev vnutricherepnoe-davlenie-simptomy-nevrolog-kishinev vnutricherepnoe-davlenie-simptomy-nevrolog-kishinev"
  },
  {
    "href": "/ru/vsd-distoniya-kishinev/",
    "label": "vsd-distoniya-kishinev",
    "keywords": "vsd distoniya kishinev vsd-distoniya-kishinev vsd-distoniya-kishinev"
  },
  {
    "href": "/ru/zaderzhka-rechi-u-rebenka-nevrolog-kishinev/",
    "label": "zaderzhka-rechi-u-rebenka-nevrolog-kishinev",
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
