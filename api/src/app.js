import bodyParser from 'body-parser';
import 'dotenv/config';
import express from 'express';
import {dbConnect} from './models/db.js';
import {usersRouter} from './routes/user.routes.js';
import {setupSession} from './utils/setupSession.js';
import session from 'express-session';

const port = 3000;

// Attempt to connect to the database
try {
  await dbConnect();
} catch (error) {
  console.log('ERROR:', error);
  process.exit(1);
}

// Setup the express server
const app = express();
app.use(bodyParser.json());
app.use(await setupSession());

app.get('/', (req, res) => {
  req.session.thing = 'TEST';
  res.send('Hello World!');
});

// Add the routes
app.use('/api/v1', usersRouter);

// Run the server
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
