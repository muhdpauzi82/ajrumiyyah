import LearningScene from "../../../engine/learning/LearningScene";
import khabarInnaDialog from "./KhabarInnaDialog";

export default function KhabarInna() {
  const playerName =
    localStorage.getItem("playerName") || "Pelajar";

  function handleFinish() {
    localStorage.setItem(
      "khabarInnaLearningDone",
      "true"
    );

    window.location.href = "/marfuaat-learning";
  }

  return (
    <LearningScene
      scene={khabarInnaDialog}
      playerName={playerName}
      onFinish={handleFinish}
    />
  );
}