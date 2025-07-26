import eventImage from "../assets/eventImage.jpg";
import defaultProfilePic from "../assets/default-pfp.png";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full my-4 transform hover:scale-105 transition-transform duration-300"
      onClick={() => navigate(`/events/${event.id}`)}
    >
      {event.photos.length > 1 && (
        <img
          src={"http://localhost:3000" + event.photos[0]}
          alt={event.title}
          className="w-full h-64 object-cover"
        />
      )}
      {event.photos.length === 0 && (
        <img
          src={eventImage}
          alt={event.title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h2>
        <p className="text-gray-700 leading-tight mb-4">{event.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-gray-800 font-semibold">
              {event.organizer?.name ?? "User deleted"}
            </span>
          </div>
          <span className="text-gray-600">
            {new Date(event.start).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
