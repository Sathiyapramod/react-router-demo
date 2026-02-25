import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});

    async function getProductsById() {
        try {
            const response = await axios.get(`http://localhost:4000/products/${id}`);
            // check your status
            if (response.status !== 200) {
                // bad request
                console.log("Error has happened");
            } else {
                // status is ok
                // API -> human readable format
                const result = response.data;
                console.log(result);
                setSelectedProduct(result);
            }
        } catch (err) {
            console.log("Error", err);
        }
    }

    useEffect(() => {
        getProductsById();
    }, []);

    return (
        <div>
            <h1>Your Product Details</h1>
            <div>
                Your ID number : {selectedProduct._id}
                <div>Product Name: {selectedProduct.product_name}</div>
            </div>
              <div>Price: {selectedProduct.price}</div>
              <button>Go Back</button>
        </div>
    );
}

export default ProductDetail;
