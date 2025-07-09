import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import sessionRoutes from './routes/session.js';
import { dbConnect } from './models/db.js';

try {
	await dbConnect();
} catch (error) {
	console.log('ERROR:', error);
	process.exit(1);
}

const app = express()
const port = 3000


app.use(express.json());
app.use(session({
	secret: 'your-serect-key', // bạn có thể đặt chuỗi bất kỳ ở đây
	resave: false,
	saveUninitialized: true
  }));
  
  app.use('/', sessionRoutes); // <-- thêm dòng này

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
})

