
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import petaIcon from "../../assets/icons/home/peta-dunia.webp";
import kitabIcon from "../../assets/icons/home/kitab.webp";
import artifakIcon from "../../assets/icons/home/artifak.webp";
import pencapaianIcon from "../../assets/icons/home/pencapaian.webp";
import koleksiIcon from "../../assets/icons/home/koleksi.webp";
import tetapanIcon from "../../assets/icons/home/tetapan.webp";
import homeBg from "../../assets/backgrounds/home-bg.webp";
import kotaIrabImage from "../../assets/maps/kotairab.webp";


const WORLD_PROGRESS = [
  {
    name: "Gerbang Kalam",
    doneKey: "gerbangKalamDone",
  },
  {
    name: "Kota I'rab",
    doneKey: "kotaIrabDone",
  },
  {
    name: "Kota Marfu'at",
    doneKey: "kotaMarfuatDone",
  },
  {
    name: "Kota Mansubat",
    doneKey: "kotaMansubatDone",
  },
  {
    name: "Kota Majrurat",
    doneKey: "kotaMajruratDone",
  },
  {
    name: "Kota Tawabi'",
    doneKey: "kotaTawabiDone",
  },
  {
    name: "Istana Rahsia",
    doneKey: "istanaRahsiaDone",
  },
];
export default function Home() {
  const navigate = useNavigate();

const [playerName, setPlayerName] = useState(
  () => localStorage.getItem("playerName") || "Pengembara Ilmu"
);

const [showProfileEditor, setShowProfileEditor] = useState(false);
const [draftName, setDraftName] = useState(playerName);

const completedWorlds = WORLD_PROGRESS.filter(
  (world) => localStorage.getItem(world.doneKey) === "true"
).length;

const currentWorld =
  localStorage.getItem("kotaIrabDone") === "true"
    ? "Kota Marfu'at"
    : localStorage.getItem("gerbangKalamDone") === "true"
      ? "Kota I'rab"
      : "Gerbang Kalam";

const savePlayerName = () => {
  const cleanedName = draftName.trim();

  if (!cleanedName) {
    return;
  }

  localStorage.setItem("playerName", cleanedName);
  setPlayerName(cleanedName);
  setShowProfileEditor(false);
};
const getCurrentJourney = () => {
  if (localStorage.getItem("kotaIrabDone") === "true") {
    return {
      world: "KOTA MARFU'AT",
      chapter: "DUNIA 3 / 7",
      progress: 0,
      path: "/worldmap",
    };
  }

  if (localStorage.getItem("gerbangKalamDone") === "true") {
    return {
      world: "KOTA I'RAB",
      chapter: "DUNIA 2 / 7",
      progress: localStorage.getItem("babIrabQuizDone") === "true"
        ? 100
        : localStorage.getItem("babIrabDone") === "true"
          ? 80
          : 20,
      path: "/kota-irab",
    };
  }

  const kalamSteps = [
    "notaIsimDone",
    "isimAsasDone",
    "isimPertengahanDone",
    "menaraIsimDone",
    "sarjanaIsimDone",
    "artifact_isim",

    "notaFiilDone",
    "fiilAsasDone",
    "fiilAkademiDone",
    "menaraFiilDone",
    "sarjanaFiilDone",
    "artifact_fiil",

    "notaHurufDone",
    "hurufAsasDone",
    "hurufAkademiDone",
    "hurufMenaraDone",
    "hurufSarjanaDone",
    "artifact_huruf",
  ];

  const completedSteps = kalamSteps.filter(
    (key) => localStorage.getItem(key) === "true"
  ).length;

  const progress = Math.round(
    (completedSteps / kalamSteps.length) * 100
  );

  return {
    world: "GERBANG KALAM",
    chapter: "DUNIA 1 / 7",
    progress,
    path: "/gerbang-kalam",
  };
};

const currentJourney = getCurrentJourney();





  return (
    <main className="home-screen">
      <section className="home-stage">

        <img
          src={homeBg}
          className="home-background"
          alt="Balai Ilmu Ajrumiyyah"
          draggable="false"
        />

        {/* BUTANG TERUSKAN */}
        <button
          type="button"
          className="home-hotspot home-continue-hotspot"
          onClick={() => navigate("/worldmap")}
          aria-label="Teruskan Pengembaraan"
        />

        {/* MENU BAWAH */}
        <nav className="home-menu">
  <button
    type="button"
    className="home-menu-button"
    onClick={() => navigate("/worldmap")}
  >
    <img src={petaIcon} alt="Peta Dunia" draggable="false" />
    <span>Peta Dunia</span>
  </button>

  <button
    type="button"
    className="home-menu-button"
    onClick={() => navigate("/kitab")}
  >
    <img src={kitabIcon} alt="Kitab" draggable="false" />
    <span>Kitab</span>
  </button>

  <button
    type="button"
    className="home-menu-button"
    onClick={() => navigate("/artifak")}
  >
    <img src={artifakIcon} alt="Artifak" draggable="false" />
    <span>Artifak</span>
  </button>

  <button
    type="button"
    className="home-menu-button"
    onClick={() => navigate("/pencapaian")}
  >
    <img
      src={pencapaianIcon}
      alt="Pencapaian"
      draggable="false"
    />
    <span>Pencapaian</span>
  </button>

  <button
    type="button"
    className="home-menu-button"
    onClick={() => navigate("/koleksi")}
  >
    <img src={koleksiIcon} alt="Koleksi" draggable="false" />
    <span>Koleksi</span>
  </button>

  <button
    type="button"
    className="home-menu-button"
    onClick={() => navigate("/settings")}
  >
    <img src={tetapanIcon} alt="Tetapan" draggable="false" />
    <span>Tetapan</span>
  </button>
</nav>
{/* PROFIL PENGEMBARA */}
<section className="home-player-profile">
  <button
    type="button"
    className="home-player-avatar"
    onClick={() => setShowProfileEditor(true)}
    aria-label="Edit profil pemain"
  >
    <span>
      {playerName.charAt(0).toUpperCase()}
    </span>
  </button>

  <div className="home-player-details">
    <span className="home-player-title">
      PROFIL PENGEMBARA
    </span>

    <strong className="home-player-name">
      {playerName}
    </strong>

    <span className="home-player-world">
      Dunia semasa: {currentWorld}
    </span>

    <span className="home-player-completed">
      Selesai: {completedWorlds} / {WORLD_PROGRESS.length} dunia
    </span>
  </div>
 </section>

{showProfileEditor && (
  <div
    className="home-profile-modal-backdrop"
    onClick={() => setShowProfileEditor(false)}
  >
    <section
      className="home-profile-modal"
      onClick={(event) => event.stopPropagation()}
    >
      <h2>Profil Pengembara</h2>

      <label htmlFor="player-name">
        Nama pemain
      </label>

      <input
        id="player-name"
        type="text"
        value={draftName}
        maxLength={20}
        autoFocus
        onChange={(event) => setDraftName(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            savePlayerName();
          }

          if (event.key === "Escape") {
            setShowProfileEditor(false);
          }
        }}
      />

      <div className="home-profile-modal-actions">
        <button
          type="button"
          className="home-profile-cancel"
          onClick={() => setShowProfileEditor(false)}
        >
          BATAL
        </button>

        <button
          type="button"
          className="home-profile-save"
          onClick={savePlayerName}
        >
          SIMPAN
        </button>
      </div>
    </section>
  </div>
)}

{/* PERJALANAN SEMASA */}
<section className="home-current-journey">
  <div className="home-journey-info">
    <span className="home-journey-heading">
      PERJALANAN SEMASA
    </span>

    <strong className="home-journey-world">
      {currentJourney.world}
    </strong>

    <span className="home-journey-chapter">
      {currentJourney.chapter}
    </span>

    <div className="home-journey-progress-row">
      <div className="home-journey-track">
        <div
          className="home-journey-fill"
          style={{
            width: `${currentJourney.progress}%`,
          }}
        />
      </div>

      <strong className="home-journey-value">
        {currentJourney.progress}%
      </strong>
    </div>

    <span className="home-journey-hint">
      Klik imej kota untuk masuk
    </span>
  </div>

  <button
    type="button"
    className="home-journey-map-button"
    onClick={() => navigate(currentJourney.path)}
    aria-label={`Masuk ke ${currentJourney.world}`}
  >
    <img
      src={kotaIrabImage}
      className="home-journey-map"
      alt={currentJourney.world}
      draggable="false"
    />
  </button>
</section>

      </section>
    </main>
  );
}