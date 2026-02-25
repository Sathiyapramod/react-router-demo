import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import myAPI from "../api";

function Products() {
    const formik = useFormik({
        initialValues: {
            product_name: "",
            price: 0,
        },
        onSubmit: async (values) => {
            const { product_name, price } = values;
            const body = {
                product_name,
                price: parseInt(price),
            };
            try {
                //
                const response = await myAPI.createProducts(body)
                console.log(response);
                if (response.status == 201) {
                    //  todo
                    //   toaster
                    setOpen(false);
                    //  call my full lists again
                    getAllProducts();
                } else {
                    alert("Some Error has happened");
                }
                setOpen(false);
            } catch (err) {
                console.log(err, "error");
            }
        },
    });
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    // modal settings for mui
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = (id) => {
        navigate(`/products/${id}`);
    };

    // API call for products
    async function getAllProducts() {
        try {
            const response = await myAPI.getAllProducts()
            // check your status
            if (response.status !== 200) {
                // bad request
                console.log("Error has happened");
            } else {
                // status is ok
                // API -> human readable format
                const result = response.data;
                setProducts(result);
            }
        } catch (err) {
            console.log("Error", err);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "#d3d3d3",
        border: "1px solid #000",
        boxShadow: 24,
        p: 4,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    return (
        <div>
            <div className="">
                <Button variant="outlined" onClick={handleOpen}>
                    {" "}
                    + Create Product{" "}
                </Button>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                            }}
                        >
                            Create Product
                        </Typography>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                id="product_name"
                                variant="outlined"
                                label="Product Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.product_name}
                                placeholder={"Enter your Product Name"}
                                sx={{
                                    mb: 6,
                                }}
                                required
                            />
                            <TextField
                                id="price"
                                variant="outlined"
                                label="Product Price"
                                placeholder={"Enter your Product Price"}
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                sx={{
                                    mb: 6,
                                }}
                            />
                            <Button variant="contained" color="success" type="submit">
                                Create
                            </Button>
                        </form>
                    </Box>
                </Modal>
            </div>
            {products.map((eachProduct) => {
                return (
                    <div key={eachProduct._id}>
                        Product Name: {eachProduct.product_name}
                        Price: {eachProduct.price}
                        <button onClick={() => handleClick(eachProduct._id)}>View Me</button>
                        <button onClick={() => {}}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;
