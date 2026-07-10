export default function ProgressBar({ value = 0 }) {
  return (
    <div className="learn-progress">
      <div className="learn-progress-title">🌿 Kefahaman</div>
      <div className="learn-progress-track">
        <div
          className="learn-progress-fill"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}