const isimKanaDialog = [
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
      "Selamat datang, {player}. Sekarang kita akan mempelajari اسم كان.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 20,
    text:
      "Guru, apakah yang dimaksudkan dengan اسم كان?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 28,
    text:
      "اسم كان هو الاسم المرفوع الذي تدخل عليه كان وأخواتها. Isim Kana ialah isim yang menjadi marfu' apabila didahului oleh كان dan saudara-saudaranya.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 36,
    text:
      "Jadi apabila كان masuk ke dalam jumlah ismiyyah, Mubtada' menjadi اسم كان dan kekal dalam keadaan marfu'?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 44,
    text:
      "Benar. كان dan saudara-saudaranya masuk ke atas jumlah ismiyyah. Mubtada' menjadi اسم كان dan hukumnya tetap marfu', manakala Khabar menjadi خبر كان dan hukumnya mansub.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 54,
    title: "Contoh اسم كان",
    before: "كَانَ",
    word: "زَيْد",
    ending: "ٌ",
    text:
      "Perhatikan ayat كَانَ زَيْدٌ قَائِمًا. زَيْدٌ ialah اسم كان kerana menjadi isim yang datang selepas كان dan hukumnya marfu'.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 62,
    text:
      "Saya nampak. زَيْدٌ masih mempunyai dhammah walaupun كان sudah masuk ke dalam ayat.",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 70,
    text:
      "Tepat. Itulah perkara penting yang perlu kamu ingat. اسم كان sentiasa berada dalam keadaan marfu'.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 78,
    title: "Tanda رفع",
    before: "كَانَ",
    word: "زَيْد",
    ending: "ٌ",
    text:
      "Dalam ayat كَانَ زَيْدٌ قَائِمًا, tanda رفع pada زَيْدٌ ialah dhammah.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 86,
    text:
      "Jadi اسم كان ialah isim marfu' selepas كان dan saudara-saudaranya?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 94,
    text:
      "Tepat. Ingat: اسم كان وأخواتها مرفوعٌ، وخبرها منصوبٌ.",
  },

  {
    type: "summary",
    speaker: "guru",
    progress: 100,
    title: "Tahniah!",
    text:
      "Bagus, {player}. Kamu telah memahami asas اسم كان. Ingat bahawa اسم كان berada dalam keadaan marfu', manakala خبر كان berada dalam keadaan mansub.",
  },
];

export default isimKanaDialog;