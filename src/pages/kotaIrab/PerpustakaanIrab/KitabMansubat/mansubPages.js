export const mansubPages = [
  {
    id: 1,
    type: "cover",
    kitabNumber: "كِتَابٌ ٢",
    arabic: "الْمَنْصُوبَاتُ",
    title: "Kitab Mansubat",
    subtitle:
      "Mengenali perkataan-perkataan yang berada dalam keadaan nasab serta tanda-tandanya.",
  },

  {
    id: 2,
    type: "matan",
    arabic: "عَلَامَاتُ النَّصْبِ",
    title: "Tanda-tanda Nasab",

    matan:
      "وَلِلنَّصْبِ خَمْسُ عَلَامَاتٍ: الْفَتْحَةُ، وَالْأَلِفُ، وَالْكَسْرَةُ، وَالْيَاءُ، وَحَذْفُ النُّونِ.",

    explanation:
      "Nasab mempunyai lima tanda, iaitu fathah, alif, kasrah, ya dan pengguguran nun.",

    signs: [
      "الْفَتْحَةُ",
      "الْأَلِفُ",
      "الْكَسْرَةُ",
      "الْيَاءُ",
      "حَذْفُ النُّونِ",
    ],
  },

  {
    id: 3,
    type: "lesson",
    title: "Fathah",
    arabic: "الْفَتْحَةُ",

    explanation:
      "Fathah menjadi tanda asal bagi nasab.",

    examples: [
      {
        id: "isim-mufrad",
        label: "Isim Mufrad",
        arabic: "الِاسْمُ الْمُفْرَدُ",

        example: {
          before: "رَأَيْتُ مُحَمَّد",
          highlight: "ًا",
          after: "",
        },

        meaning: "Aku melihat Muhammad.",

        explanation:
          "Perkataan مُحَمَّدًا berada dalam keadaan nasab kerana menjadi maf‘ul bih. Tanda nasabnya ialah fathah.",
      },

      {
        id: "jamak-taksir",
        label: "Jamak Taksir",
        arabic: "جَمْعُ التَّكْسِيرِ",

        example: {
          before: "رَأَيْتُ الرِّجَال",
          highlight: "َ",
          after: "",
        },

        meaning: "Aku melihat para lelaki.",

        explanation:
          "Perkataan الرِّجَالَ ialah jamak taksir yang mansub. Tanda nasabnya ialah fathah.",
      },

      {
        id: "fiil-mudhari",
        label: "Fi‘il Mudhari‘",
        arabic: "الْفِعْلُ الْمُضَارِعُ",

        example: {
          before: "لَنْ يَذْهَب",
          highlight: "َ",
          after: "",
        },

        meaning: "Dia tidak akan pergi.",

        explanation:
          "Fi‘il mudhari‘ menjadi mansub selepas لَنْ. Tanda nasabnya ialah fathah.",
      },
    ],
  },

  {
    id: 4,
    type: "lesson",
    title: "Alif",
    arabic: "الْأَلِفُ",

    explanation:
      "Alif menjadi tanda nasab bagi al-asma’ al-khamsah.",

    examples: [
      {
        id: "asma-khamsah",
        label: "Al-Asma’ al-Khamsah",
        arabic: "الْأَسْمَاءُ الْخَمْسَةُ",

        example: {
          before: "رَأَيْتُ أَب",
          highlight: "َا",
          after: "كَ",
        },

        meaning: "Aku melihat ayahmu.",

        explanation:
          "Perkataan أَبَاكَ ialah salah satu daripada al-asma’ al-khamsah. Tanda nasabnya ialah alif.",
      },

      {
        id: "akha",
        label: "Contoh أَخٌ",
        arabic: "مِثَالُ أَخٍ",

        example: {
          before: "زُرْتُ أَخ",
          highlight: "َا",
          after: "كَ",
        },

        meaning: "Aku menziarahi saudaramu.",

        explanation:
          "Perkataan أَخَاكَ mansub dengan alif kerana termasuk dalam al-asma’ al-khamsah.",
      },
    ],
  },

  {
    id: 5,
    type: "lesson",
    title: "Kasrah",
    arabic: "الْكَسْرَةُ",

    explanation:
      "Kasrah menjadi tanda nasab bagi jamak muannath salim.",

    examples: [
      {
        id: "jamak-muannath-salim",
        label: "Jamak Muannath Salim",
        arabic: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",

        example: {
          before: "رَأَيْتُ الْمُسْلِمَات",
          highlight: "ِ",
          after: "",
        },

        meaning: "Aku melihat para Muslimah.",

        explanation:
          "Perkataan الْمُسْلِمَاتِ ialah jamak muannath salim. Tanda nasabnya ialah kasrah sebagai ganti kepada fathah.",
      },

      {
        id: "talibat",
        label: "Contoh Pelajar Perempuan",
        arabic: "مِثَالُ الطَّالِبَاتِ",

        example: {
          before: "كَرَّمَ الْمُعَلِّمُ الطَّالِبَات",
          highlight: "ِ",
          after: "",
        },

        meaning:
          "Guru memuliakan para pelajar perempuan.",

        explanation:
          "Perkataan الطَّالِبَاتِ menjadi maf‘ul bih dan tanda nasabnya ialah kasrah.",
      },
    ],
  },

  {
    id: 6,
    type: "lesson",
    title: "Ya",
    arabic: "الْيَاءُ",

    explanation:
      "Ya menjadi tanda nasab bagi isim muthanna dan jamak muzakkar salim.",

    examples: [
      {
        id: "muthanna",
        label: "Isim Muthanna",
        arabic: "الْمُثَنَّى",

        example: {
          before: "رَأَيْتُ الطَّالِب",
          highlight: "َيْ",
          after: "نِ",
        },

        meaning: "Aku melihat dua orang pelajar.",

        explanation:
          "Perkataan الطَّالِبَيْنِ ialah isim muthanna yang mansub. Tanda nasabnya ialah ya.",
      },

      {
        id: "jamak-muzakkar-salim",
        label: "Jamak Muzakkar Salim",
        arabic: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",

        example: {
          before: "رَأَيْتُ الْمُعَلِّم",
          highlight: "ِي",
          after: "نَ",
        },

        meaning: "Aku melihat para guru lelaki.",

        explanation:
          "Perkataan الْمُعَلِّمِينَ ialah jamak muzakkar salim yang mansub. Tanda nasabnya ialah ya.",
      },
    ],
  },

  {
    id: 7,
    type: "lesson",
    title: "Pengguguran Nun",
    arabic: "حَذْفُ النُّونِ",

    explanation:
      "Nun digugurkan sebagai tanda nasab bagi af‘al al-khamsah.",

    examples: [
      {
        id: "alif-ithnain",
        label: "Alif Ithnain",
        arabic: "أَلِفُ الِاثْنَيْنِ",

        example: {
          before: "لَنْ يَكْتُب",
          highlight: "َا",
          after: "",
        },

        meaning: "Mereka berdua tidak akan menulis.",

        explanation:
          "Asalnya يَكْتُبَانِ. Nun digugurkan selepas masuk لَنْ.",
      },

      {
        id: "waw-jamaah",
        label: "Waw Jama‘ah",
        arabic: "وَاوُ الْجَمَاعَةِ",

        example: {
          before: "لَنْ يَكْتُب",
          highlight: "ُوا",
          after: "",
        },

        meaning: "Mereka tidak akan menulis.",

        explanation:
          "Asalnya يَكْتُبُونَ. Nun digugurkan sebagai tanda nasab.",
      },

      {
        id: "ya-mukhatabah",
        label: "Ya Mukhatabah",
        arabic: "يَاءُ الْمُخَاطَبَةِ",

        example: {
          before: "لَنْ تَكْتُب",
          highlight: "ِي",
          after: "",
        },

        meaning:
          "Kamu perempuan tidak akan menulis.",

        explanation:
          "Asalnya تَكْتُبِينَ. Nun digugurkan selepas masuk huruf nasab.",
      },
    ],
  },

  {
    id: 8,
    type: "summary",
    title: "Ringkasan Tanda Nasab",
    arabic: "خُلَاصَةُ عَلَامَاتِ النَّصْبِ",

    
    summaryItems: [
      {
        sign: "الْفَتْحَةُ",
        use: "Isim mufrad, jamak taksir dan fi‘il mudhari‘.",
      },
      {
        sign: "الْأَلِفُ",
        use: "Al-asma’ al-khamsah.",
      },
      {
        sign: "الْكَسْرَةُ",
        use: "Jamak muannath salim.",
      },
      {
        sign: "الْيَاءُ",
        use: "Isim muthanna dan jamak muzakkar salim.",
      },
      {
        sign: "حَذْفُ النُّونِ",
        use: "Af‘al al-khamsah.",
      },
    ],
  },
  {
  id: 9,
  type: "complete",
  arabic: "أَحْسَنْتَ",
  title: "Tahniah",
  message:
    "Anda telah selesai membaca Kitab Mansubat.",
},
];