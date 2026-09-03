import { Router } from 'express';
import * as UserController from  '../controllers/user.controller.ts';

const routerUsers = Router();

routerUsers.get('/users', UserController.getAllUsers);

export default routerUsers;

