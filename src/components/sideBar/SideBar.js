import { Navigation } from "@shopify/polaris";
import { Link } from "react-router-dom";
import React from "react";

const SideBar = () => {
    return (
        <div
            style={{ backgroundColor: "red", width: "200px", height: "300px" }}
        >
            <Navigation>
                <div>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/brands">Brands</Link>
                        <Link to="/products">Products</Link>
                    </ul>
                </div>
            </Navigation>
        </div>
    );
};

export default SideBar;
