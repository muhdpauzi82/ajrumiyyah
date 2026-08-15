import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LatihanMubtada.css";
import mubtadaQuestions from "./mubtadaQuestions";

const marfuatBg =
  "/images/kotaMarfuat/bg-marfuat.webp";

const QUESTIONS = mubtadaQuestions;

export default function LatihanMubtada() {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [correctCount, setCorrectCount] =
    useState(0);

  const [finished, setFinished] =
    useState(false);

  const current =
    QUESTIONS[questionIndex];

  /* =====================================================
     JAWAB SOALAN
  ===================================================== */

  function handleAnswer(index) {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(index);

    const isCorrect =
      index === current.answer;

    /*
     * Kira markah sebenar termasuk soalan terakhir.
     */
    const newCorrectCount =
      correctCount +
      (isCorrect ? 1 : 0);

    if (isCorrect) {
      setCorrectCount(
        (count) => count + 1
      );
    }

    setTimeout(() => {

      /* MASIH ADA SOALAN */

      if (
        questionIndex <
        QUESTIONS.length - 1
      ) {
        setQuestionIndex(
          (currentIndex) =>
            currentIndex + 1
        );

        setSelectedAnswer(null);

        return;
      }

      /* SOALAN TERAKHIR */

      setFinished(true);

      /*
       * HANYA 100% BETUL dianggap selesai.
       */
      if (
        newCorrectCount ===
        QUESTIONS.length
      ) {
        localStorage.setItem(
          "kitabMubtadaDone",
          "true"
        );
      }

    }, 900);
  }

  /* =====================================================
     SELESAI 100%
  ===================================================== */

  function handleFinish() {
    navigate("/perpustakaan-marfuat");
  }

  /* =====================================================
     CUBA SEMULA
  ===================================================== */

  function handleRetry() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectCount(0);
    setFinished(false);

    localStorage.removeItem(
      "kitabMubtadaDone"
    );
  }

  /* =====================================================
     RESULT
  ===================================================== */

  if (finished) {

    const passed =
      correctCount ===
      QUESTIONS.length;

    return (
      <main
        className="latihan-mubtada-screen"
        style={{
          backgroundImage:
            `url(${marfuatBg})`,
        }}
      >

        <section className="latihan-mubtada-result">

          <span className="result-badge">
            {passed
              ? "LATIHAN SELESAI"
              : "CUBA LAGI"}
          </span>

          <h1>
            {passed
              ? "تَهَانِينَا!"
              : "حَاوِلْ مَرَّةً أُخْرَى"}
          </h1>

          <p className="result-score">
            {correctCount} /{" "}
            {QUESTIONS.length}
          </p>

          <p className="result-text">

            {passed
              ? "Tahniah! Semua soalan Mubtada' telah dijawab dengan betul."
              : "Belum semua jawapan betul. Ulangi latihan sehingga mendapat markah penuh."}

          </p>

          {passed ? (

            <button
              type="button"
              className="result-button"
              onClick={handleFinish}
            >
              Seterusnya →
            </button>

          ) : (

            <button
              type="button"
              className="result-button"
              onClick={handleRetry}
            >
              Cuba Semula
            </button>

          )}

        </section>

      </main>
    );
  }

  /* =====================================================
     PROGRESS
  ===================================================== */

  const progress =
    ((questionIndex + 1) /
      QUESTIONS.length) *
    100;

  /* =====================================================
     LATIHAN
  ===================================================== */

  return (
    <main
      className="latihan-mubtada-screen"
      style={{
        backgroundImage:
          `url(${marfuatBg})`,
      }}
    >

      <section className="latihan-mubtada-panel">

        <header className="latihan-mubtada-header">

          <span>
            بَابُ الْمَرْفُوعَاتِ
          </span>

          <h1>
            Latihan Mubtada'
          </h1>

        </header>

        <div className="latihan-mubtada-progress">

          <div
            className="latihan-mubtada-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="latihan-mubtada-question-number">

          Soalan{" "}
          {questionIndex + 1} /{" "}
          {QUESTIONS.length}

        </div>

        <article className="latihan-mubtada-card">

          <h2>
            {current.question}
          </h2>

          <div className="latihan-mubtada-options">

            {current.options.map(
              (option, index) => {

                const isSelected =
                  selectedAnswer === index;

                const isCorrect =
                  selectedAnswer !== null &&
                  index === current.answer;

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={
                      selectedAnswer !== null
                    }
                    className={[
                      "latihan-mubtada-option",

                      isSelected
                        ? "selected"
                        : "",

                      isCorrect
                        ? "correct"
                        : "",

                    ]
                      .filter(Boolean)
                      .join(" ")}

                    onClick={() =>
                      handleAnswer(index)
                    }
                  >

                    <span className="option-number">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <span>
                      {option}
                    </span>

                  </button>
                );
              }
            )}

          </div>

        </article>

      </section>

    </main>
  );
}