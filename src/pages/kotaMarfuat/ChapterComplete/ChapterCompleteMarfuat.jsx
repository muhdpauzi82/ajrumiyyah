import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ChapterCompleteMarfuat.css";

export default function ChapterCompleteMarfuat() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("istanaMarfuatDone", "true");
    localStorage.setItem("kotaMansubatUnlocked", "true");
    localStorage.setItem("artifact_marfuat", "true");

    const reward = new Audio("/sounds/reward.mp3");
    reward.volume = 0.4;
    reward.play().catch(() => {});
  }, []);

  return (
    <div className="chapter-marfuat">

      <div className="chapter-card">

        <div className="chapter-icon">
          🏆
        </div>

        <div className="chapter-badge">
          BAB SELESAI
        </div>

        <h1 className="chapter-title">
          تَمَّ إِنْجَازُ بَابِ الْمَرْفُوعَاتِ
        </h1>

        <h2 className="chapter-subtitle">
          Tahniah!
        </h2>

        <p className="chapter-text">
          Kamu telah berjaya menguasai
          <strong> Bab Marfu'at </strong>
          dan memperoleh Artifak Marfu'at.
        </p>

        <div className="artifact-box">

          <div className="artifact-icon">
            💎
          </div>

          <div>

            <h3>
              Artifak Marfu'at
            </h3>

            <p>
              Melambangkan penguasaan
              seluruh hukum Marfu'at.
            </p>

          </div>

        </div>

        <div className="chapter-buttons">

          <button
            className="chapter-home-btn"
            onClick={() =>
              navigate("/kota-marfuat")
            }
          >
            ← Kembali ke Kota
          </button>

          <button
            className="chapter-next-btn"
            onClick={() =>
              navigate("/kota-mansubat")
            }
          >
            Teruskan ke Kota Mansubat →
          </button>

        </div>

      </div>

    </div>
  );
}