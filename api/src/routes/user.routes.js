import { express } from 'express';

export const usersRouter = express.Router();

usersRouter.post('/users', async (req, res) => {
  // TODO: get the data from req
  const { name, username, password } = req.body;
  // TODO: validate the data
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
  // TODO: use `createUser` to make a new user
  // TODO: return user data
})


