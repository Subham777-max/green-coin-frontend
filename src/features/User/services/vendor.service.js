import axios from "axios";

const api = axios.create({
    baseURL: "https://green-coin-backend-1.onrender.com/api",
    withCredentials: true,
});

export async function purchaseItem(data) {
    const res = await api.post("/vendor/buy", data);
    return res.data;
}
