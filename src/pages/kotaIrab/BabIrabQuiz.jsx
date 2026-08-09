import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/BabIrabQuiz.css";
import { babIrabQuestions } from "../../data/babIrabQuestions";

const TOTAL_QUESTIONS = 10;
const ANSWER_DELAY = 700;

const QUIZ_BACKGROUND =
  "/images/kotaIrab/bab-irab-quiz-bg.webp";

/* =========================================================
   SHUFFLE
========================================================= */

function shuffleArray(items = []) {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [
      array[j],
      array[i],
    ];
  }

  return array;
}

/* =========================================================
   PREPARE QUESTIONS
========================================================= */

function prepareQuestions(bank = []) {
  return shuffleArray(bank)
    .slice(
      0,
      Math.min(TOTAL_QUESTIONS, bank.length)
    )
    .map((question) => ({
      ...question,
      options: shuffleArray(
        question.options || []
      ),
    }));
}

/* =========================================================
   SOUND
========================================================= */

function playSound(fileName, volume = 0.45) {
  const audio = new Audio(
    `/sounds/${fileName}`
  );

  audio.volume = volume;

  audio.play().catch(() => {});
}

/* =========================================================
   QUESTION HELPERS
========================================================= */

function getDisplay(question) {
  if (!question) return "";

  return question.display || "";
}

/* =========================================================
   BAB IRAB QUIZ
========================================================= */

