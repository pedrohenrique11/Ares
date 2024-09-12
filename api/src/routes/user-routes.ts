import { Router } from 'express'
import { UserController } from '../controllers/user-controller'

const userController = new UserController

const userRoutes = Router()

userRoutes.get('/users', userController.showUsers)

export default userRoutes;