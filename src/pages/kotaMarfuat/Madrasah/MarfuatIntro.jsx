import { useNavigate } from "react-router-dom";
import introBg from "../../../assets/backgrounds/madrasah-marfuat-intro.webp";
import "../styles/MarfuatIntro.css";

export default function MarfuatIntro() {
  const navigate = useNavigate();

  function startLearning() {
    localStorage.setItem("MarfuatIntroDone", "true");
    navigate("/marfuat-matan");
  }

  return (
    <main className="marfuat-intro">
      <section className="marfuat-intro-frame">

        <img
          src={introBg}
          className="marfuat-intro-bg"
          alt="Madrasah Marfu'at"
          draggable="false"
        />

        <button
          type="button"
          className="marfuat-intro-hotspot hotspot-kembali"
          onClick={() => navigate("/kota-marfuat")}
          aria-label="Kembali ke Kota Marfu'at"
        />

        <button
          type="button"
          className="marfuat-intro-hotspot hotspot-mula"
          onClick={startLearning}
          aria-label="Mulakan Pembelajaran"
        />

      </section>
    </main>
  );
}