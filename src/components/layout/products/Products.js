import React, { useState } from "react";
import { Modal, Page } from "@shopify/polaris";
import { useContext } from "react";
import { PlusMinor } from "@shopify/polaris-icons";
import ProductItem from "../productItem/ProductItem";
import { GlobalState } from "../../../GlobalState";
import ModalForm from "../modal/Modal";

const Products = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                isOpenModalCreate={isOpenModalCreate}
                setIsOpen={setIsOpen}
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
                mode={mode}
                setMode={setMode}
            />

            {mode.mode === "create" && (
                <ModalForm
                    isOpen={isOpen}
                    isOpenModalCreate={isOpenModalCreate}
                    setIsOpen={setIsOpen}
                    isSubmitting={isSubmitting}
                    setIsSubmitting={setIsSubmitting}
                    productCreate={mode}
                />
            )}
        </Page>
    );
};

export default Products;
