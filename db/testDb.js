import connectDb from './database.js';

const showDb = async () => {
	const client = await connectDb();
	const query = `SELECT * FROM books`;
	await client.query(query, (err, res) => {
		if (err) console.log(err);
		else console.log(res.rows);
	});
};

showDb();
