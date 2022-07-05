import { Frame, Layout, Page } from "@shopify/polaris";
import React from "react";
import SideBar from "./components/sideBar/SideBar";
import Topbar from "./components/topBar/Topbar";
import MainPage from "./pages/MainPage";

const App = () => {
    return (
        <Frame>
            <Layout>
                <Topbar />
                <SideBar />
            </Layout>
            <MainPage>
                <div>Products Management</div>
            </MainPage>
        </Frame>
    );
};

export default App;
