import { Request, Response } from "express";
import { UserPrismaRository } from "../repositories/user-prisma-repository";
import { hash } from "bcryptjs";
import { string, z } from "zod";


export async function register(req: Request, res: Response) {
    const userData = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        telephone: z.string().nullable(),
        height: z.number(),
        weight: z.number()
    })

    const {name, email, password, telephone, weight, height} = userData.parse(req.body)
    const password_hash = await hash(password, 10)

    const userRepository = new UserPrismaRository

    const emailUsed = await userRepository.getByEmail(email)

    if(!emailUsed) {
        await userRepository.create({name, email, password_hash, telephone, height, weight})
    }
    else {
        res.status(401).send('Email is already used')
    }

}