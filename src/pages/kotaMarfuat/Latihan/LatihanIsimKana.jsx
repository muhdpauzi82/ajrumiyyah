import { useState } from "react";
import { useNavigate } from "react-router-dom";

import isimKanaQuestions from "./isimKanaQuestions";
import "./LatihanIsimKana.css";

const marfuatBg =
  "/images/kotaMarfuat/bg-marfuat.webp";

const QUESTIONS = isimKanaQuestions;

export default function LatihanIsimKana() {
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
     * Kira jawapan terkini termasuk
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

      /* -------------------------------
         MASIH ADA SOALAN
      -------------------------------- */

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

      /* -------------------------------
         SOALAN TERAKHIR
      -------------------------------- */

      setFinished(true);

      /*
       * Hanya 100% akan membuka
       * Khabar Inna.
       */
      if (
        newCorrectCount ===
        QUESTIONS.length
      ) {
        localStorage.setItem(
          "kitabIsimKanaDone",
          "true"
        );
      }

    }, 900);
  }

  /* =====================================================
     KEMBALI KE PERPUSTAKAAN
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
     * Pastikan kunci kekal terkunci
     * jika belum mendapat 100%.
     */
    localStorage.removeItem(
      "kitabIsimKanaDone"
    );
  }

  /* =====================================================
     KEPUTUSAN
  ===================================================== */

  if (finished) {

    const passed =
      correctCount ===
      QUESTIONS.length;

    return (
      <main
        className="latihan-isim-kana-screen"
        style={{
          backgroundImage:
            `url(${marfuatBg})`,
        }}
      >

        <section className="latihan-isim-kana-result">

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
              ? "Tahniah! Semua soalan Isim Kāna telah dijawab dengan betul. Kitab Khabar Inna kini terbuka."
              : "Belum semua jawapan betul. Ulangi latihan sehingga mendapat markah penuh untuk membuka bab seterusnya."}

          </p>

          {passed ? (

            <button
              type="button"
              className="result-button"
              onClick={handleFinish}
            >
              Kembali ke Perpustakaan →
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
      className="latihan-isim-kana-screen"
      style={{
        backgroundImage:
          `url(${marfuatBg})`,
      }}
    >

      <section className="latihan-isim-kana-panel">

        <header className="latihan-isim-kana-header">

          <span>
            بَابُ الْمَرْفُوعَاتِ
          </span>

          <h1>
            Latihan اسم كان
          </h1>

        </header>

        <div className="latihan-isim-kana-progress">

          <div
            className="latihan-isim-kana-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="latihan-isim-kana-question-number">

          Soalan{" "}
          {questionIndex + 1} /{" "}
          {QUESTIONS.length}

        </div>

        <article className="latihan-isim-kana-card">

          <h2>
            {current.question}
          </h2>

          <div className="latihan-isim-kana-options">

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
                      "latihan-isim-kana-option",

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

        <footer className="latihan-isim-kana-footer">
          Pilih jawapan yang paling tepat
        </footer>

      </section>

    </main>
  );
}