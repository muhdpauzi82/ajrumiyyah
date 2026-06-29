import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/KotaIrab.css";

import kotaIrabMap from "../../assets/maps/kotairab.webp";

export default function KotaIrab() {
  const navigate = useNavigate();

  useEffect(() => {
    const bgMusic = new Audio("/sounds/gerbangutama.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.2;
    bgMusic.play().catch(() => {});

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    };
  }, []);

  const babIrabDone = localStorage.getItem("babIrabQuizDone") === "true";

  return (
   <div className="kota-irab-wrap">
  <div className="map-frame">
    <img  src={kotaIrabMap}  className="irab-map"  alt="Kota I'rab"/>

       <button
  className="irab-hotspot madrasah"  onClick={() => navigate("/bab-irab-intro")}
/>
<button
  className="irab-hotspot kembali"  onClick={() => navigate("/worldmap")}
/>
<button
  className={`irab-hotspot perpustakaan ${babIrabDone ? "" : "disabled"}`}
  onClick={() => {
    if (babIrabDone) alert("Perpustakaan Nahu akan dibina selepas ini.");
    else alert("Selesaikan Madrasah Bab I'rab dahulu.");
  }}
/>

<button className="irab-hotspot lorong disabled" onClick={() => alert("Selesaikan Perpustakaan Nahu dahulu.")} />
<button className="irab-hotspot dataran disabled" onClick={() => alert("Selesaikan Lorong Latihan dahulu.")} />
<button className="irab-hotspot dewan disabled" onClick={() => alert("Selesaikan Dataran I'rab dahulu.")} />
<button className="irab-hotspot istana disabled" onClick={() => alert("Selesaikan Dewan Pengijazahan dahulu.")} /> 
              </div>
    </div>
  );
}