import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/KotaIrab.css";

import kotaIrabMap from "../../assets/maps/kotairab.webp";

function bacaStatusKotaIrab() {
  return {
    babIrabDone:
      localStorage.getItem("babIrabQuizDone") === "true",

    perpustakaanDone:
      localStorage.getItem("perpustakaanIrabDone") === "true",

    lorongDone:
      localStorage.getItem("lorongIrabDone") === "true",

    dataranDone:
      localStorage.getItem("dataranIrabDone") === "true",

    dewanDone:
      localStorage.getItem("dewanIrabDone") === "true",
  };
}

export default function KotaIrab() {
  const navigate = useNavigate();

  const [status, setStatus] = useState(
    bacaStatusKotaIrab
  );

  const {
    babIrabDone,
    perpustakaanDone,
    lorongDone,
    dataranDone,
    dewanDone,
  } = status;

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

    return () => {
      window.removeEventListener(
        "focus",
        kemasKiniStatus
      );

      window.removeEventListener(
        "storage",
        kemasKiniStatus
      );
    };
  }, []);

  const bukaLokasi = ({
    unlocked,
    route,
    lockedMessage,
  }) => {
    if (!unlocked) {
      alert(lockedMessage);
      return;
    }

    navigate(route);
  };

  return (
    <div className="kota-irab-wrap">
      <div className="map-frame">
        <img
          src={kotaIrabMap}
          className="irab-map"
          alt="Peta Kota I'rab"
          draggable="false"
        />

        {/* 1 — MADRASAH I'RAB */}
        <button
          type="button"
          className="irab-hotspot madrasah"
          onClick={() =>
            navigate("/bab-irab-dialog")
          }
          aria-label="Masuk ke Madrasah I'rab"
          title="Madrasah I'rab"
        />

        {/* KEMBALI KE PETA DUNIA */}
        <button
          type="button"
          className="irab-hotspot kembali"
          onClick={() => navigate("/worldmap")}
          aria-label="Kembali ke Peta Dunia"
          title="Kembali"
        />

        {/* 2 — PERPUSTAKAAN I'RAB */}
        <button
          type="button"
          className={`irab-hotspot perpustakaan ${
            babIrabDone
              ? "unlocked"
              : "disabled"
          }`}
          onClick={() =>
            bukaLokasi({
              unlocked: babIrabDone,
              route: "/perpustakaan-irab",
              lockedMessage:
                "Selesaikan Madrasah Bab I'rab dahulu.",
            })
          }
          aria-label="Masuk ke Perpustakaan I'rab"
          title={
            babIrabDone
              ? "Perpustakaan I'rab"
              : "Selesaikan Madrasah Bab I'rab dahulu"
          }
        />

        {/* 3 — LORONG LATIHAN */}
        <button
          type="button"
          className={`irab-hotspot lorong ${
            perpustakaanDone
              ? "unlocked"
              : "disabled"
          }`}
          onClick={() =>
            bukaLokasi({
              unlocked: perpustakaanDone,
              route: "/lorong-latihan-irab",
              lockedMessage:
                "Selesaikan Perpustakaan I'rab dahulu.",
            })
          }
          aria-label="Masuk ke Lorong Latihan"
          title={
            perpustakaanDone
              ? "Lorong Latihan"
              : "Selesaikan Perpustakaan I'rab dahulu"
          }
        />

        {/* 4 — DATARAN I'RAB */}
        <button
          type="button"
          className={`irab-hotspot dataran ${
            lorongDone
              ? "unlocked"
              : "disabled"
          }`}
          onClick={() =>
            bukaLokasi({
              unlocked: lorongDone,
              route: "/dataran-irab",
              lockedMessage:
                "Selesaikan Lorong Latihan dahulu.",
            })
          }
          aria-label="Masuk ke Dataran I'rab"
          title={
            lorongDone
              ? "Dataran I'rab"
              : "Selesaikan Lorong Latihan dahulu"
          }
        />

        {/* 5 — DEWAN PENGIJAZAHAN */}
        <button
          type="button"
          className={`irab-hotspot dewan ${
            dataranDone
              ? "unlocked"
              : "disabled"
          }`}
          onClick={() =>
            bukaLokasi({
              unlocked: dataranDone,
              route:
                "/dewan-pengijazahan-irab",
              lockedMessage:
                "Selesaikan Dataran I'rab dahulu.",
            })
          }
          aria-label="Masuk ke Dewan Pengijazahan"
          title={
            dataranDone
              ? "Dewan Pengijazahan"
              : "Selesaikan Dataran I'rab dahulu"
          }
        />

        {/* 6 — ISTANA QADHI */}
        <button
          type="button"
          className={`irab-hotspot istana-qadi ${
            dewanDone
              ? "unlocked"
              : "disabled"
          }`}
          onClick={() =>
            bukaLokasi({
              unlocked: dewanDone,
              route: "/istana-qadhi-irab",
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
      </div>
    </div>
  );
}