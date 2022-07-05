import { Frame, Layout, Page } from "@shopify/polaris";
import React from "react";
import SideBar from "./components/sideBar/SideBar";
import Topbar from "./components/topBar/Topbar";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Frame>
          <Topbar />
          <SideBar />
          <MainPage>
            <div>Products Management</div>
            <p>duong thuong dau day ai nhan gian.</p>
          </MainPage>
    </Frame>
  );
};

export default App;
