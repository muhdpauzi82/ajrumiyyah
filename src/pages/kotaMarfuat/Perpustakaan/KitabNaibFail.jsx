import { useNavigate } from "react-router-dom";
import "../styles/KitabFail.css";

export default function KitabNaibFail() {
  const navigate = useNavigate();

  function finishKitab() {
    localStorage.setItem("kitabNaibFailDone", "true");
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
          KITAB 2
        </div>

        <h1
          className="kitab-title"
          dir="rtl"
          lang="ar"
        >
          نَائِبُ الْفَاعِلِ
        </h1>

        <div className="kitab-subtitle">
          Naib Fa&apos;il
        </div>

        <div className="kitab-section">
          <h2>1. Matan</h2>

          <div
            className="kitab-arabic-box"
            dir="rtl"
            lang="ar"
          >
            وَالْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ
            مَرْفُوعٌ.
          </div>
        </div>

        <div className="kitab-section">
          <h2>2. Maksud</h2>

          <p>
            Naib Fa&apos;il ialah isim marfu&apos; yang mengambil
            tempat Fa&apos;il apabila pelaku tidak disebut dalam ayat.
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
              كُتِبَ الدَّرْسُ
            </div>

            <div className="example-translation">
              Pelajaran telah ditulis.
            </div>
          </div>
        </div>

        <div className="kitab-analysis">
          <div className="analysis-row">
            <span className="analysis-word">
              كُتِبَ
            </span>

            <span>
              Fi&apos;il Mabni lil-Majhul
            </span>
          </div>

          <div className="analysis-row highlight">
            <span className="analysis-word">
              الدَّرْسُ
            </span>

            <span>
              Naib Fa&apos;il — Marfu&apos;
            </span>
          </div>
        </div>

        <div className="kitab-rule">
          <strong>Kaedah:</strong>

          <span>
            Naib Fa&apos;il sentiasa berada dalam keadaan marfu&apos;.
          </span>
        </div>

        <button
          className="kitab-complete-btn"
          onClick={finishKitab}
        >
          ✓ Selesai Kitab Naib Fa&apos;il
        </button>
      </div>
    </div>
  );
}