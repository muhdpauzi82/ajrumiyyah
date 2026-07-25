import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DewanPengijazahan.css";

const QUESTIONS = [
  {
    question: "Apakah maksud umum I‘rab?",
    options: [
      "Perubahan akhir kalimah",
      "Perubahan awal kalimah",
      "Perubahan jumlah perkataan",
    ],
    answer: "Perubahan akhir kalimah",
  },
  {
    question: "Apakah tanda asas Marfu‘?",
    options: ["Dhammah", "Fathah", "Kasrah"],
    answer: "Dhammah",
  },
  {
    question: "Apakah tanda asas Mansub?",
    options: ["Sukun", "Fathah", "Kasrah"],
    answer: "Fathah",
  },
  {
    question: "Apakah tanda asas Majrur?",
    options: ["Kasrah", "Dhammah", "Sukun"],
    answer: "Kasrah",
  },
  {
    question: "Apakah tanda asas Majzum?",
    options: ["Fathah", "Dhammah", "Sukun"],
    answer: "Sukun",
  },
  {
    question: "Keadaan I‘rab manakah khusus bagi isim?",
    options: ["Majrur", "Majzum", "Kedua-duanya"],
    answer: "Majrur",
  },
  {
    question:
      "Keadaan I‘rab manakah berlaku pada fi‘il mudhari‘?",
    options: ["Majzum", "Majrur", "Tanwin"],
    answer: "Majzum",
  },
  {
    question: "Apakah keadaan مُحَمَّدٌ?",
    options: ["Marfu‘", "Mansub", "Majrur"],
    answer: "Marfu‘",
  },
  {
    question: "Apakah keadaan مُحَمَّدًا?",
    options: ["Majrur", "Mansub", "Majzum"],
    answer: "Mansub",
  },
  {
    question: "Apakah keadaan مُحَمَّدٍ?",
    options: ["Majrur", "Marfu‘", "Mansub"],
    answer: "Majrur",
  },
];

export default function DewanPengijazahan() {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [finished, setFinished] = useState(false);

  const currentQuestion = QUESTIONS[questionIndex];

  const jawab = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    if (option === currentQuestion.answer) {
      setCorrectCount((count) => count + 1);
    }

    window.setTimeout(() => {
      if (questionIndex === QUESTIONS.length - 1) {
        setFinished(true);
        return;
      }

      setQuestionIndex((index) => index + 1);
      setSelectedAnswer("");
    }, 800);
  };

  const lulus =
    finished && correctCount === QUESTIONS.length;

  const selesai = () => {
    if (!lulus) {
      setQuestionIndex(0);
      setCorrectCount(0);
      setSelectedAnswer("");
      setFinished(false);
      return;
    }

    localStorage.setItem("dewanIrabDone", "true");
    navigate("/kota-irab");
  };

  if (finished) {
    return (
      <main className="dewan-screen">
        <section className="dewan-panel dewan-result">
          <span>KEPUTUSAN PENGIJAZAHAN</span>

          <h1>
            {correctCount} / {QUESTIONS.length}
          </h1>

          <h2>
            {lulus
              ? "Tahniah, anda lulus!"
              : "Anda belum mencapai markah penuh."}
          </h2>

          <p>
            {lulus
              ? "Piagam Kota I‘rab telah dianugerahkan."
              : "Ulang semula ujian sehingga semua jawapan betul."}
          </p>

          <button type="button" onClick={selesai}>
            {lulus ? "TERIMA PIAGAM" : "CUBA LAGI"}
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="dewan-screen">
      <section className="dewan-panel">
        <button
          type="button"
          className="dewan-back"
          onClick={() => navigate("/kota-irab")}
        >
          ← Kembali
        </button>

        <span className="dewan-label">
          DEWAN PENGIJAZAHAN
        </span>

        <div className="dewan-progress">
          Soalan {questionIndex + 1} / {QUESTIONS.length}
        </div>

        <h1>{currentQuestion.question}</h1>

        <div className="dewan-options">
          {currentQuestion.options.map((option) => {
            let stateClass = "";

            if (selectedAnswer) {
              if (option === currentQuestion.answer) {
                stateClass = "correct";
              } else if (option === selectedAnswer) {
                stateClass = "wrong";
              }
            }

            return (
              <button
                type="button"
                key={option}
                className={stateClass}
                onClick={() => jawab(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}