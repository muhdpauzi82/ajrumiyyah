import { useState } from "react";
import { useNavigate } from "react-router-dom";

import tabiMarfuQuestions from "./TabiMarfuQuestions";
import "./LatihanTabiMarfu.css";

const marfuatBg =
  "/images/kotaMarfuat/bg-marfuat.webp";

const TOTAL_QUESTIONS =
  tabiMarfuQuestions.length;

export default function LatihanTabiMarfu() {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const current =
    tabiMarfuQuestions[questionIndex];

  function handleAnswer(index) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    const isCorrect =
      index === current.answer;

    const newCorrectCount =
      correctCount + (isCorrect ? 1 : 0);

    if (isCorrect) {
      setCorrectCount(newCorrectCount);
    }

    setTimeout(() => {
      /* ================================================
         MASIH ADA SOALAN
      ================================================ */

      if (
        questionIndex <
        TOTAL_QUESTIONS - 1
      ) {
        setQuestionIndex(
          (currentIndex) =>
            currentIndex + 1
        );

        setSelectedAnswer(null);

        return;
      }

      /* ================================================
         SOALAN TERAKHIR
         HANYA LULUS JIKA 100% BETUL
      ================================================ */

      const passed =
        newCorrectCount === TOTAL_QUESTIONS;

      if (passed) {
        /*
         * Status latihan Tabi' Marfu'
         */
        localStorage.setItem(
          "tabiMarfuLatihanDone",
          "true"
        );

        /*
         * BUKA LORONG LATIHAN
         *
         * KotaMarfuat.jsx memang menggunakan
         * perpustakaanMarfuatDone untuk membuka
         * Lorong Latihan.
         */
        localStorage.setItem(
          "perpustakaanMarfuatDone",
          "true"
        );
      } else {
        /*
         * Gagal 100%.
         * Jangan buka Lorong.
         */
        localStorage.removeItem(
          "tabiMarfuLatihanDone"
        );

        localStorage.removeItem(
          "perpustakaanMarfuatDone"
        );
      }

      setCorrectCount(newCorrectCount);
      setFinished(true);
    }, 900);
  }

  /* ================================================
     CUBA SEMULA
  ================================================ */

  function handleRetry() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectCount(0);
    setFinished(false);

    localStorage.removeItem(
      "tabiMarfuLatihanDone"
    );

    localStorage.removeItem(
      "perpustakaanMarfuatDone"
    );
  }

  /* ================================================
     SELESAI
  ================================================ */

  function handleFinish() {
    const passed =
      correctCount === TOTAL_QUESTIONS;

    if (!passed) return;

    /*
     * Pastikan status disimpan sekali lagi
     * sebelum kembali ke Kota Marfu'at.
     */
    localStorage.setItem(
      "tabiMarfuLatihanDone",
      "true"
    );

    localStorage.setItem(
      "perpustakaanMarfuatDone",
      "true"
    );

    /*
     * KEMBALI KE KOTA MARFU'AT
     */
    navigate("/kota-marfuat");
  }

  /* ================================================
     KEPUTUSAN
  ================================================ */

  if (finished) {
    const passed =
      correctCount === TOTAL_QUESTIONS;

    return (
      <main
        className="latihan-tabi-marfu-screen"
        style={{
          backgroundImage:
            `url(${marfuatBg})`,
        }}
      >
        <section className="latihan-tabi-marfu-result">

          <span className="result-badge">
            {passed
              ? "LATIHAN SELESAI"
              : "BELUM SELESAI"}
          </span>

          <h1>
            {passed
              ? "تَهَانِينَا!"
              : "حَاوِلْ مَرَّةً أُخْرَى"}
          </h1>

          <p className="result-score">
            {correctCount} / {TOTAL_QUESTIONS}
          </p>

          {passed ? (
            <p className="result-text">
              Tahniah! Kamu telah menjawab
              semua soalan Tabi‘ Marfu‘
              dengan betul.
            </p>
          ) : (
            <p className="result-text">
              Belum selesai. Kamu perlu
              menjawab semua soalan dengan
              betul untuk membuka
              Lorong Latihan.
            </p>
          )}

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

  /* ================================================
     PROGRESS
  ================================================ */

  const progress =
    ((questionIndex + 1) /
      TOTAL_QUESTIONS) *
    100;

  /* ================================================
     LATIHAN
  ================================================ */

  return (
    <main
      className="latihan-tabi-marfu-screen"
      style={{
        backgroundImage:
          `url(${marfuatBg})`,
      }}
    >
      <section className="latihan-tabi-marfu-panel">

        <header className="latihan-tabi-marfu-header">

          <span>
            بَابُ الْمَرْفُوعَاتِ
          </span>

          <h1>
            Latihan التابع للمرفوع
          </h1>

        </header>

        <div className="latihan-tabi-marfu-progress">

          <div
            className="latihan-tabi-marfu-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="latihan-tabi-marfu-question-number">
          Soalan {questionIndex + 1} / {TOTAL_QUESTIONS}
        </div>

        <article className="latihan-tabi-marfu-card">

          <h2>
            {current.question}
          </h2>

          <div className="latihan-tabi-marfu-options">

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
                      "latihan-tabi-marfu-option",
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

        <footer className="latihan-tabi-marfu-footer">
          Pilih jawapan yang paling tepat
        </footer>

      </section>
    </main>
  );
}