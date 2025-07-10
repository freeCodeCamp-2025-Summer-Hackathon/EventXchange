import { express } from 'express';

export const usersRouter = express.Router();

usersRouter.post('/users', async (req, res) => {
  // TODO: get the data from req
  const { name, username, password } = req.body;
  // TODO: validate the data
  // TODO: use `createUser` to make a new user
  // TODO: return user data
})
