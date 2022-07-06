import React, { useEffect, useState } from "react";
import { Page } from "@shopify/polaris";
import { useContext } from "react";
import { PlusMinor } from "@shopify/polaris-icons";
import ProductItem from "../productItem/ProductItem";
import { GlobalState } from "../../../GlobalState";

const Products = () => {
  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products

  return (
    <Page
      fullWidth
      title="Products"
      primaryAction={{ content: "Create Product", icon: PlusMinor }}
      secondaryActions={[{ content: "Export" }]}
    >
      <ProductItem products={products} />
    </Page>
  );
};

export default Products;
