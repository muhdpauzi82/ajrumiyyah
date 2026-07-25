import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import "./KitabMansubat.css";
import { mansubPages } from "./mansubPages";

const BASE_WIDTH = 1200;
const BASE_HEIGHT = 700;

export default function KitabMansubat() {
  const navigate = useNavigate();

  const viewportRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedExample, setSelectedExample] =
    useState(0);

  const page = mansubPages[pageIndex];

  const currentExample =
    page?.examples?.[selectedExample] ?? null;

  const isFirstPage = pageIndex === 0;

  const isLastPage =
    pageIndex === mansubPages.length - 1;

  function nextPage() {
    if (isLastPage) return;

    setSelectedExample(0);

    setPageIndex((current) =>
      Math.min(
        current + 1,
        mansubPages.length - 1
      )
    );
  }

  function previousPage() {
    if (isFirstPage) {
      navigate("/perpustakaan-irab");
      return;
    }

    setSelectedExample(0);

    setPageIndex((current) =>
      Math.max(current - 1, 0)
    );
  }

  function finishBook() {
    localStorage.setItem(
      "kitabMansubatDone",
      "true"
    );

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
        Math.min(
          widthScale,
          heightScale,
          1
        )
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

  if (!page) {
    return null;
  }

  return (
    <div
      ref={viewportRef}
      className="kitab-viewport"
    >
      <main
        className="kitab-mansub-screen"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <section className="kitab-mansub-book">

          {/* BADGE KITAB */}

          <aside className="kitab-identity">
            <span className="kitab-identity-icon">
              📖
            </span>

            <span className="kitab-identity-small">
              KITAB 2
            </span>

            <strong>MANSUBAT</strong>
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

            {/* PENERANGAN */}

            {page.explanation && (
              <p className="kitab-explanation">
                {page.explanation}
              </p>
            )}

            {/* MATAN ARAB */}

            {page.type === "matan" &&
              page.matan && (
                <div
                  className="kitab-matan-text"
                  dir="rtl"
                  lang="ar"
                >
                  {page.matan}
                </div>
              )}

            {/* SENARAI TANDA MATAN */}

            {page.type === "matan" &&
              page.signs && (
                <ul className="kitab-matan-signs mansub-signs">
                  {page.signs.map(
                    (sign, index) => (
                      <li
                        key={`${sign}-${index}`}
                        dir="rtl"
                        lang="ar"
                      >
                        {sign}
                      </li>
                    )
                  )}
                </ul>
              )}

            {/* HALAMAN PELAJARAN */}

            {page.type === "lesson" &&
              page.examples &&
              currentExample && (
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
                              index ===
                              selectedExample
                                ? "lesson-item active"
                                : "lesson-item"
                            }
                            onClick={() =>
                              setSelectedExample(
                                index
                              )
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
                        Tekan pada pilihan untuk
                        melihat contoh bagi setiap
                        keadaan.
                      </p>
                    </div>
                  </aside>

                  {/* CONTOH KANAN */}

                  <section
                    key={currentExample.id}
                    className="lesson-example"
                  >
                    <div className="example-header">
                      Contoh:{" "}
                      {currentExample.label}
                    </div>

                    {/* AYAT ARAB */}

                    <div
                      className="arabic-sentence"
                      dir="rtl"
                      lang="ar"
                    >
                      <span>
                        {
                          currentExample.example
                            ?.before
                        }
                      </span>

                      <span className="arabic-highlight">
                        {
                          currentExample.example
                            ?.highlight
                        }
                      </span>

                      <span>
                        {
                          currentExample.example
                            ?.after
                        }
                      </span>
                    </div>

                    <div className="example-pointer">
                      <span className="pointer-line" />
                      <span className="pointer-dot" />
                    </div>

                    {/* KATEGORI */}

                    <div className="example-category">
                      <span
                        className="example-category-arabic"
                        dir="rtl"
                        lang="ar"
                      >
                        {currentExample.arabic}
                      </span>

                      <span className="example-category-malay">
                        {currentExample.label}
                      </span>
                    </div>

                    {/* MAKSUD */}

                    {currentExample.meaning && (
                      <p className="example-meaning">
                        “{currentExample.meaning}”
                      </p>
                    )}

                    {/* PENERANGAN */}

                    <div className="example-description">
                      <span className="description-check">
                        ✓
                      </span>

                      <p>
                        {
                          currentExample.explanation
                        }
                      </p>
                    </div>
                  </section>

                </div>
              )}

            {/* RINGKASAN */}

            {page.type === "summary" &&
              page.summaryItems && (
                <ul className="kitab-summary">
                  {page.summaryItems.map(
                    (item, index) => (
                      <li
                        key={`${item.sign}-${index}`}
                      >
                        <span
                          dir="rtl"
                          lang="ar"
                        >
                          {item.sign}
                        </span>

                        <small>{item.use}</small>
                      </li>
                    )
                  )}
                </ul>
              )}

            {/* MESEJ TAMAT JIKA ADA */}

            {page.message && (
  <div className="kitab-complete-content">
    <p className="kitab-message">
      {page.message}
    </p>

    <button
      type="button"
      className="kitab-training-hotspot"
      onClick={() => navigate("/latihan-mansubat")}
    >
      <span className="training-hotspot-icon">
        ⚔️
      </span>

      <span className="training-hotspot-text">
        <strong>LATIHAN MANSUBAT</strong>

        <small>
          Uji kefahaman tentang tanda-tanda nasab.
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
                {mansubPages.length}
              </span>

              <div className="page-dots">
                {mansubPages.map(
                  (item, index) => (
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
                  )
                )}
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