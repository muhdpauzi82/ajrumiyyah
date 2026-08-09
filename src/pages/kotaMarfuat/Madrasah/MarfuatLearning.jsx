import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/MarfuatLearning.css";

const TOPICS = [
  {
    id: 1,
    key: "fail",
    arabic: "الفاعل",
    malay: "Fa‘il",
    route: "/kitab-fail",
    storageKey: "failLearningDone",
  },
  {
    id: 2,
    key: "naibFail",
    arabic: "نائب الفاعل",
    malay: "Naib Fa‘il",
    route: "/kitab-naib-fail",
    storageKey: "naibFailLearningDone",
  },
  {
    id: 3,
    key: "mubtada",
    arabic: "المبتدأ",
    malay: "Mubtada‘",
    route: "/kitab-mubtada",
    storageKey: "mubtadaLearningDone",
  },
  {
    id: 4,
    key: "khabar",
    arabic: "الخبر",
    malay: "Khabar",
    route: "/kitab-khabar",
    storageKey: "khabarLearningDone",
  },
  {
    id: 5,
    key: "isimKana",
    arabic: "اسم كان",
    malay: "Isim Kana",
    route: "/kitab-isim-kana",
    storageKey: "isimKanaLearningDone",
  },
  {
    id: 6,
    key: "khabarInna",
    arabic: "خبر إن",
    malay: "Khabar Inna",
    route: "/kitab-khabar-inna",
    storageKey: "khabarInnaLearningDone",
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

  const [completed, setCompleted] = useState(
    bacaStatus
  );

  useEffect(() => {
    function kemasKiniStatus() {
      setCompleted(bacaStatus());
    }

    kemasKiniStatus();

    window.addEventListener(
      "focus",
      kemasKiniStatus
    );

    window.addEventListener(
      "pageshow",
      kemasKiniStatus
    );

    window.addEventListener(
      "storage",
      kemasKiniStatus
    );

    return () => {
      window.removeEventListener(
        "focus",
        kemasKiniStatus
      );

      window.removeEventListener(
        "pageshow",
        kemasKiniStatus
      );

      window.removeEventListener(
        "storage",
        kemasKiniStatus
      );
    };
  }, []);

  return (
    <main className="marfuat-learning-page">
      <section className="marfuat-learning-frame">

        <button
          type="button"
          className="learning-back-btn"
          onClick={() =>
            navigate("/marfuat-matan")
          }
        >
          ← Kembali
        </button>

        <section className="learning-card">

          <span className="learning-badge">
            MODUL PEMBELAJARAN
          </span>

          <h1
            className="learning-title"
            dir="rtl"
            lang="ar"
          >
            بَابُ الْمَرْفُوعَاتِ
          </h1>

          <p className="learning-subtitle">
            Pilih salah satu kitab di bawah untuk
            mempelajari sebab-sebab isim berada dalam
            keadaan marfu‘.
          </p>

          <div className="learning-grid">
            {TOPICS.map((topic) => {
              const isDone =
                completed[topic.key];

              return (
                <button
                  key={topic.id}
                  type="button"
                  className={[
                    "topic-card",
                    isDone ? "completed" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() =>
                    navigate(topic.route)
                  }
                >
                  <span className="topic-number">
                    {topic.id}
                  </span>

                  <span
                    className="topic-arabic"
                    dir="rtl"
                    lang="ar"
                  >
                    {topic.arabic}
                  </span>

                  <strong className="topic-malay">
                    {topic.malay}
                  </strong>

                  {isDone && (
                    <span
                      className="topic-completed"
                      aria-label="Selesai"
                    >
                      ✓ Selesai
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="learning-next-btn"
            onClick={() =>
              navigate(
                "/perpustakaan-marfuat"
              )
            }
          >
            📚 Masuk ke Perpustakaan Marfu‘at
          </button>

        </section>
      </section>
    </main>
  );
}