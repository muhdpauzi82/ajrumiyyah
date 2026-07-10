export default function GateHUD({
  title,
  instruction,
  timeLeft,
  score,
  combo,
  correctCount,
  target,
}) {
  return (
    <div className="gate-hud">
      <div>
        <h2>{title}</h2>
        <p>{instruction}</p>
      </div>

      <div className="gate-stats">
        <span>⏱ {timeLeft}</span>
        <span>🎯 {correctCount}/{target}</span>
        <span>⭐ {score}</span>
        <span>🔥 {combo}</span>
      </div>
    </div>
  );
}