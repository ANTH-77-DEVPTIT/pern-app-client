import React, { useState } from "react";
import { Page } from "@shopify/polaris";
import { useContext } from "react";
import { PlusMinor } from "@shopify/polaris-icons";
import ProductItem from "../productItem/ProductItem";
import { GlobalState } from "../../../GlobalState";
import ModalForm from "../modal/Modal";
import axios from "axios";

const ProductList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const state = useContext(GlobalState);

    const [products] = state.productsAPI.products;

    const [mode, setMode] = useState({
        mode: "create",
        data: "",
    });

    const openModalCreate = () => {
        setMode({
            mode: "create",
            data: "",
        });

        setIsOpen(true);
    };

    const handleCreateProduct = async (dataProduct) => {
        // try {
        //     const response = await axios.post(
        //         "http://localhost:5000/api/v1/products",
        //         dataProduct
        //     );
        //     return response;
        // } catch (error) {
        //     throw error;
        // }
        console.log(dataProduct);
    };

    return (
        <Page
            fullWidth
            title="Products"
            primaryAction={{
                content: "Create Product",
                icon: PlusMinor,
                onAction: () => openModalCreate(),
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
                setIsOpen={setIsOpen}
                mode={mode}
                setMode={setMode}
            />

            {mode.mode === "create" && (
                <ModalForm
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    productCreate={mode}
                    onSubmit={handleCreateProduct}
                />
            )}
        </Page>
    );
};

export default ProductList;
