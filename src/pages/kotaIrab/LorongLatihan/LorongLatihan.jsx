import { useEffect, useMemo, useState } from "react";
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
    icon: "/images/lorongLatihan/keadaan.webp",
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
    icon: "/images/lorongLatihan/tanda.webp",
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
    icon: "/images/lorongLatihan/ayat.webp",
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
    icon: "/images/lorongLatihan/campuran.webp",
  },
];

function bacaStatusLatihan() {
  return LATIHAN.reduce((status, latihan) => {
    status[latihan.id] =
      localStorage.getItem(latihan.storageKey) === "true";

    return status;
  }, {});
}

export default function LorongLatihan() {
  const navigate = useNavigate();

  const [completedStatus, setCompletedStatus] =
    useState(bacaStatusLatihan);

  useEffect(() => {
    function kemasKiniStatus() {
      setCompletedStatus(bacaStatusLatihan());
    }

    kemasKiniStatus();

    window.addEventListener("focus", kemasKiniStatus);
    window.addEventListener("storage", kemasKiniStatus);

    return () => {
      window.removeEventListener(
        "focus",
        kemasKiniStatus
      );

      window.removeEventListener(
        "storage",
        kemasKiniStatus
      );
    };
  }, []);

  const completedCount = useMemo(
    () =>
      LATIHAN.filter(
        (latihan) => completedStatus[latihan.id]
      ).length,
    [completedStatus]
  );

  const semuaLatihanSelesai =
    completedCount === LATIHAN.length;

  function isUnlocked(index) {
    if (index === 0) {
      return true;
    }

    const latihanSebelumnya = LATIHAN[index - 1];

    return Boolean(
      completedStatus[latihanSebelumnya.id]
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
    if (!semuaLatihanSelesai) {
      alert(
        "Selesaikan keempat-empat latihan terlebih dahulu."
      );

      return;
    }

    localStorage.setItem("lorongIrabDone", "true");

    navigate("/kota-irab");
  }

  return (
    <main className="lorong-page">
      <section className="lorong-frame">
        {/* Background penuh */}

        <img
          src="/images/lorongLatihan/lorong-latihan-bg.webp"
          alt=""
          className="lorong-bg"
          draggable="false"
        />

        {/* Kemajuan kanan atas */}

        <section
          className="lorong-progress-overlay"
          aria-label={`Kemajuan ${completedCount} daripada ${LATIHAN.length}`}
        >
          <strong>
            {completedCount} / {LATIHAN.length}
          </strong>

          <div className="lorong-progress-dots">
            {LATIHAN.map((latihan, index) => (
              <span
                key={latihan.id}
                className={[
                  completedStatus[latihan.id]
                    ? "completed"
                    : "",
                  index === completedCount
                    ? "current"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            ))}
          </div>
        </section>

        {/* Empat kad latihan */}

        <section className="lorong-card-grid">
          {LATIHAN.map((latihan, index) => {
            const completed = Boolean(
              completedStatus[latihan.id]
            );

            const unlocked = isUnlocked(index);

            return (
              <button
                type="button"
                key={latihan.id}
                className={[
                  "lorong-card",
                  `lorong-card-${latihan.id}`,
                  completed ? "completed" : "",
                  unlocked ? "unlocked" : "locked",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() =>
                  bukaLatihan(latihan, index)
                }
                aria-label={`${latihan.title}${
                  completed
                    ? ", selesai"
                    : unlocked
                      ? ", boleh dimulakan"
                      : ", belum terbuka"
                }`}
              >
                <span className="lorong-card-number">
                  {latihan.number}
                </span>

                <span className="lorong-card-icon-wrap">
                  <img
                    src={latihan.icon}
                    alt=""
                    className="lorong-card-icon"
                    draggable="false"
                  />
                </span>

                <span
                  className="lorong-card-arabic"
                  dir="rtl"
                  lang="ar"
                >
                  {latihan.arabic}
                </span>

                <strong className="lorong-card-title">
                  {latihan.title}
                </strong>

                <span className="lorong-card-divider" />

                <p className="lorong-card-description">
                  {latihan.description}
                </p>

                {completed && (
                  <span className="lorong-completed-badge">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </section>

        {/* Hotspot telus pada butang bawah background */}

        <button
          type="button"
          className={[
            "lorong-complete-hotspot",
            semuaLatihanSelesai
              ? "ready"
              : "locked",
          ].join(" ")}
          onClick={tamatLorong}
          aria-label={
            semuaLatihanSelesai
              ? "Selesaikan Lorong Latihan"
              : `Selesaikan semua latihan. ${completedCount} daripada ${LATIHAN.length} selesai`
          }
        />

        {/* Nombor dinamik pada butang bawah */}

        <span className="lorong-complete-count">
          ({completedCount}/{LATIHAN.length})
        </span>
      </section>
    </main>
  );
}