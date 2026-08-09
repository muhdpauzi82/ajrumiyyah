export const babIrabQuestions = [
  // =====================================================
  // FASA 1 — PENGENALAN I'RAB
  // =====================================================

  {
    id: 1,
    category: "pengenalan",
    question: "Apakah maksud I'rab?",
    display: "الإِعْرَابُ",
    options: [
      "Perubahan pada awal kalimah",
      "Perubahan pada akhir kalimah",
      "Perubahan pada semua huruf kalimah",
    ],
    answer: "Perubahan pada akhir kalimah",
    explain:
      "I'rab ialah perubahan pada akhir kalimah kerana perubahan عامل yang masuk kepadanya.",
  },

  {
    id: 2,
    category: "pengenalan",
    question: "I'rab berlaku pada bahagian mana dalam kalimah?",
    display: "آخِرُ الْكَلِمَةِ",
    options: [
      "Awal kalimah",
      "Tengah kalimah",
      "Akhir kalimah",
    ],
    answer: "Akhir kalimah",
    explain:
      "I'rab berkaitan dengan perubahan pada akhir kalimah.",
  },

  {
    id: 3,
    category: "pengenalan",
    question: "Apakah yang berubah dalam I'rab?",
    display: "تَغَيُّرُ آخِرِ الْكَلِمَةِ",
    options: [
      "Akhir kalimah",
      "Awal kalimah",
      "Bilangan huruf",
    ],
    answer: "Akhir kalimah",
    explain:
      "Perubahan I'rab berlaku pada akhir kalimah.",
  },

  {
    id: 4,
    category: "pengenalan",
    question: "Perubahan akhir kalimah berlaku kerana perubahan apa?",
    display: "بِاخْتِلَافِ الْعَوَامِلِ",
    options: [
      "Perubahan huruf",
      "Perubahan عامل",
      "Perubahan makna sahaja",
    ],
    answer: "Perubahan عامل",
    explain:
      "Dalam pengertian I'rab, perubahan akhir kalimah berlaku kerana perubahan عامل yang masuk kepadanya.",
  },

  {
    id: 5,
    category: "pengenalan",
    question: "Manakah yang merupakan contoh perubahan akhir kalimah?",
    display: "مُحَمَّدٌ ← مُحَمَّدًا ← مُحَمَّدٍ",
    options: [
      "Perubahan awal kalimah",
      "Perubahan akhir kalimah",
      "Perubahan semua huruf",
    ],
    answer: "Perubahan akhir kalimah",
    explain:
      "Huruf asal مُحَمَّد kekal. Yang berubah ialah tanda pada akhirnya.",
  },


  // =====================================================
  // FASA 2 — CONTOH PERUBAHAN I'RAB
  // =====================================================

  {
    id: 6,
    category: "perubahan",
    question: "Dalam ayat جَاءَ مُحَمَّدٌ, apakah tanda pada akhir مُحَمَّدٌ?",
    display: "جَاءَ مُحَمَّدٌ",
    options: [
      "Dhammah",
      "Fathah",
      "Kasrah",
    ],
    answer: "Dhammah",
    explain:
      "Kalimah مُحَمَّدٌ berakhir dengan dhammah.",
  },

  {
    id: 7,
    category: "perubahan",
    question: "Dalam ayat رَأَيْتُ مُحَمَّدًا, apakah tanda pada akhir مُحَمَّدًا?",
    display: "رَأَيْتُ مُحَمَّدًا",
    options: [
      "Kasrah",
      "Dhammah",
      "Fathah",
    ],
    answer: "Fathah",
    explain:
      "Kalimah مُحَمَّدًا berakhir dengan fathah.",
  },

  {
    id: 8,
    category: "perubahan",
    question: "Dalam ayat مَرَرْتُ بِمُحَمَّدٍ, apakah tanda pada akhir مُحَمَّدٍ?",
    display: "مَرَرْتُ بِمُحَمَّدٍ",
    options: [
      "Fathah",
      "Kasrah",
      "Dhammah",
    ],
    answer: "Kasrah",
    explain:
      "Kalimah مُحَمَّدٍ berakhir dengan kasrah.",
  },

  {
    id: 9,
    category: "perubahan",
    question: "Apakah huruf asal مُحَمَّد berubah dalam contoh I'rab?",
    display: "مُحَمَّدٌ ← مُحَمَّدًا ← مُحَمَّدٍ",
    options: [
      "Ya, semua huruf berubah",
      "Tidak, huruf asal kekal",
      "Ya, huruf pertama berubah",
    ],
    answer: "Tidak, huruf asal kekal",
    explain:
      "Huruf asal kalimah kekal. Perubahan berlaku pada akhirnya.",
  },

  {
    id: 10,
    category: "perubahan",
    question: "Apakah tujuan melihat baris akhir dalam contoh I'rab?",
    display: "مُحَمَّدٌ ← مُحَمَّدًا ← مُحَمَّدٍ",
    options: [
      "Untuk mengenal perubahan I'rab",
      "Untuk mengira huruf",
      "Untuk mengetahui bilangan perkataan",
    ],
    answer: "Untuk mengenal perubahan I'rab",
    explain:
      "Perubahan pada akhir kalimah membantu kita mengenal keadaan I'rab.",
  },


  // =====================================================
  // FASA 3 — EMPAT KEADAAN I'RAB
  // =====================================================

  {
    id: 11,
    category: "keadaan",
    question: "Berapakah keadaan I'rab?",
    display: "أَقْسَامُ الإِعْرَابِ",
    options: [
      "Tiga",
      "Empat",
      "Lima",
    ],
    answer: "Empat",
    explain:
      "Keadaan I'rab ada empat: رفع، نصب، خفض، dan جزم.",
  },

  {
    id: 12,
    category: "keadaan",
    question: "Manakah yang merupakan keadaan I'rab?",
    display: "حَالاتُ الإِعْرَابِ",
    options: [
      "رفع، نصب، خفض، جزم",
      "ماضٍ، مضارع، أمر",
      "اسم، فعل، حرف",
    ],
    answer: "رفع، نصب، خفض، جزم",
    explain:
      "Empat keadaan I'rab ialah رفع، نصب، خفض، dan جزم.",
  },

  {
    id: 13,
    category: "keadaan",
    question: "Apakah istilah Arab bagi keadaan رفع?",
    display: "رَفْعٌ",
    options: [
      "رَفْعٌ",
      "نَصْبٌ",
      "جَزْمٌ",
    ],
    answer: "رَفْعٌ",
    explain:
      "رفع ialah salah satu daripada empat keadaan I'rab.",
  },

  {
    id: 14,
    category: "keadaan",
    question: "Apakah istilah Arab bagi keadaan نصب?",
    display: "نَصْبٌ",
    options: [
      "خَفْضٌ",
      "نَصْبٌ",
      "رَفْعٌ",
    ],
    answer: "نَصْبٌ",
    explain:
      "نصب ialah salah satu daripada empat keadaan I'rab.",
  },

  {
    id: 15,
    category: "keadaan",
    question: "Apakah istilah Arab bagi keadaan خفض?",
    display: "خَفْضٌ",
    options: [
      "جَزْمٌ",
      "رَفْعٌ",
      "خَفْضٌ",
    ],
    answer: "خَفْضٌ",
    explain:
      "خفض ialah salah satu daripada empat keadaan I'rab.",
  },


  // =====================================================
  // FASA 4 — جَزْم DAN PEMBAHAGIAN
  // =====================================================

  {
    id: 16,
    category: "keadaan",
    question: "Apakah istilah Arab bagi keadaan جزم?",
    display: "جَزْمٌ",
    options: [
      "نَصْبٌ",
      "جَزْمٌ",
      "خَفْضٌ",
    ],
    answer: "جَزْمٌ",
    explain:
      "جزم ialah salah satu daripada empat keadaan I'rab.",
  },

  {
    id: 17,
    category: "keadaan",
    question: "Manakah pasangan yang betul?",
    display: "الإِعْرَابُ",
    options: [
      "رفع، نصب، خفض، جزم",
      "رفع، جر، أمر، نهي",
      "اسم، فعل، حرف، جملة",
    ],
    answer: "رفع، نصب، خفض، جزم",
    explain:
      "Empat keadaan I'rab ialah رفع، نصب، خفض، dan جزم.",
  },

  {
    id: 18,
    category: "pembahagian",
    question: "Menurut asas I'rab, kalimah yang menerima I'rab termasuk...",
    display: "الْمُعْرَبُ",
    options: [
      "Isim dan fi'il tertentu",
      "Semua huruf sahaja",
      "Semua kalimah tanpa pengecualian",
    ],
    answer: "Isim dan fi'il tertentu",
    explain:
      "I'rab berkaitan dengan isim dan fi'il yang menerima perubahan akhir.",
  },

  {
    id: 19,
    category: "pembahagian",
    question: "Adakah semua kalimah menerima I'rab?",
    display: "الإِعْرَابُ",
    options: [
      "Ya, semua kalimah",
      "Tidak, bukan semua kalimah",
      "Hanya huruf menerima I'rab",
    ],
    answer: "Tidak, bukan semua kalimah",
    explain:
      "Tidak semua kalimah menerima I'rab.",
  },

  {
    id: 20,
    category: "pembahagian",
    question: "Apakah yang menjadi perhatian utama ketika mempelajari I'rab?",
    display: "آخِرُ الْكَلِمَةِ",
    options: [
      "Akhir kalimah",
      "Panjang kalimah",
      "Bilangan huruf sahaja",
    ],
    answer: "Akhir kalimah",
    explain:
      "Asas I'rab ialah memahami perubahan pada akhir kalimah.",
  },


  // =====================================================
  // FASA 5 — MEMBEZAKAN KEADAAN
  // =====================================================

  {
    id: 21,
    category: "aplikasi",
    question: "مُحَمَّدٌ menunjukkan keadaan apa?",
    display: "مُحَمَّدٌ",
    options: [
      "رفع",
      "نصب",
      "خفض",
    ],
    answer: "رفع",
    explain:
      "Dhammah pada akhir مُحَمَّدٌ menunjukkan keadaan رفع dalam contoh asas ini.",
  },

  {
    id: 22,
    category: "aplikasi",
    question: "مُحَمَّدًا menunjukkan keadaan apa?",
    display: "مُحَمَّدًا",
    options: [
      "خفض",
      "نصب",
      "رفع",
    ],
    answer: "نصب",
    explain:
      "Fathah pada akhir مُحَمَّدًا menunjukkan keadaan نصب dalam contoh asas ini.",
  },

  {
    id: 23,
    category: "aplikasi",
    question: "مُحَمَّدٍ menunjukkan keadaan apa?",
    display: "مُحَمَّدٍ",
    options: [
      "نصب",
      "جزم",
      "خفض",
    ],
    answer: "خفض",
    explain:
      "Kasrah pada akhir مُحَمَّدٍ menunjukkan keadaan خفض dalam contoh asas ini.",
  },

  {
    id: 24,
    category: "aplikasi",
    question: "Manakah susunan perubahan yang betul?",
    display: "مُحَمَّدٌ ← ؟ ← ؟",
    options: [
      "مُحَمَّدًا ← مُحَمَّدٍ",
      "مُحَمَّدٍ ← مُحَمَّدًا",
      "مُحَمَّدُ ← مُحَمَّدَ",
    ],
    answer: "مُحَمَّدًا ← مُحَمَّدٍ",
    explain:
      "Contoh asas perubahan ialah مُحَمَّدٌ، مُحَمَّدًا، مُحَمَّدٍ.",
  },

  {
    id: 25,
    category: "aplikasi",
    question: "Dalam contoh مُحَمَّدٌ، مُحَمَّدًا، مُحَمَّدٍ, apakah yang kekal?",
    display: "مُحَمَّدٌ ← مُحَمَّدًا ← مُحَمَّدٍ",
    options: [
      "Huruf asal kalimah",
      "Tanda akhir",
      "Baris akhir",
    ],
    answer: "Huruf asal kalimah",
    explain:
      "Huruf asal مُحَمَّد kekal. Perubahan berlaku pada akhir kalimah.",
  },


  // =====================================================
  // FASA 6 — RUMUSAN BAB I'RAB
  // =====================================================

  {
    id: 26,
    category: "rumusan",
    question: "Apakah perkara pertama yang perlu difahami dalam Bab I'rab?",
    display: "مَعْنَى الإِعْرَابِ",
    options: [
      "Maksud I'rab",
      "Semua tanda I'rab secara terperinci",
      "Semua jenis fi'il",
    ],
    answer: "Maksud I'rab",
    explain:
      "Pelajaran asas dimulakan dengan memahami maksud I'rab.",
  },

  {
    id: 27,
    category: "rumusan",
    question: "Apakah yang berubah dalam I'rab?",
    display: "تَغَيُّرُ آخِرِ الْكَلِمَةِ",
    options: [
      "Akhir kalimah",
      "Semua huruf kalimah",
      "Awal kalimah",
    ],
    answer: "Akhir kalimah",
    explain:
      "I'rab berkaitan dengan perubahan pada akhir kalimah.",
  },

  {
    id: 28,
    category: "rumusan",
    question: "Berapakah keadaan asas I'rab yang perlu diketahui?",
    display: "رَفْعٌ، نَصْبٌ، خَفْضٌ، جَزْمٌ",
    options: [
      "Dua",
      "Tiga",
      "Empat",
    ],
    answer: "Empat",
    explain:
      "Empat keadaan I'rab ialah رفع، نصب، خفض، dan جزم.",
  },

  {
    id: 29,
    category: "rumusan",
    question: "Manakah rumusan yang paling tepat?",
    display: "خُلَاصَةُ الإِعْرَابِ",
    options: [
      "I'rab ialah perubahan pada awal kalimah",
      "I'rab ialah perubahan pada akhir kalimah",
      "I'rab ialah perubahan semua huruf kalimah",
    ],
    answer: "I'rab ialah perubahan pada akhir kalimah",
    explain:
      "I'rab ialah perubahan yang berlaku pada akhir kalimah.",
  },

  {
    id: 30,
    category: "rumusan",
    question: "Apakah empat keadaan I'rab?",
    display: "حَالاتُ الإِعْرَابِ",
    options: [
      "رفع، نصب، خفض، جزم",
      "اسم، فعل، حرف، كلمة",
      "ماضٍ، مضارع، أمر، نهي",
    ],
    answer: "رفع، نصب، خفض، جزم",
    explain:
      "Empat keadaan I'rab ialah رفع، نصب، خفض، dan جزم.",
  },
];