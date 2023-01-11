import express from 'express';
import connectDb from '../db/database.js';

const router = express.Router();

// GET ALL BOOKS
// DONT EXPOSE
router.get('/all', async (req, res) => {
	const client = await connectDb();
	const query = `SELECT * FROM books`;
	await client.query(query, (err, response) => {
		if (err) res.status(500).send('failed request');
		else res.json(response.rows);
	});
});

// GET BY ISBN
router.get('/isbn/:id', async (req, res) => {
	const client = await connectDb();
	const query = `
    SELECT * 
    FROM books 
    WHERE isbn='${req.params.id}'
    `;

	await client.query(query, async (err, response) => {
		if (err) res.status(401).send("isbn doesn't exist");
		else res.json(response.rows);
	});
});

// GET BY ISBN13
router.get('/isbn13/:id', async (req, res) => {
	const client = await connectDb();
	const query = `
    SELECT * 
    FROM books 
    WHERE isbn13='${req.params.id}'
    `;

	await client.query(query, async (err, response) => {
		if (err) res.status(401).send("isbn doesn't exist");
		else res.json(response.rows);
	});
});

// GET BY TITLE
router.get('/title/:id', async (req, res) => {
	const client = await connectDb();
	const query = `
    SELECT * 
    FROM books 
    WHERE title='${req.params.id}'
    `;

	await client.query(query, async (err, response) => {
		if (err) res.status(401).send("isbn doesn't exist");
		else res.json(response.rows);
	});
});

// GET BY PUBLISHER
router.get('/publisher/:id', async (req, res) => {
	const client = await connectDb();
	const query = `
    SELECT * 
    FROM books 
    WHERE publisher='${req.params.id}'
    `;

	await client.query(query, async (err, response) => {
		if (err) res.status(401).send("isbn doesn't exist");
		else res.json(response.rows);
	});
});

// GET BY RATING
router.get('/rating/:id', async (req, res) => {
	const client = await connectDb();
	const query = `
    SELECT * 
    FROM books 
    WHERE average_rating>='${req.params.id}'
    `;

	await client.query(query, async (err, response) => {
		if (err) res.status(401).send("isbn doesn't exist");
		else res.json(response.rows);
	});
});

export default router;
