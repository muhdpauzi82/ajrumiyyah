import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { majrurQuestions } from "./majrurQuestions";
import "./LatihanMajrurat.css";

const TOTAL_QUESTIONS = 10;
const ANSWER_DELAY = 850;

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

export default function LatihanMajrurat() {
  const navigate = useNavigate();

  const questions = useMemo(
    () => prepareQuestions(majrurQuestions),
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
         * Majrurat hanya lulus jika
         * semua 10 soalan betul.
         */
        const passed =
          updatedCorrectCount ===
          questions.length;

        if (passed) {
          localStorage.setItem(
            "latihanMajruratDone",
            "true"
          );
        } else {
          localStorage.removeItem(
            "latihanMajruratDone"
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
      return "majrur-answer";
    }

    if (
      option === currentQuestion.answer
    ) {
      return "majrur-answer correct";
    }

    if (option === selectedAnswer) {
      return "majrur-answer wrong";
    }

    return "majrur-answer muted";
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
      <main className="majrur-training-screen">

        <section className="majrur-result-card">

          <span className="majrur-result-icon">
            {passed ? "🏆" : "📖"}
          </span>

          <p className="majrur-result-kicker">
            LATIHAN SELESAI
          </p>

          <h1>
            Latihan Majrurat
          </h1>

          <p>
            {passed
              ? "Tahniah! Anda telah menguasai latihan Majrurat."
              : "Latihan telah selesai. Sila cuba lagi untuk mendapatkan 10/10."
            }
          </p>

          <div className="majrur-result-score">

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
                ? "majrur-result-message success"
                : "majrur-result-message retry"
            }
          >

            {passed ? (
              <>
                <strong>
                  ✓ LATIHAN LULUS
                </strong>

                <p>
                  Kitab Majzum kini
                  boleh diteruskan.
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
                  pembelajaran seterusnya.
                </p>
              </>
            )}

          </div>

          <div className="majrur-result-actions">

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
                  "/kitab-majrurat"
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
    <main className="majrur-training-screen">

      <section className="majrur-training-card">

        <header className="majrur-training-header">

          <button
            type="button"
            onClick={() =>
              navigate(
                "/kitab-majrurat"
              )
            }
          >
            ← Kembali
          </button>

          <div>
            <span>
              LATIHAN KITAB 3
            </span>

            <h1>
              MAJRURAT
            </h1>
          </div>

          <strong>
            {questionIndex + 1}/
            {questions.length}
          </strong>

        </header>

        <div className="majrur-progress-track">
          <span
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <section className="majrur-question-area">

          <div className="majrur-question-panel">

            <span className="majrur-question-number">
              Soalan {questionIndex + 1}
            </span>

            <h2>
              {currentQuestion.question}
            </h2>

            {currentQuestion.arabic && (
              <p
                className="majrur-question-arabic"
                dir="rtl"
                lang="ar"
              >
                {currentQuestion.arabic}
              </p>
            )}

          </div>

          <div className="majrur-answer-list">

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
                    className="majrur-answer-text"
                    dir="rtl"
                    lang="ar"
                  >
                    {option}
                  </strong>

                </button>
              )
            )}

          </div>

          <aside className="majrur-status-panel">

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

                  <p>
                    {
                      currentQuestion.explanation
                    }
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

        <footer className="majrur-training-footer">

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