import { useNavigate } from "react-router-dom";
import "./ReflectionEngine.css";

export default function ReflectionEngine({
  score = 0,
  total = 10,
  teacher = "Guru",
  successRoute,
  retryRoute,
}) {
  const navigate = useNavigate();
  const perfect = score === total;

  return (
    <div className="reflection-page">
      <div className="reflection-card">
        <h1>🌿 Refleksi Guru</h1>

        <h2>{teacher}</h2>

        <p className="reflection-score">
          Markah kamu: {score} / {total}
        </p>

        {perfect ? (
          <p>
            Masya-Allah. Kamu telah memahami asas bab ini dengan baik.
            Teruskan perjalanan ilmu ini dengan tenang.
          </p>
        ) : (
          <p>
            Tidak mengapa. Ilmu menjadi kuat dengan pengulangan.
            Mari kita cuba sekali lagi.
          </p>
        )}

        <button
          onClick={() =>
            navigate(perfect ? successRoute : retryRoute)
          }
        >
          {perfect ? "Teruskan ke Anugerah" : "Ulang Latihan"}
        </button>
      </div>
    </div>
  );
}