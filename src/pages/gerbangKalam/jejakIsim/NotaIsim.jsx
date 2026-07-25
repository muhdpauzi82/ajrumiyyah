import { useNavigate } from "react-router-dom";

export default function NotaIsim() {
  const navigate = useNavigate();

  function selesaiNota() {
    localStorage.setItem("notaIsimDone", "true");
    localStorage.setItem("gulunganMatanIsim", "true");
    alert("📜 Gulungan Matan Isim diperoleh!");
    navigate("/jejak-isim");
  }

  return (
    <div style={styles.page}>
      <button style={styles.backBtn} onClick={() => navigate("/jejak-isim")}>
        ⬅ Kembali
      </button>

      <div style={styles.card}>
        <h1>📜 Lembah Matan Isim</h1>

        <div style={styles.matan}>
          فَالِاسْمُ يُعْرَفُ بِالْخَفْضِ
          <br />
          وَالتَّنْوِينِ
          <br />
          وَدُخُولِ الْأَلِفِ وَاللَّامِ
          <br />
          وَحُرُوفِ الْخَفْضِ
        </div>

        <h2>📖 Maksud Ringkas</h2>
        <p>
          Isim ialah perkataan yang menunjukkan nama manusia, haiwan, tempat,
          benda atau sesuatu perkara.
        </p>

        <h2>🏷 Tanda-tanda Isim</h2>

        <div style={styles.noteBox}>
          <h3>1. Khafadh</h3>
          <p>Isim boleh menjadi majrur selepas huruf jar.</p>
          <b>Contoh:</b>
          <p>فِي الْمَسْجِدِ</p>
        </div>

        <div style={styles.noteBox}>
          <h3>2. Tanwin</h3>
          <p>Perkataan yang menerima tanwin ialah isim.</p>
          <b>Contoh:</b>
          <p>كِتَابٌ ، قَلَمٌ ، مُسْلِمٌ</p>
        </div>

        <div style={styles.noteBox}>
          <h3>3. Alif Lam</h3>
          <p>Perkataan yang boleh menerima ال ialah isim.</p>
          <b>Contoh:</b>
          <p>الْكِتَابُ ، الْمَسْجِدُ</p>
        </div>

        <div style={styles.noteBox}>
          <h3>4. Huruf Jar</h3>
          <p>Perkataan selepas huruf jar biasanya ialah isim.</p>
          <b>Contoh huruf jar:</b>
          <p>مِنْ ، إِلَى ، فِي ، عَلَى ، عَنْ</p>
        </div>

        <button style={styles.finishBtn} onClick={selesaiNota}>
          ✅ Saya Faham, Buka Tahap Asas
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
  width: "100%",
  height: "100vh",
  overflowY: "auto",
  overflowX: "hidden",

  boxSizing: "border-box",
  padding: "30px",

  background: "linear-gradient(to bottom, #dff5c9, #96c96b)",
  fontFamily: "Arial",
},
  backBtn: {
    padding: "10px 18px",
    borderRadius: "12px",
    border: "none",
    background: "#5b3b1d",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  card: {
    maxWidth: "850px",
    margin: "30px auto",
    background: "#fff8dc",
    border: "5px solid #7a4d22",
    borderRadius: "25px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 10px 0 #4e3218",
  },
  matan: {
    direction: "rtl",
    fontSize: "34px",
    lineHeight: "1.9",
    background: "#f4e2a1",
    borderRadius: "20px",
    padding: "25px",
    margin: "25px 0",
    color: "#3b260c",
    fontWeight: "bold",
  },
  noteBox: {
    background: "#ffffff",
    border: "3px solid #b8893b",
    borderRadius: "18px",
    padding: "15px",
    margin: "15px 0",
  },
  finishBtn: {
    marginTop: "25px",
    padding: "15px 30px",
    borderRadius: "18px",
    border: "none",
    background: "#d49a1f",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};