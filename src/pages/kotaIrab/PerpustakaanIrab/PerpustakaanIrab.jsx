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
  },
];

function getCompletedBooks() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("perpustakaanIrabBooks") || "[]"
    );

    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export default function PerpustakaanIrab() {
  const navigate = useNavigate();

  const [completedBooks] = useState(getCompletedBooks);
  const [selectedBookId, setSelectedBookId] =
    useState("marfu");

  const selectedBook = useMemo(
    () =>
      KITAB.find(
        (book) => book.id === selectedBookId
      ) ?? KITAB[0],
    [selectedBookId]
  );

  const completedCount = KITAB.filter((book) =>
    completedBooks.includes(book.id)
  ).length;

  const semuaKitabSelesai =
    completedCount === KITAB.length;

  function pilihKitab(book) {
    setSelectedBookId(book.id);
  }

  function bukaKitab(book) {
    navigate(book.route);
  }

  function tamatPerpustakaan() {
    if (!semuaKitabSelesai) {
      alert(
        "Selesaikan pembelajaran dan lulus ujian bagi keempat-empat kitab terlebih dahulu."
      );
      return;
    }

    localStorage.setItem(
      "perpustakaanIrabDone",
      "true"
    );

    navigate("/kota-irab");
  }

  return (
    <main className="perpustakaan-page">
      <section className="perpustakaan-viewport">
        <img
           src="/images/perpustakaan/perpustakaan-irab-bg.webp"
          alt=""
          className="perpustakaan-bg"
          draggable="false"
        />

        <button
          type="button"
          className="perpustakaan-back-hotspot"
          onClick={() => navigate("/kota-irab")}
          aria-label="Kembali ke Kota I‘rab"
        />

        <section
          className="perpustakaan-progress-layer"
          aria-label={`Kemajuan ${completedCount} daripada ${KITAB.length}`}
        >
          <strong>
            {completedCount} / {KITAB.length}
          </strong>

          <div className="perpustakaan-progress-track">
            <span
              style={{
                width: `${
                  (completedCount / KITAB.length) *
                  100
                }%`,
              }}
            />
          </div>
        </section>

        <section className="perpustakaan-books-layer">
          {KITAB.map((book) => {
            const selesai =
              completedBooks.includes(book.id);

            const dipilih =
              selectedBook.id === book.id;

            return (
              <article
                key={book.id}
                className={[
                  "perpustakaan-book-slot",
                  `book-${book.id}`,
                  selesai ? "completed" : "",
                  dipilih ? "selected" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <button
                  type="button"
                  className="perpustakaan-book-button"
                  onClick={() => pilihKitab(book)}
                  onDoubleClick={() =>
                    bukaKitab(book)
                  }
                  aria-label={`Pilih kitab ${book.name}`}
                >
                  <img
                    src={book.image}
                    alt={`Kitab ${book.name}`}
                    className="perpustakaan-book-image"
                    draggable="false"
                  />

                  {selesai && (
                    <span
                      className="perpustakaan-completed-badge"
                      aria-label="Selesai"
                    >
                      ✓
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  className="perpustakaan-open-book"
                  onClick={() => bukaKitab(book)}
                >
                  BUKA KITAB
                </button>
              </article>
            );
          })}
        </section>

        <section className="perpustakaan-selected-layer">
          <div className="selected-book-main">
            <h2>{selectedBook.name}</h2>

            <p>{selectedBook.explanation}</p>

            <button
              type="button"
              className="selected-book-open-button"
              onClick={() =>
                bukaKitab(selectedBook)
              }
            >
              MULAKAN PEMBELAJARAN
            </button>
          </div>

          <div className="selected-book-sign">
            <span>TANDA ASAS</span>

            <strong
              dir="rtl"
              lang="ar"
            >
              {selectedBook.sign}
            </strong>
          </div>

          <div className="selected-book-example">
            <span>CONTOH</span>

            <strong
              dir="rtl"
              lang="ar"
            >
              {selectedBook.example}
            </strong>
          </div>
        </section>

        <button
          type="button"
          className={[
            "perpustakaan-complete-hotspot",
            semuaKitabSelesai
              ? "ready"
              : "locked",
          ].join(" ")}
          onClick={tamatPerpustakaan}
          aria-label={
            semuaKitabSelesai
              ? "Selesaikan perpustakaan"
              : "Perpustakaan belum selesai"
          }
        />
      </section>
    </main>
  );
}