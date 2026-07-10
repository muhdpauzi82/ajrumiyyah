import ReflectionEngine from "../../engine/reflection/ReflectionEngine";

export default function BabIrabReflection() {

  const score = Number(localStorage.getItem("babIrabScore") || 0);

  return (
    <ReflectionEngine
      teacher="Syeikh Abdul I'rab"
      score={score}
      total={10}
      successRoute="/bab-irab-reward"
      retryRoute="/bab-irab-exercise"
    />
  );
}