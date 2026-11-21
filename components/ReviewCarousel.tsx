"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";

type Review = {
  name: string;
  rating: number;
  text: Record<Lang, string>;
};

const reviews: Review[] = [
  {
    name: "R. R.",
    rating: 5,
    text: {
      ro: "Un loc unde te simți cu adevărat ascultat. Medicul Igor Revenco este un adevărat profesionist, empatic și răbdător. A explicat fiecare pas al procedurii și tratamentului, ceea ce mi-a oferit multă siguranță.",
      en: "A place where you truly feel heard. Dr. Igor Revenco is a genuine professional — empathetic and patient. He explained every step of the procedure and treatment, giving me real peace of mind.",
      ru: "Место, где тебя действительно слышат. Доктор Игорь Ревенко — настоящий профессионал, чуткий и терпеливый. Он объяснил каждый этап процедур и лечения, что дало полную уверенность.",
      ua: "Місце, де тебе справді чують. Лікар Ігор Ревенко — справжній професіонал, чуйний і терплячий. Він пояснив кожен етап процедур і лікування, що дало повну впевненість."
    }
  },
  {
    name: "I. B.",
    rating: 5,
    text: {
      ro: "Profesionalism, empatie și rezultate vizibile! Domnul doctor Revenco este un specialist desăvârșit în problemele coloanei vertebrale. Tratamentul personalizat a dat roade rapid, chiar și în caz de hernie de disc.",
      en: "Professionalism, empathy, and visible results! Dr. Revenco is an outstanding spine specialist. The personalized treatment worked quickly, even in a difficult herniated disc case.",
      ru: "Профессионализм, чуткость и заметный результат! Доктор Ревенко — прекрасный специалист по проблемам позвоночника. Индивидуальное лечение помогло быстро даже при грыже диска.",
      ua: "Професіоналізм, чуйність і помітний результат! Лікар Ревенко — чудовий спеціаліст із проблем хребта. Індивідуальне лікування швидко допомогло навіть при грижі диска."
    }
  },
  {
    name: "G. O.",
    rating: 5,
    text: {
      ro: "O experiență excepțională la REVIMED! Dr. Igor Revenco îmbină cunoștințele științifice solide cu o empatie rară. Planul de tratament personalizat a dat rezultate vizibile într-un timp foarte scurt.",
      en: "An exceptional experience at REVIMED! Dr. Igor Revenco combines deep medical knowledge with rare empathy. The tailored treatment plan delivered visible results in a very short time.",
      ru: "Исключительный опыт в REVIMED! Доктор Игорь Ревенко сочетает глубокие медицинские знания с редкой эмпатией. Персональный план лечения дал заметный результат за короткий срок.",
      ua: "Винятковий досвід у REVIMED! Лікар Ігор Ревенко поєднує глибокі медичні знання з рідкісною емпатією. Персональний план лікування дав помітний результат за короткий час."
    }
  },
  {
    name: "D. T.",
    rating: 5,
    text: {
      ro: "Un neurolog foarte bun, cu multă experiență. Pentru familia mea, este unicul medic care mi-a ajutat copiii să se dezvolte normal și să se integreze la grădiniță și la școală.",
      en: "A highly experienced neurologist. For my family, he is the only doctor who truly helped my children develop well and thrive in kindergarten and school.",
      ru: "Очень опытный невролог. Для моей семьи он — единственный врач, который помог моим детям нормально развиваться и адаптироваться в детском саду и школе.",
      ua: "Дуже досвідчений невролог. Для моєї родини він — єдиний лікар, який допоміг моїм дітям нормально розвиватися та адаптуватися в садочку й школі."
    }
  },
  {
    name: "R. D.",
    rating: 5,
    text: {
      ro: "Diagnosticarea a fost precisă, iar tratamentul recomandat s-a dovedit eficient încă din primele săptămâni. Cabinet bine organizat, programări respectate și comunicare clară.",
      en: "The diagnosis was accurate, and the recommended treatment proved effective within the first few weeks. Well-organized clinic, punctual appointments, and clear communication.",
      ru: "Диагностика была точной, а назначенное лечение дало эффект уже в первые недели. Хорошо организованный кабинет, точная запись и понятное общение.",
      ua: "Діагностика була точною, а призначене лікування дало ефект уже в перші тижні. Добре організований кабінет, пунктуальний запис і зрозуміле спілкування."
    }
  },
  {
    name: "С. Д.",
    rating: 5,
    text: {
      ro: "Cel mai bun neurolog din oraș. Am fost la mulți medici, dar nimeni nu a pus diagnosticul corect ca domnul Igor. Clinica dispune și de echipamentul necesar pentru investigații pe loc.",
      en: "The best neurologist in the city. After visiting many doctors with no clear diagnosis, Dr. Igor identified the exact cause. Conveniently, the clinic also has the needed diagnostic equipment on site.",
      ru: "Самый лучший невролог в городе. До этого были у многих врачей, но только доктор Игорь поставил верный диагноз. Клиника оснащена необходимым оборудованием — всё удобно на месте.",
      ua: "Найкращий невролог у місті. До цього зверталися до багатьох лікарів, але лише доктор Ігор поставив точний діагноз. Клініка оснащена необхідним обладнанням — усе зручно на місці."
    }
  },
  {
    name: "V. G.",
    rating: 5,
    text: {
      ro: "Fiind lucrător medical, am fost profund impresionată de atitudinea atentă a medicului Igor Revenco și de combinația între medicina clasică, metode complementare și psihoterapie. Rezultate din primele zile.",
      en: "As a healthcare worker myself, I was deeply impressed by Dr. Igor Revenco’s care and his blend of conventional medicine, complementary therapies, and psychotherapy. Visible improvement from the first days.",
      ru: "Как медработник, я была глубоко впечатлена внимательностью доктора Игоря Ревенко и сочетанием классической медицины, мягких методов и психотерапии. Результат заметен с первых дней.",
      ua: "Як медпрацівник, я була глибоко вражена уважністю лікаря Ігоря Ревенка та поєднанням класичної медицини, м’яких методів і психотерапії. Результат помітний із перших днів."
    }
  },
  {
    name: "Е. М.",
    rating: 5,
    text: {
      ro: "După mult timp cu migrene severe și stări depresive, tratamentul individualizat ales de Dr. Igor Revenco a schimbat totul: crizele au devenit mult mai rare, iar energia și echilibrul au revenit.",
      en: "After struggling with severe migraines and low mood, Dr. Igor Revenco’s individualized treatment was a turning point: migraines became far rarer and weaker, and my energy returned.",
      ru: "Долго страдала от сильных мигреней и подавленного состояния. Индивидуальное лечение Игоря Ревенко стало поворотным моментом: приступы стали реже и слабее, вернулись силы и равновесие.",
      ua: "Довго страждала від сильних мігреней і пригніченого стану. Індивідуальне лікування Ігоря Ревенка стало переломним моментом: напади стали рідшими й слабшими, повернулися сили."
    }
  },
  {
    name: "I. I.",
    rating: 5,
    text: {
      ro: "Unul dintre cei mai calificați doctori de până acum — empatic, devotat profesiei, ascultător și calm. Recomandări clare pentru un tratament individualizat.",
      en: "One of the most qualified doctors I have ever met — empathetic, dedicated, calm, and attentive, always offering clear guidance for individualized treatment.",
      ru: "Один из самых квалифицированных врачей — чуткий, преданный профессии, спокойный и внимательный. Всегда даёт понятные рекомендации для индивидуального лечения.",
      ua: "Один із найкваліфікованіших лікарів — чуйний, відданий професії, спокійний і уважний. Завжди надає зрозумілі рекомендації для індивідуального лікування."
    }
  },
  {
    name: "E. Y.",
    rating: 5,
    text: {
      ro: "Îl cunosc pe domnul doctor Revenco de peste 17 ani. Eu și familia mea (copiii mei) suntem bine datorită acestui minunat medic. Respect și admirație!",
      en: "I have known Dr. Revenco for over 17 years. My family and my children are doing well thanks to this wonderful physician. Deep respect and gratitude!",
      ru: "Знаю доктора Ревенко более 17 лет. Я и моя семья (мои дети) чувствуем себя хорошо благодаря этому замечательному врачу. Огромное уважение!",
      ua: "Знаю лікаря Ревенка понад 17 років. Я та моя родина (мої діти) почуваємося добре завдяки цьому чудовому лікарю. Велика повага!"
    }
  },
  {
    name: "C. O.",
    rating: 5,
    text: {
      ro: "Calmul, claritatea și explicațiile pe înțelesul pacientului inspiră încredere din prima clipă. Investigațiile au fost precise, iar tratamentul a dat rezultate rapide.",
      en: "His calm demeanor and clear, jargon-free explanations inspire trust immediately. The recommended tests were precise and the treatment brought fast results.",
      ru: "Спокойствие, ясность и понятные объяснения сразу вызывают доверие. Обследования были точными, а лечение быстро дало результат.",
      ua: "Спокій, ясність і зрозумілі пояснення одразу викликають довіру. Обстеження були точними, а лікування швидко дало результат."
    }
  },
  {
    name: "Y. M.",
    rating: 5,
    text: {
      ro: "Dr. Revenco a acordat atenție reală problemei copilului nostru, a prescris un tratament natural și ne-a ghidat spre investigații complete. Rezultatele au fost remarcabile.",
      en: "Dr. Revenco gave genuine attention to our child’s issue, prescribed a gentle natural treatment, and guided us to thorough diagnostics. The progress has been remarkable.",
      ru: "Доктор Ревенко уделил настоящее внимание проблеме нашего ребёнка, назначил натуральное лечение и направил на нужные обследования. Результат замечательный.",
      ua: "Доктор Ревенко приділив справжню увагу проблемі нашої дитини, призначив натуральне лікування та направив на необхідні обстеження. Результат чудовий."
    }
  },
  {
    name: "N. A.",
    rating: 5,
    text: {
      ro: "Recomand Centrul Revimed! Personal foarte amabil! Domnul Revenco a depistat la timp problema copilului meu și ne-a îndrumat pas cu pas.",
      en: "I highly recommend Revimed Center! Very kind staff, and Dr. Revenco detected my child’s issue early and guided us step by step.",
      ru: "Рекомендую центр Revimed! Очень доброжелательный персонал, а доктор Ревенко вовремя выявил проблему ребёнка и вёл нас шаг за шагом.",
      ua: "Рекомендую центр Revimed! Дуже доброзичливий персонал, а лікар Ревенко вчасно виявив проблему дитини й супроводжував нас крок за кроком."
    }
  },
  {
    name: "E. S.",
    rating: 5,
    text: {
      ro: "Domnul doctor Revenco ne-a ajutat pe mine și familia mea să găsim soluții pentru probleme vechi. Un adevărat profesionist care se implică 100%.",
      en: "Dr. Revenco helped both me and my family solve long-standing health issues. A true professional who gives 100% to every patient.",
      ru: "Доктор Ревенко помог мне и моей семье решить давние проблемы со здоровьем. Настоящий профессионал, полностью отдающийся работе.",
      ua: "Лікар Ревенко допоміг мені та моїй родині вирішити давні проблеми зі здоров’ям. Справжній професіонал, який повністю віддається справі."
    }
  },
  {
    name: "A. I.",
    rating: 5,
    text: {
      ro: "În mai puțin de o lună de la începerea tratamentului la copil au apărut rezultatele mult așteptate. Mulțumim pentru explicațiile minuțioase și abordarea profesionistă!",
      en: "In less than a month after starting our child’s treatment, we saw the results we had hoped for. Grateful for the thorough explanations and professional care!",
      ru: "Менее чем через месяц после начала лечения у ребёнка появились долгожданные результаты. Благодарим за подробные объяснения и профессиональный подход!",
      ua: "Менш ніж за місяць після початку лікування у дитини з’явилися довгоочікувані результати. Дякуємо за докладні пояснення та професійний підхід!"
    }
  },
  {
    name: "L. F.",
    rating: 5,
    text: {
      ro: "După 4 luni de dureri extreme de picior fără rezolvare în străinătate, am găsit în sfârșit un medic care mi-a explicat amănunțit ce am și mi-a oferit un tratament eficient.",
      en: "After 4 months of severe leg pain with no solution abroad, I finally found a doctor who explained everything clearly and gave me effective treatment.",
      ru: "После 4 месяцев сильных болей в ноге без решения за границей я наконец нашла врача, который всё подробно объяснил и назначил эффективное лечение.",
      ua: "Після 4 місяців сильного болю в нозі без вирішення за кордоном я нарешті знайшла лікаря, який усе детально пояснив і призначив ефективне лікування."
    }
  },
  {
    name: "M. C.",
    rating: 5,
    text: {
      ro: "Un medic profesionist care își face munca de nota 10. Indiferent de oră, găsește timp să ofere răspunsul potrivit. Foarte mulțumită de clinica Revimed.",
      en: "A 10/10 professional who always takes time to answer questions thoughtfully. Very satisfied with the Revimed clinic.",
      ru: "Профессионал на 10 из 10 — всегда находит время ответить на вопросы. Очень довольна клиникой Revimed.",
      ua: "Професіонал на 10 із 10 — завжди знаходить час відповісти на запитання. Дуже задоволена клінікою Revimed."
    }
  },
  {
    name: "A. A.",
    rating: 5,
    text: {
      ro: "Sunt fără cuvinte, în sfârșit un medic competent! Mi-a rezolvat o problemă foarte veche la care nimeni nu găsea soluția. Mergeți cu toată încrederea.",
      en: "Speechless — finally a truly competent doctor! He solved a very old health issue no one else could figure out. Go with full confidence.",
      ru: "Наконец-то по-настоящему компетентный врач! Решил давнюю проблему, с которой никто не мог справиться. Рекомендую с полной уверенностью.",
      ua: "Нарешті по-справжньому компетентний лікар! Вирішив давню проблему, з якою ніхто не міг впоратися. Рекомендую з повною впевненістю."
    }
  },
  {
    name: "M. K.",
    rating: 5,
    text: {
      ro: "Clinica este super, de la intrare ești întâmpinat cu zâmbet, iar medicul este un profesionist cum rar vezi. Recomand 100%.",
      en: "Great clinic — welcomed with a smile from the moment you walk in, and the doctor is a rare true professional. 100% recommend.",
      ru: "Отличная клиника — встречают с улыбкой, а врач — редкий профессионал. Рекомендую на 100%.",
      ua: "Чудова клініка — зустрічають із посмішкою, а лікар — рідкісний професіонал. Рекомендую на 100%."
    }
  },
  {
    name: "D. R.",
    rating: 5,
    text: {
      ro: "După mult timp de umblat pe la medici, s-a depistat în sfârșit problema și am primit un tratament cu rezultat pozitiv. Mulțumesc mult, domnule Igor!",
      en: "After a long time visiting different doctors, the problem was finally identified and I received treatment with a positive result. Thank you very much, Dr. Igor!",
      ru: "После долгих обращений к разным врачам проблему наконец выявили, и я получил лечение с положительным результатом. Большое спасибо, доктор Игорь!",
      ua: "Після тривалих звернень до різних лікарів проблему нарешті виявили, і я отримав лікування з позитивним результатом. Щиро дякую, докторе Ігорю!"
    }
  },
  {
    name: "I. M.",
    rating: 5,
    text: {
      ro: "Domnul Revenco e medicul familiei mele încă din copilărie. Am urmat tratament recent la el și mă simt mult mai bine deja de 2 săptămâni.",
      en: "Dr. Revenco has been my family’s doctor since childhood. I recently completed treatment with him and have felt much better for two weeks already.",
      ru: "Доктор Ревенко — наш семейный врач ещё с детства. Недавно прошёл у него курс лечения и уже 2 недели чувствую себя намного лучше.",
      ua: "Лікар Ревенко — наш сімейний лікар ще з дитинства. Нещодавно пройшов у нього курс лікування й уже 2 тижні почуваюся значно краще."
    }
  }
];

