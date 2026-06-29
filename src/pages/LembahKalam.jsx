import { useNavigate } from "react-router-dom";
import bg from "../assets/backgrounds/lembah-kalam-bg.webp";

export default function LembahKalam() {
  const navigate = useNavigate();

  function selesaiLembah() {
    localStorage.setItem("kalamIntro", "true");
    navigate("/gerbang-kalam");
  }

  return (
    <div style={styles.page}>
      <div style={styles.mapWrapper}>
        <img src={bg} alt="Lembah Kalam" style={styles.map} />

        <button
          onClick={selesaiLembah}
          style={styles.hotspotButton}
          title="Selesai Lembah Kalam"
        />
      </div>
    </div>
  );
}

const styles = {
  page: {
  minHeight: "100vh",
  width: "100vw",
  background: "#1b1b1b", // gelap
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
},

  mapWrapper: {
  position: "relative",
  width: "70vw",
  maxWidth: "1400px",
  margin: "0 auto",
},

  map: {
  width: "100%",
  display: "block",
  borderRadius: "18px",
  boxShadow: "0 0 40px rgba(0,0,0,0.6)",
},

  hotspotButton: {
    position: "absolute",
    left: "50%",
    bottom: "3.5%",
    transform: "translateX(-50%)",
    width: "38%",
    height: "8%",
    opacity: 0,
    border: "none",
    cursor: "pointer",
  },
};