import { MongoClient } from "mongodb";
import { ObjectId } from "bson";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const meetupId = req.query.id;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://centuaryfox007:jay125665911@cluster0.ws6gqly.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.deleteOne({ _id: ObjectId(meetupId) });

      console.log(result); // Log the result of the deletion operation

      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Meetup deleted!" });
      } else {
        res.status(404).json({ message: "Meetup not found!" });
      }
      
      client.close();
    } catch (error) {
      console.error('Failed to delete meetup:', error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

export default handler;