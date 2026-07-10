import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AnugerahFiil.css";

export default function AnugerahFiil() {
    
const navigate = useNavigate();
const [claimed, setClaimed] = useState(false);
useEffect(() => {
  const bgMusic = new Audio("../../../sounds/reward.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.2;
  bgMusic.play().catch(() => {});

  return () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  };
}, []);

function tuntutAnugerah() {
  localStorage.setItem("artifact_fiil", "true");
  localStorage.setItem("artifactfiil", "true");

  const coins = Number(localStorage.getItem("coins") || 0);
  localStorage.setItem("coins", coins + 500);

  const audio = new Audio("../../../sounds/terima item.mp3");
  audio.volume = 0.8;
  audio.play();

  setClaimed(true);

  setTimeout(() => {
    navigate("../../../gerbang-kalam");
  }, 4500);
}

  return (
    <div className="award-page">
    <div className="award-frame">
     <img src="../../../images/anugerah-fiil-bg.webp" className="award-bg" />
    <img src="../../../images/batu-fiil-besar.webp" className="fiil-big-stone" alt=""/>
  
      <button
  className="claim-hotspot"
  onClick={tuntutAnugerah}
>
</button>

{claimed && (
  <div className="claim-effect">
    <div className="confetti">
      🎉 ✨ 🎊 🌟 🏆 ✨ 🎉
    </div>

    <div className="artifact-popup">
      <img
        src="../../../images/artifakfiil.webp"
        className="artifact-big"
      />

      <h2>🏆 Monolit Fi'il Purba</h2>

      <p>
        Telah dimasukkan ke dalam Gudang Artifak.
      </p>
    </div>
  </div>
)}
      </div>
    </div>
  );
}