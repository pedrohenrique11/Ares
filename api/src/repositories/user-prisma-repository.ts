import prisma from '../utils/prismaClient'
import { Prisma } from '@prisma/client'

export class UserPrismaRository {
    async getAllUsers() {
        return await prisma.user.findMany()
    }
    async deleteAllUsers() {
        return await prisma.user.deleteMany({})
    }
    async getByEmail(email: string) {
        return await prisma.user.findUnique({
            where: {
                email,
            }
        })
    }

    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data,
        })

        return user
    }
}