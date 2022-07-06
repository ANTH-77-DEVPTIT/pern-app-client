import {
  IndexTable,
  TextStyle,
  Card,
  useIndexResourceState,
} from "@shopify/polaris";
import React from "react";

const ProductItem = ({ products }) => {
  const resourceName = {
    singular: "product",
    plural: "products",
  };


  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(products);

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
            style={{ width: "auto", height: "40px" }}
            src={`http://localhost:5000${product.images[0]}`}
            alt="An ne"
          />
        </IndexTable.Cell>
        <IndexTable.Cell>{product.description}</IndexTable.Cell>
        <IndexTable.Cell>{product.price}</IndexTable.Cell>
        <IndexTable.Cell>{product?.Brand?.name}</IndexTable.Cell>
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
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
};

export default ProductItem;
