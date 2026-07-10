import IrabSentence from "./IrabSentence";

export default function ArabicBoard({
  title,
  before,
  word,
  ending,
  text,
}) {
  return (
    <div className="learning-board">
      <h2>{title}</h2>

      <IrabSentence
        before={before}
        word={word}
        ending={ending}
      />

      <p>{text}</p>
      <span>▶</span>
    </div>
  );
}