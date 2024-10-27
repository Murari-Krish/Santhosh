// pages/api/logs.js
import axios from "axios";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const response = await axios.get("http://localhost:5000/api/logs");
        res.status(200).json(response.data);
    }
}
