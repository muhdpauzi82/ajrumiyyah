import {  useEffect,  useRef,  useState,} from "react";
import { useNavigate } from "react-router-dom";

import { marfuPages } from "./marfuPages";

import "./KitabMarfuat.css";

export default function KitabMarfuat() {
  const navigate = useNavigate();
const viewportRef = useRef(null);
const [scale, setScale] = useState(1);

const BASE_WIDTH = 1200;
const BASE_HEIGHT = 700;

  const [pageIndex, setPageIndex] = useState(0);
  const [selectedExample, setSelectedExample] = useState(0);

  const page = marfuPages[pageIndex];

  const currentExample =
    page.examples?.[selectedExample] ?? null;

  const isFirstPage = pageIndex === 0;
  const isLastPage =
    pageIndex === marfuPages.length - 1;

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


useEffect(() => {
  function updateScale() {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const widthScale =
      viewport.clientWidth / BASE_WIDTH;

    const heightScale =
      viewport.clientHeight / BASE_HEIGHT;

    setScale(
      Math.min(widthScale, heightScale)
    );
  }

  updateScale();

  window.addEventListener(
    "resize",
    updateScale
  );

  return () => {
    window.removeEventListener(
      "resize",
      updateScale
    );
  };
}, []);

  return (
  <div
    ref={viewportRef}
    className="kitab-viewport"
  >
    <main
      className="kitab-marfu-screen"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <section className="kitab-marfu-book">

        {/* BADGE KITAB */}

        <aside className="kitab-identity">
          <span className="kitab-identity-icon">
            📖
          </span>

          <span className="kitab-identity-small">
            KITAB 1
          </span>

          <strong>MARFU‘AT</strong>
        </aside>

        {/* HEADER */}

        <header className="kitab-header">
          <div
            className="kitab-arabic-title"
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

        {/* KANDUNGAN */}

        <section className="kitab-content">

          {page.explanation && (
            <p className="kitab-explanation">
              {page.explanation}
            </p>
          )}

          {page.examples && currentExample && (
            <div className="lesson-layout">

              {/* PILIHAN KIRI */}

              <aside className="lesson-sidebar">
                <h3>Digunakan pada</h3>

                <div className="lesson-sidebar-divider">
                  ◆
                </div>

                <div className="lesson-options">
                  {page.examples.map(
                    (item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        className={
                          index === selectedExample
                            ? "lesson-item active"
                            : "lesson-item"
                        }
                        onClick={() =>
                          setSelectedExample(index)
                        }
                      >
                        <span className="lesson-item-number">
                          {index + 1}
                        </span>

                        <span className="lesson-item-label">
                          {item.label}
                        </span>

                        <span className="lesson-item-arrow">
                          ›
                        </span>
                      </button>
                    )
                  )}
                </div>

                <div className="lesson-tip">
                  <span className="lesson-tip-icon">
                    💡
                  </span>

                  <p>
                    Tekan pada pilihan untuk melihat
                    contoh bagi setiap keadaan.
                  </p>
                </div>
              </aside>

              {/* CONTOH KANAN */}

              <section
                key={currentExample.id}
                className="lesson-example"
              >
                <div className="example-header">
                  Contoh: {currentExample.label}
                </div>

                <div
                  className="arabic-sentence"
                  dir="rtl"
                  lang="ar"
                >
                  {currentExample.sentenceParts.map(
                    (part, index) => (
                      <span
                        key={`${currentExample.id}-${index}`}
                        className={
                          part.highlight
                            ? "arabic-highlight"
                            : ""
                        }
                      >
                        {part.text}
                      </span>
                    )
                  )}
                </div>

                <div className="example-pointer">
                  <span className="pointer-line" />
                  <span className="pointer-dot" />
                </div>

                <div className="example-category">
                  <span
                    className="example-category-arabic"
                    dir="rtl"
                    lang="ar"
                  >
                    {currentExample.categoryArabic}
                  </span>

                  <span className="example-category-malay">
                    {currentExample.label}
                  </span>
                </div>

                <div className="example-description">
                  <span className="description-check">
                    ✓
                  </span>

                  <p>
                    {currentExample.description}
                  </p>
                </div>
              </section>

            </div>
          )}

          {/* RINGKASAN */}

          {page.signs && page.type === "summary" && (
            <ul className="kitab-summary">
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

          {/* HALAMAN MATAN */}

          {page.signs && page.type === "matan" && (
            <ul className="kitab-matan-signs">
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

          {/* HALAMAN TAMAT */}

          {page.message && (
  <div className="kitab-complete-content">
    <p className="kitab-message">
      {page.message}
    </p>

    <button
      type="button"
      className="kitab-training-hotspot"
      onClick={() => navigate("/latihan-marfuat")}
    >
      <span className="training-hotspot-icon">
        ⚔️
      </span>

      <span className="training-hotspot-text">
        <strong>LATIHAN MARFU‘</strong>

        <small>
          Uji kefahaman tentang dhammah, waw, alif dan nun.
        </small>
      </span>

      <span className="training-hotspot-arrow">
        →
      </span>
    </button>
  </div>
)}

        </section>

        {/* FOOTER */}

        <footer className="kitab-footer">
          <button
            type="button"
            onClick={previousPage}
          >
            {isFirstPage
              ? "← Kembali"
              : "← Sebelumnya"}
          </button>

          <div className="kitab-page-progress">
            <span>
              Halaman {pageIndex + 1} daripada{" "}
              {marfuPages.length}
            </span>

            <div className="page-dots">
              {marfuPages.map((item, index) => (
                <span
                  key={item.id}
                  className={
                    index === pageIndex
                      ? "page-dot active"
                      : index < pageIndex
                        ? "page-dot completed"
                        : "page-dot"
                  }
                />
              ))}
            </div>
          </div>

          {isLastPage ? (
            <button
              type="button"
              onClick={finishBook}
            >
              Selesai
            </button>
          ) : (
            <button
              type="button"
              onClick={nextPage}
            >
              Seterusnya →
            </button>
          )}
        </footer>

      </section>
    </main>
    </div>
  );
}