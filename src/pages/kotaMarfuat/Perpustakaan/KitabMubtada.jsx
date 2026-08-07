import { useNavigate } from "react-router-dom";
import "../styles/KitabFail.css";

export default function KitabMubtada() {
  const navigate = useNavigate();

  function finishKitab() {
    localStorage.setItem("kitabMubtadaDone", "true");
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
          KITAB 3
        </div>

        <h1
          className="kitab-title"
          dir="rtl"
          lang="ar"
        >
          الْمُبْتَدَأُ
        </h1>

        <div className="kitab-subtitle">
          Mubtada'
        </div>

        <div className="kitab-section">
          <h2>1. Matan</h2>

          <div
            className="kitab-arabic-box"
            dir="rtl"
            lang="ar"
          >
            الْمُبْتَدَأُ اسْمٌ مَرْفُوعٌ
            مُجَرَّدٌ عَنِ الْعَوَامِلِ اللَّفْظِيَّةِ.
          </div>
        </div>

        <div className="kitab-section">
          <h2>2. Maksud</h2>

          <p>
            Mubtada' ialah isim marfu' yang menjadi permulaan
            sesuatu jumlah ismiyyah.
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
              اللَّهُ غَفُورٌ
            </div>

            <div className="example-translation">
              Allah Maha Pengampun.
            </div>
          </div>
        </div>

        <div className="kitab-analysis">
          <div className="analysis-row highlight">
            <span className="analysis-word">
              اللَّهُ
            </span>

            <span>
              Mubtada' — Marfu'
            </span>
          </div>

          <div className="analysis-row">
            <span className="analysis-word">
              غَفُورٌ
            </span>

            <span>
              Khabar
            </span>
          </div>
        </div>

        <div className="kitab-rule">
          <strong>Kaedah:</strong>

          <span>
            Setiap Mubtada' sentiasa berada dalam keadaan marfu'.
          </span>
        </div>

        <button
          className="kitab-complete-btn"
          onClick={finishKitab}
        >
          ✓ Selesai Kitab Mubtada'
        </button>
      </div>
    </div>
  );
}