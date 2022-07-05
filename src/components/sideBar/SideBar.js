import { Frame, Navigation } from "@shopify/polaris";
import { HomeMinor, OrdersMinor, ProductsMinor } from "@shopify/polaris-icons";
import { Route, Link } from "react-router-dom";
import React from "react";

const SideBar = () => {
  return (
    <Frame>
      <Navigation location="/">
        {/* <Navigation.Section
          items={[
            {
              url: "/",
              label: "Home",
              icon: HomeMinor,
            },
            {
              url: "/brands",
              label: "Brands",
              icon: OrdersMinor,
              badge: "15",
            },
            {
              url: "/products",
              label: "Products",
              icon: ProductsMinor,
            },
          ]}
        /> */}
        <div>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/brands">Brands</Link>
            <Link to="/products">Products</Link>
          </ul>
        </div>
      </Navigation>
    </Frame>
  );
};

export default SideBar;
