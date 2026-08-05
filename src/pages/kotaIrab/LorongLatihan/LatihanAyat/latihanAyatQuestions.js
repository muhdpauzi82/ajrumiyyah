const PILIHAN_KEADAAN = [
  "مَرْفُوعٌ",
  "مَنْصُوبٌ",
  "مَجْرُورٌ",
  "مَجْزُومٌ",
];

export const latihanAyatQuestions = [
  {
    id: 1,
    question:
      "Apakah keadaan I‘rab bagi perkataan yang ditandakan?",
    sentenceParts: [
      { text: "جَاءَ " },
      { text: "مُحَمَّدٌ", highlight: true },
    ],
    target: "مُحَمَّدٌ",
    answer: "مَرْفُوعٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "مُحَمَّدٌ ialah fa‘il. Fa‘il berada dalam keadaan Marfu‘.",
  },
  {
    id: 2,
    question:
      "Apakah keadaan I‘rab bagi perkataan yang ditandakan?",
    sentenceParts: [
      { text: "رَأَيْتُ " },
      { text: "مُحَمَّدًا", highlight: true },
    ],
    target: "مُحَمَّدًا",
    answer: "مَنْصُوبٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "مُحَمَّدًا ialah maf‘ul bih. Maf‘ul bih berada dalam keadaan Mansub.",
  },
  {
    id: 3,
    question:
      "Tentukan keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "مَرَرْتُ بِـ" },
      { text: "مُحَمَّدٍ", highlight: true },
    ],
    target: "مُحَمَّدٍ",
    answer: "مَجْرُورٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "مُحَمَّدٍ didahului huruf jar بِ. Isim selepas huruf jar ialah Majrur.",
  },
  {
    id: 4,
    question:
      "Apakah keadaan I‘rab bagi fi‘il mudhari‘ yang ditandakan?",
    sentenceParts: [
      { text: "لَمْ " },
      { text: "يَذْهَبْ", highlight: true },
      { text: " عَلِيٌّ" },
    ],
    target: "يَذْهَبْ",
    answer: "مَجْزُومٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "يَذْهَبْ didahului لَمْ. Fi‘il mudhari‘ selepas لَمْ ialah Majzum.",
  },
  {
    id: 5,
    question:
      "Analisis keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "الطَّالِبُ " },
      { text: "مُجْتَهِدٌ", highlight: true },
    ],
    target: "مُجْتَهِدٌ",
    answer: "مَرْفُوعٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "مُجْتَهِدٌ ialah khabar. Khabar berada dalam keadaan Marfu‘.",
  },
  {
    id: 6,
    question:
      "Apakah keadaan I‘rab bagi perkataan yang ditandakan?",
    sentenceParts: [
      { text: "إِنَّ " },
      { text: "الطَّالِبَ", highlight: true },
      { text: " مُجْتَهِدٌ" },
    ],
    target: "الطَّالِبَ",
    answer: "مَنْصُوبٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الطَّالِبَ ialah isim إِنَّ. Isim إِنَّ berada dalam keadaan Mansub.",
  },
  {
    id: 7,
    question:
      "Tentukan keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "فِي " },
      { text: "الْمَدْرَسَةِ", highlight: true },
      { text: " طُلَّابٌ" },
    ],
    target: "الْمَدْرَسَةِ",
    answer: "مَجْرُورٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الْمَدْرَسَةِ didahului huruf jar فِي. Oleh itu, keadaannya Majrur.",
  },
  {
    id: 8,
    question:
      "Apakah keadaan I‘rab bagi fi‘il mudhari‘ yang ditandakan?",
    sentenceParts: [
      { text: "لَا " },
      { text: "تَلْعَبْ", highlight: true },
      { text: " فِي الْفَصْلِ" },
    ],
    target: "تَلْعَبْ",
    answer: "مَجْزُومٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "تَلْعَبْ didahului لَا النَّاهِيَة. Fi‘il mudhari‘ selepasnya ialah Majzum.",
  },
  {
    id: 9,
    question:
      "Apakah keadaan I‘rab bagi perkataan yang ditandakan?",
    sentenceParts: [
      { text: "كَانَ " },
      { text: "الْجَوُّ", highlight: true },
      { text: " جَمِيلًا" },
    ],
    target: "الْجَوُّ",
    answer: "مَرْفُوعٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الْجَوُّ ialah isim كَانَ. Isim كَانَ berada dalam keadaan Marfu‘.",
  },
  {
    id: 10,
    question:
      "Tentukan keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "كَانَ الْجَوُّ " },
      { text: "جَمِيلًا", highlight: true },
    ],
    target: "جَمِيلًا",
    answer: "مَنْصُوبٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "جَمِيلًا ialah khabar كَانَ. Khabar كَانَ berada dalam keadaan Mansub.",
  },
  {
    id: 11,
    question:
      "Apakah keadaan I‘rab bagi perkataan yang ditandakan?",
    sentenceParts: [
      { text: "ذَهَبْتُ إِلَى " },
      { text: "الْمَسْجِدِ", highlight: true },
    ],
    target: "الْمَسْجِدِ",
    answer: "مَجْرُورٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الْمَسْجِدِ didahului huruf jar إِلَى. Oleh itu, keadaannya Majrur.",
  },
  {
    id: 12,
    question:
      "Apakah keadaan I‘rab bagi fi‘il mudhari‘ yang ditandakan?",
    sentenceParts: [
      { text: "لَمَّا " },
      { text: "يَحْضُرْ", highlight: true },
      { text: " الْمُعَلِّمُ" },
    ],
    target: "يَحْضُرْ",
    answer: "مَجْزُومٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "يَحْضُرْ didahului لَمَّا. Fi‘il mudhari‘ selepasnya ialah Majzum.",
  },
  {
    id: 13,
    question:
      "Analisis keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "حَضَرَ " },
      { text: "الْمُعَلِّمُونَ", highlight: true },
    ],
    target: "الْمُعَلِّمُونَ",
    answer: "مَرْفُوعٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الْمُعَلِّمُونَ ialah fa‘il. Fa‘il berada dalam keadaan Marfu‘.",
  },
  {
    id: 14,
    question:
      "Tentukan keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "شَاهَدْتُ " },
      { text: "الْمُعَلِّمِينَ", highlight: true },
    ],
    target: "الْمُعَلِّمِينَ",
    answer: "مَنْصُوبٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الْمُعَلِّمِينَ ialah maf‘ul bih. Oleh itu, keadaannya Mansub.",
  },
  {
    id: 15,
    question:
      "Apakah keadaan I‘rab bagi perkataan yang ditandakan?",
    sentenceParts: [
      { text: "سَلَّمْتُ عَلَى " },
      { text: "الْمُعَلِّمِينَ", highlight: true },
    ],
    target: "الْمُعَلِّمِينَ",
    answer: "مَجْرُورٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الْمُعَلِّمِينَ didahului huruf jar عَلَى. Oleh itu, keadaannya Majrur.",
  },
  {
    id: 16,
    question:
      "Apakah keadaan I‘rab bagi fi‘il mudhari‘ yang ditandakan?",
    sentenceParts: [
      { text: "لَمْ " },
      { text: "يَكْتُبُوا", highlight: true },
      { text: " الدَّرْسَ" },
    ],
    target: "يَكْتُبُوا",
    answer: "مَجْزُومٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "يَكْتُبُوا didahului لَمْ. Fi‘il mudhari‘ tersebut berada dalam keadaan Majzum.",
  },
  {
    id: 17,
    question:
      "Tentukan keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "جَاءَ " },
      { text: "الطَّالِبَانِ", highlight: true },
    ],
    target: "الطَّالِبَانِ",
    answer: "مَرْفُوعٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الطَّالِبَانِ ialah fa‘il. Fa‘il berada dalam keadaan Marfu‘.",
  },
  {
    id: 18,
    question:
      "Apakah keadaan I‘rab bagi perkataan yang ditandakan?",
    sentenceParts: [
      { text: "رَأَيْتُ " },
      { text: "الطَّالِبَيْنِ", highlight: true },
    ],
    target: "الطَّالِبَيْنِ",
    answer: "مَنْصُوبٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الطَّالِبَيْنِ ialah maf‘ul bih. Maf‘ul bih berada dalam keadaan Mansub.",
  },
  {
    id: 19,
    question:
      "Analisis keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "مَرَرْتُ بِـ" },
      { text: "الطَّالِبَيْنِ", highlight: true },
    ],
    target: "الطَّالِبَيْنِ",
    answer: "مَجْرُورٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الطَّالِبَيْنِ didahului huruf jar بِ. Oleh itu, keadaannya Majrur.",
  },
  {
    id: 20,
    question:
      "Apakah keadaan I‘rab bagi fi‘il mudhari‘ yang ditandakan?",
    sentenceParts: [
      { text: "لَمْ " },
      { text: "يَكْتُبَا", highlight: true },
      { text: " الدَّرْسَ" },
    ],
    target: "يَكْتُبَا",
    answer: "مَجْزُومٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "يَكْتُبَا didahului لَمْ. Fi‘il mudhari‘ tersebut berada dalam keadaan Majzum.",
  },
  {
    id: 21,
    question:
      "Tentukan keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "هَذَا " },
      { text: "كِتَابٌ", highlight: true },
      { text: " مُفِيدٌ" },
    ],
    target: "كِتَابٌ",
    answer: "مَرْفُوعٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "كِتَابٌ ialah khabar bagi هَذَا. Khabar berada dalam keadaan Marfu‘.",
  },
  {
    id: 22,
    question:
      "Apakah keadaan I‘rab bagi perkataan yang ditandakan?",
    sentenceParts: [
      { text: "اشْتَرَيْتُ " },
      { text: "كِتَابًا", highlight: true },
      { text: " مُفِيدًا" },
    ],
    target: "كِتَابًا",
    answer: "مَنْصُوبٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "كِتَابًا ialah maf‘ul bih. Oleh itu, keadaannya Mansub.",
  },
  {
    id: 23,
    question:
      "Analisis keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "قَرَأْتُ فِي " },
      { text: "كِتَابٍ", highlight: true },
      { text: " مُفِيدٍ" },
    ],
    target: "كِتَابٍ",
    answer: "مَجْرُورٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "كِتَابٍ didahului huruf jar فِي. Oleh itu, keadaannya Majrur.",
  },
  {
    id: 24,
    question:
      "Apakah keadaan I‘rab bagi fi‘il mudhari‘ yang ditandakan?",
    sentenceParts: [
      { text: "لَا " },
      { text: "تُهْمِلْ", highlight: true },
      { text: " وَاجِبَكَ" },
    ],
    target: "تُهْمِلْ",
    answer: "مَجْزُومٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "تُهْمِلْ didahului لَا النَّاهِيَة. Oleh itu, keadaannya Majzum.",
  },
  {
    id: 25,
    question:
      "Tentukan keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "أَبُوكَ " },
      { text: "كَرِيمٌ", highlight: true },
    ],
    target: "كَرِيمٌ",
    answer: "مَرْفُوعٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "كَرِيمٌ ialah khabar. Khabar berada dalam keadaan Marfu‘.",
  },
  {
    id: 26,
    question:
      "Apakah keadaan I‘rab bagi perkataan yang ditandakan?",
    sentenceParts: [
      { text: "إِنَّ " },
      { text: "أَبَاكَ", highlight: true },
      { text: " كَرِيمٌ" },
    ],
    target: "أَبَاكَ",
    answer: "مَنْصُوبٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "أَبَاكَ ialah isim إِنَّ. Isim إِنَّ berada dalam keadaan Mansub.",
  },
  {
    id: 27,
    question:
      "Analisis keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "سَلَّمْتُ عَلَى " },
      { text: "أَبِيكَ", highlight: true },
    ],
    target: "أَبِيكَ",
    answer: "مَجْرُورٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "أَبِيكَ didahului huruf jar عَلَى. Oleh itu, keadaannya Majrur.",
  },
  {
    id: 28,
    question:
      "Apakah keadaan I‘rab bagi fi‘il mudhari‘ yang ditandakan?",
    sentenceParts: [
      { text: "لَمْ " },
      { text: "يَدْعُ", highlight: true },
      { text: " الرَّجُلُ" },
    ],
    target: "يَدْعُ",
    answer: "مَجْزُومٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "يَدْعُ didahului لَمْ. Fi‘il mudhari‘ tersebut berada dalam keadaan Majzum.",
  },
  {
    id: 29,
    question:
      "Tentukan keadaan I‘rab bagi perkataan yang ditandakan.",
    sentenceParts: [
      { text: "الْمُسْلِمَاتُ " },
      { text: "صَابِرَاتٌ", highlight: true },
    ],
    target: "صَابِرَاتٌ",
    answer: "مَرْفُوعٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "صَابِرَاتٌ ialah khabar. Khabar berada dalam keadaan Marfu‘.",
  },
  {
    id: 30,
    question:
      "Apakah keadaan I‘rab bagi perkataan yang ditandakan?",
    sentenceParts: [
      { text: "إِنَّ " },
      { text: "الْمُسْلِمَاتِ", highlight: true },
      { text: " صَابِرَاتٌ" },
    ],
    target: "الْمُسْلِمَاتِ",
    answer: "مَنْصُوبٌ",
    options: PILIHAN_KEADAAN,
    explanation:
      "الْمُسْلِمَاتِ ialah isim إِنَّ. Oleh itu, keadaannya Mansub.",
  },
];