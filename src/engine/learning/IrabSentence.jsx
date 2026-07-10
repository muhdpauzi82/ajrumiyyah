export default function IrabSentence({ before, word, ending }) {
  return (
    <div className="irab-sentence">
      <span className="irab-before">{before}</span>
      <span className="irab-word">
        {word}
        <span className="irab-ending">{ending}</span>
      </span>
    </div>
  );
}