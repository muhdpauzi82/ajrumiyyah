import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { menaraIsim } from "../../../data/menaraIsimQuestions";
import "./MenaraIsim.css";

const TOTAL_QUESTIONS = 10;
const CORRECT_DELAY = 900;
const WRONG_DELAY = 2300;

function playSound(fileName, volume = 0.5) {
  const audio = new Audio(`/sounds/${fileName}`);
  audio.volume = volume;

  audio.play().catch(() => {});
}

function shuffleArray(items) {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
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
      Math.min(TOTAL_QUESTIONS, questionBank.length)
    )
    .map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));
}

export default function MenaraIsim() {
  const navigate = useNavigate();

  const questions = useMemo(
    () => prepareQuestions(menaraIsim),
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] =
    useState(null);
  const [feedback, setFeedback] = useState(null);

  const currentQuestion = questions[currentIndex];

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

  function kembaliKeJejak() {
    navigate("/jejak-isim");
  }

  function ulangKuiz() {
    setCurrentIndex(0);
    setWrongCount(0);
    setSelectedAnswer(null);
    setFeedback(null);
  }

  function tamatKuiz(finalWrongCount) {
    if (finalWrongCount === 0) {
      localStorage.setItem("menaraIsimDone", "true");

      setFeedback({
        type: "complete",
        title: "Menara Isim Selesai!",
        message:
          "Tahap Lanjutan Isim berjaya dikuasai. Sarjana Isim kini terbuka.",
      });

      return;
    }

    setFeedback({
      type: "failed",
      title: "Belum Berjaya",
      message:
        `Terdapat ${finalWrongCount} jawapan yang belum tepat. ` +
        "Ulang latihan untuk membuka Sarjana Isim.",
    });
  }

  function jawab(answer) {
    if (selectedAnswer !== null || !currentQuestion) {
      return;
    }

    const isCorrect =
      answer === currentQuestion.answer;

    const updatedWrongCount = isCorrect
      ? wrongCount
      : wrongCount + 1;

    setSelectedAnswer(answer);

    if (isCorrect) {
      playSound("correct.mp3");

      setFeedback({
        type: "correct",
        title: "Betul!",
        message:
          "Bagus. Anda semakin hampir menguasai Menara Isim.",
      });
    } else {
      playSound("wrong.mp3");
      setWrongCount(updatedWrongCount);

      setFeedback({
        type: "wrong",
        title: "Belum Tepat",
        message:
          currentQuestion.explain ||
          "Teliti semula tanda, jenis dan fungsi isim.",
      });
    }

    const isLastQuestion =
      currentIndex === questions.length - 1;

    window.setTimeout(
      () => {
        if (isLastQuestion) {
          tamatKuiz(updatedWrongCount);
          return;
        }

        setCurrentIndex((previous) => previous + 1);
        setSelectedAnswer(null);
        setFeedback(null);
      },
      isCorrect ? CORRECT_DELAY : WRONG_DELAY
    );
  }

  function getAnswerClass(answer) {
    if (selectedAnswer === null) {
      return "";
    }

    if (answer === currentQuestion.answer) {
      return " menara-answer--correct";
    }

    if (answer === selectedAnswer) {
      return " menara-answer--wrong";
    }

    return " menara-answer--dimmed";
  }

  if (!currentQuestion) {
    return (
      <main className="menara-quiz-screen">
        <div className="menara-empty-state">
          Soalan Menara Isim tidak ditemui.
        </div>
      </main>
    );
  }

  const progressPercentage =
    ((currentIndex + 1) / questions.length) * 100;

  const isResultPopup =
    feedback?.type === "complete" ||
    feedback?.type === "failed";

  return (
    <main className="menara-quiz-screen">
      <div className="menara-quiz-frame">
        <div
          className="menara-quiz-background"
          aria-hidden="true"
        />

        <button
          type="button"
          className="menara-back-button"
          onClick={kembaliKeJejak}
        >
          <span aria-hidden="true">←</span>
          <span>Kembali</span>
        </button>

        <section className="menara-quiz-card">
          <header className="menara-quiz-header">
            <div className="menara-location-badge">
              <span aria-hidden="true">🗼</span>
              <span>Menara Isim</span>
            </div>

            <h1 className="menara-quiz-title">
              Tahap Lanjutan Isim
            </h1>

            <p className="menara-quiz-subtitle">
              Uji kefahaman isim pada tahap lanjutan.
            </p>
          </header>

          <div className="menara-progress-area">
            <div className="menara-progress-text">
              <span>
                Soalan {currentIndex + 1}
              </span>

              <span>
                daripada {questions.length}
              </span>
            </div>

            <div className="menara-progress-track">
              <div
                className="menara-progress-fill"
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>
          </div>

          <section className="menara-question-box">
            <span className="menara-question-label">
              SOALAN
            </span>

            <h2>{currentQuestion.question}</h2>
          </section>

          <div className="menara-answer-list">
            {currentQuestion.options.map(
              (answer, index) => (
                <button
                  type="button"
                  key={`${currentIndex}-${answer}`}
                  className={
                    "menara-answer-button" +
                    getAnswerClass(answer)
                  }
                  dir="rtl"
                  lang="ar"
                  disabled={selectedAnswer !== null}
                  style={{
                    "--answer-index": index,
                  }}
                  onClick={() => {
                    playSound("click.mp3", 0.35);
                    jawab(answer);
                  }}
                  onMouseEnter={() => {
                    if (selectedAnswer === null) {
                      playSound("hover.mp3", 0.18);
                    }
                  }}
                >
                  <span>{answer}</span>
                </button>
              )
            )}
          </div>

          <footer className="menara-question-navigation">
            {questions.map((_, index) => {
              const isCurrent =
                index === currentIndex;

              const isCompleted =
                index < currentIndex;

              return (
                <span
                  key={index}
                  className={[
                    "menara-question-dot",
                    isCurrent
                      ? "menara-question-dot--current"
                      : "",
                    isCompleted
                      ? "menara-question-dot--completed"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {index + 1}
                </span>
              );
            })}
          </footer>
        </section>

        {feedback && (
          <div
            className={`menara-feedback-overlay ${
              isResultPopup
                ? "menara-feedback-overlay--result"
                : ""
            }`}
          >
            <section
              className={`menara-feedback-card menara-feedback-card--${feedback.type}`}
              role="status"
              aria-live="polite"
            >
              <div
                className="menara-feedback-icon"
                aria-hidden="true"
              >
                {feedback.type === "correct" && "✓"}
                {feedback.type === "wrong" && "!"}
                {feedback.type === "complete" && "★"}
                {feedback.type === "failed" && "↻"}
              </div>

              <h2>{feedback.title}</h2>
              <p>{feedback.message}</p>

              {feedback.type === "complete" && (
                <button
                  type="button"
                  className="menara-result-button"
                  onClick={kembaliKeJejak}
                >
                  Kembali ke Jejak Isim
                </button>
              )}

              {feedback.type === "failed" && (
                <button
                  type="button"
                  className="menara-result-button"
                  onClick={ulangKuiz}
                >
                  Ulang Latihan
                </button>
              )}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}