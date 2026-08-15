import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PerpustakaanIrab.css";

const KITAB = [
  {
    id: "marfu",
    title: "مَرْفُوع",
    name: "Marfu‘",
    sign: "ـُ / ـٌ",
    route: "/kitab-marfuat",
    image: "/images/perpustakaan/marfu.webp",
    explanation:
      "Marfu‘ ialah salah satu daripada empat keadaan I‘rab. Tanda asasnya ialah dhammah.",
    example: "مُحَمَّدٌ",
    unlockKey: null,
  },

  {
    id: "mansub",
    title: "مَنْصُوب",
    name: "Mansub",
    sign: "ـَ / ـً",
    route: "/kitab-mansubat",
    image: "/images/perpustakaan/mansub.webp",
    explanation:
      "Mansub ialah salah satu daripada empat keadaan I‘rab. Tanda asasnya ialah fathah.",
    example: "مُحَمَّدًا",
    unlockKey: "latihanMarfuatDone",
  },

  {
    id: "majrur",
    title: "مَجْرُور",
    name: "Majrur",
    sign: "ـِ / ـٍ",
    route: "/kitab-majrurat",
    image: "/images/perpustakaan/majrur.webp",
    explanation:
      "Majrur ialah keadaan I‘rab yang berlaku pada isim. Tanda asasnya ialah kasrah.",
    example: "مُحَمَّدٍ",
    unlockKey: "latihanMansubatDone",
  },

  {
    id: "majzum",
    title: "مَجْزُوم",
    name: "Majzum",
    sign: "ـْ",
    route: "/kitab-majzum",
    image: "/images/perpustakaan/majzum.webp",
    explanation:
      "Majzum ialah keadaan I‘rab yang berlaku pada fi‘il mudhari‘. Tanda asasnya ialah sukun.",
    example: "يَذْهَبْ",
    unlockKey: "latihanMajruratDone",
  },
];


/* =========================================================
   SEMAK STATUS LATIHAN
========================================================= */

function isPassed(key) {
  if (!key) {
    return true;
  }

  return (
    localStorage.getItem(key) ===
    "true"
  );
}


/* =========================================================
   PERPUSTAKAAN I‘RAB
========================================================= */

