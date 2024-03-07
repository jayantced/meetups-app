import { useRouter } from 'next/router';
import { useState } from 'react';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();
  // const [isDeleting, setIsDeleting] = useState(false);

  function showDetailsHandler() {
    router.push(`/${props.id}`);
  }

  // async function deleteMeetupsHandler() {
  //   setIsDeleting(true);
  //   try {
  //     const response = await fetch(`/api/delete-meetup/${props.id}`, {
  //       method: 'DELETE',
  //     });

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
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Detail</button>
          {/* <button onClick={deleteMeetupsHandler} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : 'Delete Meetup'}
          </button> */}
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;