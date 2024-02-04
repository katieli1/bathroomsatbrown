import Map, {
  MapLayerMouseEvent,
  ViewStateChangeEvent,
  Marker,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";

import { ACCESS_TOKEN } from "./private/api";
import "./MapBox.css";

interface LatLong {
  lat: number;
  long: number;
}

export default function MapBox() {
  const ProvidenceLatLong: LatLong = { lat: 41.824, long: -71.4128 };
  const initialZoom = 19;
  const [isLoading, setIsLoading] = useState(true);

  const [userState, setUserState] = useState({
    longitude: ProvidenceLatLong.long,
    latitude: ProvidenceLatLong.lat,
    zoom: initialZoom,
  });

  const [viewState, setViewState] = useState({
    longitude: ProvidenceLatLong.long,
    latitude: ProvidenceLatLong.lat,
    zoom: initialZoom,
  });

  function onMapClick(e: MapLayerMouseEvent) {
    console.log(e.lngLat.lat);
    console.log(e.lngLat.lng);
  }

  useEffect(() => {
    console.log(isLoading);
    navigator.geolocation.getCurrentPosition((position) => {
      setUserState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: initialZoom,
      });
      setViewState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: initialZoom,
      });
      setIsLoading(false);
    });
    console.log(isLoading);
    console.log(viewState);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <img className="loading-gif" src="/loading.gif" />
        </div>
      )}
      <Map
        mapboxAccessToken={ACCESS_TOKEN}
        {...viewState}
        longitude={viewState.longitude}
        latitude={viewState.latitude}
        zoom={viewState.zoom}
        onMove={(ev: ViewStateChangeEvent) => setViewState(ev.viewState)}
        style={{
          width: window.innerWidth + 50,
          height: window.innerHeight + 50,
        }}
        mapStyle={"mapbox://styles/awang1245/cls6taqyd02fz01p5d4qpdrhr"}
        onClick={onMapClick}
        pitch={70}
      >
        {userState && (
          <Marker latitude={userState.latitude} longitude={userState.longitude}>
            <img
              src="public/astronaut-svgrepo-com.svg"
              style={{ width: "100px" }}
            ></img>
          </Marker>
        )}
      </Map>
    </>
  );
}
