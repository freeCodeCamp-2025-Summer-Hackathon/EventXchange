import 'dotenv/config';
import express from 'express';
import { dbConnect } from './models/db.js';

try {
	await dbConnect();
} catch (error) {
	console.log('ERROR:', error);
	process.exit(1);
}

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})

