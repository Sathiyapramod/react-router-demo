import axios from "axios";

const API_URL = "http://localhost:4000";

class API {
    async createProducts(body) {
        try {
            const response = await axios.post(`${API_URL}/products`, body, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response;
        } catch (err) {
            console.log("error", err);
        }
    }

    async getAllProducts() {
        try {
            const response = await axios.get(`${API_URL}/products`);
            return response;
        } catch (err) {
            console.log("error", err);
        }
    }
    async getProductsById(id) {
        try {
            const response = await axios.get(`${API_URL}/products/${id}`);
            return response;
        } catch (err) {
            console.log("error", err);
        }
    }
}

// create one instance
const myAPI = new API();

export default myAPI;
