
import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const auth = new google.auth.GoogleAuth({
                credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS),
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });

            const sheets = google.sheets({ version: 'v4', auth });

            const spreadsheetId = process.env.SUBSCRIPTION_SPREADSHEET_ID;
            const range = 'Sheet1!A1';

            const {
                sCollegeName: Name,
                sAddress: Address,
                sEmailID: Email,
                sMobileNo: Mobile,
                eSubscriptionType: Plan
            } = req.body;

            const values = [
                [
                    Name,
                    Address,
                    Email,
                    Mobile,
                    Plan,
                ],
            ];

            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range,
                valueInputOption: 'RAW',
                resource: { values },
            });

            res.status(200).json({ success: true, message: 'Subscription Plan Details Submitted Successfully.' });
        } catch (error) {
            console.error('Error submitting to Google Sheets:', error);
            res.status(500).json({ error: 'Failed to submit to Google Sheets' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
