import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { hurufAsas, hurufAkademi, hurufMenara }from "../data/hurufQuestions";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function SarjanaHuruf() {
  const navigate = useNavigate();
  const semuaSoalan = [ ...hurufAsas, ...hurufAkademi, ...hurufMenara,];
  const [questions] = useState(() =>  shuffle(semuaSoalan).slice(0, 20));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);

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
      localStorage.setItem("hurufSarjanaDone", "true");
      alert("👑 Tahniah! Monolit Huruf Purba terbuka.");
      navigate("/jejak-huruf");

    } else {
      alert("Belum sempurna. Cuba lagi sehingga semua betul.");
      window.location.reload();
    }
  }
}

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <button style={styles.backBtn} onClick={() => navigate("/jejak-isim")}>
        ⬅ Kembali
      </button>

      <div style={styles.card}>
        {!started ? (
          <>
            <div style={styles.badge}>👑 BOSS FINAL</div>
            <h1 style={styles.title}>SARJANA FI'IL</h1>

            <div style={styles.ruleBox}>
              📚 20 Soalan Campuran
              <br />
              ❌ Tiada Penjelasan
              <br />
              ⚡ Jawab Terus
              <br />
              🏆 Mesti Betul Semua
            </div>

            <button style={styles.startBtn} onClick={() => setStarted(true)}>
              ⚔️ MULAKAN BOSS BATTLE
            </button>
          </>
        ) : (
          <>
            <div style={styles.badge}>👑 Sarjana Isim</div>

            <div style={styles.status}>
              Soalan {current + 1} /20 {questions.length} | Skor {score}
            </div>

            <div style={styles.questionBox}>
              <h2>{q.question}</h2>
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
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
  width: "100vw",
  height: "100vh",
  overflow: "hidden",

  backgroundImage: "url('/images/sarjanahuruf.webp')",
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
  
  overlay: {
  display: "none",
},

  backBtn: {
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: 10,
    background: "#082f6b",
    color: "#ffd700",
    border: "2px solid #ffd700",
    borderRadius: "14px",
    padding: "10px 18px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  card: {
  position: "relative",
  zIndex: 2,
  width: "min(700px, 90vw)",
  maxHeight: "88vh",

  background: "transparent",
  border: "4px solid #ffd700",
  borderRadius: "30px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0 0 40px rgba(255,215,0,.8)",
},

  badge: {
    display: "inline-block",
    background: "#021630",
    color: "#ffd700",
    padding: "10px 20px",
    borderRadius: "20px",
    border: "2px solid #ffd700",
    fontWeight: "bold",
  },

  title: {
  color: "#ffd700",
  fontSize: "clamp(24px, 4vw, 48px)",
  margin: "10px 0",
  lineHeight: "1.1",
},

  ruleBox: {
  marginTop: "15px",
  padding: "10px",

  width: "80%",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",

  background: "#088a3a",
  color: "#ffd700",

  borderRadius: "18px",
  border: "2px solid #ffd700",

  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "1.4",
},
  startBtn: {
  marginTop: "25px",
  width: "70%",
  maxWidth: "320px",
  background: "linear-gradient(to bottom,#ffd700,#c89f00)",
  color: "#001133",
  border: "none",
  borderRadius: "20px",
  padding: "16px",
  fontSize: "clamp(18px, 3vw, 26px)",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 0 25px gold",
},

  status: {
    margin: "20px auto",
    background: "#ffd700",
    color: "#001133",
    borderRadius: "18px",
    padding: "10px",
    fontWeight: "bold",
  },

  questionBox: {
    background: "white",
    border: "4px solid #d4af37",
    borderRadius: "22px",
    padding: "20px",
    margin: "20px 0",
    color: "#111",
  },

  answers: {
    display: "grid",
    gap: "14px",
    justifyItems: "center",
  },

  answerBtn: {
  width: "70%",
  minHeight: "55px",
  borderRadius: "20px",
  border: "3px solid #c5ec14",
  background: "linear-gradient(to bottom, #078a42, #48581a)",
  color: "#d5f3b4",
  fontSize: "30px",
  fontWeight: "bold",
  cursor: "pointer",
},
};