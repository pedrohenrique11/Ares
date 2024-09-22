import { Request, Response } from "express";
import { UserRepository } from "../repositories/user-repository";
import { hash } from "bcryptjs";
import { z } from "zod";
import { EmailAlreadyExists } from "./errors/email-already-exists";


export class RegisterService {
    constructor(private userRepository: UserRepository){}

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
        
        if(emailUsed) {
            throw new EmailAlreadyExists()
        }

        await this.userRepository.create({name, email, password_hash, telephone, height, weight})
    }
}