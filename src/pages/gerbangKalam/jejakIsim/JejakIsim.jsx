import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function JejakIsim() {
  const navigate = useNavigate();

  useEffect(() => {
  const bgMusic = new Audio("/sounds/jejak.mp3");

  bgMusic.loop = true;
  bgMusic.volume = 0.2;

  bgMusic.play().catch(() => {});

  return () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  };
}, []);
  const [hover, setHover] = useState("");
  const notaIsimDone = localStorage.getItem("notaIsimDone") === "true";
  const isimAsasDone = localStorage.getItem("isimAsasDone") === "true";
  const isimPertengahanDone =  localStorage.getItem("isimPertengahanDone") === "true";
  const menaraIsimDone = localStorage.getItem("menaraIsimDone") === "true";
  const sarjanaDone =localStorage.getItem("sarjanaIsimDone") === "true";
  function masuk(path, open) {
    if (!open) {
      alert("🔒 Selesaikan tahap sebelumnya dahulu!");
      return;
    }
    navigate(path);
  }

  return (
    <div style={styles.page}>
      <button style={styles.backBtn} onClick={() => navigate("/gerbang-kalam")}>
        ⬅ Kembali
      </button>
   {hover && <div style={styles.tooltip}>{hover}</div>}
      <div style={styles.mapWrapper}>
  <div style={styles.map}>
       <button
  style={{ ...styles.hotspot, left: "8%", top: "38%" }}
  onClick={() => navigate("/nota-isim")}
  onMouseEnter={() => setHover("📜 Lembah Matan Isim")}
  onMouseLeave={() => setHover("")}
/> 

       <button
  style={{ ...(notaIsimDone ? styles.hotspot : styles.lockedHotspot),
    left: "16%",
    top: "61%",
  }}
  onClick={() => masuk("/isim-asas", notaIsimDone)}
  onMouseEnter={() => setHover("🏡 Kampung Isim - Tahap Asas")}
  onMouseLeave={() => setHover("")}
/>
 

        <button
  style={{ ...styles.hotspot, left: "16%", top: "61%" }}
  onClick={() => masuk("/isim-asas", notaIsimDone)}
  onMouseEnter={() => setHover("🏡 Kampung Isim - Tahap Asas")}
  onMouseLeave={() => setHover("")}
  title="Kampung Isim"
  >
 {!notaIsimDone && "🔒"}
</button>

 <button
  style={{ ...(isimAsasDone ? styles.hotspot : styles.lockedHotspot),
    left: "36%",
    top: "32%",
  }}
  onClick={() => masuk("/isim-pertengahan", isimAsasDone)}
  onMouseEnter={() => setHover("📚 Akademi Isim - Tahap Pertengahan")}
  onMouseLeave={() => setHover("")}
>
  {!isimAsasDone && "🔒"}
</button>

 <button
  style={{
    ...(isimPertengahanDone ? styles.hotspot : styles.lockedHotspot),
    left: "63%",
    top: "28%",
  }}
  onClick={() => masuk("/menara-isim", isimPertengahanDone)}
  onMouseEnter={() => setHover("🎓 Menara Isim - Tahap Lanjutan")}
  onMouseLeave={() => setHover("")}
  >
  {!isimPertengahanDone && "🔒"}
</button>

 <button
  style={{
    ...(menaraIsimDone ? styles.hotspot : styles.lockedHotspot),
    left: "50%",
    top: "62%",
  }}
  onClick={() => masuk("/sarjana-isim", menaraIsimDone)}
  onMouseEnter={() => setHover("👑 Sarjana Isim - Boss Battle")}
  onMouseLeave={() => setHover("")}
 >
  {!menaraIsimDone && "🔒"}
</button>

 <button
  style={{
    ...(sarjanaDone ? styles.hotspot : styles.lockedHotspot),
    left: "82%",
    top: "56%",
  }}
  onClick={() => masuk("/anugerah-isim", sarjanaDone)}
  onMouseEnter={() => setHover("🏆 Monolit Isim Purba")}
  onMouseLeave={() => setHover("")}
/>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#8bcf63",
    fontFamily: "Arial",
    overflow: "hidden",
  },

  backBtn: {
    position: "absolute",
    zIndex: 10,
    top: "12px",
    left: "12px",
    padding: "10px 18px",
    borderRadius: "12px",
    border: "none",
    background: "#5b3b1d",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
mapWrapper: {
  width: "100vw",
  height: "100vh",
  background: "#111827",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
},
 map: {
  position: "relative",
  width: "80%",
  maxWidth: "1200px",
  aspectRatio: "1366 / 768",
  backgroundImage: "url('/images/jejak-isim.webp')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "auto",
  display: "block",
},

  hotspot: {
  position: "absolute",
  width: "13%",
  height: "18%",
  background: "transparent",
  border: "none",
  cursor: "pointer",
},
  lockedHotspot: {
  position: "absolute",
  width: "13%",
  height: "18%",
  background: "transparent",
  border: "none",
  cursor: "pointer",
},
tooltip: {
  position: "absolute",
  zIndex: 20,
  top: "70px",
  left: "20px",
  background: "#fff3b0",
  color: "#3b260c",
  padding: "12px 18px",
  borderRadius: "14px",
  border: "3px solid #7a4d22",
  fontWeight: "bold",
  boxShadow: "0 5px 0 #4e3218",
},

lockOverlay: {
  position: "absolute",
  width: "13%",
  height: "18%",
  background: "rgba(0, 0, 0, 0.45)",
  borderRadius: "18px",
  color: "white",
  fontSize: "38px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
},
};
