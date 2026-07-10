import { useState } from "react";
import "./LearningScene.css";

import DialogueBox from "./DialogueBox";
import ArabicBoard from "./ArabicBoard";
import ProgressBar from "./ProgressBar";
import CharacterLayer from "./CharacterLayer";

export default function LearningScene({
  scene,
  playerName = "Pelajar",
  onFinish,
}) {
  const [step, setStep] = useState(0);
  const current = scene[step];

  function next() {
    if (step < scene.length - 1) {
      setStep(step + 1);
    } else {
      onFinish?.();
    }
  }

  const text = current.text?.replaceAll("{player}", playerName);

  return (
    <div className="learning-scene" onClick={next}>
      <ProgressBar value={current.progress || 0} />

      <CharacterLayer
        guru={current.guruImage}
        pelajar={current.playerImage}
        speaker={current.speaker}
      />

      {current.type === "dialog" && (
        <DialogueBox
          name={current.name?.replaceAll("{player}", playerName)}
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
          <div className="arabic-flow">
            <div>مُحَمَّدٌ</div>
            <b>↓</b>
            <div>مُحَمَّدًا</div>
            <b>↓</b>
            <div>مُحَمَّدٍ</div>
          </div>
          <p>{text}</p>
          <span>▶</span>
        </div>
      )}
    </div>
  );
}