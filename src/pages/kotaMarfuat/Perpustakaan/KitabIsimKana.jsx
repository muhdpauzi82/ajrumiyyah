import { useNavigate } from "react-router-dom";
import "../styles/KitabFail.css";

export default function KitabIsimKana() {
  const navigate = useNavigate();

  function finishKitab() {
    localStorage.setItem("kitabIsimKanaDone", "true");
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
          KITAB 5
        </div>

        <h1
          className="kitab-title"
          dir="rtl"
          lang="ar"
        >
          اسْمُ كَانَ
        </h1>

        <div className="kitab-subtitle">
          Isim Kana
        </div>

        <div className="kitab-section">
          <h2>1. Matan</h2>

          <div
            className="kitab-arabic-box"
            dir="rtl"
            lang="ar"
          >
            تَرْفَعُ كَانَ وَأَخَوَاتُهَا
            الِاسْمَ وَتَنْصِبُ الْخَبَرَ.
          </div>
        </div>

        <div className="kitab-section">
          <h2>2. Maksud</h2>

          <p>
            Apabila <strong>كان</strong> atau salah satu saudaranya
            memasuki jumlah ismiyyah, Mubtada' menjadi
            <strong> Isim Kana</strong> dan kekal dalam keadaan
            <strong> marfu'</strong>, manakala Khabar menjadi mansub.
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
              كَانَ اللَّهُ غَفُورًا
            </div>

            <div className="example-translation">
              Allah sentiasa Maha Pengampun.
            </div>

          </div>

        </div>

        <div className="kitab-analysis">

          <div className="analysis-row">
            <span className="analysis-word">
              كَانَ
            </span>

            <span>
              Fi'il Naqis
            </span>
          </div>

          <div className="analysis-row highlight">
            <span className="analysis-word">
              اللَّهُ
            </span>

            <span>
              Isim Kana — Marfu'
            </span>
          </div>

          <div className="analysis-row">
            <span className="analysis-word">
              غَفُورًا
            </span>

            <span>
              Khabar Kana — Mansub
            </span>
          </div>

        </div>

        <div className="kitab-rule">

          <strong>Kaedah:</strong>

          <span>
            Isim kepada Kana dan saudara-saudaranya sentiasa
            berada dalam keadaan <strong>marfu'</strong>.
          </span>

        </div>

        <button
          className="kitab-complete-btn"
          onClick={finishKitab}
        >
          ✓ Selesai Kitab Isim Kana
        </button>

      </div>
    </div>
  );
}