import { useNavigate } from "react-router-dom";

import "./NotaFiil.css";

const tandaFiil = [
  {
    id: "qad",
    label: "قَدْ",
    title: "Qad",
    description:
      "Fi‘il boleh menerima perkataan قَدْ.",
    example: "قَدْ كَتَبَ",
  },
  {
    id: "sin",
    label: "سَـ",
    title: "Sin",
    description:
      "Fi‘il mudhari‘ boleh menerima huruf سَـ.",
    example: "سَيَكْتُبُ",
  },
  {
    id: "saufa",
    label: "سَوْفَ",
    title: "Saufa",
    description:
      "Fi‘il mudhari‘ boleh menerima perkataan سَوْفَ.",
    example: "سَوْفَ يَكْتُبُ",
  },
  {
    id: "ta-tanith",
    label: "تْ",
    title: "Ta’ Ta’nith Sakinah",
    description:
      "Fi‘il madhi boleh menerima Ta’ Ta’nith Sakinah.",
    example: "كَتَبَتْ",
  },
];

export default function NotaFiil() {
  const navigate = useNavigate();

  function kembaliKeJejak() {
    navigate("/jejak-fiil");
  }

  function selesaiNota() {
    localStorage.setItem("notaFiilDone", "true");
    navigate("/jejak-fiil");
  }

  return (
    <main className="fiil-matan-screen">
      <div className="fiil-matan-frame">
        <button
          type="button"
          className="fiil-matan-back"
          onClick={kembaliKeJejak}
        >
          ← Kembali
        </button>

        <section className="fiil-matan-card">
          <header className="fiil-matan-header">
            <div
              className="fiil-matan-header-icon"
              aria-hidden="true"
            >
              📜
            </div>

            <div>
              <p className="fiil-matan-eyebrow">
                LEMBAH MATAN
              </p>

              <h1>Lembah Matan Fi‘il</h1>

              <p className="fiil-matan-subtitle">
                Kenali fi‘il melalui tanda-tandanya.
              </p>
            </div>
          </header>

          <div className="fiil-matan-content">
            <section className="fiil-matan-left">
              <div className="fiil-section-heading">
                <span aria-hidden="true">📖</span>
                <h2>Matan Ajrumiyyah</h2>
              </div>

              <div
                className="fiil-arabic-panel"
                dir="rtl"
                lang="ar"
              >
                <p>وَالْفِعْلُ يُعْرَفُ بِقَدْ</p>
                <p>وَالسِّينِ</p>
                <p>وَسَوْفَ</p>
                <p>
                  وَتَاءِ التَّأْنِيثِ
                  السَّاكِنَةِ
                </p>
              </div>

              <div className="fiil-meaning-box">
                <h2>
                  <span aria-hidden="true">💡</span>
                  Maksud Ringkas
                </h2>

                <p>
                  Fi‘il ialah perkataan yang menunjukkan
                  perbuatan atau kejadian yang berkaitan
                  dengan masa tertentu.
                </p>
              </div>
            </section>

            <section className="fiil-matan-right">
              <div className="fiil-section-heading">
                <span aria-hidden="true">🔎</span>
                <h2>Tanda-tanda Fi‘il</h2>
              </div>

              <div className="fiil-sign-grid">
                {tandaFiil.map((item) => (
                  <article
                    key={item.id}
                    className="fiil-sign-card"
                  >
                    <div
                      className="fiil-sign-symbol"
                      dir="rtl"
                      lang="ar"
                    >
                      {item.label}
                    </div>

                    <div className="fiil-sign-copy">
                      <h3>{item.title}</h3>

                      <p>{item.description}</p>

                      <div
                        className="fiil-sign-example"
                        dir="rtl"
                        lang="ar"
                      >
                        {item.example}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <footer className="fiil-matan-footer">
            <p>
              Baca matan, fahami maksud dan ingat empat
              tanda utama fi‘il.
            </p>

            <button
              type="button"
              onClick={selesaiNota}
            >
              SAYA FAHAM — BUKA TAHAP ASAS
            </button>
          </footer>
        </section>
      </div>
    </main>
  );
}