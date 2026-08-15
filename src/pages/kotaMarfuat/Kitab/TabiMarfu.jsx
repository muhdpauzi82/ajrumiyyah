import LearningScene from "../../../engine/learning/LearningScene";
import tabiMarfuDialog from "./TabiMarfuDialog";

export default function TabiMarfu() {
  const playerName =
    localStorage.getItem("playerName") || "Pelajar";

  function handleFinish() {
    localStorage.setItem(
      "tabiMarfuLearningDone",
      "true"
    );

    window.location.href = "/animasi-tabi-marfu";
  }

  return (
    <LearningScene
      scene={tabiMarfuDialog}
      playerName={playerName}
      onFinish={handleFinish}
    />
  );
}