import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../helpers/api";
import { UserContext } from "../App";
import { rsvpEvent } from "../services/eventService";

const Event = () => {
  const params = useParams();
  const [user] = useContext(UserContext);
  const [error, setError] = useState();
  const [event, setEvent] = useState();

  const isOrganizer =
    user != null && event != null && user.id === event.organizer?.id;

  const fetchEvent = async () => {
    const id = params.eventid;
    const response = await api("GET", `/events/${id}`);
    if (response == null) {
      setError("Something went wrong.");
    } else if (response.error) {
      setError(response.error);
      setEvent();
    } else {
      setError();
      setEvent(response);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [params.eventid]);

  if (error != null) {
    return (
      <>
        <h1 className="text-4xl">ERROR</h1>
        <pre>{error}</pre>
        <Link to="/events" />
      </>
    );
  }

  if (event == null) {
    return (
      <>
        <div className="text-2xl font-bold animate-pulse">
          Loading event data...
        </div>
      </>
    );
  }

  const handleRsvp = async (going) => {
    const response = await rsvpEvent(event, user.id, going);
    if (response.error != null) {
      console.error(response.error);
      return;
    }
    await fetchEvent();
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-end gap-4">
          <h1 className="text-4xl text-orange-600 font-bold text-left mt-30">
            {event.title}
          </h1>
          <div className="flex1" />
          {isOrganizer && (
            <>
              <Link
                className="text-blue-700 underline"
                to={`/events/${event.id}/edit`}
              >
                {" "}
                Edit{" "}
              </Link>
            </>
          )}
        </div>
        <p className="font-(Chocolate-Classical-Sans) text-lg mt-10 mb-10">
          Date and Time: {new Date(event.start).toLocaleString()}
        </p>
        <p className="font-(Chocolate-Classical-Sans) text-lg">
          Hosted By: {event.organizer?.name ?? "User deleted"}
        </p>
        <p className="font-(Chocolate-Classical-Sans) text-lg mt-5">
          Event Description:
        </p>
        <p className="font-(Chocolate-Classical-Sans) text-lg">
          {event.description}
        </p>
        <div>
          {event.photos.map((photo) => (
            <img
              key={photo}
              src={`http://localhost:3000${photo}`}
              className="size-100 m-20"
            />
          ))}
        </div>
        <div className="my-16">
          <div className="flex gap-4 items-center my-4">
            <h2 className="text-2xl"> Attendees </h2>
            {!isOrganizer && (
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer max-w-2xs"
                onClick={() => handleRsvp(true)}
              >
                I'm going
              </button>
            )}
          </div>
          <ul>
            {event.attendees.map((attendee) => (
              <li key={attendee.id}>{attendee.name}</li>
            ))}
          </ul>
          {event.attendees.length === 0 && <div>No one is going yet.</div>}
        </div>
      </div>
    </>
  );
};

export default Event;
