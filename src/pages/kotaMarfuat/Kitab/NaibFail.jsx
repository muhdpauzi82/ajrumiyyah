import LearningScene from "../../../engine/learning/LearningScene";
import naibFailDialog from "./NaibFailDialog";

export default function NaibFail() {
  const playerName =
    localStorage.getItem("playerName") || "Pelajar";

  function handleFinish() {
    localStorage.setItem(
      "naibFailLearningDone",
      "true"
    );

    window.location.href = "/marfuaat-learning";
  }

  return (
    <LearningScene
      scene={naibFailDialog}
      playerName={playerName}
      onFinish={handleFinish}
    />
  );
}