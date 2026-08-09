import { useNavigate } from "react-router-dom";
import "../styles/KitabFail.css";

export default function KitabFail() {
  const navigate = useNavigate();

  function handleComplete() {
    localStorage.setItem("kitabFailDone", "true");
    navigate("/marfuat-learning");
  }

  return (
    <main className="kitab-fail-page">
      <section className="kitab-fail-frame">

        <div className="kitab-fail-layout">

          {/* ================================
              HEADER
          ================================= */}

          <header className="kitab-header">

            <div className="kitab-number">
              KITAB 1
            </div>

            <div className="kitab-heading">

              <h1
                dir="rtl"
                lang="ar"
              >
                الْفَاعِلُ
              </h1>

              <span>
                Fa'il
              </span>

            </div>

          </header>


          {/* ================================
              DEFINISI
          ================================= */}

          <section className="kitab-definition">

            <h2>
              Definisi
            </h2>

            <div
              className="kitab-arabic-box"
              dir="rtl"
              lang="ar"
            >
              الْفَاعِلُ هُوَ الِاسْمُ
              الْمَرْفُوعُ الْمَذْكُورُ
              قَبْلَهُ فِعْلُهُ
            </div>

            <p>
              Fa'il ialah isim yang berada
              dalam keadaan Marfu' dan datang
              selepas fi'il.
            </p>

          </section>


          {/* ================================
              CONTOH + PERINGATAN
          ================================= */}

          <section className="kitab-two-columns">

            {/* CONTOH */}

            <div className="kitab-example-panel">

            

              <div
                className="example-arabic"
                dir="rtl"
                lang="ar"
              >
                جَاءَ زَيْدٌ
              </div>

              <p className="example-translation">
                Zaid telah datang.
              </p>

              <div className="example-analysis">

                <div>
                  <span
                    dir="rtl"
                    lang="ar"
                  >
                    جَاءَ
                  </span>

                  <small>
                    Fi'il
                  </small>
                </div>

                <div className="highlight">

                  <span
                    dir="rtl"
                    lang="ar"
                  >
                    زَيْدٌ
                  </span>

                  <small>
                    Fa'il — Marfu'
                  </small>

                </div>

              </div>

            </div>


            {/* PERINGATAN */}

            <aside className="kitab-warning-panel">

              <h2>
                Peringatan
              </h2>

              <div className="warning-item">
                <strong>1</strong>

                <span>
                  Fa'il ialah isim.
                </span>
              </div>

              <div className="warning-item">
                <strong>2</strong>

                <span>
                  Fa'il berada dalam
                  keadaan Marfu'.
                </span>
              </div>

              <div className="warning-item">
                <strong>3</strong>

                <span>
                  Tanda asalnya ialah
                  dhammah.
                </span>
              </div>

            </aside>

          </section>


          {/* ================================
              ANALISIS
          ================================= */}

          <section className="kitab-analysis">

            <h2>
              Analisis
            </h2>

            <div className="analysis-flow">

              <span
                dir="rtl"
                lang="ar"
              >
                جَاءَ
              </span>

              <b>
                →
              </b>

              <span
                dir="rtl"
                lang="ar"
                className="highlight-word"
              >
                زَيْدٌ
              </span>

              <b>
                →
              </b>

              <span>
                Marfu'
              </span>

            </div>

          </section>


          {/* ================================
              SELESAI
          ================================= */}

          <button
            type="button"
            className="kitab-complete-btn"
            onClick={handleComplete}
          >
            SELESAI KITAB FA'IL
          </button>

        </div>

      </section>
    </main>
  );
}