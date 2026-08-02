import { useState } from "react";
import "./LearningScene.css";

import DialogueBox from "./DialogueBox";
import ArabicBoard from "./ArabicBoard";
import ProgressBar from "./ProgressBar";

import madrasahIrabBg from
  "../../assets/backgrounds/madrasah-irab-learning.webp";

import guruIrab from
  "../../assets/characters/guru.webp";

import pelajarIrab from
  "../../assets/characters/pelajar.webp";

export default function LearningScene({
  scene,
  playerName = "Pelajar",
  onFinish,
}) {
  const [step, setStep] = useState(0);

  const current = scene?.[step];

  if (!current) {
    return null;
  }

  function next() {
    if (step < scene.length - 1) {
      setStep((currentStep) => currentStep + 1);
      return;
    }

    onFinish?.();
  }

  const text = current.text?.replaceAll(
    "{player}",
    playerName
  );

  const speakerName = current.name?.replaceAll(
    "{player}",
    playerName
  );

  const showGuru =
    current.speaker === "guru" ||
    current.type === "summary";

  const showPelajar =
    current.speaker === "player";

  const showCharacters =
    current.type !== "arabic";

  return (
    <main
      className="learning-scene-screen"
      onClick={next}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          next();
        }
      }}
    >
      <section className="learning-scene-frame">
        <img
          src={madrasahIrabBg}
          className="learning-scene-background"
          alt=""
          draggable="false"
        />

        <div className="learning-scene-shade" />

        {showCharacters && showGuru && (
          <img
            key={`guru-${step}`}
            src={guruIrab}
            className="learning-scene-character learning-scene-guru"
            alt="Syeikh Abdul I'rab"
            draggable="false"
          />
        )}

        {showCharacters && showPelajar && (
          <img
            key={`pelajar-${step}`}
            src={pelajarIrab}
            className="learning-scene-character learning-scene-pelajar"
            alt={playerName}
            draggable="false"
          />
        )}

        <ProgressBar
          value={current.progress || 0}
        />

        <div
          className={[
            "learning-scene-content",
            showGuru ? "with-guru" : "",
            showPelajar ? "with-pelajar" : "",
            current.type === "arabic"
              ? "without-character"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {current.type === "dialog" && (
            <DialogueBox
              name={speakerName}
              text={text}
            />
          )}

          {current.type === "arabic" && (
            <ArabicBoard
              title={current.title}
              before={current.before}
              word={current.word}
              ending={current.ending}
              text={text}
            />
          )}

          {current.type === "summary" && (
            <div className="learning-board">
              <h2>{current.title}</h2>

              <div
                className="arabic-flow"
                dir="rtl"
                lang="ar"
              >
                <div>مُحَمَّدٌ</div>
                <b>↓</b>
                <div>مُحَمَّدًا</div>
                <b>↓</b>
                <div>مُحَمَّدٍ</div>
              </div>

              <p>{text}</p>

              <span
                className="learning-next-indicator"
                aria-hidden="true"
              >
                ▶
              </span>
            </div>
          )}
        </div>

        <div
          className="learning-click-hint"
          aria-hidden="true"
        >
          Tekan untuk meneruskan
        </div>
      </section>
    </main>
  );
}