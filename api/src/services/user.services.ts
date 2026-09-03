import users from '../mocks/user.mocks.ts';
import type { User } from '../types/user.type.ts';

function findAllUsers() {
  return users;
}

export function findAllUsers() {
  throw new Error('Function not implemented.');
}
