import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hurufMenara } from "../data/hurufQuestions";
  function playSound(file) {
  const audio = new Audio(`/sounds/${file}`);
  audio.volume = 0.5;
  audio.play();
}
 function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
export default function MenaraHuruf() {
 
  const [questions] = useState(() =>  shuffle(hurufMenara).slice(0, 10)
);
  const [wrongCount, setWrongCount] = useState(0);
  const [current, setCurrent] = useState(0);
  const [popup, setPopup] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const bgMusic = new Audio("/sounds/quiz.mp3");

    bgMusic.loop = true;
    bgMusic.volume = 0.2;

    bgMusic.play().catch(() => {});

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    };
  }, []);

  const q = questions[current];
  const options = shuffle(q.options);

  function jawab(pilihan) {
  const betul = pilihan === q.answer;

 if (betul) {
  playSound("correct.mp3");
  setPopup("🌸 Betul! Teruskan 🌸");
} else {
  playSound("wrong.mp3");
  setWrongCount(wrongCount + 1);
  setPopup(`❌ Salah\n\n${q.explain}`);
}

  setTimeout(() => {
    setPopup("");

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      if (wrongCount === 0 && betul) {
        localStorage.setItem("hurufMenaraDone", "true");alert(
       "🗼 Menara Huruf selesai! Sarjana Huruf terbuka.");

navigate("/jejak-huruf");
      } else {
        alert("❌ Anda belum menjawab semua soalan dengan betul. Sila ulang.");
        setCurrent(0);
        setWrongCount(0);
      }
    }
  }, betul ? 900 : 2500);
}
  return (
    <div style={styles.page}>
      <button style={styles.backBtn} onClick={() => navigate("/jejak-fiil")}>
        ⬅ Kembali
      </button>

      {popup && <div style={styles.popup}>{popup}</div>}

      <div style={styles.card}>
        <div style={styles.badge}>  🗼 Menara Huruf</div>

        <h1 style={styles.title}>  🎓 Tahap Lanjutan Huruf</h1>

        <div style={styles.progress}>
         Soalan {current + 1} / {questions.length}
        </div>

        <div style={styles.questionBox}>
          <h2>{q.question}</h2>
        </div>

        <div style={styles.answers}>
          
{options.map((pilihan, index) => (
  <button
    key={index}
    style={{
      ...styles.answerBtn,
      animationDelay: `${index * 0.25}s`,
    }}
    onMouseEnter={(e) => {
      playSound("hover.mp3");
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow =
       "0 0 35px #22c55e, 0 8px 0 #0f7a2c";
    }}
    onMouseLeave={(e) => {
      playSound("hover.mp3");
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow =
        "0 6px 0 #4e3218, 0 0 18px rgba(255,215,0,.7)"
    }}
    onClick={() => { playSound("click.mp3"); jawab(pilihan); }}
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
    minHeight: "100vh",
    background:
      "linear-gradient(to bottom, rgba(126,195,90,.9), rgba(67,124,48,.95)), url('/images/jejak-fiil.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  backBtn: {
    position: "absolute",
    top: "15px",
    left: "15px",
    background: "#5b3b1d",
    color: "white",
    border: "none",
    borderRadius: "14px",
    padding: "10px 18px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  popup: {
    position: "fixed",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 50,
    background: "#fff3b0",
    color: "#3b260c",
    padding: "25px 40px",
    borderRadius: "25px",
    border: "5px solid #d49a1f",
    fontSize: "28px",
    fontWeight: "bold",
    boxShadow: "0 0 40px gold",
    whiteSpace: "pre-line",
    maxWidth: "520px",
    lineHeight: "1.4",
  },

  card: {
    width: "620px",
    maxWidth: "95%",
    background: "rgba(255, 248, 220, 0.95)",
    border: "6px solid #046d1b",
    borderRadius: "30px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 12px 0 #73971e, 0 0 35px rgba(96, 158, 45, 0.6)",
  },

  badge: {
    display: "inline-block",
    background: "#084d16",
    color: "white",
    padding: "10px 22px",
    borderRadius: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  title: {
    fontSize: "38px",
    margin: "10px 0",
    color: "#2d1a08",
  },

  progress: {
    background: "#ecfa71",
    border: "3px solid #055e23",
    borderRadius: "16px",
    padding: "8px",
    fontWeight: "bold",
    margin: "15px auto",
    width: "180px",
  },

  questionBox: {
    background: "#fff",
    border: "4px solid #0a3b05",
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
  width: "65%",
  maxWidth: "380px",
  minHeight: "80px",

  padding: "10px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  textAlign: "center",
  direction: "rtl",

  fontFamily: "Amiri, serif",
  fontSize: "42px",
  lineHeight: "1",

  borderRadius: "20px",
  border: "3px solid #16a34a",

  background: "linear-gradient(to bottom, #d9ffb3, #7be33d)",

  cursor: "pointer",
  fontWeight: "bold",

  boxShadow: "0 6px 0 #0f7a2c, 0 0 20px rgba(34,197,94,.8)",

  transition: "all 0.25s ease",
  animation: "floatBtn 2s ease-in-out infinite",
},
};