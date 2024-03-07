import classes from './MeetupDetail.module.css';
import { useState } from 'react';

function MeetupDetail(props) {

  // const [isDeleting, setIsDeleting] = useState(false);
  // console.log(typeof(props.id));
  // async function deleteMeetupsHandler() {
  //   setIsDeleting(true);
  //   try {
  //     const response = await fetch(`/api/delete-meetup/${props.id}`, {
  //       method: 'DELETE',
  //     });
  //     console.log(response);

  //     if (response.ok) {
  //       // Refresh the page to reflect changes
  //       // router.replace(router.asPath);
  //       console.log('success');
  //     } else {
  //       console.error('Failed to delete meetup:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Failed to delete meetup:', error.message);
  //   } finally {
  //     setIsDeleting(false);
  //   }
  // }

  return (
    <section className={classes.detail} id={props.id}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
      {/* <div className={classes.actions}>
          <button onClick={deleteMeetupsHandler} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : 'Delete Meetup'}
          </button>
        </div> */}
    </section>
  );
}

export default MeetupDetail;
