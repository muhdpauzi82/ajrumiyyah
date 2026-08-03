import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { marfuPages } from "./marfuPages";
import "./KitabMarfuat.css";

export default function KitabMarfuat() {
  const navigate = useNavigate();

  const [pageIndex, setPageIndex] = useState(0);
  const [selectedExample, setSelectedExample] =
    useState(0);

  const page = marfuPages[pageIndex];

  const currentExample =
    page.examples?.[selectedExample] ?? null;

  const isFirstPage = pageIndex === 0;
  const isLastPage =
    pageIndex === marfuPages.length - 1;

  const progressPercentage =
    ((pageIndex + 1) / marfuPages.length) * 100;

  function nextPage() {
    if (isLastPage) return;

    setSelectedExample(0);
    setPageIndex((current) => current + 1);
  }

  function previousPage() {
    if (isFirstPage) {
      navigate("/perpustakaan-irab");
      return;
    }

    setSelectedExample(0);
    setPageIndex((current) => current - 1);
  }

  function finishBook() {
    navigate("/perpustakaan-irab");
  }

  return (
    <main className="marfu-classroom-page">
      <section className="marfu-classroom-frame">
        {/* BACKGROUND UTAMA */}

        <img
          src="/images/kotaIrab/kitab-classroom-bg.webp"
          alt=""
          className="marfu-classroom-bg"
          draggable="false"
        />

        {/* KEMBALI KE KOTA I'RAB */}

        <button
          type="button"
          className="marfu-city-back"
          onClick={() => navigate("/kota-irab")}
          aria-label="Kembali ke Kota I'rab"
        >
          ← KOTA I‘RAB
        </button>

        {/* HEADER */}

        <header className="marfu-top-header">
          <span className="marfu-header-icon">
            📖
          </span>

          <div>
            <strong>KITAB 1 MARFU‘AT</strong>

            <small>
              Bab {pageIndex + 1} daripada{" "}
              {marfuPages.length}
            </small>
          </div>
        </header>

        {/* STATUS HALAMAN */}

        <section className="marfu-page-status">
          <span>Halaman</span>

          <strong>
            {pageIndex + 1} / {marfuPages.length}
          </strong>

          <div className="marfu-status-track">
            <span
              style={{
                width: `${progressPercentage}%`,
              }}
            />
          </div>
        </section>

        {/* PANEL OBJEKTIF KIRI */}

        <aside className="marfu-objective-panel">
          <h2>OBJEKTIF HARI INI</h2>

          <div className="marfu-objective-list">
            {marfuPages.map((item, index) => {
              const active = index === pageIndex;
              const completed = index < pageIndex;

              return (
                <button
                  type="button"
                  key={item.id}
                  className={[
                    "marfu-objective-item",
                    active ? "active" : "",
                    completed ? "completed" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => {
                    setPageIndex(index);
                    setSelectedExample(0);
                  }}
                >
                  <span className="objective-marker">
                    {completed
                      ? "✓"
                      : index + 1}
                  </span>

                  <span>
                    {item.menuTitle ??
                      item.title ??
                      `Halaman ${index + 1}`}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* KAWASAN UTAMA */}

        <section className="marfu-main-panel">
          <header className="marfu-lesson-heading">
            <div
              className="marfu-arabic-heading"
              dir="rtl"
              lang="ar"
            >
              {page.arabic}
            </div>

            <h1>{page.title}</h1>

            {page.subtitle && (
              <p>{page.subtitle}</p>
            )}
          </header>

          {page.explanation && (
            <p className="marfu-explanation">
              {page.explanation}
            </p>
          )}

          {/* HALAMAN CONTOH */}

          {page.examples && currentExample && (
            <div className="marfu-example-layout">
              <nav className="marfu-example-menu">
                {page.examples.map(
                  (item, index) => (
                    <button
                      type="button"
                      key={item.id}
                      className={
                        selectedExample === index
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setSelectedExample(index)
                      }
                    >
                      <span>{index + 1}</span>

                      <strong>{item.label}</strong>
                    </button>
                  )
                )}
              </nav>

              <section
                key={currentExample.id}
                className="marfu-example-card"
              >
                <span className="marfu-example-label">
                  AYAT CONTOH
                </span>

                <div
                  className="marfu-arabic-sentence"
                  dir="rtl"
                  lang="ar"
                >
                  {currentExample.sentenceParts.map(
                    (part, index) => (
                      <span
                        key={`${currentExample.id}-${index}`}
                        className={
                          part.highlight
                            ? "highlight"
                            : ""
                        }
                      >
                        {part.text}
                      </span>
                    )
                  )}
                </div>

                <div className="marfu-example-category">
                  <span
                    dir="rtl"
                    lang="ar"
                  >
                    {
                      currentExample.categoryArabic
                    }
                  </span>

                  <strong>
                    {currentExample.label}
                  </strong>
                </div>

                <p className="marfu-example-description">
                  {currentExample.description}
                </p>
              </section>
            </div>
          )}

          {/* HALAMAN MATAN */}

          {page.signs &&
            page.type === "matan" && (
              <ul className="marfu-matan-grid">
                {page.signs.map((item) => (
                  <li
                    key={item}
                    dir="rtl"
                    lang="ar"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

          {/* HALAMAN RINGKASAN */}

          {page.signs &&
            page.type === "summary" && (
              <ul className="marfu-summary-grid">
                {page.signs.map((item) => (
                  <li key={item.arabic}>
                    <span
                      dir="rtl"
                      lang="ar"
                    >
                      {item.arabic}
                    </span>

                    <small>{item.malay}</small>
                  </li>
                ))}
              </ul>
            )}

          {/* HALAMAN TAMAT */}

          {page.message && (
            <section className="marfu-complete-panel">
              <span className="marfu-complete-icon">
                ✓
              </span>

              <h2>{page.message}</h2>

              <button
                type="button"
                className="marfu-training-button"
                onClick={() =>
                  navigate("/latihan-marfuat")
                }
              >
                <span>⚔️</span>

                <span>
                  <strong>
                    LATIHAN MARFU‘
                  </strong>

                  <small>
                    Uji kefahaman tentang
                    dhammah, wau, alif dan nun.
                  </small>
                </span>

                <span>→</span>
              </button>
            </section>
          )}
        </section>

        {/* NOTA PINTAR KANAN */}

        <aside className="marfu-note-panel">
          <h2>NOTA PINTAR</h2>

          <span className="marfu-note-label">
            INGAT!
          </span>

          <strong>Marfu‘</strong>

          <span className="marfu-note-arrow">
            ↓
          </span>

          <strong className="marfu-note-sign">
            Dhammah
          </strong>

          <span
            className="marfu-note-arabic"
            dir="rtl"
            lang="ar"
          >
            ـُ
          </span>

          <p>
            Tanda asas bagi keadaan Rafa‘ ialah
            dhammah.
          </p>
        </aside>

        {/* TIP BAWAH */}

        <section className="marfu-bottom-tip">
          <span>💡</span>

          <p>
            Perhatikan tanda pada hujung kalimah.
            Di situlah perubahan I‘rab berlaku.
          </p>
        </section>

        {/* PROGRESS BAWAH */}

        <section className="marfu-bottom-progress">
          <span>KEMAJUAN BAB 1</span>

          <div className="marfu-page-dots">
            {marfuPages.map((item, index) => (
              <button
                type="button"
                key={item.id}
                aria-label={`Pergi ke halaman ${
                  index + 1
                }`}
                className={[
                  "marfu-page-dot",
                  index === pageIndex
                    ? "active"
                    : "",
                  index < pageIndex
                    ? "completed"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  setPageIndex(index);
                  setSelectedExample(0);
                }}
              />
            ))}
          </div>
        </section>

        {/* NAVIGASI BAWAH */}

        <button
          type="button"
          className="marfu-previous-button"
          onClick={previousPage}
        >
          {isFirstPage
            ? "← KEMBALI"
            : "← SEBELUMNYA"}
        </button>

        {isLastPage ? (
          <button
            type="button"
            className="marfu-next-button complete"
            onClick={finishBook}
          >
            SELESAI ✓
          </button>
        ) : (
          <button
            type="button"
            className="marfu-next-button"
            onClick={nextPage}
          >
            SETERUSNYA →
          </button>
        )}
      </section>
    </main>
  );
}