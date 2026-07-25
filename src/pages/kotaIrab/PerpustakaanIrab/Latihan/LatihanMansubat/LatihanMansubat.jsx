import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { mansubQuestions } from "./mansubQuestions";
import "./LatihanMansubat.css";

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

export default function LatihanMansubat() {
  const navigate = useNavigate();

  const questions = useMemo(
    () => prepareQuestions(mansubQuestions),
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
    if (selectedAnswer || phase !== "playing") {
      return;
    }

    setSelectedAnswer(option);

    const isCorrect =
      option === currentQuestion.answer;

    const updatedCorrectCount =
      correctCount + (isCorrect ? 1 : 0);

    const updatedWrongCount =
      wrongCount + (isCorrect ? 0 : 1);

    if (isCorrect) {
      setCorrectCount(updatedCorrectCount);
    } else {
      setWrongCount(updatedWrongCount);
    }

    window.setTimeout(() => {
      if (isLastQuestion) {
        localStorage.setItem(
          "latihanMansubatDone",
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
      return "mansub-answer";
    }

    if (option === currentQuestion.answer) {
      return "mansub-answer correct";
    }

    if (option === selectedAnswer) {
      return "mansub-answer wrong";
    }

    return "mansub-answer muted";
  }

  function restartQuiz() {
    window.location.reload();
  }

  if (phase === "result") {
    return (
      <main className="mansub-training-screen">
        <section className="mansub-result-card">
          <span className="mansub-result-icon">
            📖
          </span>

          <p className="mansub-result-kicker">
            LATIHAN SELESAI
          </p>

          <h1>Latihan Marfu‘at</h1>

          <p>
            Anda telah menjawab semua soalan
            latihan.
          </p>

          <div className="mansub-result-score">
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

          <div className="mansub-result-actions">
            <button
              type="button"
              onClick={restartQuiz}
            >
              Cuba Lagi
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/kitab-mansubat")
              }
            >
              Kembali ke Kitab
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/perpustakaan-irab")
              }
            >
              Perpustakaan
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="mansub-training-screen">
      <section className="mansub-training-card">

        <header className="mansub-training-header">
          <button
            type="button"
            onClick={() =>
              navigate("/kitab-mansubat")
            }
          >
            ← Kembali
          </button>

          <div>
            <span>LATIHAN KITAB 1</span>
            <h1>MARFU‘AT</h1>
          </div>

          <strong>
            {questionIndex + 1}/{questions.length}
          </strong>
        </header>

        <div className="mansub-progress-track">
          <span
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <section className="mansub-question-area">
          <div className="mansub-question-panel">
            <span className="mansub-question-number">
              Soalan {questionIndex + 1}
            </span>

            <h2>{currentQuestion.question}</h2>

            {currentQuestion.arabic && (
              <p
                className="mansub-question-arabic"
                dir="rtl"
                lang="ar"
              >
                {currentQuestion.arabic}
              </p>
            )}
          </div>

          <div className="mansub-answer-list">
            {currentQuestion.options.map(
              (option, index) => (
                <button
                  key={option}
                  type="button"
                  className={getAnswerClass(option)}
                  disabled={Boolean(selectedAnswer)}
                  onClick={() =>
                    chooseAnswer(option)
                  }
                >
                  <span>
                    {String.fromCharCode(65 + index)}
                  </span>

                  <strong
                  className="mansub-answer-text"
                  dir="rtl"
                   lang="ar"
                   >
                   {option}
                </strong>
                </button>
              )
            )}
          </div>

          <aside className="mansub-status-panel">
            <span>Status Jawapan</span>

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
                    {currentQuestion.explanation}
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
                    {currentQuestion.explanation}
                  </p>
                </>
              )}
          </aside>
        </section>

        <footer className="mansub-training-footer">
          {questions.map((question, index) => (
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
          ))}
        </footer>
      </section>
    </main>
  );
}