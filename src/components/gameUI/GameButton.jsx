import "./gameUI.css";

export default function GameButton({
  letter,
  text,
  color = "green",
  status = "",
  onClick,
}) {
  return (
    <button className={`game-btn ${color} ${status}`} onClick={onClick}>
      <span className="game-btn-letter">{letter}</span>
      <span>{text}</span>
    </button>
  );
}