import lineReader from 'line-reader';
import connectDb from './database.js';

const lines = [];

lineReader.eachLine(
	'/Users/sohum/Desktop/rest_api/db/books.csv',
	async (line, last) => {
		lines.push(line);

		if (last) {
			// lines.shift();
			const client = await connectDb();

			for (let i = 1; i < lines.length; i++) {
				try {
					const values = processLine(lines[i]);
					const query = `
					        INSERT INTO books(bookID, title, authors, average_rating, isbn, isbn13, language_code, num_pages, ratings_count, text_reviews_count, publication_date, publisher) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
					`;
					await client.query(query, values);
					console.log('inserted values into books');
				} catch (e) {
					console.log(e);
				}
			}
		}
	}
);

const processLine = (line) => {
	const tokens = line.split(',');
	return tokens;
};
