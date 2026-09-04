import users from '../mocks/user.mocks.ts';
import type { User } from '../types/user.type.ts';

export function findAllUsers(): User[] {
  return users;
}

export function findUserById(id: number): User {
 const user = users.find(user => user.id === id);

 if (!user)
   throw new Error(`Usuario de ${id} não encontrado`);
 
  return user;
}