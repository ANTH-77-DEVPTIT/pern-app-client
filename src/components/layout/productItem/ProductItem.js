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
import axios from "axios";
import React from "react";

const ProductItem = ({ products, isOpen, isSubmitting }) => {
    //lay ra duoc isOpen, isSubbmitting thi truyen no vao cho button Delete. de quan ly chung Modal voi Create Product
    const resourceName = {
        singular: "product",
        plural: "products",
    };

    const { selectedResources, allResourcesSelected, handleSelectionChange } =
        useIndexResourceState(products);

    const handleDeleteProducts = async (idProduct) => {
        if (idProduct) {
            const res = await axios.delete(
                `http://localhost:5000/api/v1/products/${idProduct}`
            );
            alert("Delete Product Successfully");
        }
    };
    const rowMarkup = products.map((product) => {
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
                <IndexTable.Cell>{product.title}</IndexTable.Cell>
                <IndexTable.Cell>
                    <img
                        style={{
                            width: "auto",
                            height: "40px",
                            borderRadius: "5px",
                        }}
                        src={`http://localhost:5000${product.images[0]}`}
                        alt="An ne"
                    />
                </IndexTable.Cell>
                <IndexTable.Cell>{product.description}</IndexTable.Cell>
                <IndexTable.Cell>{product.price}</IndexTable.Cell>
                <IndexTable.Cell>{product?.Brand?.name}</IndexTable.Cell>
                <IndexTable.Cell>
                    <Stack>
                        <ButtonGroup>
                            <Button
                                accessibilityLabel="Terms and conditions (opens a new window)"
                                icon={EditMajor}
                                external
                            ></Button>
                            <Button
                                primary
                                accessibilityLabel="Terms and conditions (opens a new window)"
                                icon={DeleteMajor}
                                external
                                onClick={() => handleDeleteProducts(product.id)}
                            ></Button>
                        </ButtonGroup>
                    </Stack>
                </IndexTable.Cell>
            </IndexTable.Row>
        );
    });

    return (
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
                    { title: "Title" },
                    { title: "Images" },
                    { title: "Description" },
                    { title: "Price" },
                    { title: "Brand" },
                    { title: "" },
                ]}
            >
                {rowMarkup}
            </IndexTable>
        </Card>
    );
};

export default ProductItem;
