import { useNavigate } from "react-router-dom";
import "../styles/KitabFail.css";

export default function KitabKhabarInna() {
  const navigate = useNavigate();

  function finishKitab() {
    localStorage.setItem("kitabKhabarInnaDone", "true");
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
          KITAB 6
        </div>

        <h1
          className="kitab-title"
          dir="rtl"
          lang="ar"
        >
          خَبَرُ إِنَّ
        </h1>

        <div className="kitab-subtitle">
          Khabar Inna
        </div>

        <div className="kitab-section">
          <h2>1. Matan</h2>

          <div
            className="kitab-arabic-box"
            dir="rtl"
            lang="ar"
          >
            إِنَّ وَأَخَوَاتُهَا
            تَنْصِبُ الِاسْمَ
            وَتَرْفَعُ الْخَبَرَ.
          </div>
        </div>

        <div className="kitab-section">
          <h2>2. Maksud</h2>

          <p>
            Apabila <strong>إِنَّ</strong> atau salah satu
            saudaranya memasuki jumlah ismiyyah,
            Mubtada' menjadi <strong>Isim Inna</strong>
            (mansub), manakala Khabar kekal sebagai
            <strong> Khabar Inna</strong> dalam keadaan
            <strong> marfu'</strong>.
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
              إِنَّ اللَّهَ غَفُورٌ
            </div>

            <div className="example-translation">
              Sesungguhnya Allah Maha Pengampun.
            </div>

          </div>

        </div>

        <div className="kitab-analysis">

          <div className="analysis-row">
            <span className="analysis-word">
              إِنَّ
            </span>

            <span>
              Huruf Nasikh
            </span>
          </div>

          <div className="analysis-row">
            <span className="analysis-word">
              اللَّهَ
            </span>

            <span>
              Isim Inna — Mansub
            </span>
          </div>

          <div className="analysis-row highlight">
            <span className="analysis-word">
              غَفُورٌ
            </span>

            <span>
              Khabar Inna — Marfu'
            </span>
          </div>

        </div>

        <div className="kitab-rule">

          <strong>Kaedah:</strong>

          <span>
            Khabar kepada <strong>إِنَّ</strong> dan
            saudara-saudaranya sentiasa berada dalam
            keadaan <strong>marfu'</strong>.
          </span>

        </div>

        <button
          className="kitab-complete-btn"
          onClick={finishKitab}
        >
          ✓ Selesai Kitab Khabar Inna
        </button>

      </div>
    </div>
  );
}