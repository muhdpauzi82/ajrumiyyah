import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const navigate = useNavigate();

  const coins = localStorage.getItem("coins") || 0;
  const gems = localStorage.getItem("gems") || 0;

  const batuIsim = localStorage.getItem("batuIsimPurba") === "true";
  const kunciKalam = localStorage.getItem("kunciKalam") === "true";

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🎒 INVENTORI</h1>

      <h2>🪙 Syiling: {coins}</h2>
      <h2>💎 Permata: {gems}</h2>

      <hr />

      <h2>Artifak</h2>

      <p>{batuIsim ? "🪨 Batu Isim Purba" : "🔒 Batu Isim Purba"}</p>
      <p>🔒 Batu Fi'il Purba</p>
      <p>🔒 Batu Huruf Purba</p>
      <p>{kunciKalam ? "🗝️ Kunci Kalam" : "🔒 Kunci Kalam"}</p>

      <button onClick={() => navigate("/")}>
        ⬅ Kembali
      </button>
    </div>
  );
}