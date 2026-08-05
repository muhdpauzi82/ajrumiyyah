export const dataranIrabQuestions = [
  {
    id: 1,
    question:
      "Apakah keadaan I‘rab bagi kalimah yang ditandakan?",
    sentenceParts: [
      { text: "جَاءَ " },
      { text: "مُحَمَّدٌ", highlight: true },
    ],
    target: "مُحَمَّدٌ",
    options: [
      "مَرْفُوعٌ",
      "مَنْصُوبٌ",
      "مَجْرُورٌ",
      "مَجْزُومٌ",
    ],
    answer: "مَرْفُوعٌ",
    explanation:
      "مُحَمَّدٌ ialah fa‘il. Fa‘il berada dalam keadaan Marfu‘.",
  },
  {
    id: 2,
    question:
      "Apakah keadaan I‘rab bagi kalimah yang ditandakan?",
    sentenceParts: [
      { text: "رَأَيْتُ " },
      { text: "مُحَمَّدًا", highlight: true },
    ],
    target: "مُحَمَّدًا",
    options: [
      "مَرْفُوعٌ",
      "مَنْصُوبٌ",
      "مَجْرُورٌ",
      "مَجْزُومٌ",
    ],
    answer: "مَنْصُوبٌ",
    explanation:
      "مُحَمَّدًا ialah maf‘ul bih. Maf‘ul bih berada dalam keadaan Mansub.",
  },
  {
    id: 3,
    question:
      "Tentukan keadaan I‘rab kalimah yang ditandakan.",
    sentenceParts: [
      { text: "مَرَرْتُ بِـ" },
      { text: "مُحَمَّدٍ", highlight: true },
    ],
    target: "مُحَمَّدٍ",
    options: [
      "مَرْفُوعٌ",
      "مَنْصُوبٌ",
      "مَجْرُورٌ",
      "مَجْزُومٌ",
    ],
    answer: "مَجْرُورٌ",
    explanation:
      "مُحَمَّدٍ didahului huruf jar بِ. Oleh itu, keadaannya Majrur.",
  },
  {
    id: 4,
    question:
      "Tentukan keadaan I‘rab fi‘il mudhari‘ yang ditandakan.",
    sentenceParts: [
      { text: "لَمْ " },
      { text: "يَذْهَبْ", highlight: true },
      { text: " عَلِيٌّ" },
    ],
    target: "يَذْهَبْ",
    options: [
      "مَرْفُوعٌ",
      "مَنْصُوبٌ",
      "مَجْرُورٌ",
      "مَجْزُومٌ",
    ],
    answer: "مَجْزُومٌ",
    explanation:
      "يَذْهَبْ didahului لَمْ. Fi‘il mudhari‘ selepas لَمْ ialah Majzum.",
  },
  {
    id: 5,
    question:
      "Apakah tanda Rafa‘ bagi kalimah yang ditandakan?",
    sentenceParts: [
      { text: "حَضَرَ " },
      { text: "الطَّالِبُ", highlight: true },
    ],
    target: "الطَّالِبُ",
    options: [
      "الضَّمَّةُ",
      "الْفَتْحَةُ",
      "الْكَسْرَةُ",
      "السُّكُونُ",
    ],
    answer: "الضَّمَّةُ",
    explanation:
      "الطَّالِبُ ialah isim mufrad yang Marfu‘. Tanda Rafa‘nya ialah dhammah.",
  },
  {
    id: 6,
    question:
      "Apakah tanda Nasab bagi kalimah yang ditandakan?",
    sentenceParts: [
      { text: "شَرِبَ الْوَلَدُ " },
      { text: "الْمَاءَ", highlight: true },
    ],
    target: "الْمَاءَ",
    options: [
      "الضَّمَّةُ",
      "الْفَتْحَةُ",
      "الْكَسْرَةُ",
      "السُّكُونُ",
    ],
    answer: "الْفَتْحَةُ",
    explanation:
      "الْمَاءَ ialah maf‘ul bih yang Mansub. Tanda Nasabnya ialah fathah.",
  },
  {
    id: 7,
    question:
      "Apakah tanda Jar bagi kalimah yang ditandakan?",
    sentenceParts: [
      { text: "فِي " },
      { text: "الْمَدْرَسَةِ", highlight: true },
    ],
    target: "الْمَدْرَسَةِ",
    options: [
      "الضَّمَّةُ",
      "الْفَتْحَةُ",
      "الْكَسْرَةُ",
      "السُّكُونُ",
    ],
    answer: "الْكَسْرَةُ",
    explanation:
      "الْمَدْرَسَةِ didahului فِي. Tanda Jarnya ialah kasrah.",
  },
  {
    id: 8,
    question:
      "Apakah tanda Jazm bagi fi‘il mudhari‘ yang ditandakan?",
    sentenceParts: [
      { text: "لَمْ " },
      { text: "يَكْتُبْ", highlight: true },
    ],
    target: "يَكْتُبْ",
    options: [
      "الضَّمَّةُ",
      "الْفَتْحَةُ",
      "الْكَسْرَةُ",
      "السُّكُونُ",
    ],
    answer: "السُّكُونُ",
    explanation:
      "يَكْتُبْ ialah fi‘il mudhari‘ sahih akhir yang Majzum. Tandanya ialah sukun.",
  },
  {
    id: 9,
    question:
      "Apakah kedudukan kalimah yang ditandakan?",
    sentenceParts: [
      { text: "كَتَبَ " },
      { text: "الطَّالِبُ", highlight: true },
      { text: " الدَّرْسَ" },
    ],
    target: "الطَّالِبُ",
    options: [
      "فَاعِلٌ",
      "مَفْعُولٌ بِهِ",
      "مُبْتَدَأٌ",
      "خَبَرٌ",
    ],
    answer: "فَاعِلٌ",
    explanation:
      "الطَّالِبُ melakukan perbuatan menulis. Oleh itu, ia ialah fa‘il.",
  },
  {
    id: 10,
    question:
      "Apakah kedudukan kalimah yang ditandakan?",
    sentenceParts: [
      { text: "كَتَبَ الطَّالِبُ " },
      { text: "الدَّرْسَ", highlight: true },
    ],
    target: "الدَّرْسَ",
    options: [
      "فَاعِلٌ",
      "مَفْعُولٌ بِهِ",
      "مُبْتَدَأٌ",
      "خَبَرٌ",
    ],
    answer: "مَفْعُولٌ بِهِ",
    explanation:
      "الدَّرْسَ menerima perbuatan menulis. Oleh itu, ia ialah maf‘ul bih.",
  },
  {
    id: 11,
    question:
      "Apakah kedudukan kalimah yang ditandakan?",
    sentenceParts: [
      { text: "الطَّالِبُ " },
      { text: "مُجْتَهِدٌ", highlight: true },
    ],
    target: "مُجْتَهِدٌ",
    options: [
      "فَاعِلٌ",
      "مَفْعُولٌ بِهِ",
      "مُبْتَدَأٌ",
      "خَبَرٌ",
    ],
    answer: "خَبَرٌ",
    explanation:
      "مُجْتَهِدٌ menerangkan keadaan mubtada’. Oleh itu, ia ialah khabar.",
  },
  {
    id: 12,
    question:
      "Apakah kedudukan kalimah yang ditandakan?",
    sentenceParts: [
      { text: "" },
      { text: "الْجَوُّ", highlight: true },
      { text: " جَمِيلٌ" },
    ],
    target: "الْجَوُّ",
    options: [
      "فَاعِلٌ",
      "مَفْعُولٌ بِهِ",
      "مُبْتَدَأٌ",
      "خَبَرٌ",
    ],
    answer: "مُبْتَدَأٌ",
    explanation:
      "الْجَوُّ berada pada awal jumlah ismiyyah. Oleh itu, ia ialah mubtada’.",
  },
];