import { useNavigate } from "react-router-dom";
import bgMajlis from "../../assets/backgrounds/bg-majlis-irab.webp";
import "../../styles/BabIrabDialog.css";

export default function BabIrabDialog() {
  const navigate = useNavigate();

  return (
    <div
      className="majlis-page"
      style={{ backgroundImage: `url(${bgMajlis})` }}
    >
      <button
        className="hotspot-masuk"
        onClick={() => navigate("/bab-irab-learning")}
        aria-label="Masuk Majlis Ilmu"
      />
    </div>
  );
}