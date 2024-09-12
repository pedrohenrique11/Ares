import { Request, Response } from "express";
import { UserRository } from "../repositories/user-prisma-repository";
import { UserServices } from "../services/user-services";

const userRepository = new UserRository
const userService = new UserServices

export class UserController{
    async showUsers(req: Request, res: Response) {
        const users = await userRepository.getAllUsers()

        res.send(users)
    }

    async createUser(req: Request, res: Response) {
        await userService.createUser(req, res)

        res.status(201).send('user created')
    }
}