import { useNavigate } from "react-router-dom";
import "./LorongLatihan.css";

const LATIHAN = [
  {
    id: "keadaan",
    number: "01",
    title: "Kenali Keadaan I‘rab",
    arabic: "أَحْوَالُ الْإِعْرَابِ",
    description:
      "Kenal pasti Marfu‘, Mansub, Majrur dan Majzum.",
    route: "/latihan-irab-keadaan",
    storageKey: "latihanIrabKeadaanDone",
  },
  {
    id: "tanda",
    number: "02",
    title: "Kenali Tanda I‘rab",
    arabic: "عَلَامَاتُ الْإِعْرَابِ",
    description:
      "Kenal pasti dhammah, fathah, kasrah dan sukun.",
    route: "/latihan-irab-tanda",
    storageKey: "latihanIrabTandaDone",
  },
  {
    id: "ayat",
    number: "03",
    title: "Analisis Ayat",
    arabic: "تَحْلِيلُ الْجُمَلِ",
    description:
      "Tentukan keadaan I‘rab berdasarkan kedudukan kalimah.",
    route: "/latihan-irab-ayat",
    storageKey: "latihanIrabAyatDone",
  },
  {
    id: "campuran",
    number: "04",
    title: "Latihan Campuran",
    arabic: "التَّدْرِيبُ الشَّامِلُ",
    description:
      "Gabungan soalan keadaan, tanda dan penggunaan dalam ayat.",
    route: "/latihan-irab-campuran",
    storageKey: "latihanIrabCampuranDone",
  },
];

function isCompleted(storageKey) {
  return localStorage.getItem(storageKey) === "true";
}

export default function LorongLatihan() {
  const navigate = useNavigate();

  const completedCount = LATIHAN.filter((latihan) =>
    isCompleted(latihan.storageKey)
  ).length;

  function isUnlocked(index) {
    if (index === 0) return true;

    return isCompleted(
      LATIHAN[index - 1].storageKey
    );
  }

  function bukaLatihan(latihan, index) {
    if (!isUnlocked(index)) {
      alert(
        `Selesaikan latihan ${index} terlebih dahulu.`
      );
      return;
    }

    navigate(latihan.route);
  }

  function tamatLorong() {
    if (completedCount !== LATIHAN.length) {
      alert(
        "Selesaikan keempat-empat latihan terlebih dahulu."
      );
      return;
    }

    localStorage.setItem("lorongIrabDone", "true");

    navigate("/kota-irab");
  }

  return (
    <main className="lorong-latihan-page">
      <section className="lorong-latihan-stage">
        <div className="lorong-background" />

        <button
          type="button"
          className="lorong-back-button"
          onClick={() => navigate("/kota-irab")}
        >
          ← KOTA I‘RAB
        </button>

        <header className="lorong-header">
          <span>LOKASI 3</span>

          <h1>LORONG LATIHAN I‘RAB</h1>

          <p>
            Uji kefahaman melalui empat tahap latihan.
          </p>
        </header>

        <section className="lorong-progress">
          <div className="lorong-progress-heading">
            <span>KEMAJUAN LATIHAN</span>

            <strong>
              {completedCount} / {LATIHAN.length}
            </strong>
          </div>

          <div className="lorong-progress-track">
            <span
              style={{
                width: `${
                  (completedCount / LATIHAN.length) *
                  100
                }%`,
              }}
            />
          </div>
        </section>

        <section className="lorong-training-grid">
          {LATIHAN.map((latihan, index) => {
            const completed = isCompleted(
              latihan.storageKey
            );

            const unlocked = isUnlocked(index);

            return (
              <button
                type="button"
                key={latihan.id}
                className={[
                  "lorong-training-card",
                  completed ? "completed" : "",
                  unlocked ? "unlocked" : "locked",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() =>
                  bukaLatihan(latihan, index)
                }
              >
                <span className="training-number">
                  {latihan.number}
                </span>

                <span
                  className="training-arabic"
                  lang="ar"
                  dir="rtl"
                >
                  {latihan.arabic}
                </span>

                <strong>{latihan.title}</strong>

                <p>{latihan.description}</p>

                <span className="training-status">
                  {completed
                    ? "✓ SELESAI"
                    : unlocked
                      ? "MULAKAN"
                      : "TERKUNCI"}
                </span>
              </button>
            );
          })}
        </section>

        <section className="lorong-guide">
          <span>ARAHAN</span>

          <h2>Selesaikan latihan mengikut urutan</h2>

          <p>
            Setiap tahap akan terbuka selepas tahap
            sebelumnya diselesaikan.
          </p>
        </section>

        <button
          type="button"
          className={`lorong-complete-button ${
            completedCount === LATIHAN.length
              ? "ready"
              : "locked"
          }`}
          onClick={tamatLorong}
        >
          {completedCount === LATIHAN.length
            ? "SELESAIKAN LORONG LATIHAN"
            : `SELESAIKAN SEMUA LATIHAN (${completedCount}/${LATIHAN.length})`}
        </button>
      </section>
    </main>
  );
}