import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LearningScene from "../../engine/learning/LearningScene";
import babIrabDialog from "../../data/babIrabDialog";

export default function BabIrabLearning() {
  const navigate = useNavigate();

  const playerName =
    localStorage.getItem("playerName") || "Pelajar";

  function handleFinish() {
    localStorage.setItem(
      "babIrabLearningDone",
      "true"
    );

    navigate("/bab-irab-animasi");
  }

  return (
    <LearningScene
      scene={babIrabDialog}
      playerName={playerName}
      onFinish={handleFinish}
    />
  );
}