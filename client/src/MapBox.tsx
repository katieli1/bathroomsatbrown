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
          pitch={0}
        >
          {userState && (
            <Marker 
              latitude={userState.latitude}
              longitude={userState.longitude}
            >
              <img className="startLoc" src="astronaut-svgrepo-com.svg" style={{ width: "50px" }}/>
            </Marker>
          )}
          <Marker latitude={41.82617359064272} longitude={-71.4026516714208}>
            <img id="2" className="sayles 108a" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.830511343740945} longitude={-71.40235994080952}>
            <img id="3" className="andrews a22" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.83060445374156} longitude={-71.4024056555907}>
            <img id="4" className="andrews a24a" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.83047433230856} longitude={-71.40225807979611}>
            <img id="5" className="andrews 128" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.83060995182446} longitude={-71.40226053939269}>
            <img id="6" className="andrews a26" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.829675435252504} longitude={-71.40202229860105}>
            <img id="7" className="alumnae 237" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82965481050266} longitude={-71.40218310254112}>
            <img id="8" className="alumnae 109" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82970686343001} longitude={-71.40218573867128}>
            <img id="9" className="alumnae 121" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82973239881283} longitude={-71.40219101093162}>
            <img id="10" className="alumnae 003" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.8298188261868} longitude={-71.40205261409795}>
            <img id="11" className="alumnae 005" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82981882618687} longitude={-71.40222528062375}>
            <img id="12" className="alumnae 019" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82960398280931} longitude={-71.40287362316344}>
            <img id="13" className="smitty b g07" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82970497891877} longitude={-71.40271533989414}>
            <img id="14" className="smitty b 103" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.8297781840541} longitude={-71.40280175892791}>
            <img id="15" className="smitty b 204" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.8293793366263} longitude={-71.40160652734271}>
            <img id="16" className="emery 013" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82939140232427} longitude={-71.40168008881413}>
            <img id="17" className="woolley 009" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82939399766055} longitude={-71.40190021734124}>
            <img id="18" className="woolley 008" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.83001799037227} longitude={-71.40185664832148}>
            <img id="19" className="morriss 008a" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.830145033923095} longitude={-71.40178316038465}>
            <img id="20" className="champlin 006" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.8300290790471} longitude={-71.401623962717}>
            <img id="21" className="morriss 102" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.83003712857294} longitude={-71.40161195949756}>
            <img id="22" className="morriss 103" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.825242166164905} longitude={-71.40101760510177}>
            <img id="23" className="ratty 040" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.825282170028274} longitude={-71.4007177188587}>
            <img id="24" className="ratty 040" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82523251005622} longitude={-71.40083804358585}>
            <img id="25" className="ratty 100" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82686296526382} longitude={-71.4002121009158}>
            <img id="26" className="scili 1314" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82687695605024} longitude={-71.40008938986279}>
            <img id="27" className="scili 1214" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82689044716282} longitude={-71.4000672616401}>
            <img id="28" className="scili 1114" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.826922426085} longitude={-71.40004714507404}>
            <img id="29" className="scili 417" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82696739641727} longitude={-71.40006793219231}>
            <img id="30" className="scili 414" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82700986836875} longitude={-71.4000652499835}>
            <img id="31" className="scili a03" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.827037350204705} longitude={-71.40006390887909}>
            <img id="32" className="scili a02" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82703185383847} longitude={-71.40016583281383}>
            <img id="33" className="scili a005b" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.827014365397254} longitude={-71.40022685306425}>
            <img id="34" className="scili a005a" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82616150324991} longitude={-71.4002250426128}>
            <img id="35" className="macmillan 118" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82611820009942} longitude={-71.40023957051969}>
            <img id="36" className="macmillan 119" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82362681272506} longitude={-71.39933587897913}>
            <img id="37" className="greg a 138" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82362819450867} longitude={-71.39938965201311}>
            <img id="38" className="greg a 139" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82360608596719} longitude={-71.399439716562}>
            <img id="39" className="greg a 140" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82375670025482} longitude={-71.39991069417003}>
            <img id="40" className="greg a 109" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82380591299853} longitude={-71.39942581515989}>
            <img id="41" className="greg a 121" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.823771240387764} longitude={-71.3994033016242}>
            <img id="42" className="greg a 120" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.825082860830854} longitude={-71.40095656251752}>
            <img id="43" className="scili 914" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.825162727955} longitude={-71.40083289586664}>
            <img id="44" className="scili 911" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82664443796783} longitude={-71.40235638592007}>
            <img id="45" className="salomon 010" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82646381312342} longitude={-71.40241498693392}>
            <img id="46" className="salomon 011" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82595098901148} longitude={-71.40250040861136}>
            <img id="47" className="friedman 109" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.825938444069365} longitude={-71.40234608857334}>
            <img id="48" className="friedman 209" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82586317436516} longitude={-71.40262667046068}>
            <img id="49" className="friedman 107" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82585899271231} longitude={-71.40264911701166}>
            <img id="50" className="friedman 207" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82691694218652} longitude={-71.40282868945467}>
            <img id="51" className="faunce 027" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
          <Marker latitude={41.82690857901823} longitude={-71.40269962178648}>
            <img id="52" className="faunce 028" src="map-pin.svg" style={{ width: "50px" }} />
          </Marker>
        </Map>
      </div>
    </>
  );
}
