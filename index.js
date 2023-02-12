import express from 'express';
import router from './routers/getRouter.js';
import dotenv from 'dotenv';
import compression from 'compression';
import helmet from 'helmet';

dotenv.config();

/*
	✅ import data into database
	- get book by:
		✅ title
		✅ author
		✅ rating
		✅ isbn
		✅ isbn13
		✅ publisher
*/

const app = express();
app.use(compression());
app.use(helmet());

app.use('/api', router);

app.get('/', (req, res) => {
	res.send(
		'Welcome to the goodreads api. please go to /api/all to view a list of all books'
	);
});

let PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {
	PORT = `0.0.0.0:${process.env.PORT}`;
}

app.listen(PORT, console.log(`Server has started on port ${PORT}`));
