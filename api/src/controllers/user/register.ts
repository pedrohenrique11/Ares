import { Request, Response } from "express";
import { RegisterService } from "../../services/register";
import { UserPrismaRository } from "../../repositories/prisma/user-prisma-repository";

const userRepository = new UserPrismaRository

export async function register(req: Request, res: Response) {
    const registerService = new RegisterService(userRepository)

    await registerService.execute(req, res)
    
    res.status(201).send('user created')

}