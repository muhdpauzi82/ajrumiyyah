import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { latihanKeadaanQuestions } from
  "./latihanKeadaanQuestions";

import "./LatihanKeadaan.css";

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

export default function LatihanKeadaan() {
  const navigate = useNavigate();

  const questions = useMemo(
    () =>
      prepareQuestions(
        latihanKeadaanQuestions
      ),
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
      correctCount + (isCorrect ? 1 : 0);

    const updatedWrongCount =
      wrongCount + (isCorrect ? 0 : 1);

    setCorrectCount(updatedCorrectCount);
    setWrongCount(updatedWrongCount);

    window.setTimeout(() => {
      if (isLastQuestion) {
        localStorage.setItem(
          "latihanIrabKeadaanDone",
          "true"
        );

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
      return "keadaan-answer";
    }

    if (option === currentQuestion.answer) {
      return "keadaan-answer correct";
    }

    if (option === selectedAnswer) {
      return "keadaan-answer wrong";
    }

    return "keadaan-answer muted";
  }

  function restartQuiz() {
    window.location.reload();
  }

  if (phase === "result") {
    return (
      <main className="keadaan-quiz-page">
        <section className="keadaan-result-card">
          <span className="keadaan-result-icon">
            ✓
          </span>

          <p className="keadaan-result-kicker">
            TAHAP 1 SELESAI
          </p>

          <h1>Kenali Keadaan I‘rab</h1>

          <p>
            Latihan kedua kini telah dibuka.
          </p>

          <div className="keadaan-result-score">
            <div>
              <span>Betul</span>
              <strong>{correctCount}</strong>
            </div>

            <div>
              <span>Belum tepat</span>
              <strong>{wrongCount}</strong>
            </div>

            <div>
              <span>Jumlah</span>
              <strong>{questions.length}</strong>
            </div>
          </div>

          <div className="keadaan-result-actions">
            <button
              type="button"
              onClick={restartQuiz}
            >
              Cuba Lagi
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/lorong-latihan-irab")
              }
            >
              Kembali ke Lorong
            </button>

            <button
              type="button"
              className="primary"
              onClick={() =>
                navigate("/latihan-irab-tanda")
              }
            >
              Teruskan Tahap 2 →
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="keadaan-quiz-page">
      <section className="keadaan-quiz-frame">
        <header className="keadaan-quiz-header">
          <button
            type="button"
            onClick={() =>
              navigate("/lorong-latihan-irab")
            }
          >
            ← Lorong Latihan
          </button>

          <div>
            <span>TAHAP 1</span>
            <h1>KENALI KEADAAN I‘RAB</h1>
          </div>

          <strong>
            {questionIndex + 1}/
            {questions.length}
          </strong>
        </header>

        <div className="keadaan-progress-track">
          <span
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <section className="keadaan-question-area">
          <article className="keadaan-question-card">
            <span className="keadaan-question-number">
              Soalan {questionIndex + 1}
            </span>

            <h2>
              {currentQuestion.question}
            </h2>

            <p
              className="keadaan-arabic-sentence"
              dir="rtl"
              lang="ar"
            >
              {currentQuestion.arabic}
            </p>

            <strong
              className="keadaan-target"
              dir="rtl"
              lang="ar"
            >
              {currentQuestion.target}
            </strong>
          </article>

          <section className="keadaan-answer-list">
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

          <aside className="keadaan-feedback">
            {!selectedAnswer && (
              <strong>
                Pilih satu jawapan
              </strong>
            )}

            {selectedAnswer ===
              currentQuestion.answer && (
              <>
                <strong className="correct">
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
                  <strong className="wrong">
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

        <footer className="keadaan-question-footer">
          {questions.map((question, index) => (
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
          ))}
        </footer>
      </section>
    </main>
  );
}