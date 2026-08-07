import { useLocation, useNavigate } from "react-router-dom";
import "../styles/LorongLatihanMarfuatResult.css";

export default function LorongLatihanMarfuatResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    correctCount = 0,
    totalQuestions = 10,
    passed = false,
  } = location.state || {};

  const wrongCount = totalQuestions - correctCount;
  const percentage =
    totalQuestions > 0
      ? Math.round((correctCount / totalQuestions) * 100)
      : 0;

  return (
    <div className="lorong-result-page">
      <div className="lorong-result-card">

        <div className="lorong-result-badge">
          KEPUTUSAN LATIHAN
        </div>

        <h1 className="lorong-result-title">
          {passed ? "أَحْسَنْتَ!" : "حَاوِلْ مَرَّةً أُخْرَى"}
        </h1>

        <h2 className="lorong-result-subtitle">
          {passed
            ? "Tahniah! Lorong Latihan selesai."
            : "Latihan belum selesai."}
        </h2>

        <div className="lorong-result-score">
          <span className="result-percentage">
            {percentage}%
          </span>

          <span className="result-score-text">
            {correctCount} / {totalQuestions}
          </span>
        </div>

        <div className="lorong-result-stats">
          <div className="result-stat">
            <strong>{correctCount}</strong>
            <span>Betul</span>
          </div>

          <div className="result-stat">
            <strong>{wrongCount}</strong>
            <span>Belum Tepat</span>
          </div>

          <div className="result-stat">
            <strong>{totalQuestions}</strong>
            <span>Jumlah</span>
          </div>
        </div>

        {passed ? (
          <div className="lorong-result-message success">
            <div
              className="result-arabic"
              dir="rtl"
              lang="ar"
            >
              أَتْمَمْتَ تَدْرِيبَ الْمَرْفُوعَاتِ بِنَجَاحٍ
            </div>

            <p>
              Kamu telah menguasai latihan asas Marfu&apos;at.
              Laluan ke Dataran Marfu&apos;at kini dibuka.
            </p>
          </div>
        ) : (
          <div className="lorong-result-message retry">
            <div
              className="result-arabic"
              dir="rtl"
              lang="ar"
            >
              رَاجِعْ دُرُوسَكَ ثُمَّ حَاوِلْ مَرَّةً أُخْرَى
            </div>

            <p>
              Kamu perlu menjawab semua soalan dengan betul
              sebelum boleh meneruskan perjalanan.
            </p>
          </div>
        )}

        <div className="lorong-result-actions">
          {!passed && (
            <button
              className="result-btn retry-btn"
              onClick={() =>
                navigate("/lorong-latihan-marfuat")
              }
            >
              ↻ Cuba Semula
            </button>
          )}

          {passed && (
            <button
              className="result-btn continue-btn"
              onClick={() => {
                localStorage.setItem(
                  "dataranMarfuatUnlocked",
                  "true"
                );

                navigate("/kota-marfuat");
              }}
            >
              Teruskan Pengembaraan →
            </button>
          )}

          <button
            className="result-btn library-btn"
            onClick={() =>
              navigate("/perpustakaan-marfuat")
            }
          >
            📚 Perpustakaan
          </button>
        </div>

      </div>
    </div>
  );
}