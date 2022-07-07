import {
    Form,
    FormLayout,
    Modal,
    Select,
    TextContainer,
    TextField,
} from "@shopify/polaris";
import axios from "axios";
import { useState, useCallback } from "react";
import UploadFileds from "../uploadFileds/UploadFileds";

const ModalForm = ({
    isOpen,
    setIsOpen,
    isSubmitting,
    setIsSubmitting,
    productDelete,
    productEdit,
    productCreate,
}) => {
    // const [active, setActive] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [brand, setBrand] = useState("dior");

    const handleChange = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    //handle Input Title
    const handleChangeTitle = useCallback((value) => setTitle(value), []);

    //handle input description
    const handleChangeDescription = useCallback(
        (value) => setDescription(value),
        []
    );

    //handle input Price
    const handleChangePrice = useCallback((value) => setPrice(value), []);

    const options = [
        { label: "Dior", value: "1" },
        { label: "Gucci", value: "2" },
        { label: "Ferari", value: "3" },
    ];

    const handleChangeBrand = useCallback((value) => setBrand(value), []);

    const handleDeleteProduct = async (productDelete) => {
        await axios.delete(
            `http://localhost:5000/api/v1/products/${productDelete.data.id}`
        );

        setIsOpen(false);
    };

    return (
        <div style={{ height: "500px" }}>
            {productDelete?.mode === "delete" && (
                <div style={{ height: "500px" }}>
                    <Modal
                        open={isOpen}
                        onClose={handleChange}
                        title={`Are you sure delete ${productDelete.data.title.toLocaleUpperCase()}`}
                        primaryAction={{
                            content: "Delete",
                            onAction: () => handleDeleteProduct(productDelete),
                        }}
                        secondaryActions={[
                            {
                                content: "Cancel",
                                onAction: handleChange,
                            },
                        ]}
                    >
                        <Modal.Section>
                            <TextContainer>
                                <p style={{ color: "red" }}>
                                    Once deleted, it cannot be revoked. Are you
                                    sure this product?
                                </p>
                            </TextContainer>
                        </Modal.Section>
                    </Modal>
                </div>
            )}

            {productEdit?.mode === "edit" && (
                <Modal
                    // activator={activator}
                    open={isOpen}
                    onClose={handleChange}
                    title="Edit Product"
                    primaryAction={{
                        content: "Save",
                        onAction: handleChange,
                    }}
                    secondaryActions={[
                        {
                            content: "Cancel",
                            onAction: handleChange,
                        },
                    ]}
                >
                    <Modal.Section>
                        <Form>
                            <FormLayout>
                                <TextField
                                    value={productEdit.data.title}
                                    label="Title"
                                    placeholder="Enter Title here"
                                    onChange={handleChangeTitle}
                                />
                                <TextField
                                    value={productEdit.data.description}
                                    label="Description"
                                    placeholder="Enter Description here"
                                    onChange={handleChangeDescription}
                                />
                                <TextField
                                    type="number"
                                    value={productEdit.data.price}
                                    label="Price"
                                    placeholder="Enter Price here"
                                    onChange={handleChangePrice}
                                />

                                <Select
                                    label="Choose Brand"
                                    options={options}
                                    onChange={handleChangeBrand}
                                    value={productEdit.data.Brand.name}
                                />

                                <UploadFileds />
                            </FormLayout>
                        </Form>
                    </Modal.Section>
                </Modal>
            )}

            {productCreate?.mode === "create" && (
                <Modal
                    // activator={activator}
                    open={isOpen}
                    onClose={handleChange}
                    title="Create Product"
                    primaryAction={{
                        content: "Save",
                        onAction: handleChange,
                    }}
                    secondaryActions={[
                        {
                            content: "Cancel",
                            onAction: handleChange,
                        },
                    ]}
                >
                    <Modal.Section>
                        <Form>
                            <FormLayout>
                                <TextField
                                    value={title}
                                    label="Title"
                                    placeholder="Enter Title here"
                                    onChange={handleChangeTitle}
                                />
                                <TextField
                                    value={description}
                                    label="Description"
                                    placeholder="Enter Description here"
                                    onChange={handleChangeDescription}
                                />
                                <TextField
                                    type="number"
                                    value={price}
                                    label="Price"
                                    placeholder="Enter Price here"
                                    onChange={handleChangePrice}
                                />

                                <Select
                                    label="Choose Brand"
                                    options={options}
                                    onChange={handleChangeBrand}
                                    value={brand}
                                />

                                <UploadFileds />
                            </FormLayout>
                        </Form>
                    </Modal.Section>
                </Modal>
            )}
        </div>
    );
};

export default ModalForm;
