import express from 'express';
import users from './mocks/user.mocks.ts';

const app = express();

app.get('/users', (_request, response) => {
  response.status(200).json(users);
});

app.listen(3000);