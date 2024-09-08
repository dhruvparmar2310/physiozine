// pages/api/submit-to-mongodb.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { sPaperTitle, sKeywords, sMobileNo, sCity, sCountry, sAuthorCount, authors  } = req.body;
    const file = req.files.file;

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
      await client.connect();
      const db = client.db('your_database_name');
      const collection = db.collection('form_submissions');

      await collection.insertOne({
        name,
        email,
        fileName: file.name,
        fileData: file.data,
      });

      res.status(200).json({ message: 'Submitted to MongoDB' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to submit to MongoDB' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}