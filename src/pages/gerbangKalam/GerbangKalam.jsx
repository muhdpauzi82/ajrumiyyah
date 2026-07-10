import { useState, useEffect } from "react";
import "./GerbangKalam.css";
import { useNavigate } from "react-router-dom";

import gerbangMap from "../../assets/maps/gerbangkalam.webp";

export default function GerbangKalam() {
  const navigate = useNavigate();
useEffect(() => {
  const bgMusic = new Audio("../../sounds/gerbangutama.mp3");

  bgMusic.loop = true;
  bgMusic.volume = 0.2;

  bgMusic.play().catch(() => {});

  return () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  };
}, []);
  const kalamIntroDone =
    localStorage.getItem("kalamIntro") === "true";

  const isimDone =
    localStorage.getItem("artifact_isim") === "true";

  const fiilDone =
  localStorage.getItem("artifact_fiil") === "true";

  const hurufDone =
  localStorage.getItem("artifact_huruf") === "true";

  const penjagaOpen =
  isimDone && fiilDone && hurufDone;

  return (
    <div className="gerbang-wrap">
      <div className="map-frame">

        <img
          src={gerbangMap}
          className="gerbang-map"
          alt="Gerbang Kalam"
        />

        {/* Hutan Huruf */}
        <button
  className={`hotspot huruf ${fiilDone ? "" : "disabled"}`}
  onClick={() => {
    if (fiilDone) {
      navigate("/jejak-huruf");
    } else {
      alert("Selesaikan Gunung Fi'il dahulu.");
    }
  }}
>
  {!fiilDone && (
    <span className="lock-icon">🔒</span>
  )}
</button>

        {/* Gunung Fi'il */}
        <button
  className={`hotspot fiil ${
    isimDone ? "" : "disabled"
  }`}
  onClick={() => {
    if (isimDone) {
      navigate("/jejak-fiil");
    } else {
      alert("Selesaikan Lembah Isim dahulu.");
    }
  }}
>
  {!isimDone && (
    <span className="lock-icon">🔒</span>
  )}
</button>

        {/* Lembah Isim */}
        <button
          className={`hotspot isim ${
            kalamIntroDone ? "" : "disabled"
          }`}
          onClick={() => {
            if (kalamIntroDone) {
              navigate("/jejak-isim");
            } else {
              alert(
                "Selesaikan Lembah Kalam dahulu."
              );
            }
          }}
        >
          {!kalamIntroDone && (
            <span className="lock-icon">🔒</span>
          )}
        </button>

        {/* Lembah Kalam */}
        <button
          className="hotspot lembah"
          onClick={() =>
            navigate("/lembah-kalam")
          }
        />

        {/* Penjaga Kalam */}
       <button
  className={`hotspot boss ${
    penjagaOpen ? "" : "disabled"
  }`}
  onClick={() => {
    if (penjagaOpen) {
      navigate("/penjaga-kalam");
    } else {
      alert(
        "Lengkapkan Jejak Isim, Fi'il dan Huruf dahulu."
      );
    }
  }}
>
  {!penjagaOpen && (
    <span className="lock-icon">🔒</span>
  )}
</button>

      </div>

      <button
        className="back-map"
        onClick={() => navigate("/worldmap")}
      >
       
      </button>
    </div>
  );
}