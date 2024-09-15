import { Request, Response } from "express";
import { UserPrismaRository } from "../../repositories/prisma/user-prisma-repository";
import { RegisterService } from "../../services/register";

const userRepository = new UserPrismaRository

export class UserController{
    async showUsers(req: Request, res: Response) {
        const users = await userRepository.getAll()
        
        res.send(users)
    }
    
    async createUser(req: Request, res: Response) {
        const registerService = new RegisterService(userRepository)

        await registerService.execute(req, res)
        
        res.status(201).send('user created')
    }

    async deleteUsers(req: Request, res: Response) {
        await userRepository.deleteAll()

        res.send("users deleted")
    }
}