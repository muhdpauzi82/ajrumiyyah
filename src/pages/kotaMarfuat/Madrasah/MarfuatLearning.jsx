import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/MarfuatLearning.css";

const TOPICS = [
  {
    id: 1,
    key: "fail",
    arabic: "الفاعل",
    malay: "Bab Fa‘il",
    route: "/kitab-fail",
    storageKey: "failLearningDone",
  },
  {
    id: 2,
    key: "naibFail",
    arabic: "نائب الفاعل",
    malay: "Bab Naib Fa‘il",
    route: "/kitab-naib-fail",
    storageKey: "naibFailLearningDone",
  },
  {
    id: 3,
    key: "mubtada",
    arabic: "المبتدأ",
    malay: "Bab Mubtada‘",
    route: "/kitab-mubtada",
    storageKey: "mubtadaLearningDone",
  },
  {
    id: 4,
    key: "khabar",
    arabic: "الخبر",
    malay: "Bab Khabar",
    route: "/kitab-khabar",
    storageKey: "khabarLearningDone",
  },
  {
    id: 5,
    key: "isimKana",
    arabic: "اسم كان",
    malay: "Bab Isim Kana",
    route: "/kitab-isim-kana",
    storageKey: "isimKanaLearningDone",
  },
  {
    id: 6,
    key: "khabarInna",
    arabic: "خبر إن",
    malay: "Bab Khabar Inna",
    route: "/kitab-khabar-inna",
    storageKey: "khabarInnaLearningDone",
  },
  {
    id: 7,
    key: "tabiMarfu",
    arabic: "التَّابِعُ لِلْمَرْفُوعِ",
    malay: "Bab Tabi‘ Marfu‘",
    route: "/kitab-tabi-marfu",
    storageKey: "tabiMarfuLearningDone",
  },
];

function bacaStatus() {
  return TOPICS.reduce((result, topic) => {
    result[topic.key] =
      localStorage.getItem(topic.storageKey) === "true";

    return result;
  }, {});
}

export default function MarfuatLearning() {
  const navigate = useNavigate();

  const [completed, setCompleted] = useState(bacaStatus);

  useEffect(() => {
    function kemasKiniStatus() {
      setCompleted(bacaStatus());
    }

    kemasKiniStatus();

    window.addEventListener("focus", kemasKiniStatus);
    window.addEventListener("pageshow", kemasKiniStatus);
    window.addEventListener("storage", kemasKiniStatus);

    return () => {
      window.removeEventListener("focus", kemasKiniStatus);
      window.removeEventListener("pageshow", kemasKiniStatus);
      window.removeEventListener("storage", kemasKiniStatus);
    };
  }, []);

  const completedCount = TOPICS.filter(
    (topic) => completed[topic.key]
  ).length;

  function isUnlocked(index) {
    // Bab pertama sentiasa terbuka.
    if (index === 0) return true;

    // Bab berikutnya hanya terbuka apabila bab sebelumnya selesai.
    return completed[TOPICS[index - 1].key];
  }

  function bukaBab(topic, index) {
    if (!isUnlocked(index)) return;

    navigate(topic.route);
  }

  const semuaSelesai =
    completedCount === TOPICS.length;

  return (
    <main className="marfuat-learning-page">
      <section className="marfuat-learning-frame">

        {/* KEMBALI */}
        <button
          type="button"
          className="learning-back-btn"
          onClick={() => navigate("/marfuat-matan")}
        >
          ← Kembali
        </button>

        {/* TAJUK */}
        <div className="learning-heading">
          <div className="learning-badge">
            MODUL PEMBELAJARAN
          </div>

          <h1
            className="learning-title"
            dir="rtl"
            lang="ar"
          >
            بَابُ الْمَرْفُوعَاتِ
          </h1>

          <p className="learning-subtitle">
            Pilih bab dan pelajari Marfu‘āt secara
            teratur dan berurutan.
          </p>
        </div>

        {/* KEMAJUAN */}
        <div className="learning-progress">
                  <strong>
            {completedCount} / {TOPICS.length}
          </strong>

          <div className="learning-progress-bar">
            <div
              className="learning-progress-fill"
              style={{
                width: `${
                  (completedCount / TOPICS.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* BAB */}
        <div className="learning-topics">

          {TOPICS.map((topic, index) => {
            const isDone =
              completed[topic.key];

            const unlocked =
              isUnlocked(index);

            return (
              <button
                key={topic.id}
                type="button"
                className={[
                  "learning-topic",
                  `topic-${topic.id}`,
                  isDone ? "completed" : "",
                  unlocked ? "unlocked" : "locked",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() =>
                  bukaBab(topic, index)
                }
                disabled={!unlocked}
                aria-label={topic.malay}
              >

                <span className="topic-ui-number">
                  {topic.id}
                </span>

                <span
                  className="topic-ui-arabic"
                  dir="rtl"
                  lang="ar"
                >
                  {topic.arabic}
                </span>

                <span className="topic-ui-malay">
                  {topic.malay}
                </span>

                <span className="topic-ui-status">
                  {isDone
                    ? "✓ Selesai"
                    : unlocked
                    ? "📖 Buka Bab"
                    : ""}
                </span>

              </button>
            );
          })}

        </div>

        {/* FOOTER */}
        <div className="learning-footer">

          <span>
            📖 Setiap bab mengandungi
          </span>

          <strong>
            Dialog
          </strong>

          <b>→</b>

          <strong>
            Animasi
          </strong>

          <b>→</b>

          <strong>
            Latihan
          </strong>

          <b>→</b>

          <strong>
            Selesai
          </strong>

          <span className="footer-next">
            {semuaSelesai
              ? "⭐ Lorong Latihan terbuka!"
              : "Selesaikan semua bab untuk membuka Lorong Latihan."}
          </span>

        </div>

      </section>
    </main>
  );
}