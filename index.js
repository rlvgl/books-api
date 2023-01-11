import express from 'express';
import router from './routers/getRouter.js';
import dotenv from 'dotenv';

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
app.use('/api', router);

app.get('/', (req, res) => {
	res.send('Welcome to the goodreads api');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server has started on port ${PORT}`));
