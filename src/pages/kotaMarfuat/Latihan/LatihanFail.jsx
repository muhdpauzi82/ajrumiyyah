import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LatihanFail.css";
import failQuestions from "./failQuestions";

const marfuatBg =
  "/images/kotaMarfuat/bg-marfuat.webp";

const QUESTIONS = failQuestions;

export default function LatihanFail() {
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

    const newCorrectCount =
      correctCount + (isCorrect ? 1 : 0);

    if (isCorrect) {
      setCorrectCount(
        (count) => count + 1
      );
    }

    setTimeout(() => {

      /* -----------------------------------------------
         MASIH ADA SOALAN
      ------------------------------------------------ */

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

      /* -----------------------------------------------
         SOALAN TERAKHIR
      ------------------------------------------------ */

      setFinished(true);

      /*
       * HANYA jika semua soalan betul,
       * Fa'il dianggap selesai.
       */
      if (
        newCorrectCount ===
        QUESTIONS.length
      ) {
        localStorage.setItem(
          "kitabFailDone",
          "true"
        );
      }

    }, 900);
  }

  /* =====================================================
     SELESAI — LULUS 100%
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

    /*
     * Pastikan status selesai dibuang
     * jika latihan belum mendapat 100%.
     */
    localStorage.removeItem(
      "kitabFailDone"
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
        className="latihan-fail-screen"
        style={{
          backgroundImage:
            `url(${marfuatBg})`,
        }}
      >

        <div className="latihan-fail-overlay" />

        <section className="latihan-fail-result">

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
              ? "Tahniah! Semua soalan Fa'il telah dijawab dengan betul."
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
      className="latihan-fail-screen"
      style={{
        backgroundImage:
          `url(${marfuatBg})`,
      }}
    >

      <div className="latihan-fail-overlay" />

      <section className="latihan-fail-panel">

        <header className="latihan-fail-header">

          <span>
            بَابُ الْمَرْفُوعَاتِ
          </span>

          <h1>
            Latihan فاعل
          </h1>

        </header>

        <div className="latihan-fail-progress">

          <div
            className="latihan-fail-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="latihan-fail-question-number">

          Soalan{" "}
          {questionIndex + 1} /{" "}
          {QUESTIONS.length}

        </div>

        <article className="latihan-fail-card">

          <h2>
            {current.question}
          </h2>

          <div className="latihan-fail-options">

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
                      "latihan-fail-option",

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

        <footer className="latihan-fail-footer">

          <span>
            Pilih jawapan yang paling tepat
          </span>

        </footer>

      </section>

    </main>
  );
}