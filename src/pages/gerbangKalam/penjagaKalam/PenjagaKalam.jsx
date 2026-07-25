import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { isimAsas, isimPertengahan } from "../../../data/isimQuestions";
import { menaraIsim } from "../../../data/menaraIsimQuestions";
import { fiilAsas, fiilAkademi, fiilMenara } from "../../../data/fiilQuestions";
import { hurufAsas, hurufAkademi, hurufMenara } from "../../../data/hurufQuestions";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function PenjagaKalam() {
  const navigate = useNavigate();
  useEffect(() => {
  const bgMusic = new Audio("/sounds/boss.mp3");

  bgMusic.loop = true;
  bgMusic.volume = 0.2;

  bgMusic.play().catch(() => {});

  return () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  };
}, []);
  
  const semuaSoalan = [
    ...isimAsas,
    ...isimPertengahan,
    ...menaraIsim,
    ...fiilAsas,
    ...fiilAkademi,
    ...fiilMenara,
    ...hurufAsas,
    ...hurufAkademi,
    ...hurufMenara,
  ];

  const [questions] = useState(() => shuffle(semuaSoalan).slice(0, 40));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [victory, setVictory] = useState(false);
  const [failed, setFailed] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const q = questions[current];
  const options = shuffle(q.options);

  function jawab(pilihan) {
    const betul = pilihan === q.answer;
    const newScore = betul ? score + 1 : score;

    setScore(newScore);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      if (newScore === questions.length) {

  localStorage.setItem("boss_kalam", "true");
  localStorage.setItem("anugerahPenjagaKalam", "true");
  localStorage.setItem("kunciKalam", "true");
  localStorage.setItem("kotaIrabUnlocked", "true");

  setVictory(true);

} else {

  setFinalScore(newScore);
  setFailed(true);

}
    }
  }
if (victory) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <div style={{fontSize:"90px"}}>
          🏆
        </div>

        <h1 style={styles.title}>
          PENJAGA KALAM DIKALAHKAN
        </h1>

        <div style={styles.ruleBox}>
          🎖️ Anugerah Penjaga Kalam
          <br />
          🗝️ Kunci Kalam Diperoleh
          <br />
          🌆 Kota I'rab Dibuka
        </div>

        <button
          style={styles.startBtn}
          onClick={() => navigate("/worldmap")}
        >
          🗺️ Kembali Ke Peta Dunia
        </button>

      </div>
    </div>
  );
}
if (failed) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <div style={{fontSize:"90px"}}>
          <img src="../../../images/penjaga-kalam-icon.png" />
        </div>

        <h1 style={styles.title}>
                 </h1>
        <div
  style={{
    background:"#001133",
    color:"#ffd700",
    padding:"20px",
    borderRadius:"20px",
    marginTop:"15px",
    lineHeight:"1.8"
  }}
>
   <img src="../../../images/penjaga-kalam-icon.png" />
   Wahai penuntut ilmu!
  <br /><br />
Penjaga Utama masih belum membenarkan
anda memasuki Kota I'rab.
  <br /><br />
