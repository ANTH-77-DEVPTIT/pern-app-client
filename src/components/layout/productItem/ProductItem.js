import {
    IndexTable,
    TextStyle,
    Card,
    useIndexResourceState,
    Stack,
    ButtonGroup,
    Button,
} from "@shopify/polaris";
import { DeleteMajor, EditMajor } from "@shopify/polaris-icons";
import React, { useState } from "react";
import ModalForm from "../modal/Modal";

const ProductItem = ({
    isOpen,
    setIsOpen,
    products,
    isSubmitting,
    setIsSubmitting,
    mode,
    setMode,
}) => {
    //lay ra duoc isOpen, isSubbmitting thi truyen no vao cho button Delete. de quan ly chung Modal voi Create Product
    const resourceName = {
        singular: "product",
        plural: "products",
    };

    const { selectedResources, allResourcesSelected, handleSelectionChange } =
        useIndexResourceState(products);

    const openModalDelete = (dataProductDelete) => {
        setMode((prevState) => ({
            ...prevState,
            mode: "delete",
            data: dataProductDelete,
        }));

        setIsOpen(true);
    };

    const openModalEdit = (dataProductEdit) => {
        setMode((prev) => ({
            ...prev,
            mode: "edit",
            data: dataProductEdit,
        }));

        setIsOpen(true);
    };

    const rowMarkup = products?.map((product) => {
        return (
            <IndexTable.Row
                id={product.id}
                key={product.id}
                selected={selectedResources.includes(product.id)}
                position={product.index}
            >
                <IndexTable.Cell>
                    <TextStyle variation="strong">{product.id}</TextStyle>
                </IndexTable.Cell>
                <IndexTable.Cell>
                    <img
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "5px",
                        }}
                        src={`http://localhost:5000${product.images[0]}`}
                        alt="An ne"
                    />
                </IndexTable.Cell>
                <IndexTable.Cell>{product.title}</IndexTable.Cell>
                <IndexTable.Cell>{product.description}</IndexTable.Cell>
                <IndexTable.Cell>{product.price}</IndexTable.Cell>
                <IndexTable.Cell>{product?.Brand?.name}</IndexTable.Cell>
                <IndexTable.Cell>
                    <Stack>
                        <ButtonGroup>
                            <Button
                                icon={EditMajor}
                                external
                                onClick={() => openModalEdit(product)}
                            ></Button>
                            <Button
                                primary
                                icon={DeleteMajor}
                                external
                                onClick={() => openModalDelete(product)}
                            ></Button>
                        </ButtonGroup>
                    </Stack>
                </IndexTable.Cell>
            </IndexTable.Row>
        );
    });

    return (
        <>
            <Card>
                <IndexTable
                    resourceName={resourceName}
                    itemCount={products.length}
                    selectedItemsCount={
                        allResourcesSelected ? "All" : selectedResources.length
                    }
                    onSelectionChange={handleSelectionChange}
                    headings={[
                        { title: "ID" },
                        { title: "" },
                        { title: "Title" },
                        { title: "Description" },
                        { title: "Price" },
                        { title: "Brand" },
                        { title: "" },
                    ]}
                >
                    {rowMarkup}
                </IndexTable>
            </Card>
            {mode.mode === "delete" && (
                <ModalForm
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    isSubmitting={setIsSubmitting}
                    setIsSubmitting={setIsSubmitting}
                    productDelete={mode}
                />
            )}
            {mode.mode === "edit" && (
                <ModalForm
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    isSubmitting={isSubmitting}
                    setIsSubmitting={setIsSubmitting}
                    productEdit={mode}
                />
            )}
        </>
    );
};

export default ProductItem;
