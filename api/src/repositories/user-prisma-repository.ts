import prisma from '../utils/prismaClient'

export class UserRository {
    async getAllUsers() {
        return await prisma.user.findMany()
    }

    async create(name: string, email: string, password: string, telephone: string, height: number, weight: number) {
        return await prisma.user.create({
            data: {
                name, 
                email,
                password,
                telephone,
                height,
                weight
            }
        })
    }
}