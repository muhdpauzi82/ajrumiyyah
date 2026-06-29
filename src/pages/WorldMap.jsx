import "../styles/WorldMap.css";
import { useNavigate } from "react-router-dom";
import worldMap from "../assets/maps/worldmap.webp";

export default function WorldMap() {
  const navigate = useNavigate();

  const kotaIrabOpen = localStorage.getItem("kunciKalam") === "true";
  const kotaIrabUnlocked = localStorage.getItem("kotaIrabUnlocked") === "true";
  return (
    <div className="world-wrap">
      <div className="world-frame">
        <img src={worldMap} className="world-img" />
  <button
  className="world-zone gerbang open"
  onClick={() => navigate("/gerbang-kalam")}
></button>
        { kotaIrabUnlocked ? (
  <button
    className="world-zone irab open"
    onClick={() => navigate("/kota-irab")}
  />
) : (
  <button
    className="world-zone irab locked"
    onClick={() =>
      alert("Kota I'rab masih berkunci. Selesaikan Gerbang Kalam dahulu.")
    }
  >
    <span className="lock-icon">🔒</span>
  </button>
)}

<button className="world-zone marfuat locked">
  <span className="lock-icon">🔒</span>
</button>

<button className="world-zone mansubat locked">
  <span className="lock-icon">🔒</span>
</button>

<button className="world-zone majrurat locked">
  <span className="lock-icon">🔒</span>
</button>

<button className="world-zone tawabi locked">
  <span className="lock-icon">🔒</span>
</button>

<button className="world-zone istana locked">
  <span className="lock-icon">🔒</span>
</button>
      </div>

      <button className="back-world" onClick={() => navigate("/")}>
        
      </button>
    </div>
  );
}