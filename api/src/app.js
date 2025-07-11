import 'dotenv/config';
import express from 'express';
import {dbConnect} from './models/db.js';
import bodyParser from 'body-parser';
import {usersRouter} from './routes/user.routes.js';

try {
  await dbConnect();
} catch (error) {
  console.log('ERROR:', error);
  process.exit(1);
}

const port = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1', usersRouter);

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
