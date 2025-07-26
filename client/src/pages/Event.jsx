import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../helpers/api";
import { UserContext } from "../App";

const Event = () => {
  const params = useParams();
  const [user] = useContext(UserContext);
  const [error, setError] = useState();
  const [event, setEvent] = useState();

  const isOrganizer =
    user != null && event != null && user.id === event.organizer;

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
          Hosted By: {event.organizer}
        </p>
        <p className="font-(Chocolate-Classical-Sans) text-lg mt-5">
          {" "}
          Event Description:
        </p>
        <p className="font-(Chocolate-Classical-Sans) text-lg">
          {" "}
          {event.description}
        </p>
        <div>
          {event.photos.map((photo) => (
            <img
              src={`http://localhost:3000${photo}`}
              className="size-100 m-20"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Event;
