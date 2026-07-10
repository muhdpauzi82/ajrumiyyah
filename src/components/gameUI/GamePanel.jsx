import "./gameUI.css";

export default function GamePanel({ title, children }) {
  return (
    <div className="game-panel">
      {title && <div className="game-panel-title">{title}</div>}
      {children}
    </div>
  );
}