export const marfuPages = [
  {
    id: 1,
    type: "cover",

    arabic: "بَابُ الْمَرْفُوعَاتِ",
    title: "Kitab Marfu‘at",

    subtitle:
      "Mempelajari tanda-tanda Rafa‘ dalam ilmu Nahu.",
  },

  {
    id: 2,
    type: "matan",

    arabic: "لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ",
    title: "Empat Tanda Rafa‘",

    explanation:
      "Rafa‘ mempunyai empat tanda utama.",

    signs: [
      "الضَّمَّةُ",
      "الْوَاوُ",
      "الْأَلِفُ",
      "النُّونُ",
    ],
  },

  {
    id: 3,
    type: "lesson",

    arabic: "الضَّمَّةُ",
    title: "Tanda Pertama",

    explanation:
      "Dhammah ialah tanda asal Rafa‘. Digunakan pada tiga keadaan utama.",

    examples: [
      {
        id: "isim-mufrad",
        label: "Isim Mufrad",

        sentenceParts: [
          {
            text: "جَاءَ مُحَمَّد",
          },
          {
            text: "ٌ",
            highlight: true,
          },
        ],

        categoryArabic:
          "الِاسْمُ الْمُفْرَدُ",

        description:
          "Isim Mufrad dirafa‘ dengan dhammah.",
      },

      {
        id: "jamak-taksir",
        label: "Jamak Taksir",

        sentenceParts: [
          {
            text: "حَضَرَ الرِّجَال",
          },
          {
            text: "ُ",
            highlight: true,
          },
        ],

        categoryArabic:
          "جَمْعُ التَّكْسِيرِ",

        description:
          "Jamak Taksir dirafa‘ dengan dhammah.",
      },

      {
        id: "jamak-muannath-salim",
        label: "Jamak Muannath Salim",

        sentenceParts: [
          {
            text: "حَضَرَتْ المُسْلِمَات",
          },
          {
            text: "ُ",
            highlight: true,
          },
        ],

        categoryArabic:
          "جَمْعُ الْمُؤَنَّثِ السَّالِمِ",

        description:
          "Jamak Muannath Salim dirafa‘ dengan dhammah.",
      },
    ],
  },

  {
    id: 4,
    type: "lesson",

    arabic: "الْوَاوُ",
    title: "Tanda Kedua",

    explanation:
      "Wau menjadi tanda Rafa‘ pada dua keadaan.",

    examples: [
      {
        id: "jamak-muzakkar-salim",
        label: "Jamak Muzakkar Salim",

        sentenceParts: [
          {
            text: "حَضَرَ الْمُسْلِم",
          },
          {
            text: "و",
            highlight: true,
          },
          {
            text: "نَ",
          },
        ],

        categoryArabic:
          "جَمْعُ الْمُذَكَّرِ السَّالِمِ",

        description:
          "Jamak Muzakkar Salim dirafa‘ dengan wau.",
      },

      {
        id: "asma-khamsah",
        label: "Al-Asma’ al-Khamsah",

        sentenceParts: [
          {
            text: "جَاءَ أَبُ",
          },
          {
            text: "و",
            highlight: true,
          },
          {
            text: "كَ",
          },
        ],

        categoryArabic:
          "الْأَسْمَاءُ الْخَمْسَةُ",

        description:
          "Al-Asma’ al-Khamsah dirafa‘ dengan wau.",
      },
    ],
  },

  {
    id: 5,
    type: "lesson",

    arabic: "الْأَلِفُ",
    title: "Tanda Ketiga",

    explanation:
      "Alif menjadi tanda Rafa‘ bagi Muthanna.",

    examples: [
      {
        id: "muthanna",
        label: "Muthanna",

        sentenceParts: [
          {
            text: "جَاءَ الطَّالِب",
          },
          {
            text: "ا",
            highlight: true,
          },
          {
            text: "نِ",
          },
        ],

        categoryArabic:
          "الْمُثَنَّى",

        description:
          "Muthanna dirafa‘ dengan alif.",
      },
    ],
  },

  {
    id: 6,
    type: "lesson",

    arabic: "النُّونُ",
    title: "Tanda Keempat",

    explanation:
      "Kekalnya nun menjadi tanda Rafa‘ bagi Af‘al Khamsah.",

    examples: [
      {
        id: "afal-khamsah",
        label: "Af‘al Khamsah",

        sentenceParts: [
          {
            text: "هُمْ يَكْتُبُو",
          },
          {
            text: "ن",
            highlight: true,
          },
          {
            text: "َ",
          },
        ],

        categoryArabic:
          "الْأَفْعَالُ الْخَمْسَةُ",

        description:
          "Af‘al Khamsah dirafa‘ dengan kekalnya nun.",
      },
    ],
  },

  {
    id: 7,
    type: "summary",

    arabic: "خُلَاصَةُ الدَّرْسِ",
    title: "Ringkasan",

    signs: [
      {
        arabic: "الضَّمَّةُ",
        malay: "Dhammah",
      },
      {
        arabic: "الْوَاوُ",
        malay: "Wau",
      },
      {
        arabic: "الْأَلِفُ",
        malay: "Alif",
      },
      {
        arabic: "النُّونُ",
        malay: "Nun",
      },
    ],
  },

  {
    id: 8,
    type: "finish",

    arabic: "أَحْسَنْتَ",
    title: "Tahniah",

    message:
      "Anda telah selesai membaca Kitab Marfu‘at.",

    button:
      "Kembali ke Perpustakaan",
  },
];