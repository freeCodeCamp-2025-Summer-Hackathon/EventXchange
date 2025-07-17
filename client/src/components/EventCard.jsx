const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{event.title}</h2>
      <p className="text-gray-700 mb-2">{event.description}</p>
      <p className="text-gray-500 text-sm">Date: {new Date(event.date).toLocaleDateString()}</p>
      <p className="text-gray-500 text-sm">Time: {new Date(event.date).toLocaleTimeString()}</p>
    </div>
  );
}

export default EventCard;