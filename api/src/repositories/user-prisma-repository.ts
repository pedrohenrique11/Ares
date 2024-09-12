import prisma from '../utils/prismaClient'

export class UserRository {
    async getAllUsers() {
        return await prisma.user.findMany()
    }
}