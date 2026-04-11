import 'dotenv/config';
import { Client } from 'pg';

async function check() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error('DATABASE_URL not found in environment');
    return;
  }

  // Mask password for safety
  const maskedUrl = url.replace(/:([^@]+)@/, ':****@');
  console.log('Attempting connection with URL:', maskedUrl);

  const client = new Client({ connectionString: url });
  try {
    console.log('Connecting...');
    await client.connect();
    console.log('Connected successfully!');
    const res = await client.query('SELECT current_database(), current_user, version();');
    console.log('DB Info:', res.rows[0]);
    await client.end();
  } catch (err) {
    console.error('Connection failed:', err.message);
    if (err.message.includes('TLS')) {
      console.log('Suggestion: This looks like an SSL/TLS handshake issue with Neon.');
    }
  }
}

check();
