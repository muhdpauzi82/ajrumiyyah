import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { isimPertengahan } from "../../../data/isimQuestions";
import "./AkademiIsim.css";

const TOTAL_QUESTIONS = 10;
const CORRECT_DELAY = 900;
const WRONG_DELAY = 2300;

function playSound(fileName, volume = 0.5) {
  const audio = new Audio(`/sounds/${fileName}`);
  audio.volume = volume;

  audio.play().catch(() => {
    // Audio mungkin menunggu interaksi pengguna.
  });
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

export default function AkademiIsim() {
  const navigate = useNavigate();

  const questions = useMemo(
    () => prepareQuestions(isimPertengahan),
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
      localStorage.setItem(
        "isimPertengahanDone",
        "true"
      );

      setFeedback({
        type: "complete",
        title: "Akademi Selesai!",
        message:
          "Tahap Pertengahan Isim berjaya dikuasai. Menara Isim kini terbuka.",
      });

      return;
    }

    setFeedback({
      type: "failed",
      title: "Belum Berjaya",
      message:
        `Terdapat ${finalWrongCount} jawapan yang belum tepat. ` +
        "Ulang latihan untuk membuka Menara Isim.",
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
          "Bagus. Teruskan pembelajaran di Akademi Isim.",
      });
    } else {
      playSound("wrong.mp3");
      setWrongCount(updatedWrongCount);

      setFeedback({
        type: "wrong",
        title: "Belum Tepat",
        message:
          currentQuestion.explain ||
          "Teliti semula fungsi dan tanda isim.",
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
      return " akademi-answer--correct";
    }

    if (answer === selectedAnswer) {
      return " akademi-answer--wrong";
    }

    return " akademi-answer--dimmed";
  }

  if (!currentQuestion) {
    return (
      <main className="akademi-quiz-screen">
        <div className="akademi-empty-state">
          Soalan Akademi Isim tidak ditemui.
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
    <main className="akademi-quiz-screen">
      <div className="akademi-quiz-frame">
        <div
          className="akademi-quiz-background"
          aria-hidden="true"
        />

        <button
          type="button"
          className="akademi-back-button"
          onClick={kembaliKeJejak}
        >
          <span aria-hidden="true">←</span>
          <span>Kembali</span>
        </button>

        <section className="akademi-quiz-card">
          <header className="akademi-quiz-header">
            <div className="akademi-location-badge">
              <span aria-hidden="true">🏫</span>
              <span>Akademi Isim</span>
            </div>

            <h1 className="akademi-quiz-title">
              Tahap Pertengahan Isim
            </h1>

            <p className="akademi-quiz-subtitle">
              Fahami tanda, jenis dan fungsi isim.
            </p>
          </header>

          <div className="akademi-progress-area">
            <div className="akademi-progress-text">
              <span>
                Soalan {currentIndex + 1}
              </span>

              <span>
                daripada {questions.length}
              </span>
            </div>

            <div className="akademi-progress-track">
              <div
                className="akademi-progress-fill"
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>
          </div>

          <section className="akademi-question-box">
           <h2>{currentQuestion.question}</h2>
          </section>

          <div className="akademi-answer-list">
            {currentQuestion.options.map(
              (answer, index) => (
                <button
                  type="button"
                  key={`${currentIndex}-${answer}`}
                  className={
                    "akademi-answer-button" +
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

          <footer className="akademi-question-navigation">
            {questions.map((_, index) => {
              const isCurrent =
                index === currentIndex;

              const isCompleted =
                index < currentIndex;

              return (
                <span
                  key={index}
                  className={[
                    "akademi-question-dot",
                    isCurrent
                      ? "akademi-question-dot--current"
                      : "",
                    isCompleted
                      ? "akademi-question-dot--completed"
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
            className={`akademi-feedback-overlay ${
              isResultPopup
                ? "akademi-feedback-overlay--result"
                : ""
            }`}
          >
            <section
              className={`akademi-feedback-card akademi-feedback-card--${feedback.type}`}
              role="status"
              aria-live="polite"
            >
              <div
                className="akademi-feedback-icon"
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
                  className="akademi-result-button"
                  onClick={kembaliKeJejak}
                >
                  Kembali ke Jejak Isim
                </button>
              )}

              {feedback.type === "failed" && (
                <button
                  type="button"
                  className="akademi-result-button"
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