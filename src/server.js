import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import userRouter from './modules/user/user.router.js';
import userAuth from './modules/auth/auth.router.js';


const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/auth", userAuth);


app.listen(3000, () => {
  console.log("Server rodando na 3000");
});
