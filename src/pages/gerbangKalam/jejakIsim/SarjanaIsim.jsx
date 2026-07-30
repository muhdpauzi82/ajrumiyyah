import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SarjanaIsim.css";

import {
  isimAsas,
  isimPertengahan,
} from "../../../data/isimQuestions";

import {
  menaraIsim,
} from "../../../data/menaraIsimQuestions";

const TOTAL_QUESTIONS = 20;
const CORRECT_DELAY = 850;
const WRONG_DELAY = 1800;

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

function playSound(fileName, volume = 0.5) {
  const audio = new Audio(`/sounds/${fileName}`);

  audio.volume = volume;

  audio.play().catch(() => {
    // Audio mungkin menunggu interaksi pengguna.
  });
}

export default function SarjanaIsim() {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const questionBank = useMemo(
    () => [
      ...isimAsas,
      ...isimPertengahan,
      ...menaraIsim,
    ],
    []
  );

  const [questions, setQuestions] = useState(
    () => prepareQuestions(questionBank)
  );

  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] =
    useState(0);
  const [correctCount, setCorrectCount] =
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
    const bgMusic = new Audio("/sounds/boss.mp3");

    bgMusic.loop = true;
    bgMusic.volume = 0.18;

    bgMusic.play().catch(() => {
      // Audio akan bermula selepas interaksi pengguna.
    });

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

    navigate("/jejak-isim");
  }

  function resetUjian({ reshuffle = false } = {}) {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    if (reshuffle) {
      setQuestions(
        prepareQuestions(questionBank)
      );
    }

    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    setSelectedAnswer(null);
    setFeedback(null);
  }

  function mulaUjian() {
    playSound("click.mp3", 0.35);

    resetUjian({
      reshuffle: true,
    });

    setStarted(true);
  }

  function ulangUjian() {
    playSound("click.mp3", 0.35);

    resetUjian({
      reshuffle: true,
    });

    setStarted(true);
  }

  function tamatUjian(
    finalCorrectCount,
    finalWrongCount
  ) {
    const passed =
      finalCorrectCount === questions.length &&
      finalWrongCount === 0;

    if (passed) {
      localStorage.setItem(
        "sarjanaIsimDone",
        "true"
      );

      playSound("reward.mp3", 0.7);

      setFeedback({
        type: "complete",
        title: "Tahniah, Sarjana Isim!",
        message:
          "Anda berjaya menjawab semua 20 soalan dengan tepat dan menamatkan Jejak Isim.",
      });

      return;
    }

    setFeedback({
      type: "failed",
      title: "Belum Berjaya",
      message:
        `Skor anda ialah ${finalCorrectCount}/${questions.length}. ` +
        "Semua soalan perlu dijawab dengan betul untuk menguasai Jejak Isim.",
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

    const updatedCorrectCount = isCorrect
      ? correctCount + 1
      : correctCount;

    const updatedWrongCount = isCorrect
      ? wrongCount
      : wrongCount + 1;

    setSelectedAnswer(answer);
    setCorrectCount(updatedCorrectCount);
    setWrongCount(updatedWrongCount);

    if (isCorrect) {
      playSound("correct.mp3");

      setFeedback({
        type: "correct",
        title: "Betul!",
        message:
          "Bagus! Anda semakin hampir menjadi Sarjana Isim.",
      });
    } else {
      playSound("wrong.mp3");

      setFeedback({
        type: "wrong",
        title: "Belum Tepat",
        message:
          "Ingat kembali ilmu yang telah dipelajari dan teruskan dengan tenang.",
      });
    }

    const isLastQuestion =
      currentIndex === questions.length - 1;

    timeoutRef.current = window.setTimeout(
      () => {
        if (isLastQuestion) {
          tamatUjian(
            updatedCorrectCount,
            updatedWrongCount
          );

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
      return "sarjana-answer-correct";
    }

    if (answer === selectedAnswer) {
      return "sarjana-answer-wrong";
    }

    return "sarjana-answer-dimmed";
  }

  function getQuestionNumberClass(index) {
    const classes = [
      "sarjana-question-number",
    ];

    if (index < currentIndex) {
      classes.push(
        "sarjana-question-number-completed"
      );
    }

    if (index === currentIndex) {
      classes.push(
        "sarjana-question-number-current"
      );
    }

    return classes.join(" ");
  }

  if (!currentQuestion) {
    return (
      <main className="sarjana-screen">
        <div className="sarjana-empty-state">
          Soalan Sarjana Isim tidak ditemui.
        </div>
      </main>
    );
  }

  const progressPercentage =
    ((currentIndex + 1) /
      questions.length) *
    100;

  const masteryPercentage = Math.round(
    (correctCount / questions.length) *
      100
  );

  const isFinalResult =
    feedback?.type === "complete" ||
    feedback?.type === "failed";

  return (
    <main className="sarjana-screen">
      <section className="sarjana-frame">
        <img
          src="/images/sarjana-bg.webp"
          alt="Dewan Sarjana Isim"
          className="sarjana-bg"
          draggable="false"
        />

        {/* Hotspot kembali pada papan imej */}
        <button
          type="button"
          className="sarjana-back-hotspot"
          aria-label="Kembali ke Jejak Isim"
          onClick={kembaliKeJejak}
        />

        {!started ? (
          <section className="sarjana-intro-card">
            <div className="sarjana-intro-badge">
              👑 UJIAN AKHIR
            </div>

            <h1 className="sarjana-intro-title">
              SARJANA ISIM
            </h1>

            <p className="sarjana-intro-subtitle">
              Gunakan semua ilmu yang telah
              dipelajari sepanjang Jejak Isim.
            </p>

            <div className="sarjana-rule-grid">
              <div className="sarjana-rule-item">
                <span aria-hidden="true">
                  📚
                </span>

                <strong>20 Soalan</strong>
                <small>
                  Soalan campuran
                </small>
              </div>

              <div className="sarjana-rule-item">
                <span aria-hidden="true">
                  🎯
                </span>

                <strong>20/20 Betul</strong>
                <small>
                  Syarat penguasaan
                </small>
              </div>

              <div className="sarjana-rule-item">
                <span aria-hidden="true">
                  🧠
                </span>

                <strong>Tanpa Bantuan</strong>
                <small>
                  Uji kefahaman sebenar
                </small>
              </div>

              <div className="sarjana-rule-item">
                <span aria-hidden="true">
                  👑
                </span>

                <strong>Sarjana Isim</strong>
                <small>
                  Tamatkan Jejak Isim
                </small>
              </div>
            </div>

            <button
              type="button"
              className="sarjana-start-button"
              onClick={mulaUjian}
            >
              MULAKAN UJIAN SARJANA
            </button>
          </section>
        ) : (
          <section className="sarjana-quiz-card">
            <header className="sarjana-status-header">
              <div className="sarjana-question-status">
                <span aria-hidden="true">
                  📗
                </span>

                <strong>
                  Soalan {currentIndex + 1}
                  {" / "}
                  {questions.length}
                </strong>
              </div>

              <div className="sarjana-score-status">
                ⭐ Skor: {correctCount}
              </div>

              <div className="sarjana-mastery-status">
                <small>Penguasaan</small>
                <strong>
                  {masteryPercentage}%
                </strong>
              </div>
            </header>

            <div className="sarjana-progress-track">
              <div
                className="sarjana-progress-fill"
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>

            <section className="sarjana-question-box">
              <div className="sarjana-question-label">
                📖 SOALAN
              </div>

              <h2>
                {currentQuestion.question}
              </h2>
            </section>

            <div className="sarjana-answer-list">
              {currentQuestion.options.map(
                (answer, index) => (
                  <button
  type="button"
  key={`${currentIndex}-${index}-${answer}`}
  className={[
    "sarjana-answer-button",
    getAnswerClass(answer),
  ]
    .filter(Boolean)
    .join(" ")}
  lang="ar"
  disabled={selectedAnswer !== null}
  onClick={() => {
    playSound("click.mp3", 0.3);
    jawab(answer);
  }}
>
  <span className="sarjana-answer-letter">
    {String.fromCharCode(65 + index)}
  </span>

  <span
    className="sarjana-answer-text"
    dir="rtl"
  >
    {answer}
  </span>

  <span
    className="sarjana-answer-decoration"
    aria-hidden="true"
  >
    ✦
  </span>
</button>
                )
              )}
            </div>
          </section>
        )}

        {started && (
          <footer className="sarjana-footer">
            <div className="sarjana-question-numbers">
              {questions.map((_, index) => (
                <span
                  key={index}
                  className={getQuestionNumberClass(
                    index
                  )}
                >
                  {index + 1}

                  {index < currentIndex && (
                    <small
                      className="sarjana-question-check"
                      aria-hidden="true"
                    >
                      ✓
                    </small>
                  )}
                </span>
              ))}
            </div>
          </footer>
        )}

        {/* Popup mesti berada dalam sarjana-frame */}
        {feedback && (
          <div
            className={[
              "sarjana-feedback-overlay",
              isFinalResult
                ? "sarjana-feedback-overlay-final"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <section
              className={[
                "sarjana-feedback-card",
                `sarjana-feedback-card-${feedback.type}`,
              ].join(" ")}
              role="status"
              aria-live="polite"
            >
              <div
                className="sarjana-feedback-icon"
                aria-hidden="true"
              >
                {feedback.type ===
                  "correct" && "✓"}

                {feedback.type ===
                  "wrong" && "!"}

                {feedback.type ===
                  "complete" && "👑"}

                {feedback.type ===
                  "failed" && "↻"}
              </div>

              <h2 className="sarjana-feedback-title">
                {feedback.title}
              </h2>

              <p className="sarjana-feedback-message">
                {feedback.message}
              </p>

              {feedback.type ===
                "complete" && (
                <button
                  type="button"
                  className="sarjana-result-button"
                  onClick={() =>
                    navigate(
                      "/anugerah-isim"
                    )
                  }
                >
                  TERUSKAN
                </button>
              )}

              {feedback.type ===
                "failed" && (
                <button
                  type="button"
                  className="sarjana-result-button"
                  onClick={ulangUjian}
                >
                  ULANG UJIAN
                </button>
              )}
            </section>
          </div>
        )}
      </section>
    </main>
  );
}