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
      "Selamat datang, {player}. Sekarang kita akan mempelajari خبر إنَّ.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 20,
    text:
      "Guru, apakah yang dimaksudkan dengan خبر إنَّ?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 28,
    text:
      "خبر إنَّ هو الاسم المرفوع الذي يتم به معنى إنَّ واسمها. Khabar إنَّ ialah isim yang berada dalam keadaan marfu' dan melengkapkan makna إنَّ bersama isimnya.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 36,
    text:
      "Jadi apabila إنَّ masuk ke dalam jumlah ismiyyah, Mubtada' menjadi اسم إنَّ dan Khabar menjadi خبر إنَّ?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 44,
    text:
      "Benar. إنَّ dan saudara-saudaranya menasabkan isimnya dan merafakkan khabarnya.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 54,
    title: "Contoh خبر إنَّ",
    before: "إِنَّ",
    word: "زَيْدًا",
    ending: " ",
    text:
      "Perhatikan ayat إِنَّ زَيْدًا قَائِمٌ. زَيْدًا ialah اسم إنَّ dan berada dalam keadaan mansub, manakala قَائِمٌ ialah خبر إنَّ dan berada dalam keadaan marfu'.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 62,
    text:
      "Saya faham. زَيْدًا menjadi اسم إنَّ, manakala قَائِمٌ menjadi خبر إنَّ.",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 70,
    text:
      "Bagus. Jadi jangan tertukar antara kedua-duanya. اسم إنَّ adalah mansub, tetapi خبر إنَّ adalah marfu'.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 78,
    title: "Tanda رفع",
    before: "إِنَّ زَيْدًا",
    word: "قَائِم",
    ending: "ٌ",
    text:
      "Dalam ayat إِنَّ زَيْدًا قَائِمٌ, tanda رفع pada قَائِمٌ ialah dhammah.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 86,
    text:
      "Jadi خبر إنَّ ialah isim marfu' yang melengkapkan makna إنَّ bersama isimnya?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 94,
    text:
      "Tepat. Ingat: إنَّ وأخواتها تنصب الاسم وترفع الخبر.",
  },

  {
    type: "summary",
    speaker: "guru",
    progress: 100,
    title: "Tahniah!",
    text:
      "Bagus, {player}. Kamu telah memahami asas خبر إنَّ. Ingat bahawa اسم إنَّ adalah mansub, manakala خبر إنَّ adalah marfu'.",
  },
];

export default khabarInnaDialog;