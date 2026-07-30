import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JejakIsim() {
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

  const notaIsimDone =
    localStorage.getItem("notaIsimDone") === "true";

  const isimAsasDone =
    localStorage.getItem("isimAsasDone") === "true";

  const isimPertengahanDone =
    localStorage.getItem("isimPertengahanDone") === "true";

  const menaraIsimDone =
    localStorage.getItem("menaraIsimDone") === "true";

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
          src="/images/jejak-isim.webp"
          alt="Peta Jejak Isim"
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

        {/* 1. Lembah Matan Isim */}
        <button
          type="button"
          aria-label="Lembah Matan Isim"
          style={{
            ...styles.hotspot,
            left: "17%",
            top: "54%",
            width: "15%",
            height: "23%",
          }}
          onClick={() => navigate("/nota-isim")}
          onMouseEnter={() =>
            setHover("1. Lembah Matan Isim")
          }
          onMouseLeave={() => setHover("")}
        />

        {/* 2. Kampung Isim */}
        <button
          type="button"
          aria-label="Kampung Isim"
          style={{
            ...styles.hotspot,
            left: "40%",
            top: "60%",
            width: "15%",
            height: "25%",
            cursor: notaIsimDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk("/isim-asas", notaIsimDone)
          }
          onMouseEnter={() =>
            setHover("2. Kampung Isim — Tahap Asas")
          }
          onMouseLeave={() => setHover("")}
        >
          {!notaIsimDone && (
            <span style={styles.lockIcon}>🔒</span>
          )}
        </button>

        {/* 3. Akademi Isim */}
        <button
          type="button"
          aria-label="Akademi Isim"
          style={{
            ...styles.hotspot,
            left: "39%",
            top: "22%",
            width: "16%",
            height: "29%",
            cursor: isimAsasDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk(
              "/isim-pertengahan",
              isimAsasDone
            )
          }
          onMouseEnter={() =>
            setHover(
              "3. Akademi Isim — Tahap Pertengahan"
            )
          }
          onMouseLeave={() => setHover("")}
        >
          {!isimAsasDone && (
            <span style={styles.lockIcon}>🔒</span>
          )}
        </button>

        {/* 4. Menara Isim */}
        <button
          type="button"
          aria-label="Menara Isim"
          style={{
            ...styles.hotspot,
            left: "69%",
            top: "22%",
            width: "16%",
            height: "31%",
            cursor: isimPertengahanDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk(
              "/menara-isim",
              isimPertengahanDone
            )
          }
          onMouseEnter={() =>
            setHover(
              "4. Menara Isim — Tahap Lanjutan"
            )
          }
          onMouseLeave={() => setHover("")}
        >
          {!isimPertengahanDone && (
            <span style={styles.lockIcon}>🔒</span>
          )}
        </button>

        {/* 5. Sarjana Isim */}
        <button
          type="button"
          aria-label="Sarjana Isim"
          style={{
            ...styles.hotspot,
            left: "67%",
            top: "58%",
            width: "17%",
            height: "27%",
            cursor: menaraIsimDone
              ? "pointer"
              : "not-allowed",
          }}
          onClick={() =>
            masuk("/sarjana-isim", menaraIsimDone)
          }
          onMouseEnter={() =>
            setHover(
              "5. Sarjana Isim — Ujian Penguasaan"
            )
          }
          onMouseLeave={() => setHover("")}
        >
          {!menaraIsimDone && (
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