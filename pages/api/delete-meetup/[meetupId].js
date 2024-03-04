import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const meetupId = req.query.meetupId;
    const data = req.body;
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://centuaryfox007:jay125665911@cluster0.ws6gqly.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.deleteOne({ _id: ObjectId(meetupId) });
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup deleted!" });
  }
}
export default handler;