export default function BabIrabQuiz() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState(
    () => prepareQuestions(babIrabQuestions)
  );

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [correctCount, setCorrectCount] =
    useState(0);

  const [wrongCount, setWrongCount] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [answerState, setAnswerState] =
    useState(null);

  const [finished, setFinished] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const currentQuestion =
    questions[currentIndex];

  /* =======================================================
     BACKGROUND MUSIC
  ======================================================= */

  useEffect(() => {
    const music = new Audio(
      "/sounds/gerbangutama.mp3"
    );

    music.loop = true;
    music.volume = 0.1;

    const startMusic = () => {
      music.play().catch(() => {});
    };

    startMusic();

    window.addEventListener(
      "pointerdown",
      startMusic,
      { once: true }
    );

    return () => {
      window.removeEventListener(
        "pointerdown",
        startMusic
      );

      music.pause();
      music.currentTime = 0;
    };
  }, []);

  /* =======================================================
     RESET
  ======================================================= */

  function resetQuiz() {
    setQuestions(
      prepareQuestions(babIrabQuestions)
    );

    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongCount(0);

    setSelectedAnswer(null);
    setAnswerState(null);

    setFinished(false);
    setResult(null);
  }

  /* =======================================================
     FINISH
  ======================================================= */

  function finishQuiz(
    finalCorrect,
    finalWrong
  ) {
    const total = questions.length;

    const passed =
      total > 0 &&
      finalCorrect === total &&
      finalWrong === 0;

    localStorage.setItem(
      "babIrabScore",
      String(finalCorrect)
    );

    if (passed) {
      localStorage.setItem(
        "babIrabQuizDone",
        "true"
      );

      localStorage.setItem(
        "babIrabDone",
        "true"
      );

      localStorage.setItem(
        "perpustakaanNahuUnlocked",
        "true"
      );

      playSound(
        "reward.mp3",
        0.6
      );
    }

    setResult({
      passed,
      correct: finalCorrect,
      wrong: finalWrong,
    });

    setFinished(true);
  }

  /* =======================================================
     ANSWER
  ======================================================= */

  function jawab(answer) {
    if (
      selectedAnswer !== null ||
      !currentQuestion ||
      finished
    ) {
      return;
    }

    const isCorrect =
      answer === currentQuestion.answer;

    const nextCorrect = isCorrect
      ? correctCount + 1
      : correctCount;

    const nextWrong = isCorrect
      ? wrongCount
      : wrongCount + 1;

    setSelectedAnswer(answer);

    setAnswerState(
      isCorrect
        ? "correct"
        : "wrong"
    );

    if (isCorrect) {
      setCorrectCount(nextCorrect);

      playSound(
        "correct.mp3",
        0.4
      );
    } else {
      setWrongCount(nextWrong);

      playSound(
        "wrong.mp3",
        0.35
      );
    }

    window.setTimeout(() => {
      const lastQuestion =
        currentIndex ===
        questions.length - 1;

      if (lastQuestion) {
        finishQuiz(
          nextCorrect,
          nextWrong
        );

        return;
      }

      setCurrentIndex(
        (index) => index + 1
      );

      setSelectedAnswer(null);
      setAnswerState(null);
    }, ANSWER_DELAY);
  }

  /* =======================================================
     OPTION CLASS
  ======================================================= */

  function getOptionClass(option) {
    if (!selectedAnswer) {
      return "bab-irab-option";
    }

    if (
      option === currentQuestion.answer
    ) {
      return "bab-irab-option correct";
    }

    if (
      option === selectedAnswer
    ) {
      return "bab-irab-option wrong";
    }

    return "bab-irab-option muted";
  }

  /* =======================================================
     EMPTY
  ======================================================= */

  if (!currentQuestion && !finished) {
    return (
      <main className="bab-irab-screen">
        <div className="bab-irab-empty">
          <h2>
            Bank soalan tidak ditemui
          </h2>

          <button
            type="button"
            onClick={() =>
              navigate("/kota-irab")
            }
          >
            KEMBALI
          </button>
        </div>
      </main>
    );
  }

  /* =======================================================
     MAIN
  ======================================================= */

  return (
    <main className="bab-irab-screen">

      <section className="bab-irab-stage">

        {/* =================================================
            BACKGROUND
        ================================================= */}

        <img
          src={QUIZ_BACKGROUND}
          className="bab-irab-background"
          alt=""
          aria-hidden="true"
          draggable="false"
        />

        {/* =================================================
            ONLY CENTER QUIZ PANEL
        ================================================= */}

        {!finished &&
          currentQuestion && (
            <article className="bab-irab-question-card">

              {/* ---------------------------------------------
                  LABEL
              --------------------------------------------- */}
             

              {/* ---------------------------------------------
                  ARABIC DISPLAY
              --------------------------------------------- */}

              {getDisplay(
                currentQuestion
              ) && (
                <div
                  className="bab-irab-display"
                  dir="rtl"
                >
                  {getDisplay(
                    currentQuestion
                  )}
                </div>
              )}

              {/* ---------------------------------------------
                  QUESTION
              --------------------------------------------- */}

              <p className="bab-irab-question">
                {currentQuestion.question}
              </p>

              <div className="bab-irab-divider" />

              {/* ---------------------------------------------
                  OPTIONS
              --------------------------------------------- */}

              <div className="bab-irab-options">

                {(
                  currentQuestion.options ||
                  []
                ).map(
                  (option, index) => (
                    <button
                      key={`${option}-${index}`}
                      type="button"
                      className={getOptionClass(
                        option
                      )}
                      onClick={() =>
                        jawab(option)
                      }
                      disabled={
                        selectedAnswer !== null
                      }
                    >

                      <span className="bab-irab-option-letter">
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>

                      <span className="bab-irab-option-text">
                        {option}
                      </span>

                      {selectedAnswer &&
                        option ===
                          currentQuestion.answer && (
                          <span className="bab-irab-feedback">
                            ✓
                          </span>
                        )}

                      {selectedAnswer ===
                        option &&
                        option !==
                          currentQuestion.answer && (
                          <span className="bab-irab-feedback">
                            ×
                          </span>
                        )}

                    </button>
                  )
                )}

              </div>

              {/* ---------------------------------------------
                  QUESTION NUMBERS
              --------------------------------------------- */}

              <div className="bab-irab-question-navigation">

                {Array.from(
                  {
                    length:
                      questions.length,
                  },
                  (_, index) => (
                    <span
                      key={index}
                      className={[
                        "bab-irab-number",
                        index ===
                          currentIndex
                          ? "active"
                          : "",
                        index <
                          currentIndex
                          ? "done"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {index + 1}
                    </span>
                  )
                )}

              </div>

            </article>
          )}

        {/* =================================================
            RESULT
        ================================================= */}

        {finished &&
          result && (
            <div className="bab-irab-result-overlay">

              <div
                className={`bab-irab-result-card ${
                  result.passed
                    ? "passed"
                    : "failed"
                }`}
              >

                <div
                  className="bab-irab-result-arabic"
                  dir="rtl"
                >
                  الإِعْرَابُ
                </div>

                <div className="bab-irab-result-icon">
                  {result.passed
                    ? "🏆"
                    : "📖"}
                </div>

                <h2>
                  {result.passed
                    ? "TAHNIAH!"
                    : "BELUM BERJAYA"}
                </h2>

                <p className="bab-irab-result-message">
                  {result.passed
                    ? "Anda berjaya menjawab semua soalan dengan betul."
                    : "Teruskan mengulang kaji dan cuba sekali lagi."}
                </p>

                <div className="bab-irab-result-score">
                  <span>
                    SKOR
                  </span>

                  <strong>
                    {result.correct} /{" "}
                    {questions.length}
                  </strong>
                </div>

                <p className="bab-irab-result-detail">
                  Betul:{" "}
                  {result.correct}
                  {" · "}
                  Belum tepat:{" "}
                  {result.wrong}
                </p>

                <button
                  type="button"
                  className={`bab-irab-result-button ${
                    result.passed
                      ? "passed"
                      : "failed"
                  }`}
                  onClick={() => {
                    if (
                      result.passed
                    ) {
                      navigate(
                        "/bab-irab-selesai"
                      );
                    } else {
                      resetQuiz();
                    }
                  }}
                >
                  {result.passed
                    ? "SELESAI"
                    : "CUBA LAGI"}
                </button>

              </div>

            </div>
          )}

      </section>

    </main>
  );
}