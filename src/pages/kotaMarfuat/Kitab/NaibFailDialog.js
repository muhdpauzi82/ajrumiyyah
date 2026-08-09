const naibFailDialog = [
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
      "Selamat datang, {player}. Sekarang kita akan mempelajari نائب الفاعل, iaitu pengganti Fa'il.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 20,
    text:
      "Guru, apakah yang dimaksudkan dengan نائب الفاعل?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 28,
    text:
      "نائب الفاعل هو الاسم المرفوع الذي لم يُذكر معه فاعله. Naib Fa'il ialah isim yang berada dalam keadaan marfu' apabila Fa'il tidak disebut.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 36,
    text:
      "Jadi Naib Fa'il mengambil tempat Fa'il apabila Fa'il tidak disebut?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 44,
    text:
      "Benar. Apabila fi'il dibina dalam bentuk majhul dan Fa'il tidak disebut, isim yang menggantikan tempatnya dinamakan نائب الفاعل.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 54,
    title: "Contoh نائب الفاعل",
    before: "كُتِبَ",
    word: "الدَّرْس",
    ending: "ُ",
    text:
      "Perhatikan ayat كُتِبَ الدَّرْسُ. كُتِبَ ialah fi'il majhul, manakala الدَّرْسُ ialah نائب الفاعل.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 62,
    text:
      "Saya faham. الدَّرْسُ menjadi نائب الفاعل kerana Fa'il tidak disebut dalam ayat.",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 70,
    text:
      "Bagus. Perkara yang penting ialah نائب الفاعل juga berada dalam keadaan marfu'.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 78,
    title: "Tanda رفع",
    before: "كُتِبَ",
    word: "الدَّرْس",
    ending: "ُ",
    text:
      "Dalam ayat كُتِبَ الدَّرْسُ, tanda رفع pada الدَّرْسُ ialah dhammah.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 86,
    text:
      "Jadi نائب الفاعل ialah isim dan hukumnya marfu'?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 94,
    text:
      "Tepat. Ingat: نائب الفاعل اسمٌ مرفوعٌ، ويأتي بعد الفعل المبني للمجهول.",
  },

  {
    type: "summary",
    speaker: "guru",
    progress: 100,
    title: "Tahniah!",
    text:
      "Bagus, {player}. Kamu telah memahami asas نائب الفاعل. Sekarang kamu sudah mengetahui bahawa Naib Fa'il ialah isim marfu' yang menggantikan tempat Fa'il apabila Fa'il tidak disebut.",
  },
];

export default naibFailDialog;