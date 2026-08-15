import LearningScene from "../../../engine/learning/LearningScene";
import naibFailDialog from "./NaibFailDialog";
import { useNavigate } from "react-router-dom";

export default function NaibFail() {
  const navigate = useNavigate();

  const playerName =
    localStorage.getItem("playerName") || "Pelajar";

  function handleFinish() {
    localStorage.setItem(
      "naibFailLearningDone",
      "true"
    );

    navigate("/animasi-naib-fail");
  }

  return (
    <LearningScene
      scene={naibFailDialog}
      playerName={playerName}
      onFinish={handleFinish}
    />
  );
}