// src/mocks/handlers.js
import { rest } from 'msw';

let users = [
  {
    id: 1,
    username: 'testuser',
    email: 'test@example.com',
    password: 'password123',
  }
];

export const handlers = [
  // Register
  rest.post('/users', async (req, res, ctx) => {
    const newUser = await req.json();
    const id = users.length + 1;
    const userWithId = { id, ...newUser };
    users.push(userWithId);
    return res(ctx.status(201), ctx.json(userWithId));
  }),

  // Login
  rest.get('/users', (req, res, ctx) => {
    const email = req.url.searchParams.get('email');
    const password = req.url.searchParams.get('password');
    const found = users.find(u => u.email === email && u.password === password);
    return found ? res(ctx.status(200), ctx.json([found])) : res(ctx.status(404), ctx.json([]));
  }),

  // Get User by ID
  rest.get('/users/:id', (req, res, ctx) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));
    return user ? res(ctx.json(user)) : res(ctx.status(404), ctx.json({ error: 'Not found' }));
  }),
];
