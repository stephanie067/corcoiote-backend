import { request } from 'express';
import * as UserService from '../services/user.services.ts';

 export function getAllUsers(_request: Request, response: Response): void {
  const users = UserService.findAllUsers();

  response.status(200).json(users);

}

export function getUserById(_request: Request, response: Response): void {
  const id = Number (request.params.id);

  const users = UserService.findUserById(id);

  response.status(200).json(users);
}
