import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import eventImage from "../assets/eventImage.jpg";
import { api } from "../helpers/api";

const Event = () => {
  const params = useParams();
  const [error, setError] = useState();
  const [event, setEvent] = useState();

  const fetchEvent = async () => {
    const id = params.eventid;
    const response = await api("GET", `/events/${id}`)
    if (response == null) {
      setError("Something went wrong.")
    } else if (response.error) {
      setError(response.error)
      setEvent();
    } else {
      setError();
      setEvent(response);
    }
  }

  useEffect(() => {
    fetchEvent();
  }, [params.eventid]);

  if (error != null) {
    return <>
      <h1 className="text-4xl">ERROR</h1>
      <pre>{error}</pre>
      <Link to="/events" />
    </>
  }

  if (event == null) {
    return <>
      <div className="text-2xl font-bold animate-pulse">Loading event data...</div>
    </>
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-1">
        <div>
          <img src={eventImage} className="size-100 m-20" />
        </div>
        <div>
          <h1 className="text-4xl text-orange-600 font-bold text-left mt-30">
            {event.title}
          </h1>
          <p className="font-(Chocolate-Classical-Sans) text-lg mt-10 mb-10">
            Date and Time: {event.start_date}
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
        </div>
      </div>
    </>
  );
};

export default Event;
