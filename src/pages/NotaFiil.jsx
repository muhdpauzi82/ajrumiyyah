import { useNavigate } from "react-router-dom";

export default function NotaFiil() {
  const navigate = useNavigate();

  function selesaiNota() {
    localStorage.setItem("notaFiilDone", "true");
    localStorage.setItem("gulunganMatanFiil", "true");

    alert("📜 Gulungan Matan Fi'il diperoleh!");

    navigate("/jejak-fiil");
  }

  return (
    <div style={styles.page}>
      <button
        style={styles.backBtn}
        onClick={() => navigate("/jejak-fiil")}
      >
        ⬅ Kembali
      </button>

      <div style={styles.card}>
        <h1>📜 Lembah Matan Fi'il</h1>

        <div style={styles.matan}>
          وَالْفِعْلُ يُعْرَفُ بِقَدْ
          <br />
          وَالسِّينِ
          <br />
          وَسَوْفَ
          <br />
          وَتَاءِ التَّأْنِيثِ السَّاكِنَةِ
        </div>

        <h2>📖 Maksud Ringkas</h2>

        <p>
          Fi'il ialah perkataan yang menunjukkan perbuatan
          atau kejadian yang berlaku pada masa tertentu.
        </p>

        <h2>🏷 Tanda-tanda Fi'il</h2>

        <div style={styles.noteBox}>
          <h3>1. Qad (قَدْ)</h3>
          <p>Fi'il boleh menerima perkataan قَدْ.</p>
          <b>Contoh:</b>
          <p>قَدْ كَتَبَ</p>
        </div>

        <div style={styles.noteBox}>
          <h3>2. Sa (سَ)</h3>
          <p>Fi'il Mudhari' boleh menerima huruf سَ.</p>
          <b>Contoh:</b>
          <p>سَيَكْتُبُ</p>
        </div>

        <div style={styles.noteBox}>
          <h3>3. Saufa (سَوْفَ)</h3>
          <p>Fi'il Mudhari' boleh menerima perkataan سَوْفَ.</p>
          <b>Contoh:</b>
          <p>سَوْفَ يَكْتُبُ</p>
        </div>

        <div style={styles.noteBox}>
          <h3>4. Ta' Ta'nith Sakinah</h3>
          <p>Fi'il Madhi boleh menerima Ta' Ta'nith Sakinah.</p>
          <b>Contoh:</b>
          <p>كَتَبَتْ</p>
        </div>

        <button
          style={styles.finishBtn}
          onClick={selesaiNota}
        >
          ✅ Saya Faham, Buka Tahap Asas
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
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