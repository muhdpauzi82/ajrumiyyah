import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JejakFiil() {
  const navigate = useNavigate();
  const [hover, setHover] = useState("");

  useEffect(() => {
    const bgMusic = new Audio("/sounds/jejak.mp3");

    bgMusic.loop = true;
    bgMusic.volume = 0.2;

    bgMusic.play().catch(() => {
      console.log("Audio menunggu interaksi pengguna.");
    });

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    };
  }, []);

  const notaFiilDone =
    localStorage.getItem("notaFiilDone") === "true";

  const fiilAsasDone =
    localStorage.getItem("fiilAsasDone") === "true";

  const fiilAkademiDone =
    localStorage.getItem("fiilAkademiDone") === "true";

  const fiilMenaraDone =
    localStorage.getItem("fiilMenaraDone") === "true";

  function masuk(path, unlocked) {
    if (!unlocked) {
      alert("🔒 Selesaikan tahap sebelumnya dahulu.");
      return;
    }

    navigate(path);
  }

  return (
    <main style={styles.page}>
      <section style={styles.mapFrame}>
        <img
          src="/images/jejak-fiil.webp"
          alt="Peta Jejak Fi'il"
          style={styles.mapImage}
          draggable="false"
        />

        {/* Kembali ke Gerbang Kalam */}
        <button
          type="button"
          aria-label="Kembali ke Gerbang Kalam"
          style={{
            ...styles.invisibleButton,
            left: "84.5%",
            top: "2.2%",
            width: "14.5%",
            height: "8.5%",
          }}
          onClick={() => navigate("/gerbang-kalam")}
        />

        {/* 1. Lembah Matan Fi'il */}
        <button
          type="button"
          aria-label="Lembah Matan Fi'il"
          style={{
            ...styles.hotspot,
            left: "12%",
            top: "57%",
            width: "16%",
            height: "23%",
          }}
          onClick={() => navigate("/nota-fiil")}
          onMouseEnter={() =>
            setHover("1. Lembah Matan Fi'il")
          }
          onMouseLeave={() => setHover("")}
        />

        {/* 2. Kampung Fi'il */}
        <button
          type="button"
          aria-label="Kampung Fi'il"
          style={{
            ...styles.hotspot,
            left: "39%",
            top: "60%",
            width: "16%",
            height: "25%",
            cursor: notaFiilDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk("/fiil-asas", notaFiilDone)
          }
          onMouseEnter={() =>
            setHover("2. Kampung Fi'il — Tahap Asas")
          }
          onMouseLeave={() => setHover("")}
        >
          {!notaFiilDone && (
            <span style={styles.lockIcon}>🔒</span>
          )}
        </button>

        {/* 3. Akademi Fi'il */}
        <button
          type="button"
          aria-label="Akademi Fi'il"
          style={{
            ...styles.hotspot,
            left: "38%",
            top: "22%",
            width: "17%",
            height: "28%",
            cursor: fiilAsasDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk("/fiil-akademi", fiilAsasDone)
          }
          onMouseEnter={() =>
            setHover(
              "3. Akademi Fi'il — Tahap Pertengahan"
            )
          }
          onMouseLeave={() => setHover("")}
        >
          {!fiilAsasDone && (
            <span style={styles.lockIcon}>🔒</span>
          )}
        </button>

        {/* 4. Menara Fi'il */}
        <button
          type="button"
          aria-label="Menara Fi'il"
          style={{
            ...styles.hotspot,
            left: "70%",
            top: "25%",
            width: "16%",
            height: "29%",
            cursor: fiilAkademiDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk("/menara-fiil", fiilAkademiDone)
          }
          onMouseEnter={() =>
            setHover(
              "4. Menara Fi'il — Tahap Lanjutan"
            )
          }
          onMouseLeave={() => setHover("")}
        >
          {!fiilAkademiDone && (
            <span style={styles.lockIcon}>🔒</span>
          )}
        </button>

        {/* 5. Sarjana Fi'il */}
        <button
          type="button"
          aria-label="Sarjana Fi'il"
          style={{
            ...styles.hotspot,
            left: "68%",
            top: "58%",
            width: "17%",
            height: "27%",
            cursor: fiilMenaraDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk("/sarjana-fiil", fiilMenaraDone)
          }
          onMouseEnter={() =>
            setHover(
              "5. Sarjana Fi'il — Ujian Penguasaan"
            )
          }
          onMouseLeave={() => setHover("")}
        >
          {!fiilMenaraDone && (
            <span style={styles.lockIcon}>🔒</span>
          )}
        </button>

        {hover && (
          <div style={styles.tooltip}>
            {hover}
          </div>
        )}
      </section>
    </main>
  );
}

const styles = {
  page: {
    position: "fixed",
    inset: 0,

    width: "100vw",
    height: "100dvh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    margin: 0,
    padding: 0,

    overflow: "hidden",
    background: "#161616",
  },

  mapFrame: {
    position: "relative",

    width:
      "min(100vw, calc(100dvh * 16 / 9))",

    height:
      "min(100dvh, calc(100vw * 9 / 16))",

    flex: "0 0 auto",
    overflow: "hidden",
    isolation: "isolate",
  },

  mapImage: {
    position: "absolute",
    inset: 0,

    width: "100%",
    height: "100%",

    display: "block",
    objectFit: "fill",
    objectPosition: "center",

    userSelect: "none",
    pointerEvents: "none",

    zIndex: 0,
  },

  hotspot: {
    position: "absolute",

    padding: 0,
    border: 0,
    borderRadius: "16px",

    background: "transparent",
    cursor: "pointer",

    zIndex: 10,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  invisibleButton: {
    position: "absolute",

    padding: 0,
    border: 0,
    borderRadius: "999px",

    background: "transparent",
    cursor: "pointer",

    zIndex: 20,
  },

  lockIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",

    borderRadius: "16px",

    background: "rgba(0, 0, 0, 0.32)",

    fontSize: "clamp(22px, 3vw, 48px)",

    textShadow:
      "0 2px 8px rgba(0, 0, 0, 0.9)",

    pointerEvents: "none",
  },

  tooltip: {
    position: "absolute",

    left: "50%",
    bottom: "10%",

    transform: "translateX(-50%)",

    padding: "0.8% 1.8%",
    border: "2px solid #9b6a25",
    borderRadius: "12px",

    background: "rgba(255, 245, 205, 0.96)",
    color: "#3b260c",

    fontFamily: "Georgia, serif",
    fontSize: "clamp(10px, 1.1vw, 18px)",
    fontWeight: 800,

    boxShadow:
      "0 5px 16px rgba(0, 0, 0, 0.38)",

    pointerEvents: "none",
    zIndex: 30,
  },
};