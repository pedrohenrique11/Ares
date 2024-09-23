import { Request, Response } from "express";
import { PrismaUserRository } from "../../repositories/prisma/prisma-user-repository";
import { LoginService } from "../../services/login";
import { InvalidatedCredentials } from "../../services/errors/invalidated-credentials";

const userPrismaRository = new PrismaUserRository
const loginService = new LoginService(userPrismaRository)

export async function login(req: Request, res: Response) {
    try {
        const token = await loginService.execute(req, res)

        res.json({token})
    }
    catch(err) {
        if(err instanceof InvalidatedCredentials) {
            res.status(401).send(err.message)
        }
    }
}