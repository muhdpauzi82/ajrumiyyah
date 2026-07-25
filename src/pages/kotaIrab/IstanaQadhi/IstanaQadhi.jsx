import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IstanaQadhi.css";

const FINAL_QUESTIONS = [
  {
    sentence: "جَاءَ زَيْدٌ",
    question: "Apakah keadaan I‘rab زَيْدٌ?",
    options: ["Marfu‘", "Mansub", "Majrur"],
    answer: "Marfu‘",
  },
  {
    sentence: "رَأَيْتُ زَيْدًا",
    question: "Apakah keadaan I‘rab زَيْدًا?",
    options: ["Marfu‘", "Mansub", "Majzum"],
    answer: "Mansub",
  },
  {
    sentence: "مَرَرْتُ بِزَيْدٍ",
    question: "Apakah keadaan I‘rab زَيْدٍ?",
    options: ["Majrur", "Marfu‘", "Mansub"],
    answer: "Majrur",
  },
  {
    sentence: "لَمْ يَخْرُجْ",
    question: "Apakah keadaan I‘rab يَخْرُجْ?",
    options: ["Majzum", "Majrur", "Marfu‘"],
    answer: "Majzum",
  },
];

export default function IstanaQadhi() {
  const navigate = useNavigate();

  const [phase, setPhase] = useState("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const currentQuestion =
    FINAL_QUESTIONS[questionIndex];

  const mula = () => {
    setPhase("playing");
  };

  const jawab = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    const betul = option === currentQuestion.answer;

    if (betul) {
      setCorrectCount((count) => count + 1);
    }

    window.setTimeout(() => {
      if (
        questionIndex ===
        FINAL_QUESTIONS.length - 1
      ) {
        setPhase("result");
        return;
      }

      setQuestionIndex((index) => index + 1);
      setSelectedAnswer("");
    }, 850);
  };

  const jumlahBetulAkhir =
    correctCount +
    (selectedAnswer === currentQuestion?.answer ? 0 : 0);

  const lulus =
    phase === "result" &&
    correctCount === FINAL_QUESTIONS.length;

  const tamatIstana = () => {
    if (!lulus) {
      setQuestionIndex(0);
      setCorrectCount(0);
      setSelectedAnswer("");
      setPhase("playing");
      return;
    }

    localStorage.setItem("istanaQadhiDone", "true");
    localStorage.setItem("artifact_irab", "true");
    localStorage.setItem("kotaIrabDone", "true");
    localStorage.setItem("marfuatUnlocked", "true");

    navigate("/kota-irab");
  };

  return (
    <main className="istana-screen">
      <section className="istana-stage">
        <button
          type="button"
          className="istana-back"
          onClick={() => navigate("/kota-irab")}
        >
          ← Kembali
        </button>

        <div className="qadhi-emblem">⚖</div>

        {phase === "intro" && (
          <section className="istana-dialog">
            <span>ISTANA QADHI</span>

            <h1>Penjaga Ilmu I‘rab</h1>

            <p>
              “Anda telah melalui seluruh Kota I‘rab.
              Buktikan bahawa anda dapat mengenal empat
              keadaan I‘rab.”
            </p>

            <button type="button" onClick={mula}>
              MULAKAN UJIAN AKHIR
            </button>
          </section>
        )}

        {phase === "playing" && (
          <section className="istana-question">
            <span>
              SOALAN {questionIndex + 1} /{" "}
              {FINAL_QUESTIONS.length}
            </span>

            <div
              className="istana-arabic"
              lang="ar"
              dir="rtl"
            >
              {currentQuestion.sentence}
            </div>

            <h1>{currentQuestion.question}</h1>

            <div className="istana-options">
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

            <div className="istana-crystals">
              {FINAL_QUESTIONS.map((_, index) => (
                <span
                  key={index}
                  className={
                    index < correctCount ? "lit" : ""
                  }
                >
                  ◆
                </span>
              ))}
            </div>
          </section>
        )}

        {phase === "result" && (
          <section className="istana-dialog result">
            <span>UJIAN ISTANA TAMAT</span>

            <h1>
              {correctCount} / {FINAL_QUESTIONS.length}
            </h1>

            <p>
              {lulus
                ? "Tahniah. Artifak I‘rab kini menjadi milik anda dan Kota Marfu‘at telah dibuka."
                : "Ujian belum sempurna. Cuba sekali lagi sehingga semua jawapan betul."}
            </p>

            <button
              type="button"
              onClick={tamatIstana}
            >
              {lulus
                ? "TUNTUT ARTIFAK I‘RAB"
                : "CUBA LAGI"}
            </button>
          </section>
        )}
      </section>
    </main>
  );
}