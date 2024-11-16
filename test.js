import { getById } from './src/modules/user/user.model.js'; // Caminho correto para sua função
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

(async () => {
    try {
        const userId = 1; // Substitua por um ID válido no seu banco de dados
        const user = await getById(userId);
        console.log("Usuário encontrado:", user);
    } catch (error) {
        console.error("Erro ao buscar usuário pelo ID:", error);
    }
})();
