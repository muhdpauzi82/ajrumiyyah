export default function DialogueBox({ name, text }) {
  return (
    <div className="learning-dialog">
      <h3>{name}</h3>
      <p>{text}</p>
      <span>▶</span>
    </div>
  );
}