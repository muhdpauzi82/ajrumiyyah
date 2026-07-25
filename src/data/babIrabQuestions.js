export const babIrabQuestions = [
  // =====================================================
  // FASA 1 — ASAS I'RAB
  // =====================================================

  {
    id: 1,
    category: "asas",
    question: "I'rab berlaku pada bahagian mana?",
    display: "مُحَمَّدٌ",
    options: [
      "Awal kalimah",
      "Tengah kalimah",
      "Akhir kalimah",
    ],
    answer: "Akhir kalimah",
    explain:
      "I'rab ialah perubahan yang berlaku pada akhir kalimah.",
  },

  {
    id: 2,
    category: "asas",
    question: "Apakah maksud asas I'rab?",
    display: "الإِعْرَابُ",
    options: [
      "Perubahan awal kalimah",
      "Perubahan akhir kalimah",
      "Perubahan seluruh ayat",
    ],
    answer: "Perubahan akhir kalimah",
    explain:
      "I'rab bermaksud perubahan pada akhir kalimah.",
  },

  {
    id: 3,
    category: "asas",
    question:
      "Dalam contoh berikut, apakah yang berubah?",
    display: "مُحَمَّدٌ ← مُحَمَّدًا ← مُحَمَّدٍ",
    options: [
      "Nama Muhammad",
      "Akhir kalimah",
      "Bilangan huruf",
    ],
    answer: "Akhir kalimah",
    explain:
      "Huruf asal مُحَمَّد kekal. Yang berubah ialah tanda pada akhirnya.",
  },

  {
    id: 4,
    category: "asas",
    question:
      "Adakah huruf asal kalimah ini berubah?",
    display: "زَيْدٌ ← زَيْدًا ← زَيْدٍ",
    options: [
      "Ya, semua huruf berubah",
      "Tidak, hanya akhirnya berubah",
      "Ya, huruf pertama berubah",
    ],
    answer: "Tidak, hanya akhirnya berubah",
    explain:
      "Huruf ز ي د kekal. Perubahan berlaku pada akhir kalimah.",
  },

  {
    id: 5,
    category: "asas",
    question:
      "Apakah yang perlu diperhatikan untuk mengenal I'rab?",
    display: "آخِرُ الْكَلِمَةِ",
    options: [
      "Huruf pertama",
      "Akhir kalimah",
      "Panjang perkataan",
    ],
    answer: "Akhir kalimah",
    explain:
      "Untuk mengenal I'rab, perhatikan tanda pada akhir kalimah.",
  },

  // =====================================================
  // FASA 2 — NAMA ORANG
  // =====================================================

  {
    id: 6,
    category: "nama",
    vocabulary: {
      arabic: "زَيْدٌ",
      meaning: "Zaid",
    },
    question:
      "Yang manakah menunjukkan perubahan akhir dengan dhammah?",
    display: "زَيْد",
    options: ["زَيْدٌ", "زَيْدًا", "زَيْدٍ"],
    answer: "زَيْدٌ",
    explain:
      "زَيْدٌ mempunyai dhammah pada akhirnya.",
  },

  {
    id: 7,
    category: "nama",
    vocabulary: {
      arabic: "خَالِدٌ",
      meaning: "Khalid",
    },
    question:
      "Yang manakah menunjukkan perubahan akhir dengan fathah?",
    display: "خَالِد",
    options: ["خَالِدٍ", "خَالِدٌ", "خَالِدًا"],
    answer: "خَالِدًا",
    explain:
      "خَالِدًا mempunyai fathah pada akhirnya.",
  },

  {
    id: 8,
    category: "nama",
    vocabulary: {
      arabic: "عَلِيٌّ",
      meaning: "Ali",
    },
    question:
      "Yang manakah menunjukkan perubahan akhir dengan kasrah?",
    display: "عَلِيّ",
    options: ["عَلِيًّا", "عَلِيٍّ", "عَلِيٌّ"],
    answer: "عَلِيٍّ",
    explain:
      "عَلِيٍّ mempunyai kasrah pada akhirnya.",
  },

  {
    id: 9,
    category: "nama",
    vocabulary: {
      arabic: "عُمَرُ",
      meaning: "Umar",
    },
    question:
      "Dalam perubahan berikut, bahagian manakah yang berubah?",
    display: "عُمَرُ ← عُمَرَ",
    options: [
      "Huruf pertama",
      "Akhir kalimah",
      "Semua huruf",
    ],
    answer: "Akhir kalimah",
    explain:
      "Kalimah عُمَر kekal. Tanda pada akhirnya sahaja berubah.",
  },

  {
    id: 10,
    category: "nama",
    vocabulary: {
      arabic: "يُوسُفُ",
      meaning: "Yusuf",
    },
    question:
      "Apakah yang kekal dalam perubahan berikut?",
    display: "يُوسُفُ ← يُوسُفَ",
    options: [
      "Huruf asal kalimah",
      "Tanda akhir",
      "Baris terakhir",
    ],
    answer: "Huruf asal kalimah",
    explain:
      "Huruf يُوسُف kekal, tetapi tanda akhirnya berubah.",
  },

  // =====================================================
  // FASA 3 — HAIWAN
  // =====================================================

  {
    id: 11,
    category: "haiwan",
    vocabulary: {
      arabic: "أَسَدٌ",
      meaning: "Singa",
    },
    question:
      "Pilih kalimah أَسَد yang berakhir dengan dhammah.",
    display: "أَسَدٌ — Singa",
    options: ["أَسَدًا", "أَسَدٍ", "أَسَدٌ"],
    answer: "أَسَدٌ",
    explain:
      "أَسَدٌ bermaksud singa dan berakhir dengan dhammah.",
  },

  {
    id: 12,
    category: "haiwan",
    vocabulary: {
      arabic: "جَمَلٌ",
      meaning: "Unta",
    },
    question:
      "Pilih kalimah جَمَل yang berakhir dengan fathah.",
    display: "جَمَلٌ — Unta",
    options: ["جَمَلٌ", "جَمَلًا", "جَمَلٍ"],
    answer: "جَمَلًا",
    explain:
      "جَمَلًا berakhir dengan fathah.",
  },

  {
    id: 13,
    category: "haiwan",
    vocabulary: {
      arabic: "حِصَانٌ",
      meaning: "Kuda",
    },
    question:
      "Pilih kalimah حِصَان yang berakhir dengan kasrah.",
    display: "حِصَانٌ — Kuda",
    options: ["حِصَانٍ", "حِصَانًا", "حِصَانٌ"],
    answer: "حِصَانٍ",
    explain:
      "حِصَانٍ berakhir dengan kasrah.",
  },

  {
    id: 14,
    category: "haiwan",
    vocabulary: {
      arabic: "قِطٌّ",
      meaning: "Kucing",
    },
    question:
      "Dalam perubahan berikut, apakah yang tidak berubah?",
    display: "قِطٌّ ← قِطًّا ← قِطٍّ",
    options: [
      "Huruf asal قِطّ",
      "Tanda akhir",
      "Baris akhir",
    ],
    answer: "Huruf asal قِطّ",
    explain:
      "Huruf asal kalimah قِطّ kekal. Yang berubah ialah akhirnya.",
  },

  {
    id: 15,
    category: "haiwan",
    vocabulary: {
      arabic: "طَائِرٌ",
      meaning: "Burung",
    },
    question:
      "Apakah maksud kalimah طَائِرٌ?",
    display: "طَائِرٌ",
    options: ["Burung", "Kuda", "Singa"],
    answer: "Burung",
    explain:
      "طَائِرٌ bermaksud burung. Perhatikan juga dhammah pada akhirnya.",
  },

  // =====================================================
  // FASA 4 — TEMPAT
  // =====================================================

  {
    id: 16,
    category: "tempat",
    vocabulary: {
      arabic: "مَسْجِدٌ",
      meaning: "Masjid",
    },
    question:
      "Pilih bentuk مَسْجِد yang berakhir dengan dhammah.",
    display: "مَسْجِدٌ — Masjid",
    options: ["مَسْجِدًا", "مَسْجِدٌ", "مَسْجِدٍ"],
    answer: "مَسْجِدٌ",
    explain:
      "مَسْجِدٌ berakhir dengan dhammah.",
  },

  {
    id: 17,
    category: "tempat",
    vocabulary: {
      arabic: "بَيْتٌ",
      meaning: "Rumah",
    },
    question:
      "Pilih bentuk بَيْت yang berakhir dengan fathah.",
    display: "بَيْتٌ — Rumah",
    options: ["بَيْتٍ", "بَيْتًا", "بَيْتٌ"],
    answer: "بَيْتًا",
    explain:
      "بَيْتًا berakhir dengan fathah.",
  },

  {
    id: 18,
    category: "tempat",
    vocabulary: {
      arabic: "مَدْرَسَةٌ",
      meaning: "Sekolah",
    },
    question:
      "Pilih bentuk مَدْرَسَة yang berakhir dengan kasrah.",
    display: "مَدْرَسَةٌ — Sekolah",
    options: [
      "مَدْرَسَةً",
      "مَدْرَسَةٌ",
      "مَدْرَسَةٍ",
    ],
    answer: "مَدْرَسَةٍ",
    explain:
      "مَدْرَسَةٍ berakhir dengan kasrah.",
  },

  {
    id: 19,
    category: "tempat",
    vocabulary: {
      arabic: "سُوقٌ",
      meaning: "Pasar",
    },
    question:
      "Apakah maksud kalimah سُوقٌ?",
    display: "سُوقٌ",
    options: ["Sekolah", "Pasar", "Taman"],
    answer: "Pasar",
    explain:
      "سُوقٌ bermaksud pasar. Kalimah ini berakhir dengan dhammah.",
  },

  {
    id: 20,
    category: "tempat",
    vocabulary: {
      arabic: "حَدِيقَةٌ",
      meaning: "Taman",
    },
    question:
      "Dalam perubahan berikut, apakah yang berubah?",
    display: "حَدِيقَةٌ ← حَدِيقَةً ← حَدِيقَةٍ",
    options: [
      "Akhir kalimah",
      "Huruf pertama",
      "Bilangan huruf",
    ],
    answer: "Akhir kalimah",
    explain:
      "حَدِيقَة bermaksud taman. Tanda pada akhirnya berubah.",
  },

  // =====================================================
  // FASA 5 — BENDA
  // =====================================================

  {
    id: 21,
    category: "benda",
    vocabulary: {
      arabic: "كِتَابٌ",
      meaning: "Buku",
    },
    question:
      "Pilih bentuk كِتَاب yang berakhir dengan dhammah.",
    display: "كِتَابٌ — Buku",
    options: ["كِتَابٍ", "كِتَابٌ", "كِتَابًا"],
    answer: "كِتَابٌ",
    explain:
      "كِتَابٌ bermaksud buku dan berakhir dengan dhammah.",
  },

  {
    id: 22,
    category: "benda",
    vocabulary: {
      arabic: "قَلَمٌ",
      meaning: "Pen",
    },
    question:
      "Pilih bentuk قَلَم yang berakhir dengan fathah.",
    display: "قَلَمٌ — Pen",
    options: ["قَلَمًا", "قَلَمٍ", "قَلَمٌ"],
    answer: "قَلَمًا",
    explain:
      "قَلَمًا berakhir dengan fathah.",
  },

  {
    id: 23,
    category: "benda",
    vocabulary: {
      arabic: "بَابٌ",
      meaning: "Pintu",
    },
    question:
      "Pilih bentuk بَاب yang berakhir dengan kasrah.",
    display: "بَابٌ — Pintu",
    options: ["بَابٌ", "بَابًا", "بَابٍ"],
    answer: "بَابٍ",
    explain:
      "بَابٍ berakhir dengan kasrah.",
  },

  {
    id: 24,
    category: "benda",
    vocabulary: {
      arabic: "مِفْتَاحٌ",
      meaning: "Kunci",
    },
    question:
      "Apakah maksud kalimah مِفْتَاحٌ?",
    display: "مِفْتَاحٌ",
    options: ["Pintu", "Kunci", "Kerusi"],
    answer: "Kunci",
    explain:
      "مِفْتَاحٌ bermaksud kunci.",
  },

  {
    id: 25,
    category: "benda",
    vocabulary: {
      arabic: "كُرْسِيٌّ",
      meaning: "Kerusi",
    },
    question:
      "Apakah yang berubah dalam contoh berikut?",
    display: "كُرْسِيٌّ ← كُرْسِيًّا ← كُرْسِيٍّ",
    options: [
      "Akhir kalimah",
      "Huruf ك",
      "Semua huruf",
    ],
    answer: "Akhir kalimah",
    explain:
      "كُرْسِيّ bermaksud kerusi. Perubahan berlaku pada akhirnya.",
  },

  // =====================================================
  // FASA 6 — CAMPURAN DAN RUMUSAN
  // =====================================================

  {
    id: 26,
    category: "campuran",
    question:
      "Yang manakah mempunyai dhammah pada akhir?",
    display: "اخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ",
    options: ["مَسْجِدٍ", "أَسَدٌ", "قَلَمًا"],
    answer: "أَسَدٌ",
    explain:
      "أَسَدٌ mempunyai dhammah pada akhirnya.",
  },

  {
    id: 27,
    category: "campuran",
    question:
      "Yang manakah mempunyai fathah pada akhir?",
    display: "اخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ",
    options: ["بَيْتًا", "كِتَابٌ", "حِصَانٍ"],
    answer: "بَيْتًا",
    explain:
      "بَيْتًا mempunyai fathah pada akhirnya.",
  },

  {
    id: 28,
    category: "campuran",
    question:
      "Yang manakah mempunyai kasrah pada akhir?",
    display: "اخْتَرِ الْكَلِمَةَ الصَّحِيحَةَ",
    options: ["طَائِرٌ", "مَدْرَسَةٍ", "جَمَلًا"],
    answer: "مَدْرَسَةٍ",
    explain:
      "مَدْرَسَةٍ mempunyai kasrah pada akhirnya.",
  },

  {
    id: 29,
    category: "campuran",
    question:
      "Manakah pasangan kalimah dan maksud yang betul?",
    display: "مُفْرَدَاتٌ",
    options: [
      "مِفْتَاحٌ — Kunci",
      "حَدِيقَةٌ — Buku",
      "أَسَدٌ — Sekolah",
    ],
    answer: "مِفْتَاحٌ — Kunci",
    explain:
      "مِفْتَاحٌ bermaksud kunci.",
  },

  {
    id: 30,
    category: "campuran",
    question:
      "Pilih rumusan yang paling tepat tentang I'rab.",
    display: "خُلَاصَةُ الدَّرْسِ",
    options: [
      "I'rab mengubah semua huruf kalimah",
      "I'rab ialah perubahan pada akhir kalimah",
      "I'rab menambah bilangan perkataan",
    ],
    answer: "I'rab ialah perubahan pada akhir kalimah",
    explain:
      "I'rab ialah perubahan yang berlaku pada akhir kalimah.",
  },
];