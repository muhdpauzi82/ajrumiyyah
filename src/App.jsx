import { BrowserRouter, Routes, Route } from "react-router-dom";

/* =========================
   HALAMAN UTAMA
========================= */

import Home from "./pages/home/Home";
import WorldMap from "./pages/WorldMap";
import Settings from "./pages/home/menu/setting/Settings";

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

/* =========================
   JEJAK FI'IL
========================= */

import JejakFiil from "./pages/gerbangKalam/jejakFiil/JejakFiil";
import NotaFiil from "./pages/gerbangKalam/jejakFiil/NotaFiil";
import FiilAsas from "./pages/gerbangKalam/jejakFiil/FiilAsas";
import AkademiFiil from "./pages/gerbangKalam/jejakFiil/AkademiFiil";
import MenaraFiil from "./pages/gerbangKalam/jejakFiil/MenaraFiil";
import SarjanaFiil from "./pages/gerbangKalam/jejakFiil/SarjanaFiil";

/* =========================
   JEJAK HURUF
========================= */

import JejakHuruf from "./pages/gerbangKalam/jejakHuruf/JejakHuruf";
import NotaHuruf from "./pages/gerbangKalam/jejakHuruf/NotaHuruf";
import HurufAsas from "./pages/gerbangKalam/jejakHuruf/HurufAsas";
import HurufAkademi from "./pages/gerbangKalam/jejakHuruf/HurufAkademi";
import MenaraHuruf from "./pages/gerbangKalam/jejakHuruf/MenaraHuruf";
import SarjanaHuruf from "./pages/gerbangKalam/jejakHuruf/SarjanaHuruf";

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
import PerpustakaanIrab from "./pages/kotaIrab/PerpustakaanIrab/PerpustakaanIrab";
import LorongLatihan from "./pages/kotaIrab/LorongLatihan/LorongLatihan";
import DataranIrab from "./pages/kotaIrab/DataranIrab/DataranIrab";
import DewanPengijazahan from "./pages/kotaIrab/DewanPengijazahan/DewanPengijazahan";
import IstanaQadhi from "./pages/kotaIrab/IstanaQadhi/IstanaQadhi";

import KitabMarfuat from "./pages/kotaIrab/PerpustakaanIrab/KitabMarfuat/KitabMarfuat";
import KitabMansubat from "./pages/kotaIrab/PerpustakaanIrab/KitabMansubat/KitabMansubat";
import KitabMajrurat from "./pages/kotaIrab/PerpustakaanIrab/KitabMajrurat/KitabMajrurat";
import KitabMajzum from "./pages/kotaIrab/PerpustakaanIrab/KitabMajzumat/KitabMajzumat";
import LatihanMarfuat from  "./pages/kotaIrab/PerpustakaanIrab/Latihan/LatihanMarfuat/LatihanMarfuat";
import LatihanMansubat from  "./pages/kotaIrab/PerpustakaanIrab/Latihan/LatihanMansubat/LatihanMansubat";
import LatihanMajrurat from "./pages/kotaIrab/PerpustakaanIrab/Latihan/LatihanMajrurat/LatihanMajrurat";
import LatihanMajzumat from "./pages/kotaIrab/PerpustakaanIrab/Latihan/LatihanMajzumat/LatihanMajzumat";


import LatihanKeadaan from  "./pages/kotaIrab/LorongLatihan/LatihanKeadaan/LatihanKeadaan";
import LatihanTanda from  "./pages/kotaIrab/LorongLatihan/LatihanTanda/LatihanTanda";
import LatihanAyat from"./pages/kotaIrab/LorongLatihan/LatihanAyat/LatihanAyat";
import LatihanCampuran from  "./pages/kotaIrab/LorongLatihan/LatihanCampuran/LatihanCampuran";


/* =====================================================
   KOTA MARFU'AT
===================================================== */

import KotaMarfuat from "./pages/kotaMarfuat/KotaMarfuat";

