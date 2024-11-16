import { Router } from "express";
import { login } from "./auth.service.js";

const router = Router();

router.post("/login", async (req, res) => { // Adicione "async"
    const data = await login(req.body); // Use await para lidar com a Promise
    if (data.error) {
        return res.status(403).json({ error: data.error });
    }
    return res.status(200).json({ data });
});

export default router; // Exportação default
