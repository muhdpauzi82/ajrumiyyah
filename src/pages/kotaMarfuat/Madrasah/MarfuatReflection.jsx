import ReflectionEngine from "../../engine/reflection/ReflectionEngine";

export default function MarfuatReflection() {

  const score = Number(localStorage.getItem("MarfuatScore") || 0);

  return (
    <ReflectionEngine
      teacher="Syeikh Abdul I'rab"
      score={score}
      total={10}
      successRoute="/marfuat-reward"
      retryRoute="/marfuat-exercise"
    />
  );
}