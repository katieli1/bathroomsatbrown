import React from "react";
import ReactDOM from "react-dom/client";
import MapBox from "./MapBox.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <MapBox />
    </ChakraProvider>
  </React.StrictMode>
);
