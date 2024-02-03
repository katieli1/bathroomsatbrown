import Map, { MapLayerMouseEvent, ViewStateChangeEvent } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState } from "react";

// import "mapbox-gl/dist/mapbox-gl.css";

import { ACCESS_TOKEN } from "./private/api";

interface LatLong {
  lat: number;
  long: number;
}

export default function MapBox() {
  const ProvidenceLatLong: LatLong = { lat: 41.824, long: -71.4128 };
  const initialZoom = 10;

  const [viewState, setViewState] = useState({
    longitude: ProvidenceLatLong.long,
    latitude: ProvidenceLatLong.lat,
    zoom: initialZoom,
  });
  // const inputRef = useRef<HTMLInputElement | null>(null);

  function onMapClick(e: MapLayerMouseEvent) {
    console.log(e.lngLat.lat);
    console.log(e.lngLat.lng);
  }

  useEffect(() => {}, []);

  return (
    <>
      <Map
        mapboxAccessToken={ACCESS_TOKEN}
        {...viewState}
        longitude={viewState.longitude}
        latitude={viewState.latitude}
        zoom={viewState.zoom}
        onMove={(ev: ViewStateChangeEvent) => setViewState(ev.viewState)}
        style={{ width: window.innerWidth, height: window.innerHeight }}
        mapStyle={"mapbox://styles/mapbox/streets-v12"}
        onClick={onMapClick}
      ></Map>
    </>
  );
}
