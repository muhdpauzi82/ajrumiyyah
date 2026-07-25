import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DataranIrab.css";

const QUESTIONS = [
  {
    sentence: "جَاءَ مُحَمَّدٌ",
    word: "مُحَمَّدٌ",
    question: "Apakah keadaan I‘rab kalimah ini?",
    options: ["Marfu‘", "Mansub", "Majrur"],
    answer: "Marfu‘",
  },
  {
    sentence: "رَأَيْتُ مُحَمَّدًا",
    word: "مُحَمَّدًا",
    question: "Apakah keadaan I‘rab kalimah ini?",
    options: ["Marfu‘", "Mansub", "Majrur"],
    answer: "Mansub",
  },
  {
    sentence: "مَرَرْتُ بِمُحَمَّدٍ",
    word: "مُحَمَّدٍ",
    question: "Apakah keadaan I‘rab kalimah ini?",
    options: ["Marfu‘", "Mansub", "Majrur"],
    answer: "Majrur",
  },
  {
    sentence: "لَمْ يَذْهَبْ",
    word: "يَذْهَبْ",
    question: "Apakah keadaan I‘rab fi‘il ini?",
    options: ["Marfu‘", "Mansub", "Majzum"],
    answer: "Majzum",
  },
];

export default function DataranIrab() {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
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
    }, 850);
  };

  const selesai = () => {
    localStorage.setItem("dataranIrabDone", "true");
    navigate("/kota-irab");
  };

  if (finished) {
    return (
      <main className="dataran-screen">
        <section className="dataran-card result">
          <span>UJIAN DATARAN SELESAI</span>

          <h1>{correctCount} / {QUESTIONS.length}</h1>

          <p>
            Anda sudah dapat mengenal keadaan I‘rab dalam
            ayat.
          </p>

          <button type="button" onClick={selesai}>
            KEMBALI KE KOTA I‘RAB
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="dataran-screen">
      <section className="dataran-card">
        <button
          type="button"
          className="dataran-back"
          onClick={() => navigate("/kota-irab")}
        >
          ← Kembali
        </button>

        <span className="dataran-label">
          DATARAN I‘RAB · {questionIndex + 1}/
          {QUESTIONS.length}
        </span>

        <div
          className="dataran-sentence"
          lang="ar"
          dir="rtl"
        >
          {currentQuestion.sentence}
        </div>

        <div
          className="dataran-word"
          lang="ar"
          dir="rtl"
        >
          {currentQuestion.word}
        </div>

        <h1>{currentQuestion.question}</h1>

        <div className="dataran-options">
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