/* MADRASAH */
import MarfuatIntro from "./pages/kotaMarfuat/Madrasah/MarfuatIntro";
import MarfuatMatan from "./pages/kotaMarfuat/Madrasah/MarfuatMatan";
import MarfuatLearning from "./pages/kotaMarfuat/Madrasah/MarfuatLearning";

/* PERPUSTAKAAN */
import PerpustakaanMarfuat from "./pages/kotaMarfuat/Perpustakaan/PerpustakaanMarfuat";
import KitabFail from "./pages/kotaMarfuat/Perpustakaan/KitabFail";
import KitabNaibFail from "./pages/kotaMarfuat/Perpustakaan/KitabNaibFail";
import KitabMubtada from "./pages/kotaMarfuat/Perpustakaan/KitabMubtada";
import KitabKhabar from "./pages/kotaMarfuat/Perpustakaan/KitabKhabar";
import KitabIsimKana from "./pages/kotaMarfuat/Perpustakaan/KitabIsimKana";
import KitabKhabarInna from "./pages/kotaMarfuat/Perpustakaan/KitabKhabarInna";

/* LORONG LATIHAN */
import LorongLatihanMarfuat from "./pages/kotaMarfuat/LorongLatihan/LorongLatihanMarfuat";
import LorongLatihanMarfuatResult from "./pages/kotaMarfuat/LorongLatihan/LorongLatihanMarfuatResult";

/* DATARAN */
import DataranMarfuat from "./pages/kotaMarfuat/Dataran/DataranMarfuat";

/* DEWAN */
import DewanPengijazahanMarfuat from "./pages/kotaMarfuat/Dewan/DewanPengijazahanMarfuat";

/* ISTANA */
import IstanaMarfuat from "./pages/kotaMarfuat/Istana/IstanaMarfuat";

/* CHAPTER COMPLETE */
import ChapterCompleteMarfuat from "./pages/kotaMarfuat/ChapterComplete/ChapterCompleteMarfuat";






/* =========================
   HALAMAN SAMPINGAN
========================= */

import Inventory from "./pages/Inventory";


/* =========================
   GAME
========================= */

import GateChallenge from "./game/GateChallenge";
import GuardianArena from "./features/guardianArena/GuardianArena.jsx";
import ChapterComplete from "./features/chapterComplete/ChapterComplete";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Home />} />
        <Route path="/worldmap" element={<WorldMap />} />
        <Route  path="/settings"  element={<Settings />}/>

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
       

        {/* Jejak Fi'il */}
        <Route path="/jejak-fiil" element={<JejakFiil />} />
        <Route path="/nota-fiil" element={<NotaFiil />} />
        <Route path="/fiil-asas" element={<FiilAsas />} />
        <Route path="/fiil-akademi" element={<AkademiFiil />} />
        <Route path="/menara-fiil" element={<MenaraFiil />} />
        <Route path="/sarjana-fiil" element={<SarjanaFiil />} />
       

        {/* Jejak Huruf */}
        <Route path="/jejak-huruf" element={<JejakHuruf />} />
        <Route path="/nota-huruf" element={<NotaHuruf />} />
        <Route path="/huruf-asas" element={<HurufAsas />} />
        <Route path="/huruf-akademi" element={<HurufAkademi />} />
        <Route path="/menara-huruf" element={<MenaraHuruf />} />
        <Route path="/sarjana-huruf" element={<SarjanaHuruf />} />
       
        {/* Kota I'rab */}
