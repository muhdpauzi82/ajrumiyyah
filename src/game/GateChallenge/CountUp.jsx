import { useEffect, useState } from "react";

export default function CountUp({ end = 0, duration = 1000, suffix = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = end / 40;

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / 40);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{value}{suffix}</>;
}