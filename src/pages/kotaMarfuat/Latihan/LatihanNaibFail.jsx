import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LatihanNaibFail.css";
import naibFailQuestions from "./naibFailQuestions";

const marfuatBg =
  "/images/kotaMarfuat/bg-marfuat.webp";

const QUESTIONS = naibFailQuestions;

export default function LatihanNaibFail() {
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
     * Kira markah sebenar termasuk jawapan
     * soalan terakhir.
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

      /* -----------------------------------------------
         MASIH ADA SOALAN
      ----------------------------------------------- */

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
      ----------------------------------------------- */

      setFinished(true);

      /*
       * HANYA 100% BETUL dianggap selesai.
       */
      if (
        newCorrectCount ===
        QUESTIONS.length
      ) {
        localStorage.setItem(
          "kitabNaibFailDone",
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

    /*
     * Pastikan Naib Fa'il belum dianggap selesai
     * jika markah bukan 100%.
     */
    localStorage.removeItem(
      "kitabNaibFailDone"
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
        className="naib-fail-screen"
        style={{
          backgroundImage:
            `url(${marfuatBg})`,
        }}
      >

        <section className="naib-fail-result">

          <span className="naib-result-badge">
            {passed
              ? "LATIHAN SELESAI"
              : "CUBA LAGI"}
          </span>

          <h1>
            {passed
              ? "تَهَانِينَا!"
              : "حَاوِلْ مَرَّةً أُخْرَى"}
          </h1>

          <p className="naib-result-score">
            {correctCount} /{" "}
            {QUESTIONS.length}
          </p>

          <p className="naib-result-text">

            {passed
              ? "Tahniah! Semua soalan Naib Fa'il telah dijawab dengan betul."
              : "Belum semua jawapan betul. Ulangi latihan sehingga mendapat markah penuh."}

          </p>

          {passed ? (

            <button
              type="button"
              className="naib-result-button"
              onClick={handleFinish}
            >
              Seterusnya →
            </button>

          ) : (

            <button
              type="button"
              className="naib-result-button"
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
      className="naib-fail-screen"
      style={{
        backgroundImage:
          `url(${marfuatBg})`,
      }}
    >

      <section className="naib-fail-panel">

        <header className="naib-fail-header">

          <span>
            بَابُ الْمَرْفُوعَاتِ
          </span>

          <h1>
            Latihan نائب الفاعل
          </h1>

        </header>

        <div className="naib-fail-progress">

          <div
            className="naib-fail-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="naib-fail-question-number">

          Soalan{" "}
          {questionIndex + 1} /{" "}
          {QUESTIONS.length}

        </div>

        <article className="naib-fail-card">

          <h2>
            {current.question}
          </h2>

          <div className="naib-fail-options">

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
                      "naib-fail-option",

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

                    <span className="naib-option-number">
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

        <footer className="naib-fail-footer">
          Pilih jawapan yang paling tepat
        </footer>

      </section>

    </main>
  );
}