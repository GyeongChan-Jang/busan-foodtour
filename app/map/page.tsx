"use client";
import { useEffect } from "react";

export default function Map() {
  const mapOptions: naver.maps.MapOptions = {
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: [
        naver.maps.MapTypeId.NORMAL,
        naver.maps.MapTypeId.TERRAIN,
        naver.maps.MapTypeId.SATELLITE,
        naver.maps.MapTypeId.HYBRID,
      ],
      style: naver.maps.MapTypeControlStyle.BUTTON,
      position: naver.maps.Position.TOP_RIGHT,
    },
    zoomControl: true,
    zoomControlOptions: {
      style: naver.maps.ZoomControlStyle.SMALL,
      position: naver.maps.Position.TOP_RIGHT,
    },
    scaleControl: true,
    scaleControlOptions: {
      position: naver.maps.Position.RIGHT_CENTER,
    },
    logoControl: true,
    logoControlOptions: {
      position: naver.maps.Position.TOP_LEFT,
    },
    mapDataControl: true,
    mapDataControlOptions: {
      position: naver.maps.Position.BOTTOM_LEFT,
    },
    center: new naver.maps.LatLng(37.5657, 126.9769),
    zoom: 12,
    disableKineticPan: false,
  };

  useEffect(() => {
    new naver.maps.Map("map", mapOptions);
  }, []);

  // 커스텀 컨트롤(위성지도, 거리뷰, 저장/인쇄, 현위치, 확대/축소)
  useEffect(() => {}, []);
  return <div id="map" className="h-screen w-100"></div>;
}
