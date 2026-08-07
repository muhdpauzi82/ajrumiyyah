import { useNavigate } from "react-router-dom";
import "../styles/KitabFail.css";

export default function KitabFail() {
  const navigate = useNavigate();

  function finishKitab() {
    localStorage.setItem("kitabFailDone", "true");
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
          KITAB 1
        </div>

        <h1 className="kitab-title" dir="rtl" lang="ar">
          الْفَاعِلُ
        </h1>

        <div className="kitab-subtitle">
          Fa&apos;il
        </div>

        <div className="kitab-section">

          <h2>
            1. Matan
          </h2>

          <div
            className="kitab-arabic-box"
            dir="rtl"
            lang="ar"
          >
            الْفَاعِلُ هُوَ الِاسْمُ الْمَرْفُوعُ
            الْمَذْكُورُ قَبْلَهُ فِعْلُهُ.
          </div>

        </div>

        <div className="kitab-section">

          <h2>
            2. Maksud
          </h2>

          <p>
            Fa&apos;il ialah isim marfu&apos; yang menunjukkan
            orang atau sesuatu yang melakukan perbuatan.
          </p>

        </div>

        <div className="kitab-section">

          <h2>
            3. Contoh
          </h2>

          <div className="example-box">

            <div
              className="example-arabic"
              dir="rtl"
              lang="ar"
            >
              جَاءَ مُحَمَّدٌ
            </div>

            <div className="example-translation">
              Muhammad telah datang.
            </div>

          </div>

        </div>

        <div className="kitab-analysis">

          <div className="analysis-row">
            <span className="analysis-word">
              جَاءَ
            </span>

            <span>
              Fi&apos;il
            </span>
          </div>

          <div className="analysis-row highlight">
            <span className="analysis-word">
              مُحَمَّدٌ
            </span>

            <span>
              Fa&apos;il — Marfu&apos;
            </span>
          </div>

        </div>

        <div className="kitab-rule">
          <strong>Kaedah:</strong>
          <span>
            Fa&apos;il sentiasa berada dalam keadaan marfu&apos;.
          </span>
        </div>

        <button
          className="kitab-complete-btn"
          onClick={finishKitab}
        >
          ✓ Selesai Kitab Fa&apos;il
        </button>

      </div>

    </div>
  );
}