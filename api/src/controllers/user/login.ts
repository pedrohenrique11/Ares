import { Request, Response } from "express";
import { UserPrismaRository } from "../../repositories/prisma/user-prisma-repository";
import { LoginService } from "../../services/login";
import { InvalidatedCredentials } from "../../services/errors/invalidated-credentials";

const userPrismaRository = new UserPrismaRository
const loginService = new LoginService(userPrismaRository)

export async function login(req: Request, res: Response) {

    try {
        const login = await loginService.execute(req, res)

        res.send(login)
    }
    catch(err) {
        if(err instanceof InvalidatedCredentials) {
            res.status(401).send(err.message)
        }
    }
}