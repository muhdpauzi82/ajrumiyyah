export const majzumPages = [
  {
    id: 1,
    type: "cover",
    kitabNumber: "كِتَابٌ ٤",
    arabic: "الْمَجْزُومَاتُ",
    title: "Kitab Majzumat",
    subtitle:
      "Mengenali fi‘il mudhari‘ yang berada dalam keadaan jazm serta tanda-tandanya.",
  },

  {
  id: 2,
  type: "matan",

  arabic: "عَلَامَاتُ الْجَزْمِ",
  title: "Tanda-tanda Jazm",

  matan:
    "وَلِلْجَزْمِ ثَلَاثُ عَلَامَاتٍ: السُّكُونُ، وَحَذْفُ حَرْفِ الْعِلَّةِ، وَحَذْفُ النُّونِ.",

  explanation:
    "Jazm mempunyai tiga tanda, iaitu sukun, pengguguran huruf ‘illah dan pengguguran nun.",

  signs: [
    "السُّكُونُ",
    "حَذْفُ حَرْفِ الْعِلَّةِ",
    "حَذْفُ النُّونِ",
  ],
},

  {
    id: 3,
    type: "lesson",
    title: "Sukun",
    arabic: "السُّكُونُ",
    explanation:
      "Sukun menjadi tanda jazm bagi fi‘il mudhari‘ yang sahih pada huruf akhirnya.",
    examples: [
      {
        id: "lam-yaktub",
        label: "Fi‘il Sahih Akhir",
        arabic: "الْفِعْلُ الصَّحِيحُ الْآخِرِ",
        example: {
          before: "لَمْ يَكْتُب",
          highlight: "ْ",
          after: "",
        },
        meaning: "Dia tidak menulis.",
        explanation:
          "Fi‘il يَكْتُبْ menjadi majzum selepas masuk لَمْ. Tanda jazmnya ialah sukun pada huruf akhirnya.",
      },

      {
        id: "lam-yadhhab",
        label: "Contoh يَذْهَبُ",
        arabic: "مِثَالُ يَذْهَبُ",
        example: {
          before: "لَمْ يَذْهَب",
          highlight: "ْ",
          after: "",
        },
        meaning: "Dia tidak pergi.",
        explanation:
          "Fi‘il يَذْهَبْ menjadi majzum dengan sukun selepas لَمْ.",
      },

      {
        id: "la-tajlis",
        label: "Larangan",
        arabic: "لَا النَّاهِيَةُ",
        example: {
          before: "لَا تَجْلِس",
          highlight: "ْ",
          after: "",
        },
        meaning: "Jangan kamu duduk.",
        explanation:
          "Fi‘il تَجْلِسْ menjadi majzum selepas لَا النَّاهِيَةُ.",
      },
    ],
  },

  {
    id: 4,
    type: "lesson",
    title: "Pengguguran Huruf ‘Illah",
    arabic: "حَذْفُ حَرْفِ الْعِلَّةِ",
    explanation:
      "Huruf ‘illah digugurkan sebagai tanda jazm bagi fi‘il mudhari‘ yang mu‘tal pada huruf akhirnya.",
    examples: [
      {
        id: "waw",
        label: "Mu‘tal Akhir dengan Waw",
        arabic: "الْمُعْتَلُّ بِالْوَاوِ",
        example: {
          before: "لَمْ يَدْع",
          highlight: "ُ",
          after: "",
        },
        meaning: "Dia tidak menyeru.",
        explanation:
          "Asalnya ialah يَدْعُو. Huruf waw digugurkan apabila fi‘il tersebut menjadi majzum.",
      },

      {
        id: "ya",
        label: "Mu‘tal Akhir dengan Ya",
        arabic: "الْمُعْتَلُّ بِالْيَاءِ",
        example: {
          before: "لَمْ يَرْم",
          highlight: "ِ",
          after: "",
        },
        meaning: "Dia tidak membaling.",
        explanation:
          "Asalnya ialah يَرْمِي. Huruf ya digugurkan sebagai tanda jazm.",
      },

      {
        id: "alif",
        label: "Mu‘tal Akhir dengan Alif",
        arabic: "الْمُعْتَلُّ بِالْأَلِفِ",
        example: {
          before: "لَمْ يَسْع",
          highlight: "َ",
          after: "",
        },
        meaning: "Dia tidak berusaha.",
        explanation:
          "Asalnya ialah يَسْعَى. Alif maqsurah digugurkan apabila fi‘il tersebut menjadi majzum.",
      },
    ],
  },

  {
    id: 5,
    type: "lesson",
    title: "Pengguguran Nun",
    arabic: "حَذْفُ النُّونِ",
    explanation:
      "Nun digugurkan sebagai tanda jazm bagi af‘al al-khamsah.",
    examples: [
      {
        id: "alif-ithnain",
        label: "Alif Ithnain",
        arabic: "أَلِفُ الِاثْنَيْنِ",
        example: {
          before: "لَمْ يَكْتُب",
          highlight: "َا",
          after: "",
        },
        meaning: "Mereka berdua tidak menulis.",
        explanation:
          "Asalnya ialah يَكْتُبَانِ. Nun digugurkan sebagai tanda jazm.",
      },

      {
        id: "waw-jamaah",
        label: "Waw Jama‘ah",
        arabic: "وَاوُ الْجَمَاعَةِ",
        example: {
          before: "لَمْ يَكْتُب",
          highlight: "ُوا",
          after: "",
        },
        meaning: "Mereka tidak menulis.",
        explanation:
          "Asalnya ialah يَكْتُبُونَ. Nun digugurkan sebagai tanda jazm.",
      },

      {
        id: "ya-mukhatabah",
        label: "Ya Mukhatabah",
        arabic: "يَاءُ الْمُخَاطَبَةِ",
        example: {
          before: "لَمْ تَكْتُب",
          highlight: "ِي",
          after: "",
        },
        meaning: "Kamu perempuan tidak menulis.",
        explanation:
          "Asalnya ialah تَكْتُبِينَ. Nun digugurkan sebagai tanda jazm.",
      },
    ],
  },

  {
    id: 6,
    type: "summary",
    title: "Ringkasan Tanda Jazm",
    arabic: "خُلَاصَةُ عَلَامَاتِ الْجَزْمِ",
    summaryItems: [
      {
        sign: "السُّكُونُ",
        use: "Fi‘il mudhari‘ yang sahih pada huruf akhirnya.",
      },
      {
        sign: "حَذْفُ حَرْفِ الْعِلَّةِ",
        use: "Fi‘il mudhari‘ yang mu‘tal pada huruf akhirnya.",
      },
      {
        sign: "حَذْفُ النُّونِ",
        use: "Af‘al al-khamsah.",
      },
   ],
  },
  {
  id: 7,
  type: "complete",
  arabic: "أَحْسَنْتَ",
  title: "Tahniah",
  message:
    "Anda telah selesai membaca Kitab Mansubat.",
},
];