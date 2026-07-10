import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function JejakFiil() {
  const navigate = useNavigate();
  useEffect(() => {
  const bgMusic = new Audio("../../../sounds/jejak.mp3");

  bgMusic.loop = true;
  bgMusic.volume = 0.2;

  bgMusic.play().catch(() => {});

  return () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  };
}, []);
  const [hover, setHover] = useState("");
  const notaFiilDone = localStorage.getItem("notaFiilDone") === "true";
  const fiilAsasDone = localStorage.getItem("fiilAsasDone") === "true";
  const fiilAkademiDone =localStorage.getItem("fiilAkademiDone") === "true";
  const fiilMenaraDone = localStorage.getItem("fiilMenaraDone") === "true";
  const fiilSarjanaDone = localStorage.getItem("fiilSarjanaDone") === "true";
   
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
        
        <img src="../../../images/jejak-fiil.webp" alt="Jejak Fi'il" style={styles.map} />

        {/* Nota Fi'il */}
<button
  style={{ ...styles.hotspot, left: "25%", top: "77%" }}
  onClick={() => navigate("../../../nota-fiil")}
  onMouseEnter={() => setHover("📜 Lembah Matan Fi'il")}
  onMouseLeave={() => setHover("")}
/>

{/* Kampung Fi'il */}
<button
  style={{
    ...(notaFiilDone ? styles.hotspot : styles.lockedHotspot),
    left: "28%",
    top: "49%",
  }}
  onClick={() => masuk("../../../fiil-asas", notaFiilDone)}
  onMouseEnter={() => setHover("🏡 Kampung Fi'il")}
  onMouseLeave={() => setHover("")}
>
  {!notaFiilDone && "🔒"}
</button>

{/* Akademi Fi'il */}
<button
  style={{
    ...(fiilAsasDone ? styles.hotspot : styles.lockedHotspot),
    left: "51%",
    top: "77%",
  }}
  onClick={() => masuk("../../../fiil-akademi", fiilAsasDone)}
  onMouseEnter={() => setHover("🏫 Akademi Fi'il")}
  onMouseLeave={() => setHover("")}
>
  {!fiilAsasDone && "🔒"}
</button>

{/* Menara Fi'il */}
<button
  style={{ ...(fiilAkademiDone ? styles.hotspot : styles.lockedHotspot),
    left: "67%",
    top: "57%",
  }}
  onClick={() => masuk("../../../menara-fiil", fiilAkademiDone)}
  onMouseEnter={() => setHover("🗼 Menara Bina' Fi'il")}
  onMouseLeave={() => setHover("")}
>
  {!fiilAkademiDone && "🔒"}
</button>

{/* Sarjana Fi'il */}
<button
  style={{
    ...(fiilMenaraDone ? styles.hotspot : styles.lockedHotspot),
    left: "40%",
    top: "31%",
  }}
  onClick={() => masuk("../../../sarjana-fiil", fiilMenaraDone)}
  onMouseEnter={() => setHover("👑 Sarjana Fi'il")}
  onMouseLeave={() => setHover("")}
>
  {!fiilMenaraDone && "🔒"}
</button>

{/* Monolit Fi'il */}
<button
  style={{
    ...(fiilSarjanaDone ? styles.hotspot : styles.lockedHotspot),
    left: "62%",
    top: "28%",
  }}
  onClick={() => masuk("../../../anugerah-fiil", fiilSarjanaDone)}
  onMouseEnter={() => setHover("🏆 Monolit Fi'il Purba")}
  onMouseLeave={() => setHover("")}
>
  {!fiilSarjanaDone && "🔒"}
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

hotspot: { position: "absolute", width: "150px", height: "150px", 
borderRadius: "50%",
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