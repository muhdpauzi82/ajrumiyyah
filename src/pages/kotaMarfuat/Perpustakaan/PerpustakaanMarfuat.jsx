import { useNavigate } from "react-router-dom";
import "../styles/PerpustakaanMarfuat.css";

const KITAB_LIST = [
  {
    id: "fail",
    route: "/kitab-fail",
    storageKey: "kitabFailDone",
  },
  {
    id: "naib-fail",
    route: "/kitab-naib-fail",
    storageKey: "kitabNaibFailDone",
  },
  {
    id: "mubtada",
    route: "/kitab-mubtada",
    storageKey: "kitabMubtadaDone",
  },
  {
    id: "khabar",
    route: "/kitab-khabar",
    storageKey: "kitabKhabarDone",
  },
  {
    id: "isim-kana",
    route: "/kitab-isim-kana",
    storageKey: "kitabIsimKanaDone",
  },
  {
    id: "khabar-inna",
    route: "/kitab-khabar-inna",
    storageKey: "kitabKhabarInnaDone",
  },
  {
    id: "tabi-marfu",
    route: "/kitab-tabi-marfu",
    storageKey: "tabiMarfuLearningDone",
  },
];

export default function PerpustakaanMarfuat() {
  const navigate = useNavigate();

  const completedCount = KITAB_LIST.filter(
    (kitab) =>
      localStorage.getItem(kitab.storageKey) === "true"
  ).length;

  const allCompleted =
    completedCount === KITAB_LIST.length;

  /*
   * Kitab pertama sentiasa terbuka.
   * Kitab seterusnya hanya terbuka apabila
   * kitab sebelumnya telah selesai.
   */
  function isKitabUnlocked(index) {
    if (index === 0) return true;

    return (
      localStorage.getItem(
        KITAB_LIST[index - 1].storageKey
      ) === "true"
    );
  }

  function enterKitab(kitab, index) {
    if (!isKitabUnlocked(index)) return;

    navigate(kitab.route);
  }

  function continueJourney() {
    if (!allCompleted) return;

    localStorage.setItem(
      "perpustakaanMarfuatDone",
      "true"
    );

    navigate("/lorong-latihan-marfuat");
  }

  return (
    <main className="perpustakaan-marfuat">
      <section className="perpustakaan-marfuat-frame">

        {/* GAMBAR PENUH */}
        <img
          className="perpustakaan-full-image"
          src="/images/kotaMarfuat/perpustakaan-marfuat.webp"
          alt="Perpustakaan Marfu'at"
          draggable="false"
        />

        {/* KEMBALI */}
        <button
          type="button"
          className="library-back-btn"
          onClick={() => navigate("/kota-marfuat")}
          aria-label="Kembali ke Kota Marfu'at"
        >
          ← Kembali
        </button>


        {/* =================================================
            1 — FA'IL
        ================================================= */}
        {KITAB_LIST.map((kitab, index) => {
  const unlocked = isKitabUnlocked(index);

  const completed =
    localStorage.getItem(
      kitab.storageKey
    ) === "true";

  return (
    <button
      key={kitab.id}
      type="button"
      className={`
        book-hotspot
        book-${index + 1}
        ${unlocked ? "unlocked" : "locked"}
        ${completed ? "completed" : ""}
      `}
      aria-label={
        unlocked
          ? `Buka ${kitab.id}`
          : `${kitab.id} masih terkunci`
      }
      disabled={!unlocked}
      onClick={() =>
        enterKitab(kitab, index)
      }
    >

      {!unlocked && (
        <span className="book-lock">
          🔒
        </span>
      )}

    </button>
  );
})}


        {/* =================================================
            LORONG LATIHAN
        ================================================= */}
        <button
          type="button"
          className={`
            library-next-hotspot
            ${allCompleted ? "active" : "locked"}
          `}
          aria-label="Teruskan ke Lorong Latihan"
          disabled={!allCompleted}
          onClick={continueJourney}
        />

      </section>
    </main>
  );
}