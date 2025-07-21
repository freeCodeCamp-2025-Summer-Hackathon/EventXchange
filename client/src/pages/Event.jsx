import { Link, useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import EventDesc from "../components/EventDesc";
import { useEffect, useState } from "react";
import eventDummy from "../../lib/event-dummy.js";
import eventImage from "../assets/eventImage.jpg";

const Event = () => {
  const params = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    const id = parseInt(params.eventid);
    const eventData = eventDummy.find((e) => {
      return e.id === id;
    });
    setEvent(eventData);
  }, [params.eventid]);

  /*
const eventDummy = [
    {
        id: 1,
        title: "Grand Cake Bakefest",
        desc: "Bake, eat, and chat all day with friends!",
        start: ["08/17/2025", "10:00 AM"],
        location: "Boston",
        organizer: "john123",
        attendees: ["jane456", "jack789", "jesse1011"],
        tags: ["food", "culinary", "cozy", "patissier"]
    },
] 
*/

  return (
    <>
      <div className="grid grid-cols-2 gap-1">
        <div>
          <img src={eventImage} className="size-100 m-20" />
        </div>
        <div>
          <h1 className="text-4xl text-orange-600 font-bold text-left mt-30">
            {event?.title}
          </h1>
          <p className="font-(Chocolate-Classical-Sans) text-lg mt-10 mb-10">
            Date and Time: {event?.start}
          </p>
          <p className="font-(Chocolate-Classical-Sans) text-lg">
            Hosted By: {event?.organizer}
          </p>
          <p className="font-(Chocolate-Classical-Sans) text-lg mt-5">
            {" "}
            Event Description:
          </p>
          <p className="font-(Chocolate-Classical-Sans) text-lg">
            {" "}
            {event?.desc}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-30 p-10 center w-full">
        <div>
          <p className="text-center text-base">{eventDummy[0].title}</p>
          <img src={eventImage} />
        </div>
        <div>
          <p className="text-base text-center">{eventDummy[1].title}</p>
          <img src={eventImage} />
        </div>
        <div>
          <p className="text-base text-center">{eventDummy[2].title}</p>
          <img src={eventImage} />
        </div>
        <div>
          <p className="text-base text-center">{eventDummy[3].title}</p>
          <img src={eventImage} />
        </div>
      </div>
    </>
  );
};

export default Event;
