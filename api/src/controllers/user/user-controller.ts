import { Request, Response } from "express";
import { UserPrismaRository } from "../../repositories/user-prisma-repository";
import { register } from "../../services/register";

const userRepository = new UserPrismaRository

export class UserController{
    async showUsers(req: Request, res: Response) {
        const users = await userRepository.getAllUsers()

        res.send(users)
    }

    async createUser(req: Request, res: Response) {
        await register(req, res)

        res.status(201).send('user created')
    }

    async deleteUsers(req: Request, res: Response) {
        await userRepository.deleteAllUsers()

        res.send("users deleted")
    }
}