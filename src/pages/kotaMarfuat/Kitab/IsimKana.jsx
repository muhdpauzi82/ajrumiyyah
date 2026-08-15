import LearningScene from "../../../engine/learning/LearningScene";
import isimKanaDialog from "./IsimKanaDialog";

export default function IsimKana() {
  const playerName =
    localStorage.getItem("playerName") || "Pelajar";

  function handleFinish() {
    localStorage.setItem(
      "isimKanaLearningDone",
      "true"
    );

    window.location.href = "/animasi-isim-kana";
  }

  return (
    <LearningScene
      scene={isimKanaDialog}
      playerName={playerName}
      onFinish={handleFinish}
    />
  );
}