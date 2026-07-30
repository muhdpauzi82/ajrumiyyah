import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JejakHuruf() {
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

  const notaHurufDone =
    localStorage.getItem("notaHurufDone") === "true";

  const hurufAsasDone =
    localStorage.getItem("hurufAsasDone") === "true";

  const hurufAkademiDone =
    localStorage.getItem("hurufAkademiDone") === "true";

  const hurufMenaraDone =
    localStorage.getItem("hurufMenaraDone") === "true";

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
          src="/images/jejak-huruf.webp"
          alt="Peta Jejak Huruf"
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

        {/* 1. Lembah Huruf */}
        <button
          type="button"
          aria-label="Lembah Huruf"
          style={{
            ...styles.hotspot,
            left: "17%",
            top: "54%",
            width: "15%",
            height: "23%",
          }}
          onClick={() => navigate("/nota-huruf")}
          onMouseEnter={() =>
            setHover("1. Lembah Huruf")
          }
          onMouseLeave={() => setHover("")}
        />

        {/* 2. Kampung Huruf */}
        <button
          type="button"
          aria-label="Kampung Huruf"
          style={{
            ...styles.hotspot,
            left: "39%",
            top: "60%",
            width: "16%",
            height: "25%",
            cursor: notaHurufDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk("/huruf-asas", notaHurufDone)
          }
          onMouseEnter={() =>
            setHover("2. Kampung Huruf — Tahap Asas")
          }
          onMouseLeave={() => setHover("")}
        >
          {!notaHurufDone && (
            <span style={styles.lockIcon}>🔒</span>
          )}
        </button>

        {/* 3. Akademi Huruf */}
        <button
          type="button"
          aria-label="Akademi Huruf"
          style={{
            ...styles.hotspot,
            left: "39%",
            top: "22%",
            width: "17%",
            height: "29%",
            cursor: hurufAsasDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk(
              "/huruf-akademi",
              hurufAsasDone
            )
          }
          onMouseEnter={() =>
            setHover(
              "3. Akademi Huruf — Tahap Pertengahan"
            )
          }
          onMouseLeave={() => setHover("")}
        >
          {!hurufAsasDone && (
            <span style={styles.lockIcon}>🔒</span>
          )}
        </button>

        {/* 4. Menara Huruf */}
        <button
          type="button"
          aria-label="Menara Huruf"
          style={{
            ...styles.hotspot,
            left: "70%",
            top: "23%",
            width: "16%",
            height: "30%",
            cursor: hurufAkademiDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk(
              "/menara-huruf",
              hurufAkademiDone
            )
          }
          onMouseEnter={() =>
            setHover(
              "4. Menara Huruf — Tahap Lanjutan"
            )
          }
          onMouseLeave={() => setHover("")}
        >
          {!hurufAkademiDone && (
            <span style={styles.lockIcon}>🔒</span>
          )}
        </button>

        {/* 5. Sarjana Huruf */}
        <button
          type="button"
          aria-label="Sarjana Huruf"
          style={{
            ...styles.hotspot,
            left: "68%",
            top: "58%",
            width: "17%",
            height: "27%",
            cursor: hurufMenaraDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk(
              "/sarjana-huruf",
              hurufMenaraDone
            )
          }
          onMouseEnter={() =>
            setHover(
              "5. Sarjana Huruf — Ujian Penguasaan"
            )
          }
          onMouseLeave={() => setHover("")}
        >
          {!hurufMenaraDone && (
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