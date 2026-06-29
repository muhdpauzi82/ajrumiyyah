import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
const navigate = useNavigate();

  return (
    <div className="home">
      <header className="header">
        <div className="logo">AJRUMIYYAH</div>

        <div className="resource-box">
          <span>🪙 12,450</span>
          <span>💎 245</span>
          <span>⚙️</span>
        </div>
      </header>

      <main className="hero-content">
        <p>SELAMAT DATANG DI DUNIA</p>
        <h1>AJRUMIYYAH</h1>
        <p>JELAJAHI DUNIA, KUASAI NAHU</p>

        <button
  className="continue-btn"
  onClick={() => navigate("/worldmap")}
>
          ⚔️ TERUSKAN PENGEMBARAAN
        </button>
      </main>

      <section className="menu-grid">
        <div
  className="menu-card blue"  onClick={() => navigate("/worldmap")}
>  🗺️
  <h3>Peta Dunia</h3>
</div>
 <div
  className="menu-card green"  onClick={() => navigate("/kitab")}
>
  📖
  <h3>Kitab</h3>
</div>
 <div
  className="menu-card gold"  onClick={() => navigate("/inventory")}
>
  🎒
  <h3>Inventori</h3>
</div>
 <div
  className="menu-card purple"  onClick={() => navigate("/achievement")}
>
  🏆
  <h3>Pencapaian</h3>
</div>
 <div
  className="menu-card cyan"  onClick={() => navigate("/collection")}
>
  📚
  <h3>Koleksi</h3>
</div>
 <div
  className="menu-card red"  onClick={() => navigate("/boss")}
>
  ⚔️
  <h3>Arena Boss</h3>
</div>
 </section>
 </div>
  );
}