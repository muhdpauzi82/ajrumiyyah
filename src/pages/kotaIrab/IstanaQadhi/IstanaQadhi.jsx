




import { completeKotaIrab } from "../../../utils/gameProgress";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { qadhiQuestions } from "./qadhiQuestions";
import "./IstanaQadhi.css";

/* =====================================================
   ASET
===================================================== */

const ISTANA_BG =
  "/images/kotaIrab/istanaQadhi/istana-qadhi-bg.webp";

const QADHI_IMAGES = {
  neutral:
    "/images/kotaIrab/istanaQadhi/qadhi-neutral.webp",

  happy:
    "/images/kotaIrab/istanaQadhi/qadhi-happy.webp",

  warning:
    "/images/kotaIrab/istanaQadhi/qadhi-warning.webp",
};

/* =====================================================
   BANK KES ISTANA QADHI
===================================================== */

/* =====================================================
   FUNGSI BANTUAN
===================================================== */

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

function prepareCases(questionBank) {
  return shuffleArray(questionBank).map(
    (question) => ({
      ...question,

      options: shuffleArray(
        question.options
      ),
    })
  );
}

/* =====================================================
   KOMPONEN
===================================================== */

export default function IstanaQadhi() {
  const navigate = useNavigate();

  const questions = useMemo(
  () => prepareCases(qadhiQuestions),
  []
);

  const [phase, setPhase] =
    useState("intro");

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [qadhiMood, setQadhiMood] =
    useState("neutral");

  const [completedCases, setCompletedCases] =
    useState([]);

  const currentQuestion =
    questions[questionIndex];

  const totalQuestions =
    questions.length;

  const isLastQuestion =
    questionIndex === totalQuestions - 1;

  /* =====================================================
     MULAKAN ISTANA
  ===================================================== */

  function masukIstana() {
    setPhase("briefing");
    setQadhiMood("neutral");
  }

  function mulaPerbicaraan() {
    setQuestionIndex(0);
    setSelectedAnswer("");
    setCompletedCases([]);
    setQadhiMood("neutral");
    setPhase("playing");
  }

  /* =====================================================
     JAWAB SOALAN
  ===================================================== */

  function jawab(option) {
    if (
      selectedAnswer ||
      phase !== "playing"
    ) {
      return;
    }

    setSelectedAnswer(option);

    const betul =
      option === currentQuestion.answer;

    if (!betul) {
      setQadhiMood("warning");
      setPhase("wrong");

      return;
    }

    setQadhiMood("happy");

    setCompletedCases((current) => [
      ...current,
      currentQuestion.id,
    ]);

    setPhase("correct");
  }

  /* =====================================================
     KES SETERUSNYA
  ===================================================== */

  function kesSeterusnya() {
    if (isLastQuestion) {
      setQadhiMood("happy");
      setPhase("completed");

      return;
    }

    setQuestionIndex(
      (current) => current + 1
    );

    setSelectedAnswer("");
    setQadhiMood("neutral");
    setPhase("playing");
  }

  /* =====================================================
     ULANG DARI AWAL
  ===================================================== */

  function ulangPerbicaraan() {
    setQuestionIndex(0);
    setSelectedAnswer("");
    setCompletedCases([]);
    setQadhiMood("neutral");
    setPhase("playing");
  }

  /* =====================================================
     TUNTUT ARTIFAK
  ===================================================== */

 function bukaArtifak() {
  completeKotaIrab();

  localStorage.setItem(
    "istanaQadhiDone",
    "true"
  );

  localStorage.setItem(
    "artifact_irab",
    "true"
  );

  localStorage.setItem(
    "kotaIrabDone",
    "true"
  );

  localStorage.setItem(
    "marfuatUnlocked",
    "true"
  );

  setPhase("reward");
}

  function teruskanPengembaraan() {
    navigate("/worldmap");
  }

  /* =====================================================
     KELAS JAWAPAN
  ===================================================== */

  function getAnswerClass(option) {
    if (!selectedAnswer) {
      return "qadhi-answer";
    }

    if (option === currentQuestion.answer) {
      return "qadhi-answer correct";
    }

    if (option === selectedAnswer) {
      return "qadhi-answer wrong";
    }

    return "qadhi-answer muted";
  }

  return (
    <main className="istana-screen">
      <section className="istana-stage">

        {/* BACKGROUND */}

        <img
          src={ISTANA_BG}
          alt=""
          className="istana-background"
          draggable="false"
        />

        {/* KEMBALI */}

        {phase === "intro" && (
          <button
            type="button"
            className="istana-back"
            onClick={() =>
              navigate("/kota-irab")
            }
          >
            ← KOTA I‘RAB
          </button>
        )}

        {/* =============================================
            INTRO
        ============================================== */}

        {phase === "intro" && (
          <section className="istana-intro-panel">
            <span className="istana-location">
              LOKASI 6
            </span>

            <div className="qadhi-emblem">
              ⚖
            </div>

            <h1>ISTANA QADHI</h1>

            <h2>Penjaga Ilmu I‘rab</h2>

            <p>
              Setelah kamu melalui seluruh Kota
              I‘rab, kini buktikan bahawa kamu
              benar-benar memahami ilmu I‘rab.
            </p>

            <button
              type="button"
              onClick={masukIstana}
            >
              MASUK
            </button>
          </section>
        )}

        {/* =============================================
            TAKLIMAT QADHI
        ============================================== */}

        {phase === "briefing" && (
          <>
            <img
              src={QADHI_IMAGES.neutral}
              alt="Qadhi Besar"
              className="qadhi-character briefing"
              draggable="false"
            />

            <section className="qadhi-dialog-panel">
              <span
                className="qadhi-greeting"
                dir="rtl"
                lang="ar"
              >
                السَّلَامُ عَلَيْكُمْ
              </span>

              <h2>Qadhi Besar</h2>

              <p>
                Aku akan mengemukakan beberapa
                kes. Tugasmu ialah mengeluarkan
                keputusan yang tepat.
              </p>

              <p>
                Jika satu keputusan tersilap,
                perbicaraan perlu diulang dari
                awal.
              </p>

              <button
                type="button"
                onClick={mulaPerbicaraan}
              >
                SAYA FAHAM
              </button>
            </section>
          </>
        )}

        {/* =============================================
            SOALAN / FAIL KES
        ============================================== */}

        {phase === "playing" && (
          <>
            <img
              src={QADHI_IMAGES.neutral}
              alt="Qadhi Besar"
              className="qadhi-character playing"
              draggable="false"
            />

            <section className="qadhi-case-panel">
              <span className="case-label">
                KES {questionIndex + 1}
              </span>

              <div
  className="qadhi-sentence"
  dir="rtl"
  lang="ar"
>
  {[...currentQuestion.sentenceParts]
    .reverse()
    .map((part, index) => (
      <span
        key={`${currentQuestion.id}-${index}`}
        className={[
          "qadhi-sentence-part",
          part.highlight
            ? "qadhi-target-word"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {part.text}
      </span>
    ))}
</div>

              <div className="qadhi-target-label">
                <span>Kalimah yang dikaji</span>

                <strong
                  dir="rtl"
                  lang="ar"
                >
                  {currentQuestion.target}
                </strong>
              </div>
            </section>

            <section className="qadhi-question-panel">
              <h2>
                {currentQuestion.question}
              </h2>

              <div className="qadhi-answer-list">
                {currentQuestion.options.map(
                  (option, index) => (
                    <button
                      type="button"
                      key={option}
                      className={getAnswerClass(
                        option
                      )}
                      onClick={() =>
                        jawab(option)
                      }
                    >
                      <span>
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>

                      <strong
                        dir="rtl"
                        lang="ar"
                      >
                        {option}
                      </strong>
                    </button>
                  )
                )}
              </div>
            </section>
          </>
        )}

        {/* =============================================
            JAWAPAN BETUL
        ============================================== */}

        {phase === "correct" && (
          <>
            <img
              src={QADHI_IMAGES.happy}
              alt="Qadhi gembira"
              className="qadhi-character verdict"
              draggable="false"
            />

            <section className="qadhi-verdict correct">
              <span className="verdict-symbol">
                ✓
              </span>

              <span
                className="verdict-arabic"
                dir="rtl"
                lang="ar"
              >
                أَحْسَنْتَ
              </span>

              <h2>Keputusan diterima</h2>

              <p>
                {currentQuestion.explanation}
              </p>

              <button
                type="button"
                onClick={kesSeterusnya}
              >
                {isLastQuestion
                  ? "SELESAIKAN PERBICARAAN"
                  : "KES SETERUSNYA →"}
              </button>
            </section>
          </>
        )}

        {/* =============================================
            JAWAPAN SALAH
        ============================================== */}

        {phase === "wrong" && (
          <>
            <img
              src={QADHI_IMAGES.warning}
              alt="Qadhi memberi amaran"
              className="qadhi-character verdict"
              draggable="false"
            />

            <section className="qadhi-verdict wrong">
              <span className="verdict-symbol">
                ×
              </span>

              <span
                className="verdict-arabic"
                dir="rtl"
                lang="ar"
              >
                القَرَارُ غَيْرُ صَحِيحٍ
              </span>

              <h2>Keputusan tidak tepat</h2>

              <p>
                Sila teliti semula ilmu I‘rab.
                Perbicaraan akan diulang dari
                awal.
              </p>

              <button
                type="button"
                onClick={ulangPerbicaraan}
              >
                ULANG DARI AWAL
              </button>
            </section>
          </>
        )}

        {/* =============================================
            REKOD MAHKAMAH
        ============================================== */}

        {[
          "playing",
          "correct",
          "wrong",
        ].includes(phase) && (
          <aside className="qadhi-record-panel">
            <h3>REKOD MAHKAMAH</h3>

            <div className="qadhi-record-list">
              {questions.map(
                (question, index) => {
                  const completed =
                    completedCases.includes(
                      question.id
                    );

                  const current =
                    index === questionIndex;

                  const wrongCurrent =
                    phase === "wrong" &&
                    current;

                  return (
                    <div
                      key={question.id}
                      className={[
                        "qadhi-record-item",
                        completed
                          ? "completed"
                          : "",
                        current
                          ? "current"
                          : "",
                        wrongCurrent
                          ? "rejected"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <span>{index + 1}</span>

                      <strong>
                        {completed
                          ? "✓"
                          : wrongCurrent
                            ? "×"
                            : "○"}
                      </strong>
                    </div>
                  );
                }
              )}
            </div>
          </aside>
        )}

        {/* =============================================
            SEMUA KES SELESAI
        ============================================== */}

        {phase === "completed" && (
          <>
            <img
              src={QADHI_IMAGES.happy}
              alt="Qadhi mengucapkan tahniah"
              className="qadhi-character completed"
              draggable="false"
            />

            <section className="qadhi-complete-panel">
              <span
                dir="rtl"
                lang="ar"
              >
                لَقَدْ أَحْسَنْتَ
              </span>

              <h1>Tahniah!</h1>

              <p>
                Semua keputusan kamu tepat.
                Kamu kini diiktiraf sebagai
                Pengembara Kota I‘rab.
              </p>

              <button
                type="button"
                onClick={bukaArtifak}
              >
                TUNTUT ARTIFAK I‘RAB
              </button>
            </section>
          </>
        )}

        {/* =============================================
            ARTIFAK DAN DUNIA BAHARU
        ============================================== */}

        {phase === "reward" && (
          <section className="qadhi-reward-panel">
            <div className="qadhi-artifact">
              <span
                dir="rtl"
                lang="ar"
              >
                الإِعْرَابُ
              </span>
            </div>

            <span className="reward-kicker">
              ARTIFAK DIPEROLEH
            </span>

            <h1>ARTIFAK I‘RAB</h1>

            <p>
              Kota I‘rab telah diselesaikan dan
              Kota Marfu‘at kini telah dibuka.
            </p>

            <div className="new-world-panel">
              <span>DUNIA 3</span>

              <strong>KOTA MARFU‘AT</strong>

              <small>TELAH DIBUKA</small>
            </div>

            <button
              type="button"
              onClick={teruskanPengembaraan}
            >
              TERUSKAN PENGEMBARAAN →
            </button>
          </section>
        )}

      </section>
    </main>
  );
}