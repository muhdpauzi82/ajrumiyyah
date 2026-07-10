import { useNavigate } from "react-router-dom";
import LearningScene from "../../engine/learning/LearningScene";
import babIrabScene from "../../data/babIrabScene";

export default function BabIrabLearning() {
  const navigate = useNavigate();
  const playerName = localStorage.getItem("playerName") || "Pelajar";

  return (
    <LearningScene
      scene={babIrabScene}
      playerName={playerName}
      onFinish={() => navigate("/bab-irab-latihan")}
    />
  );
}