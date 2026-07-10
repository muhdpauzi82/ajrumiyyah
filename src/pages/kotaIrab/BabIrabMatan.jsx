import { useNavigate } from "react-router-dom";
import "../../styles/BabIrabMatan.css";

export default function BabIrabMatan() {
  const navigate = useNavigate();

  return (
    <div className="matan-irab-page">
      <button className="matan-back" onClick={() => navigate("/bab-irab-intro")}>
        ⬅ Kembali
      </button>

      <div className="matan-card">
        <h1>بَابُ الإِعْرَابِ</h1>

        <div className="matan-text">
          الإِعْرَابُ هُوَ تَغْيِيرُ أَوَاخِرِ الْكَلِمِ
          <br />
          لاِخْتِلَافِ الْعَوَامِلِ الدَّاخِلَةِ عَلَيْهَا
          <br />
          لَفْظًا أَوْ تَقْدِيرًا
        </div>

        <div className="matan-meaning">
          I&apos;rab ialah perubahan akhir kalimah kerana perbezaan faktor
          yang masuk ke atasnya, sama ada perubahan itu jelas pada lafaz atau
          secara anggaran.
        </div>

        <button
          className="matan-next"
          onClick={() => {
            localStorage.setItem("babIrabMatanDone", "true");
            navigate("/bab-irab-learning")
          }}
        >
          ✨ Lihat Animasi I&apos;rab
        </button>
      </div>
    </div>
  );
}