import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function JejakHuruf() {
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
  const notaHurufDone = localStorage.getItem("notaHurufDone") === "true";
  const hurufAsasDone = localStorage.getItem("hurufAsasDone") === "true";
  const hurufAkademiDone = localStorage.getItem("hurufAkademiDone") === "true";
  const hurufMenaraDone = localStorage.getItem("hurufMenaraDone") === "true";
  const hurufSarjanaDone = localStorage.getItem("hurufSarjanaDone") === "true";

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
        ← Kembali
      </button>

      {hover && <div style={styles.tooltip}>{hover}</div>}

      <div style={styles.mapFrame}>
        
        <img src="/images/hurufbg.webp" alt="Jejak Huruf" style={styles.map} />

   {/* Nota Huruf */}
<button
  style={{ ...styles.hotspot, left: "8%", top: "38%" }}
  onClick={() => navigate("/nota-huruf")}
  onMouseEnter={() => setHover("📜 Lembah Matan Huruf")}
  onMouseLeave={() => setHover("")}
/>

{/* Kem Huruf */}
<button
  style={{
    ...(notaHurufDone ? styles.hotspot : styles.lockedHotspot),
    left: "30%",
    top: "41%",
  }}
  onClick={() => masuk("/huruf-asas", notaHurufDone)}
  onMouseEnter={() => setHover("🏕️ Kem Huruf")}
  onMouseLeave={() => setHover("")}
>
  {!notaHurufDone && "🔒"}
</button>

{/* Akademi Huruf */}
<button
  style={{
    ...(hurufAsasDone ? styles.hotspot : styles.lockedHotspot),
    left: "50%",
    top: "42%",
  }}
  onClick={() => masuk("/huruf-akademi", hurufAsasDone)}
  onMouseEnter={() => setHover("🏫 Akademi Huruf")}
  onMouseLeave={() => setHover("")}
>
  {!hurufAsasDone && "🔒"}
</button>

{/* Menara Huruf */}
<button
  style={{
    ...(hurufAkademiDone ? styles.hotspot : styles.lockedHotspot),
    left: "81%",
    top: "42%",
  }}
  onClick={() => masuk("/menara-huruf", hurufAkademiDone)}
  onMouseEnter={() => setHover("🗼 Menara Huruf")}
  onMouseLeave={() => setHover("")}
>
  {!hurufAkademiDone && "🔒"}
</button>

{/* Sarjana Huruf */}
<button
  style={{
    ...(hurufMenaraDone ? styles.hotspot : styles.lockedHotspot),
    left: "46%",
    top: "69%",
  }}
  onClick={() => masuk("/sarjana-huruf", hurufMenaraDone)}
  onMouseEnter={() => setHover("👑 Sarjana Huruf")}
  onMouseLeave={() => setHover("")}
>
  {!hurufMenaraDone && "🔒"}
</button>

{/* Monolit Huruf */}
<button
  style={{
    ...(hurufSarjanaDone ? styles.hotspot : styles.lockedHotspot),
    left: "82%",
    top: "68%",
  }}
  onClick={() => masuk("/anugerah-huruf", hurufSarjanaDone)}
  onMouseEnter={() => setHover("🏆 Monolit Huruf Purba")}
  onMouseLeave={() => setHover("")}
>
  {!hurufSarjanaDone && "🔒"}
</button>
      </div>
    </div>
  );
}
const styles = { page: { width: "100vw", height: "100vh",
 background: "#000", 
display: "flex", 
justifyContent: "center", 
alignItems: "center", 
position: "relative",
 overflow: "hidden", }, 
mapFrame: { position: "relative", width: "min(100vw, 177vh)",
 aspectRatio: "16 / 9", }, 

map: { width: "100%", height: "100%", 
objectFit: "contain", display: "block", },
 backBtn: { position: "absolute", top: "20px", left: "20px", 
zIndex: 100, padding: "12px 20px",
 borderRadius: "12px",
 border: "none",
 fontWeight: "bold",
 cursor: "pointer", }, 

hotspot: { position: "absolute", width: "140px", height: "140px", 
borderRadius: "140%",
 background: "transparent",
 border: "none", 
cursor: "pointer", 
transform: "translate(-50%, -50%)", }, 
tooltip: {
  position: "absolute",
  top: "20px",
  zIndex: 200,
  background: "rgba(0,0,0,0.75)",
  color: "gold",
  padding: "10px 18px",
  borderRadius: "12px",
  fontWeight: "bold",
},

lockedHotspot: {
  position: "absolute",
  width: "55px",
  height: "55px",
  borderRadius: "50%",
  background: "rgba(0,0,0,0.45)",
  border: "none",
  cursor: "pointer",
  transform: "translate(-50%, -50%)",
  fontSize: "28px",
},
};