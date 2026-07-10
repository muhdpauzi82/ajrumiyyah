import "./Progress.css";

export default function ProgressBar({
  value = 0,
  max = 100,
  label = "",
  showPercent = true,
}) {
  const percent = max === 0 ? 0 : Math.round((value / max) * 100);
  const safePercent = Math.min(Math.max(percent, 0), 100);

  return (
    <div className="ads-progress">
      {(label || showPercent) && (
        <div className="ads-progress-header">
          <span>{label}</span>
          {showPercent && <span>{safePercent}%</span>}
        </div>
      )}

      <div className="ads-progress-track">
        <div
          className="ads-progress-fill"
          style={{ width: `${safePercent}%` }}
        />
      </div>
    </div>
  );
}