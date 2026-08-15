import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/KotaIrab.css";
import kotaIrabMap from "../../assets/maps/kotairab.webp";

/* =====================================================
   BACA STATUS KOTA I‘RAB
===================================================== */

function bacaStatusKotaIrab() {
  return {
    /* -----------------------------------------------
       BAB I‘RAB
    ------------------------------------------------ */

    babIrabDone:
      localStorage.getItem("babIrabQuizDone") === "true",

    /* -----------------------------------------------
       PERPUSTAKAAN I‘RAB
       Dibuka selepas Bab I‘rab selesai.
    ------------------------------------------------ */

    perpustakaanDone:
      localStorage.getItem("perpustakaanIrabDone") === "true",

    /* -----------------------------------------------
       LATIHAN MAJZUMAT
       Ini ialah KUNCI untuk membuka LORONG LATIHAN.
    ------------------------------------------------ */

    latihanMajzumatDone:
      localStorage.getItem("latihanMajzumatDone") === "true",

    /* -----------------------------------------------
       LORONG LATIHAN
       Akan menjadi true selepas semua latihan
       dalam Lorong selesai.
    ------------------------------------------------ */

    lorongDone:
      localStorage.getItem("lorongIrabDone") === "true",

    /* -----------------------------------------------
       DATARAN I‘RAB
    ------------------------------------------------ */

    dataranDone:
      localStorage.getItem("dataranIrabDone") === "true",

    /* -----------------------------------------------
       DEWAN PENGIJAZAHAN
    ------------------------------------------------ */

    dewanDone:
      localStorage.getItem("dewanIrabDone") === "true",

    /* -----------------------------------------------
       ISTANA QADHI
    ------------------------------------------------ */

    istanaQadhiDone:
      localStorage.getItem("istanaQadhiDone") === "true",

    /* -----------------------------------------------
       ARTIFAK I‘RAB
    ------------------------------------------------ */

    artifactIrab:
      localStorage.getItem("artifact_irab") === "true",

    /* -----------------------------------------------
       KOTA MARFU‘AT
    ------------------------------------------------ */

    marfuatUnlocked:
      localStorage.getItem("marfuatUnlocked") === "true",
  };
}

/* =====================================================
   KOMPONEN
===================================================== */

