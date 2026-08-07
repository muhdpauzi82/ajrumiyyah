import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LorongLatihanMarfuat.css";

const QUESTION_BANK = [
  {
    question: "Apakah fungsi perkataan مُحَمَّدٌ dalam ayat جَاءَ مُحَمَّدٌ؟",
    arabic: "جَاءَ مُحَمَّدٌ",
    options: ["فاعل", "مبتدأ", "خبر", "نائب الفاعل"],
    answer: "فاعل",
  },
  {
    question: "Apakah kedudukan الدَّرْسُ dalam ayat berikut?",
    arabic: "كُتِبَ الدَّرْسُ",
    options: ["فاعل", "نائب الفاعل", "خبر", "اسم كان"],
    answer: "نائب الفاعل",
  },
  {
    question: "Apakah fungsi الطَّالِبُ dalam ayat berikut?",
    arabic: "الطَّالِبُ مُجْتَهِدٌ",
    options: ["مبتدأ", "خبر", "فاعل", "خبر إن"],
    answer: "مبتدأ",
  },
  {
    question: "Apakah fungsi مُجْتَهِدٌ dalam ayat berikut?",
    arabic: "الطَّالِبُ مُجْتَهِدٌ",
    options: ["مبتدأ", "خبر", "فاعل", "اسم كان"],
    answer: "خبر",
  },
  {
    question: "Apakah fungsi الطَّالِبُ dalam ayat berikut?",
    arabic: "كَانَ الطَّالِبُ مُجْتَهِدًا",
    options: ["اسم كان", "خبر كان", "مبتدأ", "فاعل"],
    answer: "اسم كان",
  },
  {
    question: "Apakah fungsi مُجْتَهِدٌ dalam ayat berikut?",
    arabic: "إِنَّ الطَّالِبَ مُجْتَهِدٌ",
    options: ["خبر إن", "اسم إن", "فاعل", "مبتدأ"],
    answer: "خبر إن",
  },
  {
    question: "Fa'il berada dalam keadaan...",
    arabic: "الْفَاعِلُ",
    options: ["مرفوع", "منصوب", "مجرور", "مجزوم"],
    answer: "مرفوع",
  },
  {
    question: "Naib Fa'il berada dalam keadaan...",
    arabic: "نَائِبُ الْفَاعِلِ",
    options: ["مرفوع", "منصوب", "مجرور", "مجزوم"],
    answer: "مرفوع",
  },
  {
    question: "Isim Kana berada dalam keadaan...",
    arabic: "اسْمُ كَانَ",
    options: ["مرفوع", "منصوب", "مجرور", "مجزوم"],
    answer: "مرفوع",
  },
  {
    question: "Khabar Inna berada dalam keadaan...",
    arabic: "خَبَرُ إِنَّ",
    options: ["مرفوع", "منصوب", "مجرور", "مجزوم"],
    answer: "مرفوع",
  },
];

function shuffleArray(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [
      result[j],
      result[i],
    ];
  }

  return result;
}

export default function LorongLatihanMarfuat() {
  const navigate = useNavigate();

  const questions = useMemo(
    () =>
      shuffleArray(QUESTION_BANK).map((question) => ({
        ...question,
        options: shuffleArray(question.options),
      })),
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion = questions[currentIndex];

  const isLastQuestion =
    currentIndex === questions.length - 1;

  function handleAnswer(option) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(option);

    const isCorrect =
      option === currentQuestion.answer;

    const updatedCorrectCount =
      isCorrect
        ? correctCount + 1
        : correctCount;

    if (isCorrect) {
      setCorrectCount(updatedCorrectCount);
    }

    setTimeout(() => {
      if (isLastQuestion) {
        const passed =
          updatedCorrectCount === questions.length;

        if (passed) {
          localStorage.setItem(
            "lorongMarfuatDone",
            "true"
          );
        }

        navigate("/lorong-latihan-marfuat-result", {
          state: {
            correctCount: updatedCorrectCount,
            totalQuestions: questions.length,
            passed,
          },
        });

        return;
      }

      setCurrentIndex((index) => index + 1);
      setSelectedAnswer(null);
    }, 700);
  }

  return (
    <div className="lorong-marfuat">
      <button
        className="lorong-back-btn"
        onClick={() => navigate("/kota-marfuat")}
      >
        ← Kembali
      </button>

      <div className="lorong-panel">
        <div className="lorong-header">
          <div>
            <span className="lorong-badge">
              LORONG LATIHAN
            </span>

            <h1>
              تَدْرِيبُ الْمَرْفُوعَاتِ
            </h1>
          </div>

          <div className="lorong-score">
            {correctCount} / {questions.length}
          </div>
        </div>

        <div className="lorong-progress">
          <div
            className="lorong-progress-fill"
            style={{
              width: `${
                ((currentIndex + 1) /
                  questions.length) *
                100
              }%`,
            }}
          />
        </div>

        <div className="lorong-question-number">
          Soalan {currentIndex + 1} daripada{" "}
          {questions.length}
        </div>

        <div className="lorong-question">
          <p>{currentQuestion.question}</p>

          <div
            className="lorong-arabic"
            dir="rtl"
            lang="ar"
          >
            {currentQuestion.arabic}
          </div>
        </div>

        <div className="lorong-options">
          {currentQuestion.options.map((option) => {
            let className = "lorong-option";

            if (selectedAnswer !== null) {
              if (option === currentQuestion.answer) {
                className += " correct";
              } else if (option === selectedAnswer) {
                className += " wrong";
              }
            }

            return (
              <button
                key={option}
                className={className}
                disabled={selectedAnswer !== null}
                onClick={() => handleAnswer(option)}
                dir="rtl"
                lang="ar"
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="lorong-numbers">
          {questions.map((_, index) => (
            <span
              key={index}
              className={
                index === currentIndex
                  ? "active"
                  : index < currentIndex
                  ? "done"
                  : ""
              }
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}