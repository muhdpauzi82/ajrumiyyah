import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";
import Fail from "./Kitab/Fail";
import kotaMarfuatMap from
  "../../assets/maps/kotamarfuat.webp";

import "./styles/KotaMarfuat.css";

/* =====================================================
   STATUS PERJALANAN KOTA MARFU‘AT
===================================================== */

function bacaStatusKotaMarfuat() {
  return {
    madrasahDone:
      localStorage.getItem(
        "madrasahMarfuatDone"
      ) === "true",

    perpustakaanDone:
      localStorage.getItem(
        "perpustakaanMarfuatDone"
      ) === "true",

    lorongDone:
      localStorage.getItem(
        "lorongMarfuatDone"
      ) === "true",

    dataranDone:
      localStorage.getItem(
        "dataranMarfuatDone"
      ) === "true",

    dewanDone:
      localStorage.getItem(
        "dewanMarfuatDone"
      ) === "true",

    istanaDone:
      localStorage.getItem(
        "istanaMarfuatDone"
      ) === "true",

    mansubatUnlocked:
      localStorage.getItem(
        "mansubatUnlocked"
      ) === "true",
  };
}

/* =====================================================
   KOMPONEN UTAMA
===================================================== */

export default function KotaMarfuat() {
  const navigate = useNavigate();

  const [status, setStatus] = useState(
    bacaStatusKotaMarfuat
  );

  const {
    madrasahDone,
    perpustakaanDone,
    lorongDone,
    dataranDone,
    dewanDone,
    istanaDone,
    mansubatUnlocked,
  } = status;

  /*
   * Kota Mansubat dibuka selepas
   * Istana Marfu‘at diselesaikan.
   */

  const kotaMansubatTerbuka =
    mansubatUnlocked || istanaDone;

  /* =====================================================
     KEMAS KINI STATUS
  ===================================================== */

  const kemasKiniStatus = useCallback(() => {
    setStatus(
      bacaStatusKotaMarfuat()
    );
  }, []);

  useEffect(() => {
    kemasKiniStatus();

    window.addEventListener(
      "focus",
      kemasKiniStatus
    );

    window.addEventListener(
      "pageshow",
      kemasKiniStatus
    );

    window.addEventListener(
      "storage",
      kemasKiniStatus
    );

    return () => {
      window.removeEventListener(
        "focus",
        kemasKiniStatus
      );

      window.removeEventListener(
        "pageshow",
        kemasKiniStatus
      );

      window.removeEventListener(
        "storage",
        kemasKiniStatus
      );
    };
  }, [kemasKiniStatus]);

  /* =====================================================
     AUDIO LATAR
  ===================================================== */

  useEffect(() => {
    const bgMusic = new Audio(
      "/sounds/gerbangutama.mp3"
    );

    bgMusic.loop = true;
    bgMusic.volume = 0.2;

    const mulaAudio = () => {
      bgMusic.play().catch(() => {
        console.log(
          "Audio menunggu interaksi pengguna."
        );
      });
    };

    mulaAudio();

    window.addEventListener(
      "pointerdown",
      mulaAudio,
      {
        once: true,
      }
    );

    return () => {
      window.removeEventListener(
        "pointerdown",
        mulaAudio
      );

      bgMusic.pause();
      bgMusic.currentTime = 0;
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

  return (
    <main className="kota-marfuat-page">
      <section className="kota-marfuat-frame">

        {/* =============================================
            BACKGROUND PETA
        ============================================== */}

        <img
          src={kotaMarfuatMap}
          className="kota-marfuat-map"
          alt="Peta Kota Marfu‘at"
          draggable="false"
        />

        {/* =============================================
            1 — MADRASAH MARFU‘AT
        ============================================== */}

        <button
  type="button"
  className={[
    "marfuat-hotspot",
    "marfuat-madrasah",
    "unlocked",
  ].join(" ")}
  onClick={() =>
    navigate("/marfuat-intro")
  }
  aria-label="Masuk ke Madrasah Marfu‘at"
  title="Madrasah Marfu‘at"
/>

        {/* =============================================
            2 — PERPUSTAKAAN MARFU‘AT
        ============================================== */}

        <button
          type="button"
          className={[
            "marfuat-hotspot",
            "marfuat-perpustakaan",
            madrasahDone
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked: madrasahDone,

              route:
                "/perpustakaan-marfuat",

              lockedMessage:
                "Selesaikan Madrasah Marfu‘at dahulu.",
            })
          }
          aria-label="Masuk ke Perpustakaan Marfu‘at"
          title={
            madrasahDone
              ? "Perpustakaan Marfu‘at"
              : "Selesaikan Madrasah Marfu‘at dahulu"
          }
        />

        {/* =============================================
            3 — LORONG LATIHAN
        ============================================== */}

        <button
          type="button"
          className={[
            "marfuat-hotspot",
            "marfuat-lorong",
            perpustakaanDone
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked:
                perpustakaanDone,

              route:
                "/lorong-latihan-marfuat",

              lockedMessage:
                "Selesaikan Perpustakaan Marfu‘at dahulu.",
            })
          }
          aria-label="Masuk ke Lorong Latihan Marfu‘at"
          title={
            perpustakaanDone
              ? "Lorong Latihan Marfu‘at"
              : "Selesaikan Perpustakaan Marfu‘at dahulu"
          }
        />

        {/* =============================================
            4 — DATARAN MARFU‘AT
        ============================================== */}

        <button
          type="button"
          className={[
            "marfuat-hotspot",
            "marfuat-dataran",
            lorongDone
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked: lorongDone,

              route:
                "/dataran-marfuat",

              lockedMessage:
                "Selesaikan Lorong Latihan Marfu‘at dahulu.",
            })
          }
          aria-label="Masuk ke Dataran Marfu‘at"
          title={
            lorongDone
              ? "Dataran Marfu‘at"
              : "Selesaikan Lorong Latihan Marfu‘at dahulu"
          }
        />

        {/* =============================================
            5 — DEWAN PENGIJAZAHAN
        ============================================== */}

        <button
          type="button"
          className={[
            "marfuat-hotspot",
            "marfuat-dewan",
            dataranDone
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked: dataranDone,

              route:
                "/dewan-pengijazahan-marfuat",

              lockedMessage:
                "Selesaikan Dataran Marfu‘at dahulu.",
            })
          }
          aria-label="Masuk ke Dewan Pengijazahan Marfu‘at"
          title={
            dataranDone
              ? "Dewan Pengijazahan Marfu‘at"
              : "Selesaikan Dataran Marfu‘at dahulu"
          }
        />

        {/* =============================================
            6 — ISTANA MARFU‘AT
        ============================================== */}

        <button
          type="button"
          className={[
            "marfuat-hotspot",
            "marfuat-istana",
            dewanDone
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked: dewanDone,

              route:
                "/istana-marfuat",

              lockedMessage:
                "Selesaikan Dewan Pengijazahan Marfu‘at dahulu.",
            })
          }
          aria-label="Masuk ke Istana Marfu‘at"
          title={
            dewanDone
              ? "Istana Marfu‘at"
              : "Selesaikan Dewan Pengijazahan Marfu‘at dahulu"
          }
        />

        {/* =============================================
            KEMBALI KE PETA DUNIA
        ============================================== */}

        <button
          type="button"
          className={[
            "marfuat-hotspot",
            "marfuat-kembali",
            "unlocked",
          ].join(" ")}
          onClick={() =>
            navigate("/worldmap")
          }
          aria-label="Kembali ke Peta Dunia"
          title="Kembali ke Peta Dunia"
        />

        {/* =============================================
            SETERUSNYA KE KOTA MANSUBAT
        ============================================== */}

        <button
          type="button"
          className={[
            "marfuat-hotspot",
            "marfuat-ke-mansubat",
            kotaMansubatTerbuka
              ? "unlocked"
              : "disabled",
          ].join(" ")}
          onClick={() =>
            bukaLokasi({
              unlocked:
                kotaMansubatTerbuka,

              route:
                "/kota-mansubat",

              lockedMessage:
                "Selesaikan Istana Marfu‘at dengan jawapan 100% terlebih dahulu.",
            })
          }
          aria-label="Teruskan ke Kota Mansubat"
          title={
            kotaMansubatTerbuka
              ? "Teruskan ke Kota Mansubat"
              : "Selesaikan Istana Marfu‘at dahulu"
          }
        />

      </section>
    </main>
  );
}