import pkg from 'pg';
const { Client } = pkg;

const connectDb = async () => {
	const client = new Client({
		host: process.env.POSTGRES_CONNECTION_HOST,
		user: process.env.POSTGRES_CONNECTION_USER,
		port: process.env.POSTGRES_CONNECTION_PORTJ,
		password: process.env.POSTGRES_CONNECTION_PASSWORD,
		database: process.env.POSTGRES_CONNECTION_DATABASE,
	});

	try {
		await client.connect();
		console.log('connected to database');
		return client;
	} catch (e) {
		console.log('connection failed');
		console.log(e);
	}
};

export default connectDb;
