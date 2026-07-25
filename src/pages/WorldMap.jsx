import "../styles/WorldMap.css";
import { useNavigate } from "react-router-dom";
import worldMap from "../assets/maps/worldmap.webp";
import homeIcon from "../assets/icons/home/home.webp";

import {
  isKotaIrabUnlocked,
  isWorldUnlocked,
} from "../utils/gameProgress";

export default function WorldMap() {
  const navigate = useNavigate();

  const kotaIrabUnlocked =
    isKotaIrabUnlocked();

  const marfuatUnlocked =
    isWorldUnlocked("marfuat");

  const mansubatUnlocked =
    isWorldUnlocked("mansubat");

  const majruratUnlocked =
    isWorldUnlocked("majrurat");

  const tawabiUnlocked =
    isWorldUnlocked("tawabi");

  const istanaUnlocked =
    isWorldUnlocked("istana");

  const handleLockedWorld = (worldName) => {
    alert(
      `${worldName} masih berkunci. Selesaikan dunia sebelumnya dahulu.`
    );
  };

  return (

    
    <div className="world-wrap">
      <div className="world-frame">
        <img
          src={worldMap}
          className="world-img"
          alt="Peta Dunia Ajrumiyyah"
          draggable="false"
        />

        {/* Gerbang Kalam */}
        <button
          type="button"
          className="world-zone gerbang open"
          aria-label="Masuk ke Gerbang Kalam"
          onClick={() =>
            navigate("/gerbang-kalam")
          }
        />

        {/* Kota I'rab */}
        <button
          type="button"
          className={`world-zone irab ${
            kotaIrabUnlocked
              ? "open"
              : "locked"
          }`}
          aria-label={
            kotaIrabUnlocked
              ? "Masuk ke Kota I'rab"
              : "Kota I'rab masih berkunci"
          }
          onClick={() => {
            if (kotaIrabUnlocked) {
              navigate("/kota-irab");
              return;
            }

            handleLockedWorld("Kota I'rab");
          }}
        />
        {/* Kota Marfu'at */}
        <button
          type="button"
          className={`world-zone marfuat ${
            marfuatUnlocked
              ? "open"
              : "locked"
          }`}
          aria-label="Kota Marfu'at"
          onClick={() => {
            if (marfuatUnlocked) {
              navigate("/kota-marfuat");
              return;
            }

            handleLockedWorld("Kota Marfu'at");
          }}
        />

        {/* Kota Mansubat */}
        <button
          type="button"
          className={`world-zone mansubat ${
            mansubatUnlocked
              ? "open"
              : "locked"
          }`}
          aria-label="Kota Mansubat"
          onClick={() => {
            if (mansubatUnlocked) {
              navigate("/kota-mansubat");
              return;
            }

            handleLockedWorld("Kota Mansubat");
          }}
        />

        {/* Kota Majrurat */}
        <button
          type="button"
          className={`world-zone majrurat ${
            majruratUnlocked
              ? "open"
              : "locked"
          }`}
          aria-label="Kota Majrurat"
          onClick={() => {
            if (majruratUnlocked) {
              navigate("/kota-majrurat");
              return;
            }

            handleLockedWorld("Kota Majrurat");
          }}
        />

        {/* Kota Tawabi' */}
        <button
          type="button"
          className={`world-zone tawabi ${
            tawabiUnlocked
              ? "open"
              : "locked"
          }`}
          aria-label="Kota Tawabi'"
          onClick={() => {
            if (tawabiUnlocked) {
              navigate("/kota-tawabi");
              return;
            }

            handleLockedWorld("Kota Tawabi'");
          }}
        />

        {/* Istana Rahsia */}
        <button
          type="button"
          className={`world-zone istana ${
            istanaUnlocked
              ? "open"
              : "locked"
          }`}
          aria-label="Istana Rahsia Ajrumiyyah"
          onClick={() => {
            if (istanaUnlocked) {
              navigate("/istana-rahsia");
              return;
            }

            handleLockedWorld(
              "Istana Rahsia Ajrumiyyah"
            );
          }}
        />
       <button
  type="button"
  className="world-home-button"
  onClick={() => navigate("/")}
>
  <img
    src={homeIcon}
    alt="Home"
    draggable="false"
  />

  <span>HOME</span>
</button>
      </div>
      <button
        type="button"
        className="back-world"
        aria-label="Kembali ke halaman utama"
        onClick={() => navigate("/")}
      />
    </div>
    
  );
}