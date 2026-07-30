import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import "./FiilAsas.css";
import { fiilAsas } from "../../../data/fiilQuestions";

const TOTAL_QUESTIONS = 10;
const CORRECT_DELAY = 850;
const WRONG_DELAY = 2200;

function playSound(fileName, volume = 0.5) {
  const audio = new Audio(`/sounds/${fileName}`);

  audio.volume = volume;

  audio.play().catch(() => {});
}

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

export default function FiilAsas() {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const questions = useMemo(
    () => prepareQuestions(fiilAsas),
    []
  );

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [wrongCount, setWrongCount] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [feedback, setFeedback] =
    useState(null);

  const currentQuestion =
    questions[currentIndex];

  useEffect(() => {
    const bgMusic = new Audio("/sounds/quiz.mp3");

    bgMusic.loop = true;
    bgMusic.volume = 0.2;

    bgMusic.play().catch(() => {});

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function kembaliKeJejak() {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    navigate("/jejak-fiil");
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
        "fiilAsasDone",
        "true"
      );

      playSound("levelup.mp3", 0.65);

      setFeedback({
        type: "complete",
        title: "Tahap Asas Selesai!",
        message:
          "Tahniah! Akademi Fi‘il kini telah dibuka.",
      });

      return;
    }

    setFeedback({
      type: "failed",
      title: "Belum Berjaya",
      message:
        `Terdapat ${finalWrongCount} jawapan yang belum tepat. ` +
        "Ulang latihan untuk membuka Akademi Fi‘il.",
    });
  }

  function jawab(answer) {
    if (
      selectedAnswer !== null ||
      !currentQuestion
    ) {
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
          "Bagus. Teruskan ke soalan berikutnya.",
      });
    } else {
      setWrongCount(updatedWrongCount);

      playSound("wrong.mp3");

      setFeedback({
        type: "wrong",
        title: "Belum Tepat",
        message:
          currentQuestion.explain ||
          "Teliti semula tanda dan ciri fi‘il.",
      });
    }

    const isLastQuestion =
      currentIndex === questions.length - 1;

    timeoutRef.current = window.setTimeout(
      () => {
        if (isLastQuestion) {
          tamatKuiz(updatedWrongCount);
          return;
        }

        setCurrentIndex(
          (previousIndex) =>
            previousIndex + 1
        );

        setSelectedAnswer(null);
        setFeedback(null);
      },
      isCorrect
        ? CORRECT_DELAY
        : WRONG_DELAY
    );
  }

  function getAnswerClass(answer) {
    if (selectedAnswer === null) {
      return "";
    }

    if (answer === currentQuestion.answer) {
      return "fiil-answer--correct";
    }

    if (answer === selectedAnswer) {
      return "fiil-answer--wrong";
    }

    return "fiil-answer--dimmed";
  }

  if (!currentQuestion) {
    return (
      <main className="fiil-quiz-screen">
        <div className="fiil-empty-state">
          Soalan Fi‘il Asas tidak ditemui.
        </div>
      </main>
    );
  }

  const progressPercentage =
    ((currentIndex + 1) /
      questions.length) *
    100;

  const isFinalResult =
    feedback?.type === "complete" ||
    feedback?.type === "failed";

  return (
    <main className="fiil-quiz-screen">
      <div className="fiil-quiz-frame">
        <div
          className="fiil-quiz-background"
          aria-hidden="true"
        />

        <button
          type="button"
          className="fiil-back-button"
          onClick={kembaliKeJejak}
        >
          ← Kembali
        </button>

        <section className="fiil-quiz-card">
          <header className="fiil-quiz-header">
            <div className="fiil-location-badge">
              <span aria-hidden="true">🏡</span>
              <span>Kampung Fi‘il</span>
            </div>

            <h1 className="fiil-quiz-title">
              Tahap Asas Fi‘il
            </h1>

            <p className="fiil-quiz-subtitle">
              Kenali fi‘il dan tanda-tandanya.
            </p>
          </header>

          <div className="fiil-progress-area">
            <div className="fiil-progress-text">
              <span>
                Soalan {currentIndex + 1}
              </span>

              <span>
                daripada {questions.length}
              </span>
            </div>

            <div className="fiil-progress-track">
              <div
                className="fiil-progress-fill"
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>
          </div>

          <section className="fiil-question-box">
           <h2>{currentQuestion.question}</h2>
          </section>

          <div className="fiil-answer-list">
            {currentQuestion.options.map(
              (answer, index) => (
                <button
                  type="button"
                  key={`${currentIndex}-${index}-${answer}`}
                  className={[
                    "fiil-answer-button",
                    getAnswerClass(answer),
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  lang="ar"
                  disabled={
                    selectedAnswer !== null
                  }
                  onClick={() => {
                    playSound(
                      "click.mp3",
                      0.3
                    );

                    jawab(answer);
                  }}
                >
                  <span
                    className="fiil-answer-text"
                    dir="rtl"
                  >
                    {answer}
                  </span>
                </button>
              )
            )}
          </div>

          <footer className="fiil-question-navigation">
            {questions.map((_, index) => {
              const classes = [
                "fiil-question-dot",
              ];

              if (index < currentIndex) {
                classes.push(
                  "fiil-question-dot--completed"
                );
              }

              if (index === currentIndex) {
                classes.push(
                  "fiil-question-dot--current"
                );
              }

              return (
                <span
                  key={index}
                  className={classes.join(" ")}
                >
                  {index + 1}
                </span>
              );
            })}
          </footer>
        </section>

        {feedback && (
          <div
            className={[
              "fiil-feedback-overlay",
              isFinalResult
                ? "fiil-feedback-overlay--result"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <section
              className={[
                "fiil-feedback-card",
                `fiil-feedback-card--${feedback.type}`,
              ].join(" ")}
              role="status"
              aria-live="polite"
            >
              <div
                className="fiil-feedback-icon"
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
                  className="fiil-result-button"
                  onClick={kembaliKeJejak}
                >
                  Kembali ke Jejak Fi‘il
                </button>
              )}

              {feedback.type === "failed" && (
                <button
                  type="button"
                  className="fiil-result-button"
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