import type { ServiceItem } from "@/lib/services";

export const servicesEn: Record<string, ServiceItem> = {
  "consultatii-neurologice": {
    slug: "consultatii-neurologice",
    title: "Neurology consultations",
    category: "Neurology",
    short: "Neurological assessment for symptoms related to the nervous system, pain, dizziness, numbness and movement disorders.",
    sections: [
      { title: "When it may help", body: ["headache, dizziness, vertigo or balance problems;", "numbness, tingling, weakness or nerve pain;", "sleep, memory, concentration or neurological fatigue;", "neck, back or spine-related symptoms."] },
      { title: "What the evaluation includes", body: ["discussion of symptoms and history;", "clinical neurological examination;", "recommendations for functional or additional tests when needed;", "individual plan for monitoring, recovery or further care."] },
    ],
  },
  "consultatii-neurochirurgie": {
    slug: "consultatii-neurochirurgie",
    title: "Neurosurgery consultations",
    category: "Neurosurgery",
    short: "Assessment for spine pathology, radicular pain, disc herniation and situations that may require neurosurgical opinion.",
    sections: [
      { title: "When it is recommended", body: ["persistent neck or lower back pain;", "pain radiating to arm or leg;", "numbness, weakness or walking difficulty;", "disc herniation, stenosis or nerve compression."] },
      { title: "Purpose", body: ["correlating symptoms with existing investigations;", "deciding between conservative care, rehabilitation, monitoring or further testing."] },
    ],
  },
  "fizioterapie-si-reabilitare": {
    slug: "fizioterapie-si-reabilitare",
    title: "Physiotherapy and rehabilitation",
    category: "Recovery",
    short: "Personalized programs for pain, mobility, muscle tone, functional recovery and return to daily activity.",
    sections: [
      { title: "What it may help with", body: ["back, neck, lumbar or joint pain;", "recovery after overuse or immobilization;", "mobility, coordination and balance;", "muscle tone and relapse prevention."] },
      { title: "How it works", body: ["initial assessment;", "selection of suitable procedures;", "guided exercises and home recommendations;", "progressive adjustment according to response."] },
    ],
  },
  "diagnostic-functional": {
    slug: "diagnostic-functional",
    title: "Functional diagnostics",
    category: "Evaluation",
    short: "Functional assessments for the nervous system, muscles, coordination, circulation and orientation body parameters.",
    sections: [
      { title: "Role", body: ["Functional diagnostics helps understand how the body works, not only how it looks structurally."] },
      { title: "May include", body: ["neurological functional assessments;", "computerized tests and clinical questionnaires;", "circulation or functional parameter evaluation;", "recommendations for further investigations when needed."] },
    ],
  },
  "terapie-balneara": {
    slug: "terapie-balneara",
    title: "Balneotherapy",
    category: "Balneotherapy",
    short: "Balneal procedures, mud therapy, hydrotherapy and complementary therapies for relaxation and recovery.",
    sections: [
      { title: "Description", body: ["Balneotherapy uses natural or balneology-inspired factors for relaxation, recovery and functional support."] },
      { title: "May help with", body: ["chronic musculoskeletal pain;", "muscle tension and fatigue;", "recovery after painful episodes;", "peripheral circulation and general comfort."] },
    ],
  },
  "electroterapie": {
    slug: "electroterapie",
    title: "Electrotherapy",
    category: "Physiotherapy",
    short: "Therapeutic current procedures, electrostimulation, electrophoresis and complementary methods for pain and recovery.",
    sections: [
      { title: "What electrotherapy is", body: ["Electrotherapy uses controlled forms of electrical current for physiotherapy purposes."] },
      { title: "Possible procedures", body: ["muscle electrostimulation;", "electroneurostimulation;", "medicinal electrophoresis;", "modulated or combined currents."] },
    ],
  },
};
