import { useState } from "react";
import { useNavigate } from "react-router-dom";

import khabarInnaQuestions from "./khabarInnaQuestions";
import "./LatihanKhabarInna.css";

const marfuatBg =
  "/images/kotaMarfuat/bg-marfuat.webp";

const QUESTIONS = khabarInnaQuestions;

export default function LatihanKhabarInna() {
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
     * Kira markah terkini.
     * Ini penting untuk soalan terakhir.
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

      /* ===============================================
         MASIH ADA SOALAN
      =============================================== */

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


      /* ===============================================
         SOALAN TERAKHIR
      =============================================== */

      setFinished(true);


      /*
       * HANYA 100% BETUL
       * membuka bab التابع للمرفوع
       */
      if (
        newCorrectCount ===
        QUESTIONS.length
      ) {

        localStorage.setItem(
          "kitabKhabarInnaDone",
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
     * Jika belum mendapat 100%,
     * pastikan kunci kekal tertutup.
     */
    localStorage.removeItem(
      "kitabKhabarInnaDone"
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
        className="latihan-khabar-inna-screen"
        style={{
          backgroundImage:
            `url(${marfuatBg})`,
        }}
      >

        <section className="latihan-khabar-inna-result">

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

              ? "Tahniah! Semua soalan Khabar Inna telah dijawab dengan betul. Bab Tabi' Marfu' kini terbuka."

              : "Belum semua jawapan betul. Ulangi latihan sehingga mendapat markah penuh untuk membuka bab seterusnya."

            }

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
      className="latihan-khabar-inna-screen"
      style={{
        backgroundImage:
          `url(${marfuatBg})`,
      }}
    >

      <section className="latihan-khabar-inna-panel">

        <header className="latihan-khabar-inna-header">

          <span>
            بَابُ الْمَرْفُوعَاتِ
          </span>

          <h1>
            Latihan خبر إنّ
          </h1>

        </header>


        {/* PROGRESS */}

        <div className="latihan-khabar-inna-progress">

          <div
            className="latihan-khabar-inna-progress-fill"
            style={{
              width:
                `${progress}%`,
            }}
          />

        </div>


        {/* NOMBOR SOALAN */}

        <div className="latihan-khabar-inna-question-number">

          Soalan{" "}
          {questionIndex + 1}
          {" / "}
          {QUESTIONS.length}

        </div>


        {/* SOALAN */}

        <article className="latihan-khabar-inna-card">

          <h2>
            {current.question}
          </h2>


          {/* PILIHAN */}

          <div className="latihan-khabar-inna-options">

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
                      "latihan-khabar-inna-option",

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


        {/* FOOTER */}

        <footer className="latihan-khabar-inna-footer">

          Pilih jawapan yang paling tepat

        </footer>

      </section>

    </main>
  );
}