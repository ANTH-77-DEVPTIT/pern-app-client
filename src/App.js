import React from "react";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";

const App = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <SideBar />
                {children}
            </div>
        </div>
    );
};

export default App;
