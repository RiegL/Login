import {Router} from 'express';
import {create, getAll, getByEmail, getById} from './user.model.js';


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
router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10); // Converte o id para número
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }
        const data = await getById(id);
        if (!data) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.status(200).json({ data });
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        res.status(500).json({ message: "Erro ao buscar usuário" });
    }
});

export default router;