// import { google } from 'googleapis';
// import { Readable } from 'stream';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         try {
//             const { formDataForSheet } = req.body;

//             // Set up Google Drive API
//             const auth = new google.auth.GoogleAuth({
//                 credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS),
//                 // keyFile: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS),
//                 scopes: ['https://www.googleapis.com/auth/drive'],
//             });

//             const drive = google.drive({ version: 'v3', auth });

//             // Function to upload a file and set its permissions
//             const uploadFile = async (fileName, base64String) => {
//                 const fileBuffer = Buffer.from(base64String, 'base64');
//                 const fileStream = Readable.from(fileBuffer);
                
//                 // Upload the file to Drive
//                 const fileResponse = await drive.files.create({
//                     requestBody: {
//                         name: fileName,
//                         mimeType: 'application/pdf',
//                         parents: ["1zJbM1KZGvjxhCFQjz-cGiaCJW1xI8Xn-"]
//                     },
//                     media: {
//                         mimeType: 'application/pdf',
//                         body: fileStream,
//                     },
//                     fields: 'id,webViewLink',
//                 });

//                 console.log('fileResponse::::', fileResponse.data)

//                 const fileId = fileResponse.data.id;

//                 // Set file permissions (e.g., public access)
//                 await drive.permissions.create({
//                     fileId: fileId,
//                     requestBody: {
//                         role: 'reader',
//                         type: 'anyone',
//                     },
//                 });

//                 // return `https://drive.google.com/uc?id=${fileId}`;
//                 return fileResponse.data.webViewLink;;
//             };

//             // Upload Author Form File
//             let authorFormFileUrl = null;
//             if (formDataForSheet['Author Form File URL']) {
//                 authorFormFileUrl = await uploadFile(`AuthorForm_${Date.now()}.pdf`, formDataForSheet['Author Form File URL']);
//             }

//             console.log('authorFormFileUrl::::::', authorFormFileUrl)

//             // Upload Article File
//             let articleFileUrl = null;
//             if (formDataForSheet['File URL']) {
//                 articleFileUrl = await uploadFile(`Article_${Date.now()}.pdf`, formDataForSheet['File URL']);
//             }

//             // Update formDataForSheet with URLs
//             formDataForSheet['Author Form File URL'] = authorFormFileUrl;
//             formDataForSheet['File URL'] = articleFileUrl;

//             // You can now submit formDataForSheet to Google Sheets as before

//             res.status(200).json({ success: true, formDataForSheet });
//         } catch (error) {
//             console.error('Error uploading files to Google Drive:', error);
//             res.status(500).json({ error: 'Failed to upload files to Google Drive' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method not allowed' });
//     }
// }
import { google } from 'googleapis';
import { Readable } from 'stream';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { formDataForSheet } = req.body;

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

            res.status(200).json({ success: true, formDataForSheet });
        } catch (error) {
            console.error('Error uploading files to Google Drive:', error);
            res.status(500).json({ error: 'Failed to upload files to Google Drive' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}