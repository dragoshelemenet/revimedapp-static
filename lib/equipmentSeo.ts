import type { SiteLang } from "@/lib/equipment";

export type EquipmentSeoEntry = {
 image: string;
 alt: Record<SiteLang, string>;
 seoDescription: Record<SiteLang, string>;
};

export const equipmentSeo: Record<string, EquipmentSeoEntry> = {
 "aparat-amp": {
  image: "/images/equipment/aparat-amp.webp",
  alt: {
   ro: "Aparat AMP — analizator neinvaziv al formulei sanguine la Revimed PLUS+ Chișinău",
   en: "AMP Device — non-invasive blood formula analyzer at Revimed PLUS+ Chișinău",
   ru: "Аппарат АМП — неинвазивный анализатор формулы крови в Revimed PLUS+ Кишинёв",
   ua: "Апарат АМП — неінвазивний аналізатор формули крові у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Aparat AMP în Chișinău la Revimed PLUS+: analizator spectral neinvaziv pentru evaluarea rapidă a formulei sanguine și parametrilor metabolici fără recoltare de sânge.",
   en: "AMP non-invasive blood analyzer in Chișinău at Revimed PLUS+: rapid spectral assessment of metabolic, hemodynamic, and blood parameters without blood draw.",
   ru: "Аппарат АМП в Кишинёве в Revimed PLUS+: неинвазивный спектральный анализатор крови и метаболических показателей без забора крови.",
   ua: "Апарат АМП у Кишиневі в Revimed PLUS+: неінвазивний спектральний аналізатор крові та метаболічних показників без забору крові."
  }
 },
 "electrosomn-4t": {
  image: "/images/equipment/electrosomn-4t.webp",
  alt: {
   ro: "Aparat Electrosomn-4T pentru terapie neurotropă și relaxare la Revimed PLUS+ Chișinău",
   en: "Electrosomn-4T portable electrosleep neurotherapy device at Revimed PLUS+ Chișinău",
   ru: "Аппарат Электросон-4Т для нейротропной терапии и релаксации в Revimed PLUS+ Кишинёв",
   ua: "Апарат Електросон-4Т для нейротропної терапії та релаксації у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Electrosomn-4T la Revimed PLUS+ Chișinău: terapie neurotropă blândă cu impulsuri de joasă frecvență pentru stres, insomnie, nevroze și echilibru neurovegetativ.",
   en: "Electrosomn-4T at Revimed PLUS+ Chișinău: gentle low-frequency electrosleep therapy for stress relief, functional sleep disorders, and autonomic nervous balance.",
   ru: "Электросон-4Т в Revimed PLUS+ Кишинёв: мягкая низкочастотная терапия электросном при стрессе, нарушениях сна, неврозах и вегетативной дистонии.",
   ua: "Електросон-4Т у Revimed PLUS+ Кишинів: м’яка низькочастотна терапія електросном при стресі, порушеннях сну, неврозах та вегетативній дистонії."
  }
 },
 "electrosomn-5-es-10-5": {
  image: "/images/equipment/electrosomn-5-es-10-5.webp",
  alt: {
   ro: "Aparat Electrosomn-5 / ES-10-5 pentru fizioterapie neurologică la Revimed PLUS+ Chișinău",
   en: "Electrosomn-5 / ES-10-5 electrosleep physiotherapy unit at Revimed PLUS+ Chișinău",
   ru: "Аппарат Электросон-5 / ЭС-10-5 для физиотерапии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Електросон-5 / ЕС-10-5 для фізіотерапії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Electrosomn-5 / ES-10-5 în Chișinău la Revimed PLUS+: aparat portabil de electrosomn cu impulsuri controlate pentru reducerea tensiunii nervoase și recuperare.",
   en: "Electrosomn-5 / ES-10-5 in Chișinău at Revimed PLUS+: controlled-pulse electrosleep physiotherapy device for neurovegetative relaxation and clinical recovery.",
   ru: "Электросон-5 / ЭС-10-5 в Кишинёве в Revimed PLUS+: портативный аппарат электросна с контролируемыми импульсами для снятия нервного напряжения.",
   ua: "Електросон-5 / ЕС-10-5 у Кишиневі в Revimed PLUS+: портативний апарат електросну з контрольованими імпульсами для зниження нервового напруження."
  }
 },
 "electrosomn-3": {
  image: "/images/equipment/electrosomn-3.webp",
  alt: {
   ro: "Aparat staționar Electrosomn-3 pentru terapie prin electrosomn la Revimed PLUS+ Chișinău",
   en: "Electrosomn-3 stationary electrosleep therapy device at Revimed PLUS+ Chișinău",
   ru: "Стационарный аппарат Электросон-3 в Revimed PLUS+ Кишинёв",
   ua: "Стаціонарний апарат Електросон-3 у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Electrosomn-3 la Revimed PLUS+ Chișinău: aparat staționar clinic pentru terapie prin electrosomn, indicat în suprasolicitare, tulburări de somn și recuperare neurologică.",
   en: "Electrosomn-3 at Revimed PLUS+ Chișinău: stationary clinical electrosleep therapy console for stress recovery, sleep regulation, and neurological rehabilitation.",
   ru: "Электросон-3 в Revimed PLUS+ Кишинёв: стационарный клинический аппарат для процедур электросна при переутомлении, нарушениях сна и реабилитации.",
   ua: "Електросон-3 у Revimed PLUS+ Кишинів: стаціонарний клінічний апарат для процедур електросну при перевтомі, порушеннях сну та реабілітації."
  }
 },
 "etrans-1": {
  image: "/images/equipment/etrans-1.webp",
  alt: {
   ro: "Aparat Etrans-1 pentru electroanalgezie transcraniană la Revimed PLUS+ Chișinău",
   en: "Etrans-1 transcranial electroanalgesia device at Revimed PLUS+ Chișinău",
   ru: "Аппарат Этранс-1 для транскраниальной электроаналгезии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Етранс-1 для транскраніальної електроаналгезії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Etrans-1 la Revimed PLUS+ Chișinău: aparat de electroanalgezie transcraniană pentru calmarea durerii, echilibrare neurovegetativă și susținerea recuperării neurologice.",
   en: "Etrans-1 at Revimed PLUS+ Chișinău: transcranial electroanalgesia physiotherapy device supporting non-pharmacological pain relief and autonomic regulation.",
   ru: "Этранс-1 в Revimed PLUS+ Кишинёв: аппарат транскраниальной электроаналгезии для немедикаментозного обезболивания и регуляции нервной системы.",
   ua: "Етранс-1 у Revimed PLUS+ Кишинів: апарат транскраніальної електроаналгезії для немедикаментозного знеболення та регуляції нервової системи."
  }
 },
 "etrans-2": {
  image: "/images/equipment/etrans-2.webp",
  alt: {
   ro: "Aparat Etrans-2 pentru proceduri de electroanalgezie transcraniană la Revimed PLUS+ Chișinău",
   en: "Etrans-2 transcranial electroanalgesia physiotherapy console at Revimed PLUS+ Chișinău",
   ru: "Аппарат Этранс-2 для транскраниальной электроаналгезии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Етранс-2 для транскраніальної електроаналгезії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Etrans-2 în Chișinău la Revimed PLUS+: electroanalgezie transcraniană cu control precis al impulsurilor pentru managementul durerii și recuperare medicală.",
   en: "Etrans-2 in Chișinău at Revimed PLUS+: precision transcranial electroanalgesia unit for pain management, stress reduction, and medical rehabilitation.",
   ru: "Этранс-2 в Кишинёве в Revimed PLUS+: точная транскраниальная электроаналгезия для уменьшения боли, снятия стресса и комплексной реабилитации.",
   ua: "Етранс-2 у Кишиневі в Revimed PLUS+: точна транскраніальна електроаналгезія для зменшення болю, зняття стресу та комплексної реабілітації."
  }
 },
 "etrans-3": {
  image: "/images/equipment/etrans-3.webp",
  alt: {
   ro: "Aparat Etrans-3 de electroanalgezie transcraniană la Revimed PLUS+ Chișinău",
   en: "Etrans-3 clinical transcranial electroanalgesia unit at Revimed PLUS+ Chișinău",
   ru: "Аппарат Этранс-3 транскраниальной электроаналгезии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Етранс-3 транскраніальної електроаналгезії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Etrans-3 la Revimed PLUS+ Chișinău: proceduri moderne de electroanalgezie transcraniană sub supraveghere medicală pentru dureri cronice și recuperare.",
   en: "Etrans-3 at Revimed PLUS+ Chișinău: modern clinical transcranial electroanalgesia procedures under specialist supervision for chronic pain and recovery.",
   ru: "Этранс-3 в Revimed PLUS+ Кишинёв: современные процедуры транскраниальной электроаналгезии под наблюдением врача при хронической боли.",
   ua: "Етранс-3 у Revimed PLUS+ Кишинів: сучасні процедури транскраніальної електроаналгезії під наглядом лікаря при хронічному болю."
  }
 },
 "transair-01p-transair-05": {
  image: "/images/equipment/transair.webp",
  alt: {
   ro: "Aparat Transair-01P / Transair-05 pentru stimulare transcraniană TES la Revimed PLUS+ Chișinău",
   en: "Transair-01P / Transair-05 TES transcranial stimulation device at Revimed PLUS+ Chișinău",
   ru: "Аппарат Трансаир-01П / Трансаир-05 для ТЭС-терапии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Трансаір-01П / Трансаір-05 для ТЕС-терапії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Transair-01P / Transair-05 la Revimed PLUS+ Chișinău: stimulare transcraniană (TES-terapie) pentru activarea mecanismelor naturale analgezice și anti-stres.",
   en: "Transair-01P / Transair-05 at Revimed PLUS+ Chișinău: clinical TES transcranial electrostimulation activating natural endorphin pain-relief and anti-stress pathways.",
   ru: "Трансаир-01П / Трансаир-05 в Revimed PLUS+ Кишинёв: ТЭС-терапия (транскраниальная электростимуляция) для естественного обезболивания и антистресса.",
   ua: "Трансаір-01П / Трансаір-05 у Revimed PLUS+ Кишинів: ТЕС-терапія (транскраніальна електростимуляція) для природного знеболення та антистресу."
  }
 },
 "transair-01s-transair-04": {
  image: "/images/equipment/transair-01s-transair-04.webp",
  alt: {
   ro: "Aparat Transair-01S / Transair-04 pentru TES-terapie la Revimed PLUS+ Chișinău",
   en: "Transair-01S / Transair-04 clinical TES therapy unit at Revimed PLUS+ Chișinău",
   ru: "Аппарат Трансаир-01С / Трансаир-04 для ТЭС-терапии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Трансаір-01С / Трансаір-04 для ТЕС-терапії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Transair-01S / Transair-04 în Chișinău la Revimed PLUS+: aparat clinic de stimulare transcraniană TES pentru migrene, dureri neuropatice, stres și recuperare.",
   en: "Transair-01S / Transair-04 in Chișinău at Revimed PLUS+: clinical TES transcranial stimulation console for migraines, neuropathic pain, stress, and recovery.",
   ru: "Трансаир-01С / Трансаир-04 в Кишинёве в Revimed PLUS+: клиническая ТЭС-терапия при мигренях, нейропатической боли, стрессе и восстановлении.",
   ua: "Трансаір-01С / Трансаір-04 у Кишиневі в Revimed PLUS+: клінічна ТЕС-терапія при мігренях, нейропатичному болю, стресі та відновленні."
  }
 },
 "transair-01s-transair-03": {
  image: "/images/equipment/transair-01s-transair-03.webp",
  alt: {
   ro: "Aparat Transair-01S / Transair-03 pentru stimulare transcraniană la Revimed PLUS+ Chișinău",
   en: "Transair-01S / Transair-03 transcranial electrostimulation device at Revimed PLUS+ Chișinău",
   ru: "Аппарат Трансаир-01С / Трансаир-03 для ТЭС-терапии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Трансаір-01С / Трансаір-03 для ТЕС-терапії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Transair-01S / Transair-03 la Revimed PLUS+ Chișinău: stimulare transcraniană blândă pentru reglare psiho-emoțională, ameliorarea durerii și suport neurovegetativ.",
   en: "Transair-01S / Transair-03 at Revimed PLUS+ Chișinău: gentle transcranial electrostimulation for emotional balance, pain relief, and neurovegetative support.",
   ru: "Трансаир-01С / Трансаир-03 в Revimed PLUS+ Кишинёв: мягкая транскраниальная стимуляция для эмоционального равновесия и уменьшения болевого синдрома.",
   ua: "Трансаір-01С / Трансаір-03 у Revimed PLUS+ Кишинів: м’яка транскраніальна стимуляція для емоційної рівноваги та зменшення больового синдрому."
  }
 },
 "lenar": {
  image: "/images/equipment/lenar.webp",
  alt: {
   ro: "Aparat LENAR pentru neurostimulare și electroanalgezie centrală la Revimed PLUS+ Chișinău",
   en: "LENAR central neurostimulation physiotherapy device at Revimed PLUS+ Chișinău",
   ru: "Аппарат ЛЕНАР для нейростимуляции и центральной электроаналгезии в Revimed PLUS+ Кишинёв",
   ua: "Апарат ЛЕНАР для нейростимуляції та центральної електроаналгезії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Aparat LENAR la Revimed PLUS+ Chișinău: neurostimulare și electroanalgezie centrală pentru reducerea durerii, stresului și reechilibrare funcțională.",
   en: "LENAR device at Revimed PLUS+ Chișinău: clinical neurostimulation and central electroanalgesia for pain relief, stress adaptation, and functional recovery.",
   ru: "Аппарат ЛЕНАР в Revimed PLUS+ Кишинёв: нейростимуляция и центральная электроаналгезия для снятия боли, стресса и функционального восстановления.",
   ua: "Апарат ЛЕНАР у Revimed PLUS+ Кишинів: нейростимуляція та центральна електроаналгезія для зняття болю, стресу й функціонального відновлення."
  }
 },
 "bi-lenar": {
  image: "/images/equipment/bi-lenar.webp",
  alt: {
   ro: "Aparat Bi-LENAR pentru neurostimulare funcțională la Revimed PLUS+ Chișinău",
   en: "Bi-LENAR functional neurostimulation unit at Revimed PLUS+ Chișinău",
   ru: "Аппарат Би-ЛЕНАР для функциональной нейростимуляции в Revimed PLUS+ Кишинёв",
   ua: "Апарат Бі-ЛЕНАР для функціональної нейростимуляції у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Bi-LENAR în Chișinău la Revimed PLUS+: neurostimulare funcțională cu regimuri combinate pentru reglare neurovegetativă, somn și recuperare medicală.",
   en: "Bi-LENAR in Chișinău at Revimed PLUS+: dual-mode functional neurostimulation console supporting autonomic regulation, restful sleep, and clinical recovery.",
   ru: "Би-ЛЕНАР в Кишинёве в Revimed PLUS+: функциональная нейростимуляция с комбинированными режимами для вегетативной регуляции и восстановления.",
   ua: "Бі-ЛЕНАР у Кишиневі в Revimed PLUS+: функціональна нейростимуляція з комбінованими режимами для вегетативної регуляції та відновлення."
  }
 },
 "mdm-k": {
  image: "/images/equipment/mdm-k.webp",
  alt: {
   ro: "Aparat MDM-K pentru modulare mezodiencefalică la Revimed PLUS+ Chișinău",
   en: "MDM-K mesodiencephalic modulation therapy unit at Revimed PLUS+ Chișinău",
   ru: "Аппарат МДМ-К для мезодиэнцефальной модуляции в Revimed PLUS+ Кишинёв",
   ua: "Апарат МДМ-К для мезодіенцефальної модуляції у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "MDM-K la Revimed PLUS+ Chișinău: terapie prin modulare mezodiencefalică pentru susținerea adaptării organismului, recuperării post-stres și echilibrului neuroendocrin.",
   en: "MDM-K at Revimed PLUS+ Chișinău: mesodiencephalic modulation therapy supporting systemic adaptation, post-stress recovery, and neuroendocrine balance.",
   ru: "МДМ-К в Revimed PLUS+ Кишинёв: мезодиэнцефальная модуляция для восстановления адаптационных резервов организма и нейроэндокринного баланса.",
   ua: "МДМ-К у Revimed PLUS+ Кишинів: мезодіенцефальна модуляція для відновлення адаптаційних резервів організму та нейроендокринного балансу."
  }
 },
 "mdm-101": {
  image: "/images/equipment/mdm-101.webp",
  alt: {
   ro: "Aparat MDM-101 pentru terapie prin modulare mezodiencefalică la Revimed PLUS+ Chișinău",
   en: "MDM-101 mesodiencephalic modulation physiotherapy device at Revimed PLUS+ Chișinău",
   ru: "Аппарат МДМ-101 для мезодиэнцефальной модуляции в Revimed PLUS+ Кишинёв",
   ua: "Апарат МДМ-101 для мезодіенцефальної модуляції у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "MDM-101 în Chișinău la Revimed PLUS+: aparat clinic de modulare mezodiencefalică pentru fizioterapie neurologică, reducerea durerii și regenerare funcțională.",
   en: "MDM-101 in Chișinău at Revimed PLUS+: clinical mesodiencephalic modulation apparatus for neurological physiotherapy, pain reduction, and tissue recovery.",
   ru: "МДМ-101 в Кишинёве в Revimed PLUS+: клинический аппарат мезодиэнцефальной модуляции для неврологической физиотерапии и восстановления.",
   ua: "МДМ-101 у Кишиневі в Revimed PLUS+: клінічний апарат мезодіенцефальної модуляції для неврологічної фізіотерапії та відновлення."
  }
 },
 "mdm-2000": {
  image: "/images/equipment/mdm-2000.webp",
  alt: {
   ro: "Aparat MDM-2000 pentru modulare mezodiencefalică avansată la Revimed PLUS+ Chișinău",
   en: "MDM-2000 stationary mesodiencephalic modulation console at Revimed PLUS+ Chișinău",
   ru: "Аппарат МДМ-2000 для мезодиэнцефальной модуляции в Revimed PLUS+ Кишинёв",
   ua: "Апарат МДМ-2000 для мезодіенцефальної модуляції у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "MDM-2000 la Revimed PLUS+ Chișinău: consolă clinică avansată de modulare mezodiencefalică pentru recuperare complexă, dureri cronice și echilibrare neurovegetativă.",
   en: "MDM-2000 at Revimed PLUS+ Chișinău: professional mesodiencephalic modulation console for comprehensive rehabilitation, chronic pain, and autonomic balance.",
   ru: "МДМ-2000 в Revimed PLUS+ Кишинёв: профессиональный аппарат мезодиэнцефальной модуляции для комплексной реабилитации и снятия хронической боли.",
   ua: "МДМ-2000 у Revimed PLUS+ Кишинів: професійний апарат мезодіенцефальної модуляції для комплексної реабілітації та зняття хронічного болю."
  }
 },
 "amplipuls-4": {
  image: "/images/equipment/amplipuls-4.webp",
  alt: {
   ro: "Aparat Amplipuls-4 pentru amplipulsterapie (curenți SMT) la Revimed PLUS+ Chișinău",
   en: "Amplipuls-4 SMT electrotherapy physiotherapy device at Revimed PLUS+ Chișinău",
   ru: "Аппарат Амплипульс-4 для СМТ-терапии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Ампліпульс-4 для СМТ-терапії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Amplipuls-4 la Revimed PLUS+ Chișinău: fizioterapie cu curenți sinusoidali modulați (SMT) pentru dureri lombare, cervicale, nevralgii și relaxare musculară.",
   en: "Amplipuls-4 at Revimed PLUS+ Chișinău: sinusoidal modulated current (SMT) physiotherapy for back pain, neck pain, neuralgia, and muscle relaxation.",
   ru: "Амплипульс-4 в Revimed PLUS+ Кишинёв: физиотерапия синусоидальными модулированными токами (СМТ) при болях в спине, шее, невралгиях и спазмах.",
   ua: "Ампліпульс-4 у Revimed PLUS+ Кишинів: фізіотерапія синусоїдальними модульованими струмами (СМТ) при болях у спині, шиї, невралгіях та спазмах."
  }
 },
 "amplipuls-5": {
  image: "/images/equipment/amplipuls-5.webp",
  alt: {
   ro: "Aparat Amplipuls-5 pentru fizioterapie cu curenți SMT la Revimed PLUS+ Chișinău",
   en: "Amplipuls-5 clinical SMT electrotherapy console at Revimed PLUS+ Chișinău",
   ru: "Аппарат Амплипульс-5 для СМТ-физиотерапии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Ампліпульс-5 для СМТ-фізіотерапії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Amplipuls-5 în Chișinău la Revimed PLUS+: electroterapie SMT pentru radiculite, osteocondroză, contracturi musculare și recuperare neuromusculară.",
   en: "Amplipuls-5 in Chișinău at Revimed PLUS+: SMT electrotherapy for radiculopathy, spinal osteochondrosis, muscle spasms, and neuromuscular recovery.",
   ru: "Амплипульс-5 в Кишинёве в Revimed PLUS+: СМТ-электротерапия при радикулите, остеохондрозе, мышечных спазмах и нейромышечной реабилитации.",
   ua: "Ампліпульс-5 у Кишиневі в Revimed PLUS+: СМТ-електротерапія при радикуліті, остеохондрозі, м’язових спазмах та нейром’язовій реабілітації."
  }
 },
 "amplipuls-6": {
  image: "/images/equipment/amplipuls-6.webp",
  alt: {
   ro: "Aparat digital Amplipuls-6 pentru amplipulsterapie la Revimed PLUS+ Chișinău",
   en: "Amplipuls-6 digital SMT physiotherapy console at Revimed PLUS+ Chișinău",
   ru: "Цифровой аппарат Амплипульс-6 для СМТ-терапии в Revimed PLUS+ Кишинёв",
   ua: "Цифровий апарат Ампліпульс-6 для СМТ-терапії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Amplipuls-6 la Revimed PLUS+ Chișinău: aparat digital de amplipulsterapie SMT cu reglaj fin pentru dureri articulare, coloană vertebrală și fizioterapie.",
   en: "Amplipuls-6 at Revimed PLUS+ Chișinău: modern digital SMT physiotherapy console with precise dosing for spine, joint pain, and muscle rehabilitation.",
   ru: "Амплипульс-6 в Revimed PLUS+ Кишинёв: современный цифровой аппарат СМТ-терапии с точной дозировкой при болях в позвоночнике и суставах.",
   ua: "Ампліпульс-6 у Revimed PLUS+ Кишинів: сучасний цифровий апарат СМТ-терапії з точним дозуванням при болях у хребті та суглобах."
  }
 },
 "kandadzia-kang-da-jia-lqx-2000a": {
  image: "/images/equipment/kandadzia-kang-da-jia-lqx-2000a.webp",
  alt: {
   ro: "Aparat Kandadzia LQX-2000A pentru vibromasaj și masaj reflex la Revimed PLUS+ Chișinău",
   en: "Kandadzia / Kang Da Jia LQX-2000A spiral reflexology massager at Revimed PLUS+ Chișinău",
   ru: "Аппарат Кандадзя LQX-2000A для вибромассажа и рефлексотерапии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Кандадзя LQX-2000A для вібромасажу та рефлексотерапії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Kandadzia / Kang Da Jia LQX-2000A la Revimed PLUS+ Chișinău: vibromasaj spiralat și stimulare reflexogenă pentru circulație periferică, drenaj și relaxare.",
   en: "Kandadzia / Kang Da Jia LQX-2000A at Revimed PLUS+ Chișinău: high-frequency spiral reflexology vibration massager for peripheral circulation and relaxation.",
   ru: "Кандадзя / Kang Da Jia LQX-2000A в Revimed PLUS+ Кишинёв: спиральный вибромассаж и рефлексотерапия для улучшения микроциркуляции и расслабления.",
   ua: "Кандадзя / Kang Da Jia LQX-2000A у Revimed PLUS+ Кишинів: спіральний вібромасаж і рефлексотерапія для покращення мікроциркуляції та розслаблення."
  }
 },
 "aparat-electroforeza-medicamentoasa": {
  image: "/images/equipment/aparat-electroforeza-medicamentoasa.webp",
  alt: {
   ro: "Aparat pentru electroforeză medicamentoasă și galvanizare la Revimed PLUS+ Chișinău",
   en: "Medicinal electrophoresis and galvanization physiotherapy unit at Revimed PLUS+ Chișinău",
   ru: "Аппарат для лекарственного электрофореза в Revimed PLUS+ Кишинёв",
   ua: "Апарат для лікарського електрофорезу у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Electroforeză medicamentoasă în Chișinău la Revimed PLUS+: administrare locală neinvazivă a substanțelor active prin curent galvanic pentru dureri și inflamații.",
   en: "Medicinal electrophoresis in Chișinău at Revimed PLUS+: non-invasive targeted delivery of therapeutic agents via galvanic current for pain and inflammation.",
   ru: "Лекарственный электрофорез в Кишинёве в Revimed PLUS+: неинвазивное локальное введение препаратов гальваническим током при боли и воспалении.",
   ua: "Лікарський електрофорез у Кишиневі в Revimed PLUS+: неінвазивне локальне введення препаратів гальванічним струмом при болю та запаленні."
  }
 },
 "spectr-lc": {
  image: "/images/equipment/spectr-lc.webp",
  alt: {
   ro: "Aparat Spectr-LC pentru fototerapie infraroșie la Revimed PLUS+ Chișinău",
   en: "Spectr-LC clinical infrared phototherapy device at Revimed PLUS+ Chișinău",
   ru: "Аппарат Спектр-ЛЦ для инфракрасной фототерапии в Revimed PLUS+ Кишинёв",
   ua: "Апарат Спектр-ЛЦ для інфрачервоної фототерапії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Spectr-LC la Revimed PLUS+ Chișinău: fototerapie cu spectru infraroșu pentru stimularea microcirculației, regenerării tisulare și reducerea inflamației locale.",
   en: "Spectr-LC at Revimed PLUS+ Chișinău: clinical infrared light phototherapy supporting microcirculation, tissue regeneration, and local anti-inflammatory care.",
   ru: "Спектр-ЛЦ в Revimed PLUS+ Кишинёв: инфракрасная фототерапия для стимуляции микроциркуляции, регенерации тканей и уменьшения воспаления.",
   ua: "Спектр-ЛЦ у Revimed PLUS+ Кишинів: інфрачервона фототерапія для стимуляції мікроциркуляції, регенерації тканин і зменшення запалення."
  }
 },
 "lampa-solux": {
  image: "/images/equipment/lampa-solux.webp",
  alt: {
   ro: "Lampă medicală Solux cu radiație infraroșie la Revimed PLUS+ Chișinău",
   en: "Sollux medical infrared thermal therapy lamp at Revimed PLUS+ Chișinău",
   ru: "Медицинская лампа Соллюкс для инфракрасной терапии в Revimed PLUS+ Кишинёв",
   ua: "Медична лампа Солюкс для інфрачервоної терапії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "Lampă Solux în Chișinău la Revimed PLUS+: proceduri termice blânde cu lumină infraroșie pentru relaxare musculară, circulație locală și pregătire fizioterapeutică.",
   en: "Sollux lamp in Chișinău at Revimed PLUS+: gentle infrared thermal therapy for muscle relaxation, local circulation, and physiotherapy preparation.",
   ru: "Лампа Соллюкс в Кишинёве в Revimed PLUS+: мягкие инфракрасные тепловые процедуры для расслабления мышц, кровообращения и физиотерапии.",
   ua: "Лампа Солюкс у Кишиневі в Revimed PLUS+: м’які інфрачервоні теплові процедури для розслаблення м’язів, кровообігу та фізіотерапії."
  }
 },
 "detox-spa-bio": {
  image: "/images/equipment/detox-spa-bio.webp",
  alt: {
   ro: "Aparat DETOX Spa Bio pentru proceduri ionice complementare la Revimed PLUS+ Chișinău",
   en: "DETOX Spa Bio ionic foot bath wellness device at Revimed PLUS+ Chișinău",
   ru: "Аппарат DETOX Spa Bio для ионных спа-процедур в Revimed PLUS+ Кишинёв",
   ua: "Апарат DETOX Spa Bio для іонних спа-процедур у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "DETOX Spa Bio la Revimed PLUS+ Chișinău: proceduri complementare de baie ionică pentru relaxare, confort periferic și susținerea stării generale de bine.",
   en: "DETOX Spa Bio at Revimed PLUS+ Chișinău: complementary ionic foot bath sessions supporting relaxation, peripheral comfort, and general wellness.",
   ru: "DETOX Spa Bio в Revimed PLUS+ Кишинёв: дополнительные ионные спа-процедуры для релаксации, комфорта и поддержки общего самочувствия.",
   ua: "DETOX Spa Bio у Revimed PLUS+ Кишинів: додаткові іонні спа-процедури для релаксації, комфорту та підтримки загального самопочуття."
  }
 },
 "spa-sy-f088-detox-bio-178": {
  image: "/images/equipment/spa-sy-f088-detox-bio-178.webp",
  alt: {
   ro: "Sistem SPA SY-F088 / DETOX BIO-178 pentru proceduri ionice la Revimed PLUS+ Chișinău",
   en: "SPA SY-F088 / DETOX BIO-178 ionic bio-spa system at Revimed PLUS+ Chișinău",
   ru: "Система SPA SY-F088 / DETOX BIO-178 для ионных процедур в Revimed PLUS+ Кишинёв",
   ua: "Система SPA SY-F088 / DETOX BIO-178 для іонних процедур у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "SPA SY-F088 / DETOX BIO-178 în Chișinău la Revimed PLUS+: sistem modern pentru proceduri ionice complementare de relaxare și recuperare blândă.",
   en: "SPA SY-F088 / DETOX BIO-178 in Chișinău at Revimed PLUS+: modern ionic bio-spa system for complementary relaxation and gentle wellness sessions.",
   ru: "SPA SY-F088 / DETOX BIO-178 в Кишинёве в Revimed PLUS+: современная система ионных спа-процедур для мягкой релаксации и восстановления.",
   ua: "SPA SY-F088 / DETOX BIO-178 у Кишиневі в Revimed PLUS+: сучасна система іонних спа-процедур для м’якої релаксації та відновлення."
  }
 },
 "rheotest": {
  image: "/images/equipment/rheotest.webp",
  alt: {
   ro: "Aparat RHEOTEST pentru diagnostic vascular funcțional la Revimed PLUS+ Chișinău",
   en: "RHEOTEST functional vascular rheography diagnostic unit at Revimed PLUS+ Chișinău",
   ru: "Аппарат РЕОТЕСТ (RHEOTEST) для сосудистой реографии в Revimed PLUS+ Кишинёв",
   ua: "Апарат РЕОТЕСТ (RHEOTEST) для судинної реографії у Revimed PLUS+ Кишинів"
  },
  seoDescription: {
   ro: "RHEOTEST la Revimed PLUS+ Chișinău: diagnostic funcțional vascular neinvaziv (reografie / reoencefalografie) pentru evaluarea circulației cerebrale și periferice.",
   en: "RHEOTEST at Revimed PLUS+ Chișinău: non-invasive vascular rheography and rheoencephalography diagnostics evaluating cerebral and peripheral circulation.",
   ru: "RHEOTEST в Revimed PLUS+ Кишинёв: неинвазивная сосудистая реография и реоэнцефалография для оценки мозгового и периферического кровообращения.",
   ua: "RHEOTEST у Revimed PLUS+ Кишинів: неінвазивна судинна реографія та реоенцефалографія для оцінки мозкового і периферичного кровообігу."
  }
 }
};

export function getEquipmentSeo(slug: string, lang: SiteLang = "ro") {
 const entry = equipmentSeo[slug];
 if (!entry) return null;
 return {
  image: entry.image,
  alt: entry.alt[lang] || entry.alt.ro,
  seoDescription: entry.seoDescription[lang] || entry.seoDescription.ro
 };
}
