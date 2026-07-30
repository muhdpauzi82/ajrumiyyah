import { useNavigate } from "react-router-dom";

import "./NotaHuruf.css";

export default function NotaHuruf() {
  const navigate = useNavigate();

  function kembaliKeJejak() {
    navigate("/jejak-huruf");
  }

  function selesaiNota() {
    localStorage.setItem("notaHurufDone", "true");
    navigate("/jejak-huruf");
  }

  return (
    <main className="nota-huruf-screen">
      <div className="nota-huruf-frame">
        <div
          className="nota-huruf-background"
          aria-hidden="true"
        />

        <button
          type="button"
          className="nota-huruf-back"
          onClick={kembaliKeJejak}
        >
          ← Kembali
        </button>

        <section className="nota-huruf-panel">
          <header className="nota-huruf-header">
            <span className="nota-huruf-badge">
              NOTA PENGENALAN
            </span>

            <h1>📜 Matan Huruf</h1>

            <p>
              Kenali maksud huruf dan beberapa
              fungsi asasnya dalam ayat.
            </p>
          </header>

          <div className="nota-huruf-content">
            <section className="nota-huruf-left">
              <div className="nota-huruf-matan">
                <span className="nota-huruf-label">
                  مَتْنُ الْآجُرُّومِيَّةِ
                </span>

                <p dir="rtl" lang="ar">
                  وَالْحَرْفُ مَا لَا يَصْلُحُ مَعَهُ
                  دَلِيلُ الِاسْمِ وَلَا دَلِيلُ
                  الْفِعْلِ
                </p>
              </div>

              <div className="nota-huruf-meaning">
                <h2>📖 Maksud Ringkas</h2>

                <p>
                  Huruf ialah kalimah yang tidak
                  menerima tanda isim dan tidak
                  menerima tanda fi‘il.
                </p>
              </div>

              <div className="nota-huruf-summary">
                <h2>🎯 Rumusan</h2>

                <p>
                  Huruf memberi makna tertentu
                  apabila digunakan bersama kalimah
                  lain dalam sesuatu ayat.
                </p>
              </div>
            </section>

            <section className="nota-huruf-types">
              <article className="nota-huruf-card">
                <div className="nota-huruf-card-number">
                  1
                </div>

                <div className="nota-huruf-card-content">
                  <h2>Huruf Jar</h2>

                  <p>
                    Menyebabkan isim selepasnya
                    berada dalam keadaan majrur.
                  </p>

                  <p
                    className="nota-huruf-arabic-list"
                    dir="rtl"
                    lang="ar"
                  >
                    مِنْ، إِلَى، عَنْ، عَلَى، فِي،
                    البَاءُ، الكَافُ، اللَّامُ
                  </p>

                  <div className="nota-huruf-example">
                    <span>Contoh</span>

                    <p dir="rtl" lang="ar">
                      ذَهَبَ الطَّالِبُ إِلَى
                      الْمَسْجِدِ
                    </p>
                  </div>
                </div>
              </article>

              <article className="nota-huruf-card">
                <div className="nota-huruf-card-number">
                  2
                </div>

                <div className="nota-huruf-card-content">
                  <h2>Huruf ‘Aṭaf</h2>

                  <p>
                    Menghubungkan satu perkataan
                    atau ayat dengan perkataan atau
                    ayat yang lain.
                  </p>

                  <p
                    className="nota-huruf-arabic-list"
                    dir="rtl"
                    lang="ar"
                  >
                    وَ، فَ، ثُمَّ، أَوْ، بَلْ،
                    لَكِنْ، حَتَّى
                  </p>

                  <div className="nota-huruf-example">
                    <span>Contoh</span>

                    <p dir="rtl" lang="ar">
                      جَاءَ زَيْدٌ وَعُمَرٌو
                    </p>
                  </div>
                </div>
              </article>

              <article className="nota-huruf-card">
                <div className="nota-huruf-card-number">
                  3
                </div>

                <div className="nota-huruf-card-content">
                  <h2>Huruf Nidā’</h2>

                  <p>
                    Digunakan untuk menyeru atau
                    memanggil seseorang.
                  </p>

                  <p
                    className="nota-huruf-arabic-list"
                    dir="rtl"
                    lang="ar"
                  >
                    يَا، أَيَا، هَيَا، أَيْ
                  </p>

                  <div className="nota-huruf-example">
                    <span>Contoh</span>

                    <p dir="rtl" lang="ar">
                      يَا مُحَمَّدُ
                    </p>
                  </div>
                </div>
              </article>

              <article className="nota-huruf-card">
                <div className="nota-huruf-card-number">
                  4
                </div>

                <div className="nota-huruf-card-content">
                  <h2>Huruf Qasam</h2>

                  <p>
                    Digunakan untuk bersumpah bagi
                    menguatkan sesuatu pernyataan.
                  </p>

                  <p
                    className="nota-huruf-arabic-list"
                    dir="rtl"
                    lang="ar"
                  >
                    الْوَاوُ، الْبَاءُ، التَّاءُ
                  </p>

                  <div className="nota-huruf-example">
                    <span>Contoh</span>

                    <p dir="rtl" lang="ar">
                      وَاللّٰهِ لَأَجْتَهِدَنَّ
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>

          <footer className="nota-huruf-footer">
            <p>
              Selesai membaca nota ini untuk membuka
              Kampung Huruf.
            </p>

            <button
              type="button"
              className="nota-huruf-finish"
              onClick={selesaiNota}
            >
              ✓ Saya Faham, Teruskan
            </button>
          </footer>
        </section>
      </div>
    </main>
  );
}