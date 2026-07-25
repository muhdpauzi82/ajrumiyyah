import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChapterComplete.css";



const CREDIT_SECTIONS = [
  {
    title: "﷽",
    text: [
      "Dengan nama Allah",
      "Yang Maha Pemurah",
      "lagi Maha Mengasihani.",
    ],
  },
  {
    title: "TAHNIAH",
    text: [
      "Anda telah berjaya",
      "menyempurnakan",
      "GERBANG KALAM.",
    ],
  },
  {
    title: "PERJALANAN ILMU",
    text: [
      "Anda telah memahami",
      "maksud Kalam.",
      "",
      "Anda telah mengenali",
      "Isim, Fi‘il dan Huruf.",
    ],
  },
  {
    title: "PENJAGA KALAM",
    text: [
      "Anda telah berjaya",
      "menyelesaikan ujian",
      "Penjaga Kalam.",
    ],
  },
  {
    title: "LANGKAH SETERUSNYA",
    text: [
      "Namun perjalanan ilmu",
      "baru sahaja bermula.",
      "",
      "Sebuah kota baharu",
      "kini menanti anda.",
    ],
  },
  {
    title: "KOTA I‘RAB",
    text: [
      "Di sinilah anda akan mempelajari",
      "perubahan pada akhir perkataan.",
      "",
      "Marfu‘",
      "Mansub",
      "Majrur",
      "dan Majzum.",
    ],
  },
  {
    title: "DOA",
    text: [
      "Semoga Allah memberkati",
      "setiap langkah",
      "perjalanan ilmu ini.",
    ],
  },
];

export default function ChapterComplete({
   
  correctCount = 0,
  totalQuestions = 0,
}) {
  const navigate = useNavigate();
  const [audioStarted, setAudioStarted] = useState(false);
  const [phase, setPhase] = useState("credits");
  const [isLeaving, setIsLeaving] = useState(false);

  const rewardAudioRef = useRef(null);
    useEffect(() => {
  const rewardAudio = new Audio("/sounds/reward.mp3");

  rewardAudio.loop = true;
  rewardAudio.volume = 0.3;

  rewardAudioRef.current = rewardAudio;

  rewardAudio.play()
    .then(() => {
      setAudioStarted(true);
    })
    .catch(() => {
      setAudioStarted(false);
    });

  const unlockTimer = window.setTimeout(() => {
    setPhase("unlock");
  }, 36000);

  return () => {
    window.clearTimeout(unlockTimer);

    rewardAudio.pause();
    rewardAudio.currentTime = 0;
    rewardAudioRef.current = null;
  };
}, []);

const handleStartAudio = async () => {
  const rewardAudio = rewardAudioRef.current;

  if (!rewardAudio) return;

  try {
    await rewardAudio.play();
    setAudioStarted(true);
  } catch (error) {
    console.error("Muzik gagal dimainkan:", error);
  }
};
   const handleEnterKotaIrab = () => {
    if (isLeaving) return;

    setIsLeaving(true);

    const clickAudio = new Audio("/sounds/click.mp3");
    clickAudio.volume = 0.5;
    clickAudio.play().catch(() => {});

    if (rewardAudioRef.current) {
      rewardAudioRef.current.pause();
      rewardAudioRef.current.currentTime = 0;
    }

    window.setTimeout(() => {
      navigate("/kotairab");
    }, 1200);
  };

  const handleSkipCredits = () => {
    setPhase("unlock");
  };

  return (
    <main
      className={`chapter-complete-screen ${
        isLeaving ? "is-leaving" : ""
      }`}
    >
      <div className="chapter-complete-background" />

      {!audioStarted && (
  <button
    type="button"
    className="chapter-sound-button"
    onClick={handleStartAudio}
  >
    🔊 Hidupkan Muzik
  </button>
)}

      {phase === "credits" && (
        <section className="chapter-credits-phase">
          <div className="chapter-vignette" />

          <button
            type="button"
            className="chapter-skip-button"
            onClick={handleSkipCredits}
          >
            Langkau
          </button>

          <div className="chapter-credits-window">
            <div className="chapter-credits-scroll">
              <div className="chapter-credit-opening">
                <span className="chapter-credit-small">
                  TAMAT BAB PERTAMA
                </span>

                <h1>GERBANG KALAM</h1>

                <p>
                  Markah akhir: {correctCount} / {totalQuestions}
                </p>
              </div>

              {CREDIT_SECTIONS.map((section, index) => (
                <section
                  className="chapter-credit-section"
                  key={`${section.title}-${index}`}
                >
                  <h2>{section.title}</h2>

                  <div>
                    {section.text.map((line, lineIndex) =>
                      line ? (
                        <p key={`${line}-${lineIndex}`}>{line}</p>
                      ) : (
                        <div
                          className="chapter-credit-space"
                          key={`space-${lineIndex}`}
                        />
                      )
                    )}
                  </div>
                </section>
              ))}

              <div className="chapter-credit-ending">
                <p>Perjalanan diteruskan ke</p>
                <h2>KOTA I‘RAB</h2>
              </div>
            </div>
          </div>
        </section>
      )}

      {phase === "unlock" && (
        <section className="chapter-unlock-phase">
          <div className="chapter-unlock-light" />
          <div className="chapter-unlock-particles" />

          <div className="chapter-unlock-content">
            <span className="chapter-unlock-label">
              GERBANG BAHARU TELAH DIBUKA
            </span>

            <h1>TAHNIAH</h1>

            <p className="chapter-unlock-message">
              Anda telah berjaya membuka
            </p>

            <h2>KOTA I‘RAB</h2>

            <p className="chapter-unlock-description">
              Bersedialah mempelajari rahsia perubahan akhir perkataan.
            </p>

            <button
              type="button"
              className="chapter-enter-button"
              onClick={handleEnterKotaIrab}
              disabled={isLeaving}
            >
              <span>MASUK KE</span>
              <strong>KOTA I‘RAB</strong>
            </button>
          </div>
        </section>
      )}

      <div className="chapter-transition-cover" />
    </main>
  );
}