import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { majzumQuestions } from "./majzumQuestions";
import "./LatihanMajzumat.css";

const TOTAL_QUESTIONS = 10;
const ANSWER_DELAY = 3050;

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

function prepareQuestions(questionBank) {
  return shuffleArray(questionBank)
    .slice(
      0,
      Math.min(
        TOTAL_QUESTIONS,
        questionBank.length
      )
    )
    .map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));
}

function renderMixedText(text) {
  if (!text) {
    return null;
  }

  const parts = text.split(
    /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FFًٌٍَُِّْٰـ]+(?:\s+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FFًٌٍَُِّْٰـ]+)*)/g
  );

  return parts.map((part, index) => {
    const containsArabic =
      /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(
        part
      );

    if (containsArabic) {
      return (
        <bdi
          key={`${part}-${index}`}
          className="majzum-inline-arabic"
          dir="rtl"
          lang="ar"
        >
          {part}
        </bdi>
      );
    }

    return (
      <span key={`${part}-${index}`}>
        {part}
      </span>
    );
  });
}

export default function LatihanMajzumat() {
  const navigate = useNavigate();

  const questions = useMemo(
    () => prepareQuestions(majzumQuestions),
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
    ((questionIndex + 1) / questions.length) *
    100;

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

    if (isCorrect) {
      setCorrectCount(
        updatedCorrectCount
      );
    } else {
      setWrongCount(
        updatedWrongCount
      );
    }

    window.setTimeout(() => {
      if (isLastQuestion) {
        /*
         * MAJZUM ialah latihan terakhir.
         *
         * Hanya 10/10 dianggap lulus.
         */
        const passed =
          updatedCorrectCount ===
          questions.length;

        if (passed) {
          localStorage.setItem(
            "latihanMajzumatDone",
            "true"
          );
        } else {
          localStorage.removeItem(
            "latihanMajzumatDone"
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

  function getAnswerClass(option) {
    if (!selectedAnswer) {
      return "majzum-answer";
    }

    if (
      option === currentQuestion.answer
    ) {
      return "majzum-answer correct";
    }

    if (option === selectedAnswer) {
      return "majzum-answer wrong";
    }

    return "majzum-answer muted";
  }

  function restartQuiz() {
    window.location.reload();
  }

  /* =======================================================
     RESULT
  ======================================================= */

  if (phase === "result") {
    const passed =
      correctCount === questions.length;

    return (
      <main className="majzum-training-screen">

        <section className="majzum-result-card">

          <span className="majzum-result-icon">
            {passed ? "🏆" : "📖"}
          </span>

          <p className="majzum-result-kicker">
            LATIHAN SELESAI
          </p>

          <h1>
            Latihan Majzumat
          </h1>

          <p>
            {passed
              ? "Tahniah! Anda telah menguasai latihan Majzumat."
              : "Latihan telah selesai. Sila cuba lagi untuk mendapatkan 10/10."
            }
          </p>

          <div className="majzum-result-score">

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

          <div
            className={
              passed
                ? "majzum-result-message success"
                : "majzum-result-message retry"
            }
          >

            {passed ? (
              <>
                <strong>
                  ✓ LATIHAN LULUS
                </strong>

                <p>
                  Semua asas I‘rab telah
                  diselesaikan.
                </p>

                <p>
                  Lorong Latihan kini
                  boleh dibuka.
                </p>
              </>
            ) : (
              <>
                <strong>
                  BELUM LULUS
                </strong>

                <p>
                  Anda perlu mendapat
                  10/10 untuk membuka
                  Lorong Latihan.
                </p>
              </>
            )}

          </div>

          <div className="majzum-result-actions">

            <button
              type="button"
              onClick={restartQuiz}
            >
              Cuba Lagi
            </button>

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/kitab-majzum"
                )
              }
            >
              Kembali ke Kitab
            </button>

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/perpustakaan-irab"
                )
              }
            >
              Perpustakaan
            </button>

          </div>

        </section>

      </main>
    );
  }

  /* =======================================================
     LATIHAN
  ======================================================= */

  return (
    <main className="majzum-training-screen">

      <section className="majzum-training-card">

        <header className="majzum-training-header">

          <button
            type="button"
            onClick={() =>
              navigate(
                "/kitab-majzumat"
              )
            }
          >
            ← Kembali
          </button>

          <div>
            <span>
              LATIHAN KITAB 4
            </span>

            <h1>
              MAJZUMAT
            </h1>
          </div>

          <strong>
            {questionIndex + 1}/
            {questions.length}
          </strong>

        </header>

        <div className="majzum-progress-track">
          <span
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <section className="majzum-question-area">

          <div className="majzum-question-panel">

            <span className="majzum-question-number">
              Soalan {questionIndex + 1}
            </span>

            <div className="majzum-question-content">

              <h2 className="majzum-question-title">
                {renderMixedText(
                  currentQuestion.question
                )}
              </h2>

              {currentQuestion.arabic && (
                <>
                  <span
                    className="majzum-question-divider"
                    aria-hidden="true"
                  />

                  <p
                    className="majzum-question-arabic"
                    dir="rtl"
                    lang="ar"
                  >
                    {currentQuestion.arabic}
                  </p>
                </>
              )}

            </div>

          </div>

          <div className="majzum-answer-list">

            {currentQuestion.options.map(
              (option, index) => (
                <button
                  key={`${option}-${index}`}
                  type="button"
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
                    className="majzum-answer-text"
                    dir="rtl"
                    lang="ar"
                  >
                    {option}
                  </strong>

                </button>
              )
            )}

          </div>

          <aside className="majzum-status-panel">

            <span>
              Status Jawapan
            </span>

            {!selectedAnswer && (
              <strong>
                Pilih satu jawapan
              </strong>
            )}

            {selectedAnswer &&
              selectedAnswer ===
                currentQuestion.answer && (
                <>
                  <strong className="status-correct">
                    Betul
                  </strong>

                  <p className="majzum-status-explanation">
                    {renderMixedText(
                      currentQuestion.explanation
                    )}
                  </p>
                </>
              )}

            {selectedAnswer &&
              selectedAnswer !==
                currentQuestion.answer && (
                <>
                  <strong className="status-wrong">
                    Belum tepat
                  </strong>

                  <p>
                    {
                      currentQuestion.explanation
                    }
                  </p>
                </>
              )}

          </aside>

        </section>

        <footer className="majzum-training-footer">

          {questions.map(
            (question, index) => (
              <span
                key={question.id}
                className={
                  index === questionIndex
                    ? "active"
                    : index < questionIndex
                      ? "completed"
                      : ""
                }
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