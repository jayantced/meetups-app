import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

export default function HomePage(props) {
  return (
    <>
    <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
    </Head>
    <MeetupList meetups={props.meetups} />
    </>
  )
}

export async function getStaticProps() {
    const client = await MongoClient.connect(
        "mongodb+srv://centuaryfox007:jay125665911@cluster0.ws6gqly.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
  
      const meetupsCollection = db.collection("meetups");

      const meetups = await meetupsCollection.find().toArray();

      client.close();
      
    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
}
