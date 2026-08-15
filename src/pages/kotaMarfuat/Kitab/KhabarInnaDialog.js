const khabarInnaDialog = [
  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 5,
    text: "السلام عليكم ورحمة الله وبركاته",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 12,
    text:
      "Selamat datang, {player}. Sekarang kita akan mempelajari خبر إنّ.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 20,
    text:
      "Guru, apakah yang dimaksudkan dengan خبر إنّ?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 28,
    text:
      "خبر إنّ هو الاسم المرفوع الذي يتمم معنى الجملة بعد إنّ. Khabar إنّ ialah isim yang berada dalam keadaan marfu' dan menyempurnakan makna ayat.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 36,
    text:
      "Jadi خبر إنّ berada dalam keadaan marfu'?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 44,
    text:
      "Benar. Apabila إنّ masuk ke dalam jumlah ismiyyah, اسم إنّ menjadi mansub manakala خبر إنّ kekal dalam keadaan marfu'.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 54,
    title: "Contoh خبر إنّ",
    before: "إِنَّ مُحَمَّدًا",
    word: "مُجْتَهِد",
    ending: "ٌ",
    text:
      "Perhatikan ayat إِنَّ مُحَمَّدًا مُجْتَهِدٌ. مُحَمَّدًا ialah اسم إنّ manakala مُجْتَهِدٌ ialah خبر إنّ.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 62,
    text:
      "Saya faham. مُجْتَهِدٌ menjadi خبر إنّ dan hukumnya marfu'.",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 70,
    text:
      "Bagus. Ingat bahawa tanda asal رفع bagi خبر إنّ ialah dhammah.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 78,
    title: "Tanda رفع",
    before: "إِنَّ الطَّالِبَ",
    word: "مُجْتَهِد",
    ending: "ٌ",
    text:
      "Dalam ayat إِنَّ الطَّالِبَ مُجْتَهِدٌ, tanda رفع pada خبر إنّ ialah dhammah.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 86,
    text:
      "Jadi اسم إنّ منصوب dan خبر إنّ مرفوع?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 94,
    text:
      "Tepat. Ingat: إِنَّ تنصب الاسم وترفع الخبر.",
  },

  {
    type: "summary",
    speaker: "guru",
    progress: 100,
    title: "Tahniah!",
    text:
      "Bagus, {player}. Kamu telah memahami bahawa خبر إنّ ialah isim yang marfu' dan menyempurnakan makna ayat selepas إنّ.",
  },
];

export default khabarInnaDialog;