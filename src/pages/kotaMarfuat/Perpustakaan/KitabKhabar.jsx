import { useNavigate } from "react-router-dom";
import "../styles/KitabFail.css";

export default function KitabKhabar() {
  const navigate = useNavigate();

  function finishKitab() {
    localStorage.setItem("kitabKhabarDone", "true");
    navigate("/perpustakaan-marfuat");
  }

  return (
    <div className="kitab-fail-page">
      <button
        className="kitab-back-btn"
        onClick={() => navigate("/perpustakaan-marfuat")}
      >
        ← Kembali
      </button>

      <div className="kitab-fail-card">
        <div className="kitab-label">
          KITAB 4
        </div>

        <h1
          className="kitab-title"
          dir="rtl"
          lang="ar"
        >
          الْخَبَرُ
        </h1>

        <div className="kitab-subtitle">
          Khabar
        </div>

        <div className="kitab-section">
          <h2>1. Matan</h2>

          <div
            className="kitab-arabic-box"
            dir="rtl"
            lang="ar"
          >
            وَالْخَبَرُ مَرْفُوعٌ.
          </div>
        </div>

        <div className="kitab-section">
          <h2>2. Maksud</h2>

          <p>
            Khabar ialah bahagian yang melengkapkan maksud
            Mubtada' dalam sesuatu jumlah ismiyyah.
          </p>
        </div>

        <div className="kitab-section">
          <h2>3. Contoh</h2>

          <div className="example-box">
            <div
              className="example-arabic"
              dir="rtl"
              lang="ar"
            >
              الطَّالِبُ مُجْتَهِدٌ
            </div>

            <div className="example-translation">
              Pelajar itu rajin.
            </div>
          </div>
        </div>

        <div className="kitab-analysis">
          <div className="analysis-row">
            <span className="analysis-word">
              الطَّالِبُ
            </span>

            <span>
              Mubtada'
            </span>
          </div>

          <div className="analysis-row highlight">
            <span className="analysis-word">
              مُجْتَهِدٌ
            </span>

            <span>
              Khabar — Marfu'
            </span>
          </div>
        </div>

        <div className="kitab-rule">
          <strong>Kaedah:</strong>

          <span>
            Khabar sentiasa berada dalam keadaan marfu'
            selagi menjadi khabar kepada Mubtada'.
          </span>
        </div>

        <button
          className="kitab-complete-btn"
          onClick={finishKitab}
        >
          ✓ Selesai Kitab Khabar
        </button>
      </div>
    </div>
  );
}