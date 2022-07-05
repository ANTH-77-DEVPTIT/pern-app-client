import { Frame, Layout, Page } from "@shopify/polaris";
import React from "react";
import SideBar from "./components/sideBar/SideBar";
import Topbar from "./components/topBar/Topbar";

const App = () => {
    return (
        <Frame>
            <Layout>
                <Topbar />
            </Layout>
            <SideBar />
            <Page title="Product Tags"></Page>
        </Frame>
    );
};

export default App;
