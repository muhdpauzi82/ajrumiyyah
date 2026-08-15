import { useNavigate } from "react-router-dom";
import "../styles/MarfuatMatan.css";

export default function MarfuatMatan() {
  const navigate = useNavigate();

  return (
    <main className="marfuat-matan">
      <section className="marfuat-matan-frame">

        {/* GAMBAR PENUH */}
        <img
          className="matan-full-image"
          src="/images/kotaMarfuat/matan-marfuat.webp"
          alt="Matan al-Ajurrumiyyah - Bab al-Marfu'at"
          draggable="false"
        />

        {/* UI KEMBALI */}
        <button
          type="button"
          className="matan-back-btn"
          onClick={() => navigate("/marfuat-intro")}
        >
          ← Kembali
        </button>

        {/* KAWASAN KLIK TERUSKAN PEMBELAJARAN */}
 <button
  type="button"
  className="matan-next-hotspot"
  aria-label="Teruskan Pembelajaran"
  onClick={() => {
    localStorage.setItem("MarfuatMatanDone", "true");
    localStorage.setItem("madrasahMarfuatDone", "true");

    navigate("/kota-marfuat");
  }}
/>
      </section>
    </main>
  );
}