const EventDesc = ({ event }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 h-full">
            <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
            <hr className="my-2" />
            <p className="text-gray-500 text-md mb-2">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-500 text-md mb-2">Time: {new Date(event.date).toLocaleTimeString()}</p>
            <p className="text-gray-500 text-md mb-2">Location: {event.location}</p>
            <p className="text-gray-500 text-md mb-2">Attendees: {event.attendees}</p>
            <p className="text-gray-700 mb-2 min-h-24 max-h-48 overflow-auto w-full bg-gray-100 align-middle mb-6 p-2">{event.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer w-full">
                Register
            </button>
        </div>
    );
}

export default EventDesc;