const labels: Record<Lang, { prev: string; next: string; patient: string; badge: string }> = {
  ro: { prev: "Review anterior", next: "Review următor", patient: "Pacient", badge: "Google Reviews" },
  en: { prev: "Previous review", next: "Next review", patient: "Patient", badge: "Google Reviews" },
  ru: { prev: "Предыдущий отзыв", next: "Следующий отзыв", patient: "Пациент", badge: "Отзывы Google" },
  ua: { prev: "Попередній відгук", next: "Наступний відгук", patient: "Пацієнт", badge: "Відгуки Google" }
};

export default function ReviewCarousel({ lang = "ro" }: { lang?: Lang }) {
  const [index, setIndex] = useState(0);
  const safeLang = lang || "ro";
  const active = reviews[index];
  const label = labels[safeLang] || labels.ro;

  const prev = () => setIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));

  return (
    <div className="reviewCarousel">
      <button type="button" className="reviewArrow reviewArrowDesktop" onClick={prev} aria-label={label.prev}>
        ‹
      </button>

      <div className="reviewSlide" data-glass-card>
        <p>“{active.text[safeLang] || active.text.ro}”</p>
        <div className="stars">{"★".repeat(active.rating)}</div>
        <b>{active.name || label.patient}</b>
        <small>
          {label.badge} · {index + 1} / {reviews.length}
        </small>
      </div>

      <button type="button" className="reviewArrow reviewArrowDesktop" onClick={next} aria-label={label.next}>
        ›
      </button>

      <div className="reviewMobileNav">
        <button type="button" className="reviewArrow" onClick={prev} aria-label={label.prev}>
          ‹
        </button>
        <button type="button" className="reviewArrow" onClick={next} aria-label={label.next}>
          ›
        </button>
      </div>
    </div>
  );
}
