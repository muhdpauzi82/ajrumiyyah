import "../styles/WorldMap.css";

import { useNavigate } from "react-router-dom";

import worldMap from "../assets/maps/worldmap.webp";
import homeIcon from "../assets/icons/home/home.webp";

/* Gambar penanda dunia */
import petaKalam from "../assets/icons/worldmap/petakalam.webp";
import petaIrab from "../assets/icons/worldmap/petairab.webp";
import petaMarfuat from "../assets/icons/worldmap/petamarfuat.webp";
import petaMansubat from "../assets/icons/worldmap/petamansubat.webp";
import petaMajrurat from "../assets/icons/worldmap/petamajrurat.webp";
import petaTawabi from "../assets/icons/worldmap/petatawabi.webp";
import petaIstana from "../assets/icons/worldmap/petaistana.webp";

import {
  isKotaIrabUnlocked,
  isWorldUnlocked,
} from "../utils/gameProgress";

export default function WorldMap() {
  const navigate = useNavigate();

  const worlds = [
    {
      id: "gerbang",
      name: "Gerbang Kalam",
      className: "gerbang",
      image: petaKalam,
      path: "/gerbang-kalam",
      unlocked: true,
    },
    {
      id: "irab",
      name: "Kota I'rab",
      className: "irab",
      image: petaIrab,
      path: "/kota-irab",
      unlocked: isKotaIrabUnlocked(),
    },
    {
      id: "marfuat",
      name: "Kota Marfu'at",
      className: "marfuat",
      image: petaMarfuat,
      path: "/kota-marfuat",
      unlocked: isWorldUnlocked("marfuat"),
    },
    {
      id: "mansubat",
      name: "Kota Mansubat",
      className: "mansubat",
      image: petaMansubat,
      path: "/kota-mansubat",
      unlocked: isWorldUnlocked("mansubat"),
    },
    {
      id: "majrurat",
      name: "Kota Majrurat",
      className: "majrurat",
      image: petaMajrurat,
      path: "/kota-majrurat",
      unlocked: isWorldUnlocked("majrurat"),
    },
    {
      id: "tawabi",
      name: "Kota Tawabi'",
      className: "tawabi",
      image: petaTawabi,
      path: "/kota-tawabi",
      unlocked: isWorldUnlocked("tawabi"),
    },
    {
      id: "istana",
      name: "Istana Ajrumiyyah",
      className: "istana",
      image: petaIstana,
      path: "/istana-rahsia",
      unlocked: isWorldUnlocked("istana"),
    },
  ];

  function openWorld(world) {
    if (!world.unlocked) {
      alert(
        `${world.name} masih belum dibuka. ` +
        "Selesaikan dunia sebelumnya dahulu."
      );

      return;
    }

    navigate(world.path);
  }

  return (
    <main className="world-wrap">
      <section className="world-frame">
        {/* BACKGROUND PETA */}
        <img
          src={worldMap}
          className="world-img"
          alt="Peta Dunia Ajrumiyyah"
          draggable="false"
        />

        {/* PENANDA TUJUH DUNIA */}
        {worlds.map((world) => (
          <button
            key={world.id}
            type="button"
            className={[
              "world-zone",
              world.className,
              world.unlocked ? "open" : "locked",
              world.id === "irab" ? "current" : "",
            ].join(" ")}
            aria-label={
              world.unlocked
                ? `Masuk ke ${world.name}`
                : `${world.name} belum dibuka`
            }
            onClick={() => openWorld(world)}
          >
            <img
              src={world.image}
              className="world-zone-image"
              alt={world.name}
              draggable="false"
            />
          </button>
        ))}

        {/* BUTTON HOME */}
        <button
          type="button"
          className="world-home-button"
          onClick={() => navigate("/home")}
          aria-label="Kembali ke halaman utama"
        >
          <img
            src={homeIcon}
            alt=""
            draggable="false"
          />

          <span>HOME</span>
        </button>
      </section>
    </main>
  );
}