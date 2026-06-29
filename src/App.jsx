import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorldMap from "./pages/WorldMap";
import GerbangKalam from "./pages/GerbangKalam";
import LembahKalam from "./pages/LembahKalam";
import JejakIsim from "./pages/JejakIsim";
import NotaIsim from "./pages/NotaIsim";
import IsimAsas from "./pages/IsimAsas";
import AkademiIsim from "./pages/AkademiIsim";
import MenaraIsim from "./pages/MenaraIsim";
import SarjanaIsim from "./pages/SarjanaIsim";
import AnugerahIsim from "./pages/AnugerahIsim";
import JejakFiil from "./pages/jejakfiil";
import NotaFiil from "./pages/NotaFiil";
import FiilAsas from "./pages/FiilAsas";
import AkademiFiil from "./pages/AkademiFiil";
import MenaraFiil from "./pages/MenaraFiil";
import SarjanaFiil from "./pages/SarjanaFiil";
import AnugerahFiil from "./pages/anugerahfiil";
import JejakHuruf from "./pages/JejakHuruf";
import NotaHuruf from "./pages/NotaHuruf";
import HurufAsas from "./pages/HurufAsas";
import HurufAkademi from "./pages/HurufAkademi";
import MenaraHuruf from "./pages/MenaraHuruf";
import SarjanaHuruf from "./pages/SarjanaHuruf";
import AnugerahHuruf from "./pages/AnugerahHuruf";
import PenjagaKalam from "./pages/PenjagaKalam";
import KotaIrab from "./pages/kotaIrab/KotaIrab";
import BabIrabIntro from "./pages/kotaIrab/BabIrabIntro";
import BabIrabMatan from "./pages/kotaIrab/BabIrabMatan";
import Inventory from "./pages/Inventory";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worldmap" element={<WorldMap />} />
        <Route path="/gerbang-kalam" element={<GerbangKalam />} />
        <Route path="/lembah-kalam" element={<LembahKalam />} />
        <Route path="/jejak-isim" element={<JejakIsim />} />
        <Route path="/nota-isim" element={<NotaIsim />} />
        <Route path="/isim-asas" element={<IsimAsas />} />
        <Route path="/isim-pertengahan" element={<AkademiIsim />} />
        <Route path="/menara-isim" element={<MenaraIsim />} />
        <Route path="/sarjana-isim" element={<SarjanaIsim />} />
        <Route path="/anugerah-isim" element={<AnugerahIsim />} />
        <Route path="/jejak-isim" element={<JejakFiil />} />
        <Route path="/jejak-fiil" element={<JejakFiil />} />
        <Route path="/anugerah-fiil" element={<AnugerahFiil />}/>     
        <Route path="/sarjana-fiil" element={<SarjanaFiil />} />
        <Route path="/menara-fiil" element={<MenaraFiil />} />
        <Route path="/fiil-akademi" element={<AkademiFiil />} />
        <Route path="/fiil-asas" element={<FiilAsas />} />
        <Route path="/nota-fiil" element={<NotaFiil />} />
        <Route path="/jejak-huruf" element={<JejakHuruf />} />
        <Route path="/nota-huruf" element={<NotaHuruf />} />
        <Route path="/huruf-asas" element={<HurufAsas />} />
        <Route path="/huruf-akademi" element={<HurufAkademi />} />
        <Route path="/menara-huruf"  element={<MenaraHuruf />}/>
        <Route path="/sarjana-huruf"element={<SarjanaHuruf />}/>
        <Route path="/anugerah-huruf" element={<AnugerahHuruf />}/>
        <Route path="/penjaga-kalam" element={<PenjagaKalam />} />
        <Route path="/kota-irab" element={<KotaIrab />} />
        <Route path="/bab-irab-intro" element={<BabIrabIntro />} />
        <Route path="/bab-irab-matan" element={<BabIrabMatan />} />

        
        </Routes>

    </BrowserRouter>
  );
}