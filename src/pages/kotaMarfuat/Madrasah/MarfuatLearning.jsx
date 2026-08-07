import { useNavigate } from "react-router-dom";
import "../styles/MarfuatLearning.css";

const TOPICS = [
  {
    id: 1,
    arabic: "الفاعل",
    malay: "Fa'il",
    route: "/kitab-fail",
  },
  {
    id: 2,
    arabic: "نائب الفاعل",
    malay: "Naib Fa'il",
    route: "/kitab-naib-fail",
  },
  {
    id: 3,
    arabic: "المبتدأ",
    malay: "Mubtada'",
    route: "/kitab-mubtada",
  },
  {
    id: 4,
    arabic: "الخبر",
    malay: "Khabar",
    route: "/kitab-khabar",
  },
  {
    id: 5,
    arabic: "اسم كان",
    malay: "Isim Kana",
    route: "/kitab-isim-kana",
  },
  {
    id: 6,
    arabic: "خبر إن",
    malay: "Khabar Inna",
    route: "/kitab-khabar-inna",
  },
];

export default function MarfuatLearning() {
  const navigate = useNavigate();

  return (
    <div className="marfuat-learning">

      <button
        className="learning-back-btn"
        onClick={() => navigate("/marfuat-matan")}
      >
        ← Kembali
      </button>

      <div className="learning-card">

        <div className="learning-badge">
          MODUL PEMBELAJARAN
        </div>

        <h1 className="learning-title">
          بَابُ الْمَرْفُوعَاتِ
        </h1>

        <p className="learning-subtitle">
          Pilih salah satu kitab di bawah untuk mempelajari
          sebab-sebab isim menjadi marfu'.
        </p>

        <div className="learning-grid">

          {TOPICS.map((topic) => (

            <button
              key={topic.id}
              className="topic-card"
              onClick={() => navigate(topic.route)}
            >

              <div className="topic-number">
                {topic.id}
              </div>

              <div
                className="topic-arabic"
                dir="rtl"
                lang="ar"
              >
                {topic.arabic}
              </div>

              <div className="topic-malay">
                {topic.malay}
              </div>

            </button>

          ))}

        </div>

        <button
          className="learning-next-btn"
          onClick={() => navigate("/perpustakaan-marfuat")}
        >
          📚 Masuk ke Perpustakaan Marfu'at
        </button>

      </div>

    </div>
  );
}