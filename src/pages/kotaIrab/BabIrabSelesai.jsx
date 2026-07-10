import { useNavigate } from "react-router-dom";
import "../../styles/BabIrabSelesai.css";

export default function BabIrabSelesai() {
  const navigate = useNavigate();

  return (
    <div className="irab-selesai-page">
      <div className="selesai-card">
        <h1>🌿 Bab I&apos;rab Difahami</h1>

        <p>
          Alhamdulillah. Hari ini kamu telah memahami bahawa I&apos;rab ialah
          perubahan pada akhir kalimah.
        </p>

        <div className="murabbi-note">
          “Jangan memandang kecil sesuatu yang kecil. Dalam bahasa Arab, satu
          baris mampu mengubah makna seluruh ayat.”
        </div>

        <button onClick={() => navigate("/kota-irab")}>
          Kembali ke Kota I&apos;rab
        </button>
      </div>
    </div>
  );
}