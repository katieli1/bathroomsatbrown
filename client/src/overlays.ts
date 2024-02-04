// import { FeatureCollection } from "geojson";
import { FillLayer } from "react-map-gl";

// Import the raw JSON file

// function isFeatureCollection(json: any): json is FeatureCollection {
//   return json.type === "FeatureCollection";
// }

const propertyName = "holc_grade";
export const geoLayer: FillLayer = {
  id: "geo_data",
  type: "fill",
  paint: {
    "fill-color": [
      "match",
      ["get", propertyName],
      "A",
      "#5bcc04",
      "B",
      "#04b8cc",
      "C",
      "#e9ed0e",
      "D",
      "#d11d1d",
      "#ccc",
    ],
    "fill-opacity": 0.2,
  },
};

export const searchLayer: FillLayer = {
  id: "search_data",
  type: "fill",
  paint: {
    "fill-color": "#800080",
    "fill-opacity": 0.5,
  },
};
