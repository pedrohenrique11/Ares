import { Request, Response } from "express";
import { UserRository } from "../repositories/user-repository";
import { hash } from "bcryptjs";
import { string, z } from "zod";


export class RegisterService {
    constructor(private userRepository: UserRository){}

    async execute(req: Request, res: Response) {
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
    
        const emailUsed = await this.userRepository.getByEmail(email)
    
        if(!emailUsed) {
            await this.userRepository.create({name, email, password_hash, telephone, height, weight})
        }
        else {
            res.status(401).send('Email is already used')
        }
    
    }
}