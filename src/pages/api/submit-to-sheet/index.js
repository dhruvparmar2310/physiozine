// import { google } from 'googleapis';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         try {
//             if (!req.body || typeof req.body !== 'object') {
//                 throw new Error('Invalid formDataForSheet object');
//             }

//             // Set up Google Sheets API
//             const auth = new google.auth.GoogleAuth({
//                 credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS),
//                 scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//             });
//             const sheets = google.sheets({ version: 'v4', auth });

//             // Define your spreadsheet ID and range (e.g., the sheet name and columns you want to update)
//             console.log('process.env.GOOGLE_SPREADSHEET_ID:::', process.env.GOOGLE_SPREADSHEET_ID)
//             const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
//             const range = 'Sheet1!A1';

//             const {
//                 'Paper Title': paperTitle,
//                 Keywords: keywords,
//                 'Mobile No.': mobileNo,
//                 City: city,
//                 Country: country,
//                 'Author Counts': authorCounts,
//                 Authors: authors,
//                 'Author Form File URL': authorFormFileUrl,
//                 'File URL': fileUrl,
//             } = req.body

//             const values = [
//                 [
//                     paperTitle || '',
//                     keywords || '',
//                     mobileNo || '',
//                     city || '',
//                     country || '',
//                     authorCounts || '',
//                     authors || '',
//                     authorFormFileUrl || '',
//                     fileUrl || '',
//                 ],
//             ];

//            const response = await sheets.spreadsheets.values.append({
//                 spreadsheetId,
//                 range,
//                 valueInputOption: 'RAW',
//                 resource: {
//                     values,
//                 },
//             });

//             res.status(200).json({ success: true, response });
//         } catch (error) {
//             console.error('Error submitting data to Google Sheets:', error);
//             res.status(500).json({ error: 'Failed to submit data to Google Sheets' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method not allowed' });
//     }
// }

import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const auth = new google.auth.GoogleAuth({
                credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS),
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });

            const sheets = google.sheets({ version: 'v4', auth });

            const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
            const range = 'Sheet1!A1';

            const {
                'Paper Title': paperTitle,
                Keywords: keywords,
                'Mobile No.': mobileNo,
                City: city,
                Country: country,
                'Author Counts': authorCounts,
                Authors: authors,
                'Author Form File URL': authorFormFileUrl,
                'File URL': fileUrl,
            } = req.body;

            const values = [
                [
                    paperTitle, keywords, mobileNo, city, country, authorCounts, authors, authorFormFileUrl, fileUrl
                ],
            ];

            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range,
                valueInputOption: 'RAW',
                resource: { values },
            });

            res.status(200).json({ success: true, message: 'Article Submitted Successfully.' });
        } catch (error) {
            console.error('Error submitting to Google Sheets:', error);
            res.status(500).json({ error: 'Failed to submit to Google Sheets' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}