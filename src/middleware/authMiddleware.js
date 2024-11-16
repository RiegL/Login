import jwt from "jsonwebtoken";
import {getById} from "../modules/user/user.model.js";


const authMiddleware = async (req, res, next) => {
    try {
        const decoded = jwt.verify(req.token, process.env.JWT_SECRET); // Decodifica o token
        console.log("ID decodificado:", decoded.id);
        const userId = parseInt(decoded.id, 10); // Converte para número, se necessário
        if (isNaN(userId)) {
            return res.status(400).json({ message: "ID inválido" });
        }

        const user = await getById(userId);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Token inválido" });
    }
};

  
  export default authMiddleware;