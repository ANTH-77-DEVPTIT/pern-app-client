import {
    Button,
    ButtonGroup,
    Form,
    FormLayout,
    Modal,
    Select,
    TextContainer,
    TextField,
} from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import UploadFileds from "../uploadFileds/UploadFileds";

const ModalForm = ({
    isOpen,
    setIsOpen,
    productDelete,
    productEdit,
    productCreate,
    onSubmit,
    onDelete,
    onEdit,
}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [brandId, setBrandId] = useState(1);
    const [images, setImages] = useState([]);

    console.log(images);

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

    const handleChangeBrand = useCallback((value) => setBrandId(value), []);

    const handleDeleteProduct = async (productDelete) => {
        onDelete(productDelete);
        setIsOpen(false);
    };

    useEffect(() => {
        if (productEdit?.mode === "edit") {
            return (
                setTitle(productEdit.data.title),
                setDescription(productEdit.data.description),
                setPrice(productEdit.data.price)
            );
        }
    }, [productEdit]);

    const handleSubmitForm = (event) => {
        //create form data o day lay ra du lieu oke thu gui len tren
        event.preventDefault();
        let dataProduct = {
            title,
            description,
            price,
            brandId,
            images,
        };

        onSubmit(dataProduct);
    };

    const handleFormEditProduct = (event) => {
        event.preventDefault();
        let dataProductEdit = {
            title,
            description,
            price,
            brandId,
        };
        onEdit(dataProductEdit);
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

            {/* setTitle(productEdit.data.title),
            setDescription(productEdit.data.description),
            setPrice(productEdit.data.price),
            setImages(productEdit.data.title), */}

            {productEdit?.mode === "edit" && (
                <Modal
                    // activator={activator}
                    open={isOpen}
                    onClose={handleChange}
                    title="Edit Product"
                >
                    <Modal.Section>
                        <Form onSubmit={handleFormEditProduct}>
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
                                    value={brandId}
                                />

                                <UploadFileds uploadFiles={setImages} />
                                <ButtonGroup>
                                    <Button>Cancel</Button>
                                    <Button
                                        primary
                                        submit
                                        onClick={handleChange}
                                    >
                                        Submit
                                    </Button>
                                </ButtonGroup>
                            </FormLayout>
                        </Form>
                    </Modal.Section>
                </Modal>
            )}

            {productCreate?.mode === "create" && (
                <Modal
                    open={isOpen}
                    onClose={handleChange}
                    title="Create Product"
                >
                    <Modal.Section>
                        <Form
                            encType="multipart/form-data"
                            method="POSt"
                            name="formCreate"
                            onSubmit={handleSubmitForm}
                        >
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
                                    value={brandId}
                                />

                                <UploadFileds uploadFiles={setImages} />
                                <ButtonGroup>
                                    <Button>Cancel</Button>

                                    <Button
                                        primary
                                        submit
                                        onClick={handleChange}
                                    >
                                        Submit
                                    </Button>
                                </ButtonGroup>
                            </FormLayout>
                        </Form>
                    </Modal.Section>
                </Modal>
            )}
        </div>
    );
};

export default ModalForm;
