import { useNavigate } from "react-router-dom";
import LearningScene from "../../../engine/learning/LearningScene";
import failDialog from "./FailDialog";

export default function Fail() {
  const navigate = useNavigate();

  const playerName =
    localStorage.getItem("playerName") || "Pelajar";

  function handleFinish() {
    localStorage.setItem(
      "failLearningDone",
      "true"
    );

    navigate("/animasi-fail");
  }

  return (
    <LearningScene
      scene={failDialog}
      playerName={playerName}
      onFinish={handleFinish}
    />
  );
}