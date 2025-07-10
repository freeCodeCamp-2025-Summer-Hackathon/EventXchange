import { express } from 'express';
import { createUser, loginUser } from '../models/user';

export const usersRouter = express.Router();

usersRouter.post('/users', async (req, res) => {
  const { name, username, password } = req.body;

  if (typeof name !== 'string' || name.trim().length === 0) {
    res.status(400).json({ error: 'Must have a name.' })
    return
  }
  if (typeof username !== 'string' || username.trim().length === 0) {
    res.status(400).json({ error: 'Username is required' })
    return
  }
  if (typeof password !== 'string' || password.trim().length === 0) {
    res.status(400).json({ error: 'Password is required' })
    return
  }

  const newUser = await createUser(name, username, password);

  res.status(201).json(newUser);
})


usersRouter.get('login', async (req, res) => {
  const { username, password } = req.body;

  const user = await loginUser(username, password);

  res.status(200).json(user);
})
