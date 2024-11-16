import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { create , getByEmail} from "../user/index.js";



export const login = async(params) => {
    const user = await getByEmail(params.email);

    if(!user){
        return{error: "E-mail ou senha inválidos"};
    }
    
    const passwordCorrect = await bcrypt.compare(params.password, user.password);

    if(!passwordCorrect){
        return{ error: "E-mail ou senha inválidos"};
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token };

}

