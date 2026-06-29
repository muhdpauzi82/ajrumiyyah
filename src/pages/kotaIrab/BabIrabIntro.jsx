import { useNavigate } from "react-router-dom";
import "../../styles/BabIrabIntro.css";


export default function BabIrabIntro() {
  const navigate = useNavigate();

  return (
    <div className="bab-irab-intro">
      <button className="back-btn" onClick={() => navigate("/kota-irab")}>
        ⬅ Kembali
      </button>

      <div className="intro-box">
        <h1>بَابُ الإِعْرَابِ</h1>

        <h2>Madrasah Bab I&apos;rab</h2>

        <p>
          Selamat datang ke Madrasah Bab I&apos;rab. Di sinilah kamu akan
          memahami rahsia perubahan akhir kalimah.
        </p>

        <div className="arabic-line">
          الإِعْرَابُ يُغَيِّرُ آخِرَ الكَلِمَةِ
        </div>

        <p>
          Sebelum memasuki Kota Marfu&apos;at, Mansubat, Majrurat dan Tawabi&apos;,
          kamu mesti memahami dahulu apakah maksud I&apos;rab.
        </p>

        <button
          className="start-btn"
          onClick={() => {
            localStorage.setItem("babIrabIntroDone", "true");
            navigate("/bab-irab-matan");
          }}
        >
          📖 Mulakan Pembelajaran
        </button>
      </div>
    </div>
  );
}