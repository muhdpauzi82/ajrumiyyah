import { useNavigate } from "react-router-dom";
import "./NotaIsim.css";

export default function NotaIsim() {
  const navigate = useNavigate();

  function selesaiBelajar() {
    localStorage.setItem("notaIsimDone", "true");
    navigate("/jejak-isim");
  }

  return (
    <main className="matan-screen">
      <div className="matan-frame">
        <button
          type="button"
          className="matan-back"
          onClick={() => navigate("/jejak-isim")}
        >
          ← Kembali
        </button>

        <section className="matan-card">
          <header className="matan-header">
            <span aria-hidden="true">📜</span>
            <h1>Lembah Matan Isim</h1>
          </header>

          <div className="matan-content">
            <section className="matan-left">
              <h2>Matan</h2>

              <div
                className="matan-arabic"
                dir="rtl"
                lang="ar"
              >
                <p>فَالِاسْمُ يُعْرَفُ بِالْخَفْضِ</p>
                <p>وَالتَّنْوِينِ</p>
                <p>وَدُخُولِ الْأَلِفِ وَاللَّامِ</p>
                <p>وَحُرُوفِ الْخَفْضِ</p>
              </div>
            </section>

            <section className="matan-right">
              <div className="info-box">
                <h2>📖 Maksud Ringkas</h2>

                <p>
                  Isim dikenali melalui tanda khafadh,
                  tanwin, kemasukan alif dan lam, serta
                  huruf-huruf khafadh.
                </p>
              </div>

              <div className="info-box">
                <h2>🔎 Tanda Isim</h2>

                <div className="sign-grid">
                  <span>Khafadh</span>
                  <span>Tanwin</span>
                  <span>Alif dan Lam</span>
                  <span>Huruf Khafadh</span>
                </div>
              </div>
            </section>
          </div>

          <footer className="matan-footer">
            <button
              type="button"
              onClick={selesaiBelajar}
            >
              SELESAI BELAJAR
            </button>
          </footer>
        </section>
      </div>
    </main>
  );
}