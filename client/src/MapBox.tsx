import Map, {
  MapLayerMouseEvent,
  ViewStateChangeEvent,
  Marker,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";

import { ACCESS_TOKEN } from "./private/api";
import "./MapBox.css";
import BathroomModal from "./BathroomModal";

interface LatLong {
  lat: number;
  long: number;
}

//work for jackie!!

export default function MapBox() {
  const ProvidenceLatLong: LatLong = { lat: 41.824, long: -71.4128 };
  const initialZoom = 19;
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

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
    setModalOpen(true);
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
      {modalOpen && <BathroomModal onClose={() => setModalOpen(false)} />}
      {isLoading && (
        <div className="loading-screen">
          <img className="loading-gif" src="/loading.gif" />
        </div>
      )}
      <div style={{ width: "100%", height: "100%" }}>
        <Map
          mapboxAccessToken={ACCESS_TOKEN}
          {...viewState}
          longitude={viewState.longitude}
          latitude={viewState.latitude}
          zoom={viewState.zoom}
          onMove={(ev: ViewStateChangeEvent) => setViewState(ev.viewState)}
          style={{
            width: "100vw",
            height: "100vh",
          }}
          mapStyle={"mapbox://styles/awang1245/cls6taqyd02fz01p5d4qpdrhr"}
          onClick={onMapClick}
          pitch={70}
        >
          {userState && (
            <Marker
              latitude={userState.latitude}
              longitude={userState.longitude}
            >
              <img src="astronaut-svgrepo-com.svg" style={{ width: "50px" }} />
            </Marker>
          )}
          <Marker latitude={41.830511343740945} longitude={-71.40235994080952}>
            <img src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82617359064272} longitude={-71.4026516714208}>
            <img src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
        </Map>
      </div>
    </>
  );
}
