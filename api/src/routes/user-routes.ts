import { Router } from 'express'
import { UserController } from '../controllers/user-controller'

const userController = new UserController

const userRoutes = Router()

userRoutes.get('/users', userController.showUsers)
userRoutes.post('/user', userController.createUser)

export default userRoutes;