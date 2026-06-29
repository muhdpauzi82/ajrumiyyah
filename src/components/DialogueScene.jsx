import { useEffect, useState } from "react";
import "../styles/DialogueScene.css";

export default function DialogueScene({
  dialog,
  playerName = "Pelajar",
  onFinish,
}) {
  const [step, setStep] = useState(0);
  const [shownText, setShownText] = useState("");

  const current = dialog[step];
  const fullText = current.text.replace("{player}", playerName);

  useEffect(() => {
    setShownText("");

    let index = 0;
    const timer = setInterval(() => {
      setShownText(fullText.slice(0, index + 1));

      const audio = new Audio("/sounds/type.mp3");
      audio.volume = 0.25;
      audio.play().catch(() => {});

      index++;

      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [step, fullText]);

  function handleClick() {
    if (shownText.length < fullText.length) {
      setShownText(fullText);
      return;
    }

    if (step < dialog.length - 1) {
      setStep(step + 1);
    } else {
      onFinish();
    }
  }

  return (
    <div className="dialog-scene" onClick={handleClick}>
      <img
        src={current.guruImage}
        className={`dialog-img guru-img ${current.speaker === "guru" ? "active" : ""}`}
        alt="Guru"
      />

      <img
        src={current.playerImage}
        className={`dialog-img player-img ${current.speaker === "player" ? "active" : ""}`}
        alt="Pelajar"
      />

      <div className={`dialog-panel ${current.speaker}`}>
        <h3>{current.name.replace("{player}", playerName)}</h3>
        <p>{shownText}</p>
        <span>▶</span>
      </div>
    </div>
  );
}