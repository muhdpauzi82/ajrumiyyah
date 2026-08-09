const failDialog = [
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
      "Selamat datang, {player}. Hari ini kita akan mempelajari satu daripada isim-isim yang berada dalam keadaan marfu', iaitu الفاعل.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 20,
    text:
      "Guru, apakah yang dimaksudkan dengan الفاعل?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 28,
    text:
      "الفاعل هو الاسم المرفوع المذكور قبله فعله. Fa'il ialah isim yang berada dalam keadaan marfu' dan datang selepas fi'ilnya.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 36,
    text:
      "Jadi, Fa'il ialah isim yang berkaitan dengan perbuatan yang dilakukan?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 44,
    text:
      "Benar. Fa'il ialah isim yang menunjukkan orang atau sesuatu yang melakukan perbuatan dalam ayat.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 54,
    title: "Contoh Fa'il",
    before: "جَاءَ",
    word: "زَيْد",
    ending: "ٌ",
    text:
      "Perhatikan ayat جَاءَ زَيْدٌ. جَاءَ ialah fi'il, manakala زَيْدٌ ialah orang yang melakukan perbuatan datang. Maka زَيْدٌ ialah فاعل.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 62,
    text:
      "Saya faham. زَيْدٌ ialah Fa'il kerana dialah yang melakukan perbuatan datang.",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 70,
    text:
      "Bagus. Sekarang perhatikan perkara yang sangat penting. Fa'il sentiasa berada dalam keadaan marfu'.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 78,
    title: "Tanda رفع",
    before: "جَاءَ",
    word: "زَيْد",
    ending: "ٌ",
    text:
      "Dalam contoh جَاءَ زَيْدٌ, tanda رفع pada زَيْدٌ ialah dhammah. Inilah tanda asal bagi keadaan marfu'.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 86,
    text:
      "Jadi saya perlu ingat tiga perkara: Fa'il ialah isim, Fa'il berada dalam keadaan marfu', dan tanda asalnya ialah dhammah.",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 94,
    text:
      "Tepat sekali. Ingat: الفاعل اسمٌ مرفوعٌ، وعلامةُ رفعِهِ الأصليةُ الضمةُ.",
  },

  {
    type: "summary",
    speaker: "guru",
    progress: 100,
    title: "Tahniah!",
    text:
      "Bagus, {player}. Kamu telah memahami asas الفاعل. Selepas ini kita akan melihat contoh dan latihan dengan lebih mendalam.",
  },
];

export default failDialog;