import { WEBINAR_DATA } from "@/data/webinar"

export default function handler (req, res) {
    try {
        res.status(200).json({ data: WEBINAR_DATA })
      } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
      }
}