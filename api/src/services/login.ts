import { Request, Response } from "express";
import { UserRepository } from "../repositories/user-repository";
import { compare } from "bcryptjs";
import { InvalidatedCredentials } from "./errors/invalidated-credentials";

export class LoginService{
    constructor(private userRepository: UserRepository){}

    async execute(req: Request, res: Response) {
        const {email, password} = req.body

        const userExists = await this.userRepository.getByEmail(email)

        if (!userExists) {
            throw new InvalidatedCredentials
        }

        const databaseUserPassword = userExists.password_hash
        const passwordIsCorrect = await compare(password, databaseUserPassword)

        if (!passwordIsCorrect) {
            throw new InvalidatedCredentials
        }

        const jwt = require('jsonwebtoken');
        const token = jwt.sign({ id: userExists.id, name: userExists.name }, process.env.JWT_SECRET_KEY);

        return token
    }
}