import { BrowserRouter, Routes, Route } from "react-router-dom";

/* =========================
   HALAMAN UTAMA
========================= */

import Home from "./pages/home/Home";
import WorldMap from "./pages/WorldMap";

/* =========================
   GERBANG KALAM
========================= */

import GerbangKalam from "./pages/gerbangKalam/GerbangKalam";

import LembahKalam from "./pages/gerbangKalam/lembahKalam/LembahKalam";

import PenjagaKalam from "./pages/gerbangKalam/penjagaKalam/PenjagaKalam";

/* =========================
   JEJAK ISIM
========================= */

import JejakIsim from "./pages/gerbangKalam/jejakIsim/JejakIsim";
import NotaIsim from "./pages/gerbangKalam/jejakIsim/NotaIsim";
import IsimAsas from "./pages/gerbangKalam/jejakIsim/IsimAsas";
import AkademiIsim from "./pages/gerbangKalam/jejakIsim/AkademiIsim";
import MenaraIsim from "./pages/gerbangKalam/jejakIsim/MenaraIsim";
import SarjanaIsim from "./pages/gerbangKalam/jejakIsim/SarjanaIsim";
import AnugerahIsim from "./pages/gerbangKalam/jejakIsim/AnugerahIsim";

/* =========================
   JEJAK FI'IL
========================= */

import JejakFiil from "./pages/gerbangKalam/jejakFiil/JejakFiil";
import NotaFiil from "./pages/gerbangKalam/jejakFiil/NotaFiil";
import FiilAsas from "./pages/gerbangKalam/jejakFiil/FiilAsas";
import AkademiFiil from "./pages/gerbangKalam/jejakFiil/AkademiFiil";
import MenaraFiil from "./pages/gerbangKalam/jejakFiil/MenaraFiil";
import SarjanaFiil from "./pages/gerbangKalam/jejakFiil/SarjanaFiil";
import AnugerahFiil from "./pages/gerbangKalam/jejakFiil/AnugerahFiil";

/* =========================
   JEJAK HURUF
========================= */

import JejakHuruf from "./pages/gerbangKalam/jejakHuruf/JejakHuruf";
import NotaHuruf from "./pages/gerbangKalam/jejakHuruf/NotaHuruf";
import HurufAsas from "./pages/gerbangKalam/jejakHuruf/HurufAsas";
import HurufAkademi from "./pages/gerbangKalam/jejakHuruf/HurufAkademi";
import MenaraHuruf from "./pages/gerbangKalam/jejakHuruf/MenaraHuruf";
import SarjanaHuruf from "./pages/gerbangKalam/jejakHuruf/SarjanaHuruf";
import AnugerahHuruf from "./pages/gerbangKalam/jejakHuruf/AnugerahHuruf";

/* =========================
   KOTA I'RAB
========================= */

import KotaIrab from "./pages/kotaIrab/KotaIrab";
import BabIrabIntro from "./pages/kotaIrab/BabIrabIntro";
import BabIrabMatan from "./pages/kotaIrab/BabIrabMatan";
import BabIrabDialog from "./pages/kotaIrab/BabIrabDialog";
import BabIrabAnimasi from "./pages/kotaIrab/BabIrabAnimasi";
import BabIrabLearning from "./pages/kotaIrab/BabIrabLearning";
import BabIrabExercise from "./pages/kotaIrab/BabIrabExercise";
import BabIrabSelesai from "./pages/kotaIrab/BabIrabSelesai";

/* =========================
   HALAMAN SAMPINGAN
========================= */

import Inventory from "./pages/Inventory";
import DeveloperSandbox from "./pages/DeveloperSandbox";

/* =========================
   GAME
========================= */

import GateChallenge from "./game/GateChallenge";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Home />} />
        <Route path="/worldmap" element={<WorldMap />} />

        {/* Gerbang Kalam */}
        <Route path="/gerbang-kalam" element={<GerbangKalam />} />
        <Route path="/lembah-kalam" element={<LembahKalam />} />
        <Route path="/penjaga-kalam" element={<PenjagaKalam />} />

        {/* Jejak Isim */}
        <Route path="/jejak-isim" element={<JejakIsim />} />
        <Route path="/nota-isim" element={<NotaIsim />} />
        <Route path="/isim-asas" element={<IsimAsas />} />
        <Route path="/isim-pertengahan" element={<AkademiIsim />} />
        <Route path="/menara-isim" element={<MenaraIsim />} />
        <Route path="/sarjana-isim" element={<SarjanaIsim />} />
        <Route path="/anugerah-isim" element={<AnugerahIsim />} />

        {/* Jejak Fi'il */}
        <Route path="/jejak-fiil" element={<JejakFiil />} />
        <Route path="/nota-fiil" element={<NotaFiil />} />
        <Route path="/fiil-asas" element={<FiilAsas />} />
        <Route path="/fiil-akademi" element={<AkademiFiil />} />
        <Route path="/menara-fiil" element={<MenaraFiil />} />
        <Route path="/sarjana-fiil" element={<SarjanaFiil />} />
        <Route path="/anugerah-fiil" element={<AnugerahFiil />} />

        {/* Jejak Huruf */}
        <Route path="/jejak-huruf" element={<JejakHuruf />} />
        <Route path="/nota-huruf" element={<NotaHuruf />} />
        <Route path="/huruf-asas" element={<HurufAsas />} />
        <Route path="/huruf-akademi" element={<HurufAkademi />} />
        <Route path="/menara-huruf" element={<MenaraHuruf />} />
        <Route path="/sarjana-huruf" element={<SarjanaHuruf />} />
        <Route path="/anugerah-huruf" element={<AnugerahHuruf />} />

        {/* Kota I'rab */}
        <Route path="/kota-irab" element={<KotaIrab />} />
        <Route path="/bab-irab-intro" element={<BabIrabIntro />} />
        <Route path="/bab-irab-matan" element={<BabIrabMatan />} />
        <Route path="/bab-irab-dialog" element={<BabIrabDialog />} />
        <Route path="/bab-irab-animasi" element={<BabIrabAnimasi />} />
        <Route path="/bab-irab-learning" element={<BabIrabLearning />} />
        <Route path="/bab-irab-exercise" element={<BabIrabExercise />} />
        <Route path="/bab-irab-selesai" element={<BabIrabSelesai />} />

        {/* Halaman sampingan */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sandbox" element={<DeveloperSandbox />} />

        {/* Ujian game */}
        <Route
          path="/test-gate"
          element={<GateChallenge gameType="isim" />}
        />

        {/* Route tidak dijumpai */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}