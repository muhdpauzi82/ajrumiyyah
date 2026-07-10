import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AnugerahHuruf.css";

export default function AnugerahHuruf() {

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
  localStorage.setItem("artifact_huruf", "true");
  localStorage.setItem("monolitHurufPurba", "true");

  const coins = Number(localStorage.getItem("coins") || 0);
  localStorage.setItem("coins", coins + 500);

  const audio = new Audio("../../../sounds/terima item.mp3");
  audio.volume = 0.8;
  audio.play();

  setClaimed(true);

  setTimeout(() => {
    navigate("/gerbang-kalam");
  }, 4500);
}

  return (
    <div className="award-page">
    <div className="award-frame">
     <img src="../../../images/anugerahhuruf.webp" className="award-bg" />
    <img src="../../../images/batuhurufbesar.png" className="huruf-big-stone" alt=""/>
  
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
        src="../../../images/artifakhuruf.webp"
        className="artifact-big"
      />

      <h2>🏆 Monolit Huruf Purba</h2>

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