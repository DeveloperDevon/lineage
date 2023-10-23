import { Router } from 'express'
import { loginHandler } from '../handlers/auth'

const authRouter = Router()

authRouter.post('/login', loginHandler)

export { authRouter }