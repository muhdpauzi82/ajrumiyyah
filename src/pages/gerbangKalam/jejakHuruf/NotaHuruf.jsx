import { useNavigate } from "react-router-dom";

export default function NotaHuruf() {
  const navigate = useNavigate();

  function selesaiNota() {
    localStorage.setItem("notaHurufDone", "true");
    localStorage.setItem("gulunganMatanHuruf", "true");
    alert("📜 Gulungan Matan Huruf diperoleh!");
    navigate("/jejak-huruf");
  }

  return (
    <div style={styles.page}>
      <button style={styles.backBtn} onClick={() => navigate("/jejak-huruf")}>
        ⬅ Kembali
      </button>

      <div style={styles.card}>
        <h1>📜 Lembah Matan Huruf</h1>

        <div style={styles.matan}>
          وَالْحَرْفُ مَا لاَ يَصْلُحُ مَعَهُ
          <br />
          دَلِيلُ الاِسْمِ
          <br />
          وَلاَ دَلِيلُ الْفِعْلِ
        </div>

        <h2>📖 Maksud Ringkas</h2>
        <p>
          Huruf ialah perkataan yang tidak menerima tanda isim dan tidak
          menerima tanda fi'il.
        </p>

        <h2>🏷 Contoh Huruf</h2>

        <div style={styles.noteBox}>
          <h3>1. Huruf Jar</h3>
          <p>Huruf yang menyebabkan isim selepasnya menjadi majrur.</p>
           <p>مِنْ، إِلَى، عَنْ، عَلَى، فِي، البَاء، الكَاف، اللام</p>
          <b>Contoh:</b>
          <p> ذَهَبَ الطَالِبُ اِلَي المَسْجِدِ</p>
        </div>

        <div style={styles.noteBox}>
          <h3>2. Huruf Athaf</h3>
          <p>Huruf yang menghubungkan perkataan atau ayat.</p>
            <p>وَ ، فَ ، حَتَّى، ثُمَّ ، أَوْ، بَلْ ، اللام ، </p>
          <b>Contoh:</b>
          <p> جَاءَ زيْدُُ وَ عُمَرُُ</p>
                </div>

        <div style={styles.noteBox}>
          <h3>3. Huruf Nida'</h3>
          <p>Huruf yang digunakan untuk menyeru atau memanggil.</p>
          <p>يَا ، أَيَا ، هَيَا  ، أَيْ </p>
          <b>Contoh:</b>
          <p>يَا مُحَمَّدُ</p>
        </div>

        <button style={styles.finishBtn} onClick={selesaiNota}>
          ✅ Saya Faham, Buka Kem Huruf
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