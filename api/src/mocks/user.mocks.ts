import type { User } from "../types/user.type.ts";

const users: User[] = [{
  id: 1,
  name: 'Stephanie',
  email: 'ste@gmail.com',
  password: crypto.randomUUID()

}, {
  id: 2,
  name: 'Valdemir',
  email: 'val@gmail.com',
  password: crypto.randomUUID()
}, {
  id: 3,
  name: 'Angelica',
  email: 'Ang@gmail.com',
  password: crypto.randomUUID()

}];

export default users;