<Route path="/kota-irab" element={<KotaIrab />} />
<Route path="/bab-irab-intro" element={<BabIrabIntro />} />
<Route path="/bab-irab-matan" element={<BabIrabMatan />} />
<Route path="/bab-irab-dialog" element={<BabIrabDialog />} />
<Route path="/bab-irab-learning" element={<BabIrabLearning />} />
<Route path="/bab-irab-animasi" element={<BabIrabAnimasi />} />
<Route  path="/bab-irab-latihan"  element={<BabIrabExercise />}/>
<Route  path="/bab-irab-selesai"  element={<BabIrabSelesai />}/>
<Route  path="/perpustakaan-irab"  element={<PerpustakaanIrab />}/>
<Route  path="/lorong-latihan-irab"  element={<LorongLatihan />}/>
<Route  path="/dataran-irab"  element={<DataranIrab />}/>
<Route  path="/dewan-pengijazahan-irab"  element={<DewanPengijazahan />}/>
<Route  path="/istana-qadhi-irab"  element={<IstanaQadhi />}/>




<Route  path="/kitab-marfuat"  element={<KitabMarfuat />}/>
<Route  path="/kitab-mansubat"  element={<KitabMansubat />}/>
<Route  path="/kitab-majrurat"  element={<KitabMajrurat />}/>
<Route  path="/kitab-majzum"  element={<KitabMajzum />}/>

<Route  path="/latihan-marfuat"  element={<LatihanMarfuat />}/>
<Route  path="/latihan-mansubat"  element={<LatihanMansubat />}/>
<Route  path="/latihan-majrurat"  element={<LatihanMajrurat />}/>
<Route  path="/latihan-majzumat"  element={<LatihanMajzumat />}/>


<Route  path="/latihan-irab-keadaan"  element={<LatihanKeadaan />}/>
<Route  path="/latihan-irab-tanda"  element={<LatihanTanda />}/>
<Route  path="/latihan-irab-ayat"  element={<LatihanAyat />}/>
<Route  path="/latihan-irab-campuran"  element={<LatihanCampuran />}/>
<Route  path="/dewan-pengijazahan-irab"  element={<DewanPengijazahan />}/>


{/* =====================================================
    KOTA MARFU'AT
===================================================== */}
<Route  path="/kota-marfuat"  element={<KotaMarfuat />}/>

{/* MADRASAH */}

<Route  path="/marfuat-intro"  element={<MarfuatIntro />}/>
<Route  path="/marfuat-matan"  element={<MarfuatMatan />}/>
<Route  path="/marfuat-learning"  element={<MarfuatLearning />}/>

{/* PERPUSTAKAAN */}

<Route  path="/perpustakaan-marfuat"  element={<PerpustakaanMarfuat />}/>
<Route  path="/kitab-fail" element={<KitabFail />}/>
<Route  path="/kitab-naib-fail"  element={<KitabNaibFail />}/>
<Route  path="/kitab-mubtada"  element={<KitabMubtada />}/>
<Route  path="/kitab-khabar"  element={<KitabKhabar />}/>
<Route  path="/kitab-isim-kana"  element={<KitabIsimKana />}/>
<Route  path="/kitab-khabar-inna"  element={<KitabKhabarInna />}/>

{/* LORONG LATIHAN */}

<Route  path="/lorong-latihan-marfuat"  element={<LorongLatihanMarfuat />}/>
<Route  path="/lorong-latihan-marfuat-result"  element={<LorongLatihanMarfuatResult />}/>

{/* DATARAN */}

<Route  path="/dataran-marfuat"  element={<DataranMarfuat />}/>

{/* DEWAN */}

<Route  path="/dewan-pengijazahan-marfuat"  element={<DewanPengijazahanMarfuat />}/>

{/* ISTANA */}

<Route  path="/istana-marfuat"  element={<IstanaMarfuat />}/>

{/* CHAPTER COMPLETE */}

<Route  path="/chapter-complete-marfuat"  element={<ChapterCompleteMarfuat />}/>



        {/* Halaman sampingan */}
        <Route path="/inventory" element={<Inventory />} />
   

        {/* Ujian game */}
        <Route path="/test-gate" element={<GateChallenge gameType="isim" />} />
        <Route path="/guardian-arena" element={<GuardianArena />} />
        <Route  path="/chapter-complete" element={  <ChapterComplete   correctCount={40}
         totalQuestions={40} /> }/>
     

        
        {/* Route tidak dijumpai */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}