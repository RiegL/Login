import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
export const create = async (params) => {
    try {
        const hashedPassword = await bcrypt.hash(params.password, 10);
        const user = await prisma.user.create({
            data:{
                ...params,
                password: hashedPassword
            },
        });

        return user
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw new Error("Não foi possível criar o usuário");
    }

}

export const getAll = async () => {
    try {
        const users = await prisma.user.findMany();
        return users
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
}

export const getByEmail = async (email) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email }, // Busca pelo campo "email"
        });
        return user;
    } catch (error) {
        console.error("Erro ao buscar usuário pelo email:", error);
    }
};

export const getById = async (id) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id }, // Busca pelo campo "id"
        });
        return user;
    } catch (error) {
        console.error("Erro ao buscar usuário pelo id:", error);
        throw error; // Lança o erro novamente
    }
};