Teruskan belajar
dan cabar semula.
</div>
        <div style={styles.ruleBox}>
          Skor Anda:
          <br />
          {finalScore}/40
          <br /><br />
          Teruskan Usaha anda.
        </div>

        <button
          style={styles.startBtn}
          onClick={() => window.location.reload()}
        >
          🔄 Cuba Lagi
        </button>

        <button
          style={styles.startBtn}
          onClick={() => navigate("/gerbang-kalam")}
        >
          ↩️ Kembali
        </button>

      </div>
    </div>
  );
}
  if (!started) {
    return (
  <div style={styles.page}>
    <div style={styles.gameFrame}>
      <button style={styles.backBtn} onClick={() => navigate("/gerbang-kalam")}>
        ← Kembali
      </button>

      <div style={styles.card}>
        <div style={styles.badge}>👑 PENJAGA UTAMA</div>

        <h1 style={styles.title}>
          CABARAN AKHIR<br />GERBANG KALAM
        </h1>

        <div style={styles.ruleBox}>
          📚 40 Soalan Gabungan<br />
          ✖️ Tiada Penjelasan<br />
          ⚡ Jawab Terus<br />
          🏆 Mesti Betul Semua
        </div>

        <button style={styles.startBtn} onClick={() => setStarted(true)}>
          ⚔️ MULAKAN CABARAN
        </button>
      </div>
    </div>
  </div>
);
  }

  return (
    <div style={styles.page}>
      <button style={styles.backBtn} onClick={() => navigate("/gerbang-kalam")}>
        ← Kembali
      </button>

      <div style={styles.card}>
        <div style={styles.badge}></div>

        <div style={styles.status}>
          Soalan {current + 1} / {questions.length} | Skor {score}
        </div>

        <div style={styles.questionBox}>
  <h2 style={styles.questionText}>
    {q.question}
  </h2>
</div>

        <div style={styles.answers}>
          {options.map((pilihan, index) => (
            <button
              key={index}
              style={styles.answerBtn}
              onClick={() => jawab(pilihan)}
            >
              {pilihan}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


const styles = {
  page: {
  width: "100vw",
  height: "100vh",
  overflow: "hidden",

  backgroundImage: "url('/images/bgpenjaga.webp')",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "black",

  position: "fixed",
  inset: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontFamily: "Arial",
},
  
questionText: {
  fontSize: "clamp(26px, 3vw, 42px)",
  fontWeight: "700",
  lineHeight: "1.4",
  margin: 0,
  color: "#222",
  textAlign: "center",
},
  overlay: {
  display: "none",
},

  backBtn: {
  position: "absolute",
  top: "clamp(8px, 2vw, 20px)",
  left: "clamp(8px, 2vw, 20px)",
  zIndex: 10,
  background: "#082f6b",
  color: "#ffd700",
  border: "2px solid #ffd700",
  borderRadius: "14px",
  padding: "clamp(6px, 1.5vw, 10px) clamp(10px, 2vw, 18px)",
  fontSize: "clamp(12px, 2vw, 16px)",
  fontWeight: "bold",
  cursor: "pointer",
},

  card: {
  position: "relative",
  zIndex: 2,

  width: "min(760px, 88vw)",
  minHeight: "min(520px, 78vh)",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  padding: "clamp(14px, 3vw, 40px)",

  background: "none",
  borderRadius: "clamp(16px, 3vw, 28px)",
  border: "1px solid #d4af37",
  boxShadow: "0 0 35px rgba(0,0,0,.35)",
 
},

  title: {
  color: "#058645",
  fontSize: "clamp(20px, 4vw, 35px)",
  margin: "10px 0",
  lineHeight: "1.1",
},

 ruleBox: {
  marginTop: "clamp(8px, 2vw, 15px)",
  padding: "clamp(8px, 2vw, 10px)",
  width: "min(80%, 400px)",
  background: "#088a3a",
  color: "#ffd700",
  borderRadius: "18px",
  border: "2px solid #ffd700",
  fontWeight: "bold",
  fontSize: "clamp(12px, 2vw, 16px)",
  lineHeight: "1.4",
},
  startBtn: {
  marginTop: "clamp(14px, 3vw, 30px)",
  width: "min(85%, 320px)",
  height: "clamp(50px, 9vw, 74px)",
  borderRadius: "20px",
  border: "none",
  background: "linear-gradient(#ffd95e,#e0a700)",
  color: "#0d2244",
  fontWeight: 900,
  fontSize: "clamp(18px, 4vw, 30px)",
  cursor: "pointer",
  boxShadow: "0 8px 0 #9d6f00",
},

 status:{
  display:"flex",

  justifyContent:"center",

  gap:"20px",

  width:"85%",

  background:"#ffe082",

  color:"#333",

  padding:"12px",

  borderRadius:"16px",

  fontWeight:"700",
},

  questionBox: {
  width: "80%",
  minHeight: "clamp(80px, 18vh, 140px)",
  background: "#e4f3bc",
  border: "2px solid #d4af37",
  borderRadius: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "clamp(14px, 3vw, 30px)",
  margin: "clamp(10px, 2vw, 20px) 0",
  fontSize: "clamp(23px, 10vw, 46px)",
  fontWeight: "700",
},
answers: {
  width: "90%",
  display: "grid",
  gap: "12px",
  justifyItems: "center",
},

answerBtn: {
  width: "80%",
  minHeight: "58px",

  borderRadius: "18px",
  border: "2px solid #9ef01a",

  background: "linear-gradient(180deg,#22c55e,#15803d)",

  color: "white",
  fontWeight: 900,
  fontSize: "clamp(22px, 3vw, 34px)",

  cursor: "pointer",
  transition: ".2s",

  boxShadow:
    "0 0 12px rgba(34,197,94,.9), 0 0 22px rgba(250,204,21,.45)",
  textShadow: "0 2px 4px rgba(0,0,0,.5)",
},
};