import express from 'express';
import {createUser, loginUser} from '../controllers/user.controller.js';

export const usersRouter = express.Router();

usersRouter.get('/users', async (req, res) => {
  if (!req.session.user) res.status(403).json({error: 'You are not logged'});
  res.status(201).json({user: req.session.user});
});

usersRouter.post('/users', async (req, res) => {
  try {
    const {name, username, password} = req.body;
    const newUser = await createUser(name, username, password);
    req.session.user = newUser;
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

usersRouter.post('/login', async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await loginUser(username, password);
    req.session.user = user;
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

usersRouter.delete('/login', async (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});
