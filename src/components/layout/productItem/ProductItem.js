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
import React from "react";
import ModalForm from "../modal/Modal";

const ProductItem = ({
    isOpen,
    setIsOpen,
    products,
    mode,
    setMode,
    onDelete,
    onEdit,
}) => {
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

    const rowMarkup = products?.map((product, index) => {
        return (
            <IndexTable.Row
                id={product.id}
                key={product.id}
                selected={selectedResources.includes(product.id)}
                position={index}
            >
                <IndexTable.Cell>{product.id}</IndexTable.Cell>
                <IndexTable.Cell>
                    <img
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "5px",
                        }}
                        src={`http://localhost:5000${product?.images[0]}`}
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
                            <div style={{ color: "#bf0711" }}>
                                <Button
                                    onClick={() => openModalDelete(product)}
                                    external
                                    icon={DeleteMajor}
                                    monochrome
                                    outline
                                ></Button>
                            </div>
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
                        { title: "Images" },
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
                    productDelete={mode}
                    onDelete={onDelete}
                />
            )}
            {mode.mode === "edit" && (
                <ModalForm
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    productEdit={mode}
                    onEdit={onEdit}
                />
            )}
        </>
    );
};

export default ProductItem;
