import React, { useState } from "react";
import { Page } from "@shopify/polaris";
import { useContext } from "react";
import { PlusMinor } from "@shopify/polaris-icons";
import ProductItem from "../productItem/ProductItem";
import { GlobalState } from "../../../GlobalState";

const Products = () => {
    //tao vai cai bien isopen form ne, inSubmitting cho phep submit ne.
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const state = useContext(GlobalState);
    const [products] = state.productsAPI.products;

    return (
        <Page
            fullWidth
            title="Products"
            primaryAction={{
                content: "Create Product",
                icon: PlusMinor,
                onAction: () => alert("There's no one at all!!"),
            }}
            secondaryActions={[
                {
                    content: "Import",
                    onAction: () => alert("Nhap cai gi ma nhap"),
                },
                {
                    content: "Export",
                    onAction: () => alert("Xuat cai gi ma xuat!!"),
                },
            ]}
        >
            <ProductItem
                products={products}
                isOpen={isOpen}
                isSubmitting={isSubmitting}
            />
        </Page>
    );
};

export default Products;
