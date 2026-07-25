import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

export default function Settings() {
  const navigate = useNavigate();

  const [playerName, setPlayerName] = useState(
    () => localStorage.getItem("playerName") || "Pengembara Ilmu"
  );

  const [draftName, setDraftName] = useState(playerName);

  const [musicEnabled, setMusicEnabled] = useState(
    () => localStorage.getItem("musicEnabled") !== "false"
  );

  const [sfxEnabled, setSfxEnabled] = useState(
    () => localStorage.getItem("sfxEnabled") !== "false"
  );

  const [animationsEnabled, setAnimationsEnabled] = useState(
    () => localStorage.getItem("animationsEnabled") !== "false"
  );

  const saveProfile = () => {
    const cleanedName = draftName.trim();

    if (!cleanedName) {
      return;
    }

    localStorage.setItem("playerName", cleanedName);
    setPlayerName(cleanedName);
  };

  const toggleMusic = () => {
    const nextValue = !musicEnabled;

    setMusicEnabled(nextValue);
    localStorage.setItem("musicEnabled", String(nextValue));
  };

  const toggleSfx = () => {
    const nextValue = !sfxEnabled;

    setSfxEnabled(nextValue);
    localStorage.setItem("sfxEnabled", String(nextValue));
  };

  const toggleAnimations = () => {
    const nextValue = !animationsEnabled;

    setAnimationsEnabled(nextValue);
    localStorage.setItem("animationsEnabled", String(nextValue));
  };

  const resetProgress = () => {
    const confirmed = window.confirm(
      "Adakah anda pasti mahu memadam semua kemajuan permainan?"
    );

    if (!confirmed) {
      return;
    }

    localStorage.clear();
    window.location.reload();
  };

  return (
    <main className="settings-screen">
      <section className="settings-stage">
        <header className="settings-header">
          <button
            type="button"
            className="settings-back-button"
            onClick={() => navigate("/")}
          >
            ← KEMBALI
          </button>

          <div>
            <span>PUSAT PENGURUSAN</span>
            <h1>TETAPAN</h1>
          </div>
        </header>

        <section className="settings-layout">
          <aside className="settings-sidebar">
            <button type="button">Profil Pengembara</button>
            <button type="button">Audio</button>
            <button type="button">Paparan</button>
            <button type="button">Data Permainan</button>
            <button type="button">Tentang</button>
          </aside>

          <section className="settings-content">
            <article className="settings-card">
              <div className="settings-card-heading">
                <span className="settings-card-number">01</span>

                <div>
                  <h2>Profil Pengembara</h2>
                  <p>Urus nama dan identiti pemain.</p>
                </div>
              </div>

              <div className="settings-profile">
                <div className="settings-avatar">
                  {playerName.charAt(0).toUpperCase()}
                </div>

                <div className="settings-profile-fields">
                  <label htmlFor="settings-player-name">
                    Nama pemain
                  </label>

                  <input
                    id="settings-player-name"
                    type="text"
                    value={draftName}
                    maxLength={20}
                    onChange={(event) =>
                      setDraftName(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        saveProfile();
                      }
                    }}
                  />

                  <button
                    type="button"
                    className="settings-save-button"
                    onClick={saveProfile}
                  >
                    SIMPAN NAMA
                  </button>
                </div>
              </div>
            </article>

            <article className="settings-card">
              <div className="settings-card-heading">
                <span className="settings-card-number">02</span>

                <div>
                  <h2>Audio</h2>
                  <p>Kawal muzik latar dan kesan bunyi.</p>
                </div>
              </div>

              <div className="settings-option-row">
                <div>
                  <strong>Muzik latar</strong>
                  <span>Mainkan muzik ketika menjelajah dunia.</span>
                </div>

                <button
                  type="button"
                  className={`settings-toggle ${
                    musicEnabled ? "is-active" : ""
                  }`}
                  onClick={toggleMusic}
                  aria-pressed={musicEnabled}
                >
                  <span />
                </button>
              </div>

              <div className="settings-option-row">
                <div>
                  <strong>Kesan bunyi</strong>
                  <span>
                    Bunyi klik, jawapan betul dan salah.
                  </span>
                </div>

                <button
                  type="button"
                  className={`settings-toggle ${
                    sfxEnabled ? "is-active" : ""
                  }`}
                  onClick={toggleSfx}
                  aria-pressed={sfxEnabled}
                >
                  <span />
                </button>
              </div>
            </article>

            <article className="settings-card">
              <div className="settings-card-heading">
                <span className="settings-card-number">03</span>

                <div>
                  <h2>Paparan</h2>
                  <p>Laras pengalaman visual permainan.</p>
                </div>
              </div>

              <div className="settings-option-row">
                <div>
                  <strong>Animasi</strong>
                  <span>
                    Paparkan pergerakan dan kesan cahaya.
                  </span>
                </div>

                <button
                  type="button"
                  className={`settings-toggle ${
                    animationsEnabled ? "is-active" : ""
                  }`}
                  onClick={toggleAnimations}
                  aria-pressed={animationsEnabled}
                >
                  <span />
                </button>
              </div>
            </article>

            <article className="settings-card settings-danger-card">
              <div className="settings-card-heading">
                <span className="settings-card-number">04</span>

                <div>
                  <h2>Data Permainan</h2>
                  <p>Urus kemajuan yang disimpan pada peranti.</p>
                </div>
              </div>

              <button
                type="button"
                className="settings-reset-button"
                onClick={resetProgress}
              >
                RESET SEMUA KEMAJUAN
              </button>
            </article>

            <article className="settings-card settings-about-card">
              <div className="settings-card-heading">
                <span className="settings-card-number">05</span>

                <div>
                  <h2>Tentang Ajrumiyyah</h2>
                  <p>Permainan pengembaraan ilmu nahu Arab.</p>
                </div>
              </div>

              <div className="settings-about-content">
                <strong>AJRUMIYYAH</strong>
                <span>Versi pembangunan</span>
                <p>
                  Menguasai ilmu, menakluk dunia nahu.
                </p>
              </div>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
}