export default function KotaIrab() {
  const navigate = useNavigate();

  const [status, setStatus] = useState(
    bacaStatusKotaIrab
  );

  const {
    babIrabDone,
    perpustakaanDone,
    latihanMajzumatDone,
    lorongDone,
    dataranDone,
    dewanDone,
    istanaQadhiDone,
    artifactIrab,
    marfuatUnlocked,
  } = status;

  /* =====================================================
     KOTA MARFU‘AT
  ===================================================== */

  const kotaMarfuatTerbuka =
    marfuatUnlocked ||
    istanaQadhiDone ||
    artifactIrab;

  /* =====================================================
     AUDIO LATAR
  ===================================================== */

  useEffect(() => {
    const bgMusic = new Audio(
      "/sounds/gerbangutama.mp3"
    );

    bgMusic.loop = true;
    bgMusic.volume = 0.2;

    bgMusic.play().catch(() => {
      console.log(
        "Audio menunggu interaksi pengguna."
      );
    });

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    };
  }, []);

  /* =====================================================
     KEMAS KINI STATUS
  ===================================================== */

  useEffect(() => {
    function kemasKiniStatus() {
      setStatus(bacaStatusKotaIrab());
    }

    kemasKiniStatus();

    window.addEventListener(
      "focus",
      kemasKiniStatus
    );

    window.addEventListener(
      "storage",
      kemasKiniStatus
    );

    window.addEventListener(
      "pageshow",
      kemasKiniStatus
    );

    return () => {
      window.removeEventListener(
        "focus",
        kemasKiniStatus
      );

      window.removeEventListener(
        "storage",
        kemasKiniStatus
      );

      window.removeEventListener(
        "pageshow",
        kemasKiniStatus
      );
    };
  }, []);

  /* =====================================================
     BUKA LOKASI
  ===================================================== */

  function bukaLokasi({
    unlocked,
    route,
    lockedMessage,
  }) {
    if (!unlocked) {
      alert(lockedMessage);
      return;
    }

    navigate(route);
  }

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <div className="kota-irab-wrap">
      <div className="map-frame">

        {/* =================================================
            PETA KOTA I‘RAB
        ================================================== */}

        <img
          src={kotaIrabMap}
          className="irab-map"
          alt="Peta Kota I‘rab"
          draggable="false"
        />

        {/* =================================================
            1 — MADRASAH I‘RAB
            Sentiasa boleh masuk.
        ================================================== */}

        <button
          type="button"
          className="irab-hotspot madrasah"
          onClick={() =>
            navigate("/bab-irab-dialog")
          }
          aria-label="Masuk ke Madrasah I‘rab"
          title="Madrasah I‘rab"
        />

        {/* =================================================
            KEMBALI KE PETA DUNIA
        ================================================== */}

        <button
          type="button"
          className="irab-hotspot kembali"
          onClick={() =>
            navigate("/worldmap")
          }
          aria-label="Kembali ke Peta Dunia"
          title="Kembali ke Peta Dunia"
        />

        {/* =================================================
            2 — PERPUSTAKAAN I‘RAB

            KUNCI:
            babIrabDone
        ================================================== */}

        <button
          type="button"
          className={[
            "irab-hotspot",
            "perpustakaan",
            babIrabDone
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked: babIrabDone,

              route:
                "/perpustakaan-irab",

              lockedMessage:
                "Selesaikan Madrasah Bab I‘rab dahulu.",
            })
          }
          aria-label="Masuk ke Perpustakaan I‘rab"
          title={
            babIrabDone
              ? "Perpustakaan I‘rab"
              : "Selesaikan Madrasah Bab I‘rab dahulu"
          }
        />

        {/* =================================================
            3 — LORONG LATIHAN

            KUNCI BAHARU:

            latihanMajzumatDone

            BUKAN lagi:
            perpustakaanDone
        ================================================== */}

        <button
          type="button"
          className={[
            "irab-hotspot",
            "lorong",
            latihanMajzumatDone
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked:
                latihanMajzumatDone,

              route:
                "/lorong-latihan-irab",

              lockedMessage:
                "Selesaikan dan lulus Latihan Majzumat 10/10 dahulu.",
            })
          }
          aria-label="Masuk ke Lorong Latihan"
          title={
            latihanMajzumatDone
              ? "Lorong Latihan"
              : "Selesaikan dan lulus Latihan Majzumat 10/10 dahulu"
          }
        />

        {/* =================================================
            4 — DATARAN I‘RAB

            KUNCI:
            lorongDone
        ================================================== */}

        <button
          type="button"
          className={[
            "irab-hotspot",
            "dataran",
            lorongDone
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked: lorongDone,

              route:
                "/dataran-irab",

              lockedMessage:
                "Selesaikan semua latihan dalam Lorong Latihan dahulu.",
            })
          }
          aria-label="Masuk ke Dataran I‘rab"
          title={
            lorongDone
              ? "Dataran I‘rab"
              : "Selesaikan Lorong Latihan dahulu"
          }
        />

        {/* =================================================
            5 — DEWAN PENGIJAZAHAN

            KUNCI:
            dataranDone
        ================================================== */}

        <button
          type="button"
          className={[
            "irab-hotspot",
            "dewan",
            dataranDone
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked: dataranDone,

              route:
                "/dewan-pengijazahan-irab",

              lockedMessage:
                "Selesaikan Dataran I‘rab dahulu.",
            })
          }
          aria-label="Masuk ke Dewan Pengijazahan"
          title={
            dataranDone
              ? "Dewan Pengijazahan"
              : "Selesaikan Dataran I‘rab dahulu"
          }
        />

        {/* =================================================
            6 — ISTANA QADHI

            KUNCI:
            dewanDone
        ================================================== */}

        <button
          type="button"
          className={[
            "irab-hotspot",
            "istana-qadi",
            dewanDone
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked: dewanDone,

              route:
                "/istana-qadhi-irab",

              lockedMessage:
                "Selesaikan Dewan Pengijazahan dahulu.",
            })
          }
          aria-label="Masuk ke Istana Qadhi"
          title={
            dewanDone
              ? "Istana Qadhi"
              : "Selesaikan Dewan Pengijazahan dahulu"
          }
        />

        {/* =================================================
            KOTA MARFU‘AT

            KUNCI:
            Istana Qadhi / Artifak I‘rab
        ================================================== */}

        <button
          type="button"
          className={[
            "irab-hotspot",
            "ke-kota-marfuat",
            kotaMarfuatTerbuka
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked:
                kotaMarfuatTerbuka,

              route:
                "/kota-marfuat",

              lockedMessage:
                "Selesaikan Istana Qadhi dan tuntut Artifak I‘rab terlebih dahulu.",
            })
          }
          aria-label="Teruskan ke Kota Marfu‘at"
          title={
            kotaMarfuatTerbuka
              ? "Teruskan ke Kota Marfu‘at"
              : "Selesaikan Istana Qadhi dahulu"
          }
        />

      </div>
    </div>
  );
}