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
export default function MapBox() {
  const ProvidenceLatLong: LatLong = { lat: 41.824, long: -71.4128 };
  const initialZoom = 19;
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState<{
    isOpen: boolean;
    markerId: number | null;
  }>({
    isOpen: false,
    markerId: null,
  });

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
  function onMapClick(markerId: number) {
    setModalOpen({
      isOpen: true,
      markerId: markerId,
    });
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
      {modalOpen.isOpen && (
        <BathroomModal
          onClose={() => setModalOpen({ isOpen: false, markerId: null })}
          id={modalOpen.markerId}
        />
      )}
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
          // onClick={onMapClick}
          pitch={0}
        >
          {userState && (
            <Marker
              latitude={userState.latitude}
              longitude={userState.longitude}
            >
              <img
                className="startLoc"
                src="astronaut-svgrepo-com.svg"
                style={{ width: "50px" }}
              />
            </Marker>
          )}
          <Marker
            latitude={41.82617359064272}
            longitude={-71.4026516714208}
            onClick={() => onMapClick(2)}
          >
            <img
              id="2"
              className="sayles 108a"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.830511343740945}
            longitude={-71.40235994080952}
            onClick={() => onMapClick(3)}
          >
            <img
              id="3"
              className="andrews a22"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.83060445374156}
            longitude={-71.4024056555907}
            onClick={() => onMapClick(4)}
          >
            <img
              id="4"
              className="andrews a24a"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.83047433230856}
            longitude={-71.40225807979611}
            onClick={() => onMapClick(5)}
          >
            <img
              id="5"
              className="andrews 128"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.83060995182446}
            longitude={-71.40226053939269}
            onClick={() => onMapClick(6)}
          >
            <img
              id="6"
              className="andrews a26"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.829675435252504}
            longitude={-71.40202229860105}
            onClick={() => onMapClick(7)}
          >
            <img
              id="7"
              className="alumnae 237"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82965481050266}
            longitude={-71.40218310254112}
            onClick={() => onMapClick(8)}
          >
            <img
              id="8"
              className="alumnae 109"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82970686343001}
            longitude={-71.40218573867128}
            onClick={() => onMapClick(9)}
          >
            <img
              id="9"
              className="alumnae 121"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82973239881283}
            longitude={-71.40219101093162}
            onClick={() => onMapClick(10)}
          >
            <img
              id="10"
              className="alumnae 003"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.8298188261868}
            longitude={-71.40205261409795}
            onClick={() => onMapClick(11)}
          >
            <img
              id="11"
              className="alumnae 005"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82981882618687}
            longitude={-71.40222528062375}
            onClick={() => onMapClick(12)}
          >
            <img
              id="12"
              className="alumnae 019"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82960398280931}
            longitude={-71.40287362316344}
            onClick={() => onMapClick(13)}
          >
            <img
              id="13"
              className="smitty b g07"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82970497891877}
            longitude={-71.40271533989414}
            onClick={() => onMapClick(14)}
          >
            <img
              id="14"
              className="smitty b 103"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.8297781840541}
            longitude={-71.40280175892791}
            onClick={() => onMapClick(15)}
          >
            <img
              id="15"
              className="smitty b 204"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.8293793366263}
            longitude={-71.40160652734271}
            onClick={() => onMapClick(16)}
          >
            <img
              id="16"
              className="emery 013"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82939140232427}
            longitude={-71.40168008881413}
            onClick={() => onMapClick(17)}
          >
            <img
              id="17"
              className="woolley 009"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82939399766055}
            longitude={-71.40190021734124}
            onClick={() => onMapClick(18)}
          >
            <img
              id="18"
              className="woolley 008"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.83001799037227}
            longitude={-71.40185664832148}
            onClick={() => onMapClick(19)}
          >
            <img
              id="19"
              className="morriss 008a"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.830145033923095}
            longitude={-71.40178316038465}
            onClick={() => onMapClick(20)}
          >
            <img
              id="20"
              className="champlin 006"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.8300290790471}
            longitude={-71.401623962717}
            onClick={() => onMapClick(21)}
          >
            <img
              id="21"
              className="morriss 102"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.83003712857294}
            longitude={-71.40161195949756}
            onClick={() => onMapClick(22)}
          >
            <img
              id="22"
              className="morriss 103"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.825242166164905}
            longitude={-71.40101760510177}
            onClick={() => onMapClick(23)}
          >
            <img
              id="23"
              className="ratty 040"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.825282170028274}
            longitude={-71.4007177188587}
            onClick={() => onMapClick(24)}
          >
            <img
              id="24"
              className="ratty 040"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82523251005622}
            longitude={-71.40083804358585}
            onClick={() => onMapClick(25)}
          >
            <img
              id="25"
              className="ratty 100"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82686296526382}
            longitude={-71.4002121009158}
            onClick={() => onMapClick(26)}
          >
            <img
              id="26"
              className="scili 1314"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82687695605024}
            longitude={-71.40008938986279}
            onClick={() => onMapClick(27)}
          >
            <img
              id="27"
              className="scili 1214"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82689044716282}
            longitude={-71.4000672616401}
            onClick={() => onMapClick(28)}
          >
            <img
              id="28"
              className="scili 1114"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.826922426085}
            longitude={-71.40004714507404}
            onClick={() => onMapClick(29)}
          >
            <img
              id="29"
              className="scili 417"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82696739641727}
            longitude={-71.40006793219231}
            onClick={() => onMapClick(30)}
          >
            <img
              id="30"
              className="scili 414"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82700986836875}
            longitude={-71.4000652499835}
            onClick={() => onMapClick(31)}
          >
            <img
              id="31"
              className="scili a03"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.827037350204705}
            longitude={-71.40006390887909}
            onClick={() => onMapClick(32)}
          >
            <img
              id="32"
              className="scili a02"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82703185383847}
            longitude={-71.40016583281383}
            onClick={() => onMapClick(33)}
          >
            <img
              id="33"
              className="scili a005b"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.827014365397254}
            longitude={-71.40022685306425}
            onClick={() => onMapClick(34)}
          >
            <img
              id="34"
              className="scili a005a"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82616150324991}
            longitude={-71.4002250426128}
            onClick={() => onMapClick(35)}
          >
            <img
              id="35"
              className="macmillan 118"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82611820009942}
            longitude={-71.40023957051969}
            onClick={() => onMapClick(36)}
          >
            <img
              id="36"
              className="macmillan 119"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82362681272506}
            longitude={-71.39933587897913}
            onClick={() => onMapClick(37)}
          >
            <img
              id="37"
              className="greg a 138"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82362819450867}
            longitude={-71.39938965201311}
            onClick={() => onMapClick(38)}
          >
            <img
              id="38"
              className="greg a 139"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82360608596719}
            longitude={-71.399439716562}
            onClick={() => onMapClick(39)}
          >
            <img
              id="39"
              className="greg a 140"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82375670025482}
            longitude={-71.39991069417003}
            onClick={() => onMapClick(40)}
          >
            <img
              id="40"
              className="greg a 109"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82380591299853}
            longitude={-71.39942581515989}
            onClick={() => onMapClick(41)}
          >
            <img
              id="41"
              className="greg a 121"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.823771240387764}
            longitude={-71.3994033016242}
            onClick={() => onMapClick(42)}
          >
            <img
              id="42"
              className="greg a 120"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.825082860830854}
            longitude={-71.40095656251752}
            onClick={() => onMapClick(43)}
          >
            <img
              id="43"
              className="scili 914"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.825162727955}
            longitude={-71.40083289586664}
            onClick={() => onMapClick(44)}
          >
            <img
              id="44"
              className="scili 911"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82664443796783}
            longitude={-71.40235638592007}
            onClick={() => onMapClick(45)}
          >
            <img
              id="45"
              className="salomon 010"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82646381312342}
            longitude={-71.40241498693392}
            onClick={() => onMapClick(46)}
          >
            <img
              id="46"
              className="salomon 011"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82595098901148}
            longitude={-71.40250040861136}
            onClick={() => onMapClick(47)}
          >
            <img
              id="47"
              className="friedman 109"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.825938444069365}
            longitude={-71.40234608857334}
            onClick={() => onMapClick(48)}
          >
            <img
              id="48"
              className="friedman 209"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82586317436516}
            longitude={-71.40262667046068}
            onClick={() => onMapClick(49)}
          >
            <img
              id="49"
              className="friedman 107"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82585899271231}
            longitude={-71.40264911701166}
            onClick={() => onMapClick(50)}
          >
            <img
              id="50"
              className="friedman 207"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82691694218652}
            longitude={-71.40282868945467}
            onClick={() => onMapClick(51)}
          >
            <img
              id="51"
              className="faunce 027"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
          <Marker
            latitude={41.82690857901823}
            longitude={-71.40269962178648}
            onClick={() => onMapClick(52)}
          >
            <img
              id="52"
              className="faunce 028"
              src="map-pin.svg"
              style={{ width: "50px" }}
            />
          </Marker>
        </Map>
      </div>
    </>
  );
}
