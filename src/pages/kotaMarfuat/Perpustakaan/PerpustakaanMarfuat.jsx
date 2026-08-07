import { useNavigate } from "react-router-dom";
import "../styles/PerpustakaanMarfuat.css";

const KITAB_LIST = [
  {
    id: "fail",
    arabic: "الفاعل",
    malay: "Kitab Fa'il",
    route: "/kitab-fail",
    storageKey: "kitabFailDone",
  },
  {
    id: "naib-fail",
    arabic: "نائب الفاعل",
    malay: "Kitab Naib Fa'il",
    route: "/kitab-naib-fail",
    storageKey: "kitabNaibFailDone",
  },
  {
    id: "mubtada",
    arabic: "المبتدأ",
    malay: "Kitab Mubtada'",
    route: "/kitab-mubtada",
    storageKey: "kitabMubtadaDone",
  },
  {
    id: "khabar",
    arabic: "الخبر",
    malay: "Kitab Khabar",
    route: "/kitab-khabar",
    storageKey: "kitabKhabarDone",
  },
  {
    id: "isim-kana",
    arabic: "اسم كان",
    malay: "Kitab Isim Kana",
    route: "/kitab-isim-kana",
    storageKey: "kitabIsimKanaDone",
  },
  {
    id: "khabar-inna",
    arabic: "خبر إن",
    malay: "Kitab Khabar Inna",
    route: "/kitab-khabar-inna",
    storageKey: "kitabKhabarInnaDone",
  },
];

export default function PerpustakaanMarfuat() {
  const navigate = useNavigate();

  const completedCount = KITAB_LIST.filter(
    (kitab) => localStorage.getItem(kitab.storageKey) === "true"
  ).length;

  const allCompleted = completedCount === KITAB_LIST.length;

  function enterKitab(route) {
    navigate(route);
  }

  function continueJourney() {
    if (!allCompleted) return;

    localStorage.setItem("perpustakaanMarfuatDone", "true");
    navigate("/lorong-latihan-marfuat");
  }

  return (
    <div className="perpustakaan-marfuat">
      <button
        className="library-back-btn"
        onClick={() => navigate("/kota-marfuat")}
      >
        ← Kembali
      </button>

      <div className="library-panel">
        <div className="library-badge">
          PERPUSTAKAAN MARFU&apos;AT
        </div>

        <h1 className="library-title">
          مَكْتَبَةُ الْمَرْفُوعَاتِ
        </h1>

        <p className="library-description">
          Pelajari keenam-enam kitab sebelum meneruskan perjalanan
          ke Lorong Latihan.
        </p>

        <div className="library-progress">
          <div className="library-progress-info">
            <span>Kemajuan Kitab</span>
            <strong>
              {completedCount} / {KITAB_LIST.length}
            </strong>
          </div>

          <div className="library-progress-track">
            <div
              className="library-progress-fill"
              style={{
                width: `${(completedCount / KITAB_LIST.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="library-grid">
          {KITAB_LIST.map((kitab, index) => {
            const completed =
              localStorage.getItem(kitab.storageKey) === "true";

            return (
              <button
                key={kitab.id}
                className={`library-book ${
                  completed ? "completed" : ""
                }`}
                onClick={() => enterKitab(kitab.route)}
              >
                <span className="book-number">
                  {index + 1}
                </span>

                {completed && (
                  <span className="book-completed">
                    ✓
                  </span>
                )}

                <span className="book-icon">
                  📖
                </span>

                <span
                  className="book-arabic"
                  dir="rtl"
                  lang="ar"
                >
                  {kitab.arabic}
                </span>

                <span className="book-malay">
                  {kitab.malay}
                </span>

                <span className="book-status">
                  {completed
                    ? "Selesai"
                    : "Buka Kitab"}
                </span>
              </button>
            );
          })}
        </div>

        <button
          className={`library-next-btn ${
            allCompleted ? "unlocked" : "locked"
          }`}
          disabled={!allCompleted}
          onClick={continueJourney}
        >
          {allCompleted
            ? "Teruskan ke Lorong Latihan →"
            : `Selesaikan ${KITAB_LIST.length - completedCount} kitab lagi`}
        </button>
      </div>
    </div>
  );
}