export default function PerpustakaanIrab() {
  const navigate = useNavigate();

  /*
   * Kita gunakan state supaya halaman boleh
   * membaca semula status selepas kembali
   * daripada latihan.
   */
  const [
    unlockVersion,
    setUnlockVersion,
  ] = useState(0);

  const [selectedBookId, setSelectedBookId] =
    useState("marfu");


  /* =======================================================
     STATUS KITAB
  ======================================================= */

  const unlockedBooks = useMemo(() => {
    /*
     * unlockVersion sengaja digunakan supaya
     * useMemo membaca semula localStorage
     * apabila diperlukan.
     */
    void unlockVersion;

    return KITAB.reduce(
      (result, book) => {
        result[book.id] =
          isPassed(book.unlockKey);

        return result;
      },
      {}
    );
  }, [unlockVersion]);


  const selectedBook = useMemo(
    () =>
      KITAB.find(
        (book) =>
          book.id === selectedBookId
      ) ?? KITAB[0],
    [selectedBookId]
  );


  /* =======================================================
     KIRA PROGRESS
  ======================================================= */

  const passedCount = [
    "latihanMarfuatDone",
    "latihanMansubatDone",
    "latihanMajruratDone",
    "latihanMajzumatDone",
  ].filter(
    (key) =>
      localStorage.getItem(key) ===
      "true"
  ).length;


  /*
   * Lorong Latihan hanya dibuka selepas
   * Latihan Majzum lulus.
   */
  const lorongUnlocked =
    localStorage.getItem(
      "latihanMajzumatDone"
    ) === "true";


  /* =======================================================
     PILIH KITAB
  ======================================================= */

  function pilihKitab(book) {
    setSelectedBookId(book.id);
  }


  /* =======================================================
     BUKA KITAB
  ======================================================= */

  function bukaKitab(book) {
    const unlocked =
      unlockedBooks[book.id];

    if (!unlocked) {
      alert(
        "Kitab ini masih terkunci. Selesaikan dan lulus latihan sebelumnya terlebih dahulu."
      );

      return;
    }

    navigate(book.route);
  }


  /* =======================================================
     LORONG LATIHAN
  ======================================================= */

  function bukaLorongLatihan() {
    if (!lorongUnlocked) {
      alert(
        "Selesaikan dan lulus Latihan Majzum terlebih dahulu."
      );

      return;
    }

    navigate("/lorong-latihan");
  }


  /* =======================================================
     REFRESH STATUS
  ======================================================= */

  function refreshUnlockStatus() {
    setUnlockVersion(
      (value) => value + 1
    );
  }


  return (
    <main className="perpustakaan-page">

      <section className="perpustakaan-viewport">

        {/* =================================================
            BACKGROUND
        ================================================= */}

        <img
          src="/images/perpustakaan/perpustakaan-irab-bg.webp"
          alt=""
          className="perpustakaan-bg"
          draggable="false"
        />


        {/* =================================================
            BACK
        ================================================= */}

        <button
          type="button"
          className="perpustakaan-back-hotspot"
          onClick={() =>
            navigate("/kota-irab")
          }
          aria-label="Kembali ke Kota I‘rab"
        />


        {/* =================================================
            PROGRESS
        ================================================= */}

        <section
          className="perpustakaan-progress-layer"
          aria-label={`Latihan lulus ${passedCount} daripada 4`}
        >
          <strong>
            {passedCount} / 4
          </strong>

          <div className="perpustakaan-progress-track">

            <span
              style={{
                width: `${
                  (passedCount / 4) *
                  100
                }%`,
              }}
            />

          </div>
        </section>


        {/* =================================================
            BOOKS
        ================================================= */}

        <section className="perpustakaan-books-layer">

          {KITAB.map((book) => {

            const unlocked =
              unlockedBooks[book.id];

            const dipilih =
              selectedBook.id ===
              book.id;

            return (
              <article
                key={book.id}
                className={[
                  "perpustakaan-book-slot",
                  `book-${book.id}`,
                  unlocked
                    ? "unlocked"
                    : "locked",
                  dipilih
                    ? "selected"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >

                {/* BOOK */}

                <button
                  type="button"
                  className="perpustakaan-book-button"
                  onClick={() =>
                    pilihKitab(book)
                  }
                  aria-label={
                    unlocked
                      ? `Pilih kitab ${book.name}`
                      : `Kitab ${book.name} masih terkunci`
                  }
                >

                  <img
                    src={book.image}
                    alt={`Kitab ${book.name}`}
                    className="perpustakaan-book-image"
                    draggable="false"
                  />

                  {!unlocked && (
                    <span
                      className="perpustakaan-lock-badge"
                      aria-label="Terkunci"
                    >
                      🔒
                    </span>
                  )}

                </button>


                {/* OPEN */}

                <button
                  type="button"
                  className={
                    unlocked
                      ? "perpustakaan-open-book"
                      : "perpustakaan-open-book locked"
                  }
                  onClick={() =>
                    bukaKitab(book)
                  }
                  disabled={!unlocked}
                >
                  {unlocked
                    ? "BUKA KITAB"
                    : "TERKUNCI"}
                </button>

              </article>
            );
          })}

        </section>


        {/* =================================================
            SELECTED BOOK
        ================================================= */}

        <section className="perpustakaan-selected-layer">

          <div className="selected-book-main">

            <h2>
              {selectedBook.name}
            </h2>

            <p>
              {selectedBook.explanation}
            </p>

            <button
              type="button"
              className={
                unlockedBooks[
                  selectedBook.id
                ]
                  ? "selected-book-open-button"
                  : "selected-book-open-button locked"
              }
              onClick={() =>
                bukaKitab(selectedBook)
              }
              disabled={
                !unlockedBooks[
                  selectedBook.id
                ]
              }
            >
              {unlockedBooks[
                selectedBook.id
              ]
                ? "MULAKAN PEMBELAJARAN"
                : "KITAB TERKUNCI"}
            </button>

          </div>


          <div className="selected-book-sign">

            <span>
              TANDA ASAS
            </span>

            <strong
              dir="rtl"
              lang="ar"
            >
              {selectedBook.sign}
            </strong>

          </div>


          <div className="selected-book-example">

            <span>
              CONTOH
            </span>

            <strong
              dir="rtl"
              lang="ar"
            >
              {selectedBook.example}
            </strong>

          </div>

        </section>


        {/* =================================================
            LORONG LATIHAN
        ================================================= */}

        <button
          type="button"
          className={[
            "perpustakaan-complete-hotspot",
            lorongUnlocked
              ? "ready"
              : "locked",
          ].join(" ")}
          onClick={bukaLorongLatihan}
          aria-label={
            lorongUnlocked
              ? "Buka Lorong Latihan"
              : "Lorong Latihan masih terkunci"
          }
        />

        {/* =================================================
            REFRESH STATUS
        ================================================= */}

        <button
          type="button"
          className="perpustakaan-refresh-status"
          onClick={refreshUnlockStatus}
          aria-label="Semak semula status latihan"
        />

      </section>

    </main>
  );
}