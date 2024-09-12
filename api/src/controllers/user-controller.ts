import { Request, Response } from "express";
import { UserRository } from "../repositories/user-prisma-repository";

const usersRepository = new UserRository

export class UserController{
    async showUsers(req: Request, res: Response) {
        const users = usersRepository.getAllUsers()

        res.send(users)
    }
}