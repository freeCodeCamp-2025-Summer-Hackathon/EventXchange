import { Link, useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import EventDesc from "../components/EventDesc";
import { useEffect, useState } from "react";
import eventDummy from "../../lib/event-dummy.js";
import eventImage from "../assets/eventImage.jpg";

const Event = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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
          <div className="flex gap-4 mt-6">
            <Link to={`/edit/${event?.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit Event</button>
            </Link>
            <button 
            onClick={() => setShowDeleteModal(true)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >Delete Event</button>
          </div>
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
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this event ?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowDeleteModal(false)}
              className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
              <button onClick={() => {
                // TODO: Handle delete logic here
                setShowDeleteModal(false);
              }}
              className="px-4 py-2 bg-red-500 text-white rounded">Confirm Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Event;
