import { google } from 'googleapis';
import { Readable } from 'stream';
import getRawBody from 'raw-body';

export const config = {
    api: {
      bodyParser: false, // Disable the default body parser
    },
  };

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
             // Get the raw body with an extended limit (e.g., 10MB)
      const rawBody = await getRawBody(req, {
        length: req.headers['content-length'],
        limit: '10mb', // Set the limit to 10MB or adjust as needed
        encoding: true, // Set encoding to true if you want to automatically handle text-based encodings
      });
            const {formDataForSheet} = JSON.parse(rawBody);
            const auth = new google.auth.GoogleAuth({
                credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS),
                scopes: ['https://www.googleapis.com/auth/drive'],
            });

            const drive = google.drive({ version: 'v3', auth });

            const uploadFile = async (fileName, base64String) => {
                const fileBuffer = Buffer.from(base64String, 'base64');
                const fileStream = Readable.from(fileBuffer);

                const fileResponse = await drive.files.create({
                    requestBody: {
                        name: fileName,
                        mimeType: 'application/pdf',
                        parents: ["1zJbM1KZGvjxhCFQjz-cGiaCJW1xI8Xn-"], // Replace with your folder ID
                    },
                    media: {
                        mimeType: 'application/pdf',
                        body: fileStream,
                    },
                    fields: 'id,webViewLink',
                });

                const fileId = fileResponse.data.id;

                await drive.permissions.create({
                    fileId: fileId,
                    requestBody: {
                        role: 'reader',
                        type: 'anyone',
                    },
                });
                return fileResponse.data.webViewLink;
            };

            const authorFormFileUrl = await uploadFile(`AuthorForm_${Date.now()}.pdf`, formDataForSheet['Author Form File URL']);
            const articleFileUrl = await uploadFile(`Article_${Date.now()}.pdf`, formDataForSheet['File URL']);

            formDataForSheet['Author Form File URL'] = authorFormFileUrl;
            formDataForSheet['File URL'] = articleFileUrl;

            res.status(200).json({ success: true, formDataForSheet, data: { message: 'File Uploaded Successfully.' } });
        } catch (error) {
            console.error('Error uploading files to Google Drive:', error);
            res.status(500).json({ error: 'Failed to upload files to Google Drive' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}