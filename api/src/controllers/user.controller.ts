import type { Response } from 'express';
import * as UserService from '../services/user.services.ts';

 export function getAllUsers(_request: Request, response: Response): void {
 const users = UserService.findAllUsers();

 response.status(200).json(users);

}

