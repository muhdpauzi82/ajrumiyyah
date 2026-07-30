import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import "./HurufAsas.css";
import { hurufMenara } from "../../../data/hurufQuestions";

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
      Math.min(TOTAL_QUESTIONS, questionBank.length)
    )
    .map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));
}

export default function MenaraHuruf() {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const questions = useMemo(
    () => prepareQuestions(hurufMenara),
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

    navigate("/jejak-huruf");
  }

  function ulangLatihan() {
    setCurrentIndex(0);
    setWrongCount(0);
    setSelectedAnswer(null);
    setFeedback(null);
  }

  function tamatLatihan(finalWrongCount) {
    if (finalWrongCount === 0) {
      localStorage.setItem(
        "hurufMenaraDone",
        "true"
      );

      playSound("reward.mp3", 0.65);

      setFeedback({
        type: "complete",
        title: "Menara Huruf Selesai!",
        message:
          "Tahniah! Anda menjawab semua soalan dengan betul. Sarjana Huruf kini telah dibuka.",
      });

      return;
    }

    setFeedback({
      type: "failed",
      title: "Belum Berjaya",
      message:
        `Terdapat ${finalWrongCount} jawapan yang belum tepat. ` +
        "Ulang Menara Huruf untuk membuka Sarjana Huruf.",
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
      playSound("wrong.mp3");
      setWrongCount(updatedWrongCount);

      setFeedback({
        type: "wrong",
        title: "Belum Tepat",
        message:
          currentQuestion.explain ||
          "Teliti semula jenis dan fungsi huruf.",
      });
    }

    const isLastQuestion =
      currentIndex === questions.length - 1;

    timeoutRef.current = window.setTimeout(
      () => {
        if (isLastQuestion) {
          tamatLatihan(updatedWrongCount);
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
      return "huruf-answer--correct";
    }

    if (answer === selectedAnswer) {
      return "huruf-answer--wrong";
    }

    return "huruf-answer--dimmed";
  }

  if (!currentQuestion) {
    return (
      <main className="huruf-quiz-screen">
        <div className="huruf-empty-state">
          Soalan Menara Huruf tidak ditemui.
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
    <main className="huruf-quiz-screen">
      <div className="huruf-quiz-frame">
        <div
          className="huruf-quiz-background"
          aria-hidden="true"
        />

        <button
          type="button"
          className="huruf-back-button"
          onClick={kembaliKeJejak}
        >
          ← Kembali
        </button>

        <section className="huruf-quiz-card">
          <header className="huruf-quiz-header">
            <div className="huruf-location-badge">
              <span aria-hidden="true">🗼</span>
              <span>Menara Huruf</span>
            </div>

            <h1 className="huruf-quiz-title">
              Tahap Lanjutan Huruf
            </h1>

            <p className="huruf-quiz-subtitle">
              Uji kefahaman tentang fungsi dan
              penggunaan huruf pada tahap lanjutan.
            </p>
          </header>

          <div className="huruf-progress-area">
            <div className="huruf-progress-text">
              <span>
                Soalan {currentIndex + 1}
              </span>

              <span>
                daripada {questions.length}
              </span>
            </div>

            <div className="huruf-progress-track">
              <div
                className="huruf-progress-fill"
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>
          </div>

          <section className="huruf-question-box">
            <h2 dir="auto">
              {currentQuestion.question}
            </h2>
          </section>

          <div className="huruf-answer-list">
            {currentQuestion.options.map(
              (answer, index) => (
                <button
                  type="button"
                  key={`${currentIndex}-${index}-${answer}`}
                  className={[
                    "huruf-answer-button",
                    getAnswerClass(answer),
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  disabled={
                    selectedAnswer !== null
                  }
                  onClick={() => {
                    playSound("click.mp3", 0.3);
                    jawab(answer);
                  }}
                >
                  <span
                    className="huruf-answer-text"
                    dir="auto"
                  >
                    {answer}
                  </span>
                </button>
              )
            )}
          </div>

          <footer className="huruf-question-navigation">
            {questions.map((_, index) => {
              const classes = [
                "huruf-question-dot",
              ];

              if (index < currentIndex) {
                classes.push(
                  "huruf-question-dot--completed"
                );
              }

              if (index === currentIndex) {
                classes.push(
                  "huruf-question-dot--current"
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
              "huruf-feedback-overlay",
              isFinalResult
                ? "huruf-feedback-overlay--result"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <section
              className={[
                "huruf-feedback-card",
                `huruf-feedback-card--${feedback.type}`,
              ].join(" ")}
              role="status"
              aria-live="polite"
            >
              <div
                className="huruf-feedback-icon"
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
                  className="huruf-result-button"
                  onClick={kembaliKeJejak}
                >
                  Kembali ke Jejak Huruf
                </button>
              )}

              {feedback.type === "failed" && (
                <button
                  type="button"
                  className="huruf-result-button"
                  onClick={ulangLatihan}
                >
                  Ulang Menara Huruf
                </button>
              )}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}