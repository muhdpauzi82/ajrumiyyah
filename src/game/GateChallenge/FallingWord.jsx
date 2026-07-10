import { useEffect } from "react";

export default function FallingWord({ word, onCatch, onMiss }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onMiss(word.id);
    }, word.speed * 1000);

    return () => clearTimeout(timer);
  }, [word.id, word.speed, onMiss]);
  
return (
    <button
      type="button"
      className="falling-word"
      style={{
        left: `${word.left}%`,
        animationDuration: `${word.speed}s`,
      }}
      onClick={() => onCatch(word)}
      onAnimationEnd={() => onMiss(word.id)}
    >
      {word.arabic}
    </button>
  );
}