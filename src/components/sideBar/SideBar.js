import { Layout, Navigation } from "@shopify/polaris";
import { Link } from "react-router-dom";
import React from "react";

const SideBar = () => {
    return (
        <Navigation
            style={{ backgroundColor: "blue", width: "500px", height: "550px" }}
        >
            <div>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/brands">Brands</Link>
                    <Link to="/products">Products</Link>
                </ul>
            </div>
        </Navigation>
    );
};

export default SideBar;
