import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./GerbangKalam.css";
import gerbangMap from "../../assets/maps/gerbangkalam.webp";

export default function GerbangKalam() {
  const navigate = useNavigate();

  useEffect(() => {
    const bgMusic = new Audio(
      "/sounds/gerbangutama.mp3"
    );

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
    localStorage.getItem("sarjanaIsimDone") ===
    "true";

  const fiilDone =
    localStorage.getItem("sarjanaFiilDone") ===
    "true";

  const hurufDone =
    localStorage.getItem("sarjanaHurufDone") ===
    "true";

  const penjagaOpen =
    isimDone && fiilDone && hurufDone;

  function masukJejak(
    path,
    unlocked,
    lockedMessage
  ) {
    if (!unlocked) {
      alert(lockedMessage);
      return;
    }

    navigate(path);
  }

  return (
    <main className="gerbang-wrap">
      <section className="gerbang-map-frame">
        <img
          src={gerbangMap}
          className="gerbang-map"
          alt="Gerbang Kalam"
          draggable="false"
        />

        {/* Hutan Huruf */}
        <button
          type="button"
          aria-label="Masuk ke Jejak Huruf"
          className={`hotspot huruf ${
            fiilDone ? "" : "disabled"
          }`}
          onClick={() =>
            masukJejak(
              "/jejak-huruf",
              fiilDone,
              "🔒 Selesaikan Sarjana Fi‘il dahulu."
            )
          }
        >
          {!fiilDone && (
            <span className="lock-icon">
              🔒
            </span>
          )}
        </button>

        {/* Gunung Fi'il */}
        <button
          type="button"
          aria-label="Masuk ke Jejak Fi'il"
          className={`hotspot fiil ${
            isimDone ? "" : "disabled"
          }`}
          onClick={() =>
            masukJejak(
              "/jejak-fiil",
              isimDone,
              "🔒 Selesaikan Sarjana Isim dahulu."
            )
          }
        >
          {!isimDone && (
            <span className="lock-icon">
              🔒
            </span>
          )}
        </button>

        {/* Lembah Isim */}
        <button
          type="button"
          aria-label="Masuk ke Jejak Isim"
          className={`hotspot isim ${
            kalamIntroDone ? "" : "disabled"
          }`}
          onClick={() =>
            masukJejak(
              "/jejak-isim",
              kalamIntroDone,
              "🔒 Selesaikan Lembah Kalam dahulu."
            )
          }
        >
          {!kalamIntroDone && (
            <span className="lock-icon">
              🔒
            </span>
          )}
        </button>

        {/* Lembah Kalam */}
        <button
          type="button"
          aria-label="Masuk ke Lembah Kalam"
          className="hotspot lembah"
          onClick={() =>
            navigate("/lembah-kalam")
          }
        />

        {/* Penjaga Kalam */}
        <button
          type="button"
          aria-label="Masuk ke Arena Penjaga Kalam"
          className={`hotspot boss ${
            penjagaOpen ? "" : "disabled"
          }`}
          onClick={() =>
            masukJejak(
              "/guardian-arena",
              penjagaOpen,
              "🔒 Lengkapkan Sarjana Isim, Fi‘il dan Huruf dahulu."
            )
          }
        >
          {!penjagaOpen && (
            <span className="lock-icon">
              🔒
            </span>
          )}
        </button>
      </section>

      <button
        type="button"
        aria-label="Kembali ke Peta Dunia"
        className="back-map"
        onClick={() => navigate("/worldmap")}
      />
    </main>
  );
}