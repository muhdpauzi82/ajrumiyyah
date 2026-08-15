import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LorongLatihanMarfuat.css";

/* =====================================================
   BANK SOALAN MARFU‘AT
===================================================== */

const QUESTION_BANK = [
  {
    id: 1,
    question:
      "Apakah fungsi perkataan مُحَمَّدٌ dalam ayat berikut?",
    arabic: "جَاءَ مُحَمَّدٌ",
    options: [
      "فاعل",
      "مبتدأ",
      "خبر",
      "نائب الفاعل",
    ],
    answer: "فاعل",
  },

  {
    id: 2,
    question:
      "Apakah kedudukan الدَّرْسُ dalam ayat berikut?",
    arabic: "كُتِبَ الدَّرْسُ",
    options: [
      "فاعل",
      "نائب الفاعل",
      "خبر",
      "اسم كان",
    ],
    answer: "نائب الفاعل",
  },

  {
    id: 3,
    question:
      "Apakah fungsi الطَّالِبُ dalam ayat berikut?",
    arabic: "الطَّالِبُ مُجْتَهِدٌ",
    options: [
      "مبتدأ",
      "خبر",
      "فاعل",
      "خبر إن",
    ],
    answer: "مبتدأ",
  },

  {
    id: 4,
    question:
      "Apakah fungsi مُجْتَهِدٌ dalam ayat berikut?",
    arabic: "الطَّالِبُ مُجْتَهِدٌ",
    options: [
      "مبتدأ",
      "خبر",
      "فاعل",
      "اسم كان",
    ],
    answer: "خبر",
  },

  {
    id: 5,
    question:
      "Apakah fungsi الطَّالِبُ dalam ayat berikut?",
    arabic: "كَانَ الطَّالِبُ مُجْتَهِدًا",
    options: [
      "اسم كان",
      "خبر كان",
      "مبتدأ",
      "فاعل",
    ],
    answer: "اسم كان",
  },

  {
    id: 6,
    question:
      "Apakah fungsi مُجْتَهِدٌ dalam ayat berikut?",
    arabic: "إِنَّ الطَّالِبَ مُجْتَهِدٌ",
    options: [
      "خبر إن",
      "اسم إن",
      "فاعل",
      "مبتدأ",
    ],
    answer: "خبر إن",
  },

  {
    id: 7,
    question:
      "Fa'il berada dalam keadaan...",
    arabic: "الْفَاعِلُ",
    options: [
      "مرفوع",
      "منصوب",
      "مجرور",
      "مجزوم",
    ],
    answer: "مرفوع",
  },

  {
    id: 8,
    question:
      "Naib Fa'il berada dalam keadaan...",
    arabic: "نَائِبُ الْفَاعِلِ",
    options: [
      "مرفوع",
      "منصوب",
      "مجرور",
      "مجزوم",
    ],
    answer: "مرفوع",
  },

  {
    id: 9,
    question:
      "Isim Kana berada dalam keadaan...",
    arabic: "اسْمُ كَانَ",
    options: [
      "مرفوع",
      "منصوب",
      "مجرور",
      "مجزوم",
    ],
    answer: "مرفوع",
  },

  {
    id: 10,
    question:
      "Khabar Inna berada dalam keadaan...",
    arabic: "خَبَرُ إِنَّ",
    options: [
      "مرفوع",
      "منصوب",
      "مجرور",
      "مجزوم",
    ],
    answer: "مرفوع",
  },
];

const TOTAL_QUESTIONS = 10;
const ANSWER_DELAY = 850;

/* =====================================================
   UTILITI
===================================================== */

function shuffleArray(items) {
  const result = [...items];

  for (
    let index = result.length - 1;
    index > 0;
    index -= 1
  ) {
    const randomIndex = Math.floor(
      Math.random() * (index + 1)
    );

    [result[index], result[randomIndex]] = [
      result[randomIndex],
      result[index],
    ];
  }

  return result;
}

function prepareQuestions() {
  return shuffleArray(QUESTION_BANK)
    .slice(
      0,
      Math.min(
        TOTAL_QUESTIONS,
        QUESTION_BANK.length
      )
    )
    .map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));
}

/* =====================================================
   KOMPONEN UTAMA
===================================================== */

export default function LorongLatihanMarfuat() {
  const navigate = useNavigate();

  const questions = useMemo(
    () => prepareQuestions(),
    []
  );

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [correctCount, setCorrectCount] =
    useState(0);

  const [wrongCount, setWrongCount] =
    useState(0);

  const [phase, setPhase] =
    useState("playing");

  const currentQuestion =
    questions[questionIndex];

  const isLastQuestion =
    questionIndex === questions.length - 1;

  const progress =
    ((questionIndex + 1) /
      questions.length) *
    100;

  /* =====================================================
     JAWAPAN
  ===================================================== */

  function chooseAnswer(option) {
    if (
      selectedAnswer ||
      phase !== "playing"
    ) {
      return;
    }

    setSelectedAnswer(option);

    const isCorrect =
      option === currentQuestion.answer;

    const updatedCorrectCount =
      correctCount +
      (isCorrect ? 1 : 0);

    const updatedWrongCount =
      wrongCount +
      (isCorrect ? 0 : 1);

    setCorrectCount(
      updatedCorrectCount
    );

    setWrongCount(
      updatedWrongCount
    );

    window.setTimeout(() => {
      if (isLastQuestion) {
        if (
          updatedCorrectCount ===
          questions.length
        ) {
          localStorage.setItem(
            "lorongMarfuatDone",
            "true"
          );
        } else {
          localStorage.removeItem(
            "lorongMarfuatDone"
          );
        }

        setPhase("result");
        return;
      }

      setQuestionIndex(
        (current) => current + 1
      );

      setSelectedAnswer(null);
    }, ANSWER_DELAY);
  }

  /* =====================================================
     WARNA JAWAPAN
  ===================================================== */

  function getAnswerClass(option) {
    if (!selectedAnswer) {
      return "marfuat-answer";
    }

    if (
      option === currentQuestion.answer
    ) {
      return "marfuat-answer correct";
    }

    if (option === selectedAnswer) {
      return "marfuat-answer wrong";
    }

    return "marfuat-answer muted";
  }

  /* =====================================================
     ULANG
  ===================================================== */

  function restartQuiz() {
    window.location.reload();
  }

  /* =====================================================
     KEPUTUSAN
  ===================================================== */

  if (phase === "result") {
    const passed =
      correctCount === questions.length;

    return (
      <main className="marfuat-quiz-page">

        <section className="marfuat-result-card">

          <span className="marfuat-result-icon">
            {passed ? "✓" : "!"}
          </span>

          <p className="marfuat-result-kicker">
            {passed
              ? "LATIHAN MARFU‘AT SELESAI"
              : "LATIHAN BELUM SELESAI"}
          </p>

          <h1>
            {passed
              ? "تَهَانِينَا!"
              : "حَاوِلْ مَرَّةً أُخْرَى"}
          </h1>

          <p>
            {passed
              ? "Tahniah! Semua soalan telah dijawab dengan tepat."
              : "Jawab semua soalan dengan betul untuk menyelesaikan latihan ini."}
          </p>

          <div className="marfuat-result-score">

            <div>
              <span>Betul</span>
              <strong>
                {correctCount}
              </strong>
            </div>

            <div>
              <span>Belum tepat</span>
              <strong>
                {wrongCount}
              </strong>
            </div>

            <div>
              <span>Jumlah</span>
              <strong>
                {questions.length}
              </strong>
            </div>

          </div>

          <div className="marfuat-result-actions">

            <button
              type="button"
              onClick={restartQuiz}
            >
              Cuba Lagi
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/kota-marfuat")
              }
            >
              Kembali ke Kota Marfu‘at
            </button>

          </div>

        </section>

      </main>
    );
  }

  /* =====================================================
     PAPARAN LATIHAN
  ===================================================== */

  return (
    <main className="marfuat-quiz-page">

      <section className="marfuat-quiz-frame">

        {/* ================= HEADER ================= */}

        <header className="marfuat-quiz-header">

          <button
            type="button"
            onClick={() =>
              navigate("/kota-marfuat")
            }
          >
            ← Kota Marfu‘at
          </button>

          <div>

            <span>
              تَدْرِيبٌ
            </span>

            <h1>
              تَدْرِيبُ الْمَرْفُوعَاتِ
            </h1>

          </div>

          <strong>
            {questionIndex + 1}/
            {questions.length}
          </strong>

        </header>

        {/* ================= PROGRESS ================= */}

        <div className="marfuat-progress-track">

          <span
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        {/* ================= KANDUNGAN ================= */}

        <section className="marfuat-question-area">

          {/* ================= SOALAN ================= */}

          <article className="marfuat-question-card">

            <span className="marfuat-question-number">
              Soalan {questionIndex + 1}
            </span>

            <h2>
              {currentQuestion.question}
            </h2>

            <p
              className="marfuat-arabic-sentence"
              dir="rtl"
              lang="ar"
            >
              {currentQuestion.arabic}
            </p>

          </article>

          {/* ================= JAWAPAN ================= */}

          <section className="marfuat-answer-list">

            {currentQuestion.options.map(
              (option, index) => (

                <button
                  type="button"
                  key={option}
                  className={getAnswerClass(
                    option
                  )}
                  disabled={Boolean(
                    selectedAnswer
                  )}
                  onClick={() =>
                    chooseAnswer(option)
                  }
                >

                  <span>
                    {String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  <strong
                    dir="rtl"
                    lang="ar"
                  >
                    {option}
                  </strong>

                </button>

              )
            )}

          </section>

          {/* ================= FEEDBACK ================= */}

          <aside className="marfuat-feedback">

            {!selectedAnswer && (
              <strong>
              
              </strong>
            )}

            {selectedAnswer ===
              currentQuestion.answer && (
              <strong className="correct">
                ✓ Betul
              </strong>
            )}

            {selectedAnswer &&
              selectedAnswer !==
                currentQuestion.answer && (
              <strong className="wrong">
                ✗ Belum tepat
              </strong>
            )}

          </aside>

        </section>

        {/* ================= FOOTER ================= */}

        <footer className="marfuat-question-footer">

          {questions.map(
            (question, index) => (

              <span
                key={question.id}
                className={[
                  index === questionIndex
                    ? "active"
                    : "",
                  index < questionIndex
                    ? "completed"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {index + 1}
              </span>

            )
          )}

        </footer>

      </section>

    </main>
  );
}