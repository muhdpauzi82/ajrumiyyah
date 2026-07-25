export const majrurPages = [
  {
    id: 1,
    type: "cover",

    kitabNumber: "كِتَابٌ ٣",
    arabic: "الْمَجْرُورَاتُ",
    title: "Kitab Majrurat",

    subtitle:
      "Mengenali perkataan-perkataan yang berada dalam keadaan jar serta tanda-tandanya.",
  },

  {
    id: 2,
    type: "matan",

    arabic: "عَلَامَاتُ الْخَفْضِ",
    title: "Tanda-tanda Khafadh",

    matan:
      "وَلِلْخَفْضِ ثَلَاثُ عَلَامَاتٍ: الْكَسْرَةُ، وَالْيَاءُ، وَالْفَتْحَةُ.",

    explanation:
      "Khafadh atau jar mempunyai tiga tanda, iaitu kasrah, ya dan fathah.",

    signs: [
      "الْكَسْرَةُ",
      "الْيَاءُ",
      "الْفَتْحَةُ",
    ],
  },

  {
    id: 3,
    type: "lesson",

    title: "Kasrah",
    arabic: "الْكَسْرَةُ",

    explanation:
      "Kasrah merupakan tanda asal bagi khafadh atau jar.",

    examples: [
      {
        id: "isim-mufrad",
        label: "Isim Mufrad",
        arabic: "الِاسْمُ الْمُفْرَدُ",

        example: {
          before: "مَرَرْتُ بِمُحَمَّد",
          highlight: "ٍ",
          after: "",
        },

        meaning: "Aku melalui Muhammad.",

        explanation:
          "Perkataan مُحَمَّدٍ menjadi majrur selepas huruf jar بِ. Tanda jarnya ialah kasrah.",
      },

      {
        id: "jamak-taksir",
        label: "Jamak Taksir",
        arabic: "جَمْعُ التَّكْسِيرِ",

        example: {
          before: "مَرَرْتُ بِالرِّجَال",
          highlight: "ِ",
          after: "",
        },

        meaning: "Aku melalui para lelaki.",

        explanation:
          "Perkataan الرِّجَالِ ialah jamak taksir yang majrur. Tanda jarnya ialah kasrah.",
      },

      {
        id: "jamak-muannath-salim",
        label: "Jamak Muannath Salim",
        arabic: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",

        example: {
          before: "سَلَّمْتُ عَلَى الْمُعَلِّمَات",
          highlight: "ِ",
          after: "",
        },

        meaning:
          "Aku memberi salam kepada para guru perempuan.",

        explanation:
          "Perkataan الْمُعَلِّمَاتِ menjadi majrur selepas عَلَى. Tanda jarnya ialah kasrah.",
      },
    ],
  },

  {
    id: 4,
    type: "lesson",

    title: "Ya",
    arabic: "الْيَاءُ",

    explanation:
      "Ya menjadi tanda jar bagi isim muthanna, jamak muzakkar salim dan al-asma’ al-khamsah.",

    examples: [
      {
        id: "muthanna",
        label: "Isim Muthanna",
        arabic: "الْمُثَنَّى",

        example: {
          before: "مَرَرْتُ بِالطَّالِب",
          highlight: "َيْ",
          after: "نِ",
        },

        meaning:
          "Aku melalui dua orang pelajar.",

        explanation:
          "Perkataan الطَّالِبَيْنِ ialah isim muthanna yang majrur. Tanda jarnya ialah ya.",
      },

      {
        id: "jamak-muzakkar-salim",
        label: "Jamak Muzakkar Salim",
        arabic: "جَمْعُ الْمُذَكَّرِ السَّالِمِ",

        example: {
          before: "سَلَّمْتُ عَلَى الْمُعَلِّم",
          highlight: "ِي",
          after: "نَ",
        },

        meaning:
          "Aku memberi salam kepada para guru lelaki.",

        explanation:
          "Perkataan الْمُعَلِّمِينَ ialah jamak muzakkar salim yang majrur. Tanda jarnya ialah ya.",
      },

      {
        id: "asma-khamsah",
        label: "Al-Asma’ al-Khamsah",
        arabic: "الْأَسْمَاءُ الْخَمْسَةُ",

        example: {
          before: "مَرَرْتُ بِأَب",
          highlight: "ِي",
          after: "كَ",
        },

        meaning:
          "Aku melalui ayahmu.",

        explanation:
          "Perkataan أَبِيكَ ialah salah satu daripada al-asma’ al-khamsah. Tanda jarnya ialah ya.",
      },
    ],
  },

  {
    id: 5,
    type: "lesson",

    title: "Fathah",
    arabic: "الْفَتْحَةُ",

    explanation:
      "Fathah menjadi tanda jar bagi isim yang tidak menerima tanwin, iaitu isim mamnu‘ min al-sarf.",

    examples: [
      {
        id: "mamnu-min-sarf",
        label: "Mamnu‘ Min al-Sarf",
        arabic: "الْمَمْنُوعُ مِنَ الصَّرْفِ",

        example: {
          before: "مَرَرْتُ بِأَحْمَد",
          highlight: "َ",
          after: "",
        },

        meaning:
          "Aku melalui Ahmad.",

        explanation:
          "Perkataan أَحْمَدَ ialah isim mamnu‘ min al-sarf. Tanda jarnya ialah fathah sebagai ganti kepada kasrah.",
      },

      {
        id: "masajid",
        label: "Contoh Masajid",
        arabic: "مِثَالُ مَسَاجِدَ",

        example: {
          before: "صَلَّيْتُ فِي مَسَاجِد",
          highlight: "َ",
          after: "",
        },

        meaning:
          "Aku bersolat di beberapa buah masjid.",

        explanation:
          "Perkataan مَسَاجِدَ ialah mamnu‘ min al-sarf. Oleh itu, tanda jarnya ialah fathah.",
      },

      {
        id: "ibrahim",
        label: "Contoh Ibrahim",
        arabic: "مِثَالُ إِبْرَاهِيمَ",

        example: {
          before: "سَلَّمْتُ عَلَى إِبْرَاهِيم",
          highlight: "َ",
          after: "",
        },

        meaning:
          "Aku memberi salam kepada Ibrahim.",

        explanation:
          "Perkataan إِبْرَاهِيمَ ialah nama bukan Arab yang termasuk dalam mamnu‘ min al-sarf. Tanda jarnya ialah fathah.",
      },
    ],
  },

  {
    id: 6,
    type: "summary",

    title: "Ringkasan Tanda Jar",
    arabic: "خُلَاصَةُ عَلَامَاتِ الْخَفْضِ",

    summaryItems: [
      {
        sign: "الْكَسْرَةُ",
        use:
          "Isim mufrad, jamak taksir dan jamak muannath salim.",
      },

      {
        sign: "الْيَاءُ",
        use:
          "Isim muthanna, jamak muzakkar salim dan al-asma’ al-khamsah.",
      },

      {
        sign: "الْفَتْحَةُ",
        use:
          "Isim mamnu‘ min al-sarf.",
      },
      
    ],
  },
  {
  id: 7,
  type: "complete",
  arabic: "أَحْسَنْتَ",
  title: "Tahniah",
  message:
    "Anda telah selesai membaca Kitab Majrurat.",
}
];