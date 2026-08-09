import LearningScene from "../../../engine/learning/LearningScene";
import mubtadaDialog from "./MubtadaDialog";

export default function Mubtada() {
  const playerName =
    localStorage.getItem("playerName") || "Pelajar";

  function handleFinish() {
    localStorage.setItem(
      "mubtadaLearningDone",
      "true"
    );

    window.location.href = "/marfuaat-learning";
  }

  return (
    <LearningScene
      scene={mubtadaDialog}
      playerName={playerName}
      onFinish={handleFinish}
    />
  );
}