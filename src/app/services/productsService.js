import axios from "axios";
import { useEffect, useState } from "react";

const ProductAPI = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(
                "http://localhost:5000/api/v1/products"
            );
            setProducts(response.data.data);
        };
        getProducts();
    }, []);

    return {
        products: [products],
    };
};

export default ProductAPI;
