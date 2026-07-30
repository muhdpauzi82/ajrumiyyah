import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

import continueButton from "../../assets/icons/home/teruskan.webp";
import petaIcon from "../../assets/icons/home/petadunia.webp";
import kitabIcon from "../../assets/icons/home/kitab.webp";
import pencapaianIcon from "../../assets/icons/home/pencapaian.webp";
import tetapanIcon from "../../assets/icons/home/tetapan.webp";

import homeBg from "../../assets/backgrounds/home-bg.webp";
import kotaIrabImage from "../../assets/maps/kotairab.webp";
import gerbangKalamSide from "../../assets/icons/home/gerbangkalam.webp";
import kotaIrabSide from "../../assets/icons/home/kotairab.webp";
import kotaMarfuatSide from "../../assets/icons/home/kotamarfuat.webp";
import kotaMansubatSide from "../../assets/icons/home/kotamansubat.webp";
import kotaMajruratSide from "../../assets/icons/home/kotamajrurat.webp";
import kotaTawabiSide from "../../assets/icons/home/kotatawabi.webp";
import istanaAjrumiyyahSide from "../../assets/icons/home/istanaajrumiyyah.webp";
const KALAM_STEPS = [
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
const SIDE_WORLDS = [
  {
    id: "gerbang-kalam",
    image: gerbangKalamSide,
    label: "Gerbang Kalam",
    path: "/gerbang-kalam",
    unlocked: () => true,
  },
  {
    id: "kota-irab",
    image: kotaIrabSide,
    label: "Kota I'rab",
    path: "/kota-irab",
    unlocked: () =>
      localStorage.getItem("kotaIrabUnlocked") === "true" ||
      localStorage.getItem("gerbangKalamDone") === "true",
  },
  {
    id: "kota-marfuat",
    image: kotaMarfuatSide,
    label: "Kota Marfu'at",
    path: "/kota-marfuat",
    unlocked: () =>
      localStorage.getItem("kotaMarfuatUnlocked") === "true",
  },
  {
    id: "kota-mansubat",
    image: kotaMansubatSide,
    label: "Kota Mansubat",
    path: "/kota-mansubat",
    unlocked: () =>
      localStorage.getItem("kotaMansubatUnlocked") === "true",
  },
  {
    id: "kota-majrurat",
    image: kotaMajruratSide,
    label: "Kota Majrurat",
    path: "/kota-majrurat",
    unlocked: () =>
      localStorage.getItem("kotaMajruratUnlocked") === "true",
  },
  {
    id: "kota-tawabi",
    image: kotaTawabiSide,
    label: "Kota Tawabi'",
    path: "/kota-tawabi",
    unlocked: () =>
      localStorage.getItem("kotaTawabiUnlocked") === "true",
  },
  {
    id: "istana-ajrumiyyah",
    image: istanaAjrumiyyahSide,
    label: "Istana Ajrumiyyah",
    path: "/istana-ajrumiyyah",
    unlocked: () =>
      localStorage.getItem("istanaAjrumiyyahUnlocked") === "true",
  },
];
function getKalamProgress() {
  const completedSteps = KALAM_STEPS.filter(
    (key) => localStorage.getItem(key) === "true"
  ).length;

  return Math.round(
    (completedSteps / KALAM_STEPS.length) * 100
  );
}

function getCurrentJourney() {
  const kotaIrabDone =
    localStorage.getItem("kotaIrabDone") === "true";

  const gerbangKalamDone =
    localStorage.getItem("gerbangKalamDone") === "true";

  const babIrabQuizDone =
    localStorage.getItem("babIrabQuizDone") === "true";

  const babIrabDone =
    localStorage.getItem("babIrabDone") === "true";

  if (kotaIrabDone) {
    return {
      world: "KOTA MARFU'AT",
      chapter: "DUNIA 3 / 7",
      progress: 0,
      path: "/worldmap",
      image: kotaIrabImage,
    };
  }

  if (gerbangKalamDone) {
    let progress = 5;

    if (babIrabDone) {
      progress = 15;
    }

    if (babIrabQuizDone) {
      progress = 30;
    }

    return {
      world: "KOTA I'RAB",
      chapter: "DUNIA 2 / 7",
      progress,
      path: "/kota-irab",
      image: kotaIrabImage,
    };
  }

  return {
    world: "GERBANG KALAM",
    chapter: "DUNIA 1 / 7",
    progress: getKalamProgress(),
    path: "/gerbang-kalam",
    image: kotaIrabImage,
  };
}

export default function Home() {
  const navigate = useNavigate();

  const [playerName, setPlayerName] = useState(
    () =>
      localStorage.getItem("playerName") ||
      "Pengembara Ilmu"
  );

  const [draftName, setDraftName] =
    useState(playerName);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const currentJourney = getCurrentJourney();

  const playerInitial =
    playerName.trim().charAt(0).toUpperCase() || "P";

  function openProfile() {
    setDraftName(playerName);
    setProfileOpen(true);
  }

  function closeProfile() {
    setDraftName(playerName);
    setProfileOpen(false);
  }

  function saveProfile() {
    const cleanName = draftName.trim();

    if (!cleanName) {
      return;
    }

    localStorage.setItem("playerName", cleanName);
    setPlayerName(cleanName);
    setProfileOpen(false);
  }
  function openSideWorld(world) {
  const isUnlocked = world.unlocked();

  if (!isUnlocked) {
    alert("Dunia ini masih berkunci.");
    return;
  }

  navigate(world.path);
}
  return (
    <main className="home-screen">
      <section className="home-stage">
        {/* BACKGROUND */}
        <img
          src={homeBg}
          className="home-background"
          alt="Balai Ilmu Ajrumiyyah"
          draggable="false"
        />

        {/* TERUSKAN PENGEMBARAAN */}
        <button
          type="button"
          className="home-continue-button"
          onClick={() =>
            navigate(currentJourney.path)
          }
          aria-label="Teruskan pengembaraan"
        >
          <img
            src={continueButton}
            alt="Teruskan Pengembaraan"
            draggable="false"
          />
        </button>
         {/* SENARAI DUNIA SEBELAH KANAN */}
<nav
  className="home-side-worlds"
  aria-label="Senarai dunia Ajrumiyyah"
>
  {SIDE_WORLDS.map((world) => {
    const isUnlocked = world.unlocked();

    return (
      <button
        key={world.id}
        type="button"
        className={[
          "home-side-world-button",
          !isUnlocked ? "is-locked" : "",
          currentJourney.world
            .toLowerCase()
            .includes(
              world.label
                .toLowerCase()
                .replace("kota ", "")
            )
            ? "is-current"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => openSideWorld(world)}
        aria-label={
          isUnlocked
            ? `Masuk ke ${world.label}`
            : `${world.label} masih berkunci`
        }
      >
        <img
          src={world.image}
          alt={world.label}
          draggable="false"
        />

        {!isUnlocked && (
          <span
            className="home-side-world-lock"
            aria-hidden="true"
          >
            🔒
          </span>
        )}
      </button>
    );
  })}
</nav>
        {/* MENU UTAMA */}
        <nav
          className="home-menu"
          aria-label="Menu utama"
        >
          <button
            type="button"
            className="home-menu-button"
            onClick={() => navigate("/worldmap")}
            aria-label="Peta Dunia"
          >
            <img
              src={petaIcon}
              alt="Peta Dunia"
              draggable="false"
            />
          </button>

          <button
            type="button"
            className="home-menu-button"
            onClick={() => navigate("/kitab")}
            aria-label="Kitab"
          >
            <img
              src={kitabIcon}
              alt="Kitab"
              draggable="false"
            />
          </button>

          <button
            type="button"
            className="home-menu-button"
            onClick={() => navigate("/pencapaian")}
            aria-label="Pencapaian"
          >
            <img
              src={pencapaianIcon}
              alt="Pencapaian"
              draggable="false"
            />
          </button>

          <button
            type="button"
            className="home-menu-button"
            onClick={() => navigate("/settings")}
            aria-label="Tetapan"
          >
            <img
              src={tetapanIcon}
              alt="Tetapan"
              draggable="false"
            />
          </button>
        </nav>

        {/* PROFIL PENGEMBARA */}
        <section className="home-player-profile">
          <header className="home-panel-heading">
            <span
              className="home-panel-heading-icon"
              aria-hidden="true"
            >
              ●
            </span>

            <span>PROFIL PENGEMBARA</span>
          </header>

          <div className="home-profile-body">
            <button
              type="button"
              className="home-player-avatar"
              onClick={openProfile}
              aria-label="Edit profil pengembara"
            >
              {playerInitial}
            </button>

            <div className="home-player-details">
              <strong className="home-player-name">
                {playerName}
              </strong>

              <button
                type="button"
                className="home-player-edit-button"
                onClick={openProfile}
              >
                EDIT PROFIL
              </button>
            </div>
          </div>
        </section>

        {/* PERJALANAN SEMASA */}
        <section
          className="home-current-journey"
          aria-label="Perjalanan semasa"
        >
          <header className="home-panel-heading">
            <span
              className="home-panel-location-icon"
              aria-hidden="true"
            >
              ◆
            </span>

            <span>PERJALANAN SEMASA</span>
          </header>

          <div className="home-journey-main">
            <div className="home-journey-details">
              <strong className="home-journey-world">
                {currentJourney.world}
              </strong>

              <span className="home-journey-chapter">
                {currentJourney.chapter}
              </span>
            </div>

            <button
              type="button"
              className="home-journey-map-button"
              onClick={() =>
                navigate(currentJourney.path)
              }
              aria-label={`Masuk ke ${currentJourney.world}`}
            >
              <img
                src={currentJourney.image}
                className="home-journey-map"
                alt={currentJourney.world}
                draggable="false"
              />
            </button>
          </div>

          <div className="home-journey-progress-row">
            <div
              className="home-journey-track"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={
                currentJourney.progress
              }
              aria-label={`Kemajuan ${currentJourney.world}`}
            >
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
        </section>

        {/* MODAL EDIT PROFIL */}
        {profileOpen && (
          <div
            className="home-profile-modal-backdrop"
            onMouseDown={closeProfile}
          >
            <section
              className="home-profile-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="profile-modal-title"
              onMouseDown={(event) =>
                event.stopPropagation()
              }
            >
              <h2 id="profile-modal-title">
                Profil Pengembara
              </h2>

              <label htmlFor="player-name">
                Nama pengembara
              </label>

              <input
                id="player-name"
                type="text"
                value={draftName}
                maxLength={24}
                autoFocus
                onChange={(event) =>
                  setDraftName(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    saveProfile();
                  }

                  if (event.key === "Escape") {
                    closeProfile();
                  }
                }}
              />

              <div className="home-profile-modal-actions">
                <button
                  type="button"
                  className="home-profile-cancel"
                  onClick={closeProfile}
                >
                  BATAL
                </button>

                <button
                  type="button"
                  className="home-profile-save"
                  onClick={saveProfile}
                >
                  SIMPAN
                </button>
              </div>
            </section>
          </div>
        )}
      </section>
    </main>
  );
}