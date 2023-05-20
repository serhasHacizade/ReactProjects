import { Form, useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';

const EventForm = ({ method, event }) => {
  const navigate = useNavigate();
  const cancelHandler = () => {navigate('..')};

  return (
    <Form method="POST" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ""} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ""} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ""}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea className={classes.description} id="description" name="description" rows="9" required defaultValue={event ? event.description : ""}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;