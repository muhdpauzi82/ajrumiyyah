const tabiMarfuDialog = [
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
      "Selamat datang, {player}. Sekarang kita akan mempelajari التابع للمرفوع.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 20,
    text:
      "Guru, apakah yang dimaksudkan dengan التابع للمرفوع?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 28,
    text:
      "التابع للمرفوع ialah perkataan yang mengikuti perkataan sebelumnya dalam keadaan i‘rab.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 36,
    text:
      "Adakah التابع akan mengikut keadaan i‘rab perkataan yang sebelumnya?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 44,
    text:
      "Benar. Jika perkataan yang diikuti itu marfu‘, maka التابع juga menjadi marfu‘.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 54,
    title: "Contoh التابع للمرفوع",
    before: "جَاءَ مُحَمَّدٌ",
    word: "الْمُجْتَهِد",
    ending: "ُ",
    text:
      "Perhatikan جَاءَ مُحَمَّدٌ الْمُجْتَهِدُ. مُحَمَّدٌ ialah فاعل yang marfu‘, manakala الْمُجْتَهِدُ mengikutnya dan turut menjadi marfu‘.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 62,
    text:
      "Jadi الْمُجْتَهِدُ menjadi marfu‘ kerana mengikuti مُحَمَّدٌ yang juga marfu‘?",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 70,
    text:
      "Tepat. Inilah maksud التابع للمرفوع. Ia mengikuti perkataan sebelumnya dari sudut i‘rab.",
  },

  {
    type: "dialog",
    speaker: "guru",
    name: "Syeikh Abdul I'rab",
    progress: 78,
    text:
      "التابع dalam ilmu nahu terdiri daripada النعت والعطف والتوكيد والبدل.",
  },

  {
    type: "arabic",
    speaker: "guru",
    progress: 86,
    title: "Tanda رفع",
    before: "جَاءَ مُحَمَّدٌ",
    word: "الْمُجْتَهِد",
    ending: "ُ",
    text:
      "Dalam contoh ini, الْمُجْتَهِدُ mengikuti مُحَمَّدٌ dan tanda رفعnya ialah dhammah.",
  },

  {
    type: "dialog",
    speaker: "player",
    name: "{player}",
    progress: 94,
    text:
      "Saya faham. Jika المتبوع marfu‘, التابع juga marfu‘.",
  },

  {
    type: "summary",
    speaker: "guru",
    progress: 100,
    title: "Tahniah!",
    text:
      "Bagus, {player}. Kamu telah memahami asas التابع للمرفوع. Ingat: التابع يتبع المتبوع في الإعراب.",
  },
];

export default tabiMarfuDialog;