import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import App from "./App";
import { AppProvider } from "@shopify/polaris";
import DataProvider from "../src/GlobalState";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </DataProvider>
  </React.StrictMode>
);
