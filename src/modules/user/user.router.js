import {Router} from 'express';
import {create, getAll} from './user.model.js';


const router = Router();

router.post("/", async (req, res) => {

    try {
        const data = await create(req.body);
        res.status(200).json(data);
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ message: "Erro ao criar usuário" });
    }
})


router.get("/", async (req, res) => {
    try {
        const data = await getAll();
        res.status(200).json({data});
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        res.status(500).json({ message: "Erro ao buscar usuários" });
    }
})

export default router;