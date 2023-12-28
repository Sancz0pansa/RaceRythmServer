import { Router } from 'express';
import {userController} from '../controllers/users.controller'

export const usersRouter = Router();

usersRouter.get('/', );
usersRouter.post('/new', userController.createUser);