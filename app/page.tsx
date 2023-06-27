"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.5657, 126.9769),
      zoom: 12,
      zoomControl: false,
      disableKineticPan: false,
      mapDataControl: false,
    });
  }, []);
  return <div id="map" className="h-screen w-100"></div>;
}
