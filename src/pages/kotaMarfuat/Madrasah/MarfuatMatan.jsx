import { useNavigate } from "react-router-dom";
import "../styles/MarfuatMatan.css";

export default function MarfuatMatan() {
  const navigate = useNavigate();

  function continueLearning() {
    localStorage.setItem("MarfuatMatanDone", "true");
    navigate("/marfuat-learning");
  }

  return (
    <main className="marfuat-matan">
      <section className="marfuat-matan-frame">

        <button
          type="button"
          className="matan-back-btn"
          onClick={() => navigate("/marfuat-intro")}
        >
          ← Kembali
        </button>

        <div className="matan-card">

          <div
            className="matan-badge"
            dir="rtl"
            lang="ar"
          >
            مَتْنُ الْآجُرُّومِيَّةِ
          </div>

          <h1
            className="matan-title"
            dir="rtl"
            lang="ar"
          >
            بَابُ الْمَرْفُوعَاتِ
          </h1>

          <div className="matan-divider">
            ◆
          </div>

          <div
            className="matan-arabic"
            dir="rtl"
            lang="ar"
          >
            الْمَرْفُوعَاتُ سَبْعَةٌ:
            الْفَاعِلُ،
            وَالْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ،
            وَالْمُبْتَدَأُ وَخَبَرُهُ،
            وَاسْمُ كَانَ وَأَخَوَاتِهَا，
            وَخَبَرُ إِنَّ وَأَخَوَاتِهَا，
            وَالتَّابِعُ لِلْمَرْفُوعِ.
          </div>

          <div className="matan-note">
            <h2>Perhatikan Matan Ini</h2>

            <p>
              Imam Ibn Ajurrum menyebut beberapa bahagian yang berada
              dalam keadaan marfu&apos;. Dalam perjalanan Kota Marfu&apos;at,
              kita akan mempelajarinya satu demi satu.
            </p>
          </div>

          <div className="matan-topics">
            <span>الفاعل</span>
            <span>نائب الفاعل</span>
            <span>المبتدأ</span>
            <span>الخبر</span>
            <span>اسم كان</span>
            <span>خبر إن</span>
            <span>التابع للمرفوع</span>
          </div>

          <button
            type="button"
            className="matan-next-btn"
            onClick={continueLearning}
          >
            Teruskan Pembelajaran →
          </button>

        </div>

      </section>
    </main>
  );
}