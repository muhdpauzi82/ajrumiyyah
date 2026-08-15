import LearningScene from "../../../engine/learning/LearningScene";
import khabarDialog from "./KhabarDialog";

export default function Khabar() {
  const playerName =
    localStorage.getItem("playerName") || "Pelajar";

  function handleFinish() {
    localStorage.setItem(
      "khabarLearningDone",
      "true"
    );

    window.location.href = "/animasi-khabar";
  }

  return (
    <LearningScene
      scene={khabarDialog}
      playerName={playerName}
      onFinish={handleFinish}
    />
  );
}