import { useEffect, useState } from "react";
import "./TeacherTyping.css";

export default function TeacherTyping({
  text = "",
  speed = 35,
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay("");

    let index = 0;

    const timer = setInterval(() => {
      index++;

      setDisplay(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <div className="teacher-typing">
      {display}
    </div>
  );
}