import { Request, Response } from "express";
import { UserRository } from "../repositories/user-prisma-repository";
import { hash } from "bcryptjs";

const userRepository = new UserRository

export class UserServices {
    async createUser(req: Request, res: Response) {
        const {name, email, password, telephone, weight, height} = req.body
        const hashedPassword = await hash(password, 10)

        await userRepository.create(name, email, hashedPassword, telephone, height, weight)
    }
}