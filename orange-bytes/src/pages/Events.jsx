import EventCard from "../components/EventCard";
import EventDesc from "../components/EventDesc";

const Events = () => {
    const tempEvents = [
        { id: 1, title: "Event 1", description: "Description for Event 1", date: "2023-10-01T10:00:00Z", location: "New York", attendees: 100 },
        { id: 2, title: "Event 2", description: "Description for Event 2", date: "2023-10-02T12:00:00Z", location: "Los Angeles", attendees: 200 },
        { id: 3, title: "Event 3", description: "Description for Event 3", date: "2023-10-03T14:00:00Z", location: "Chicago", attendees: 300 },
    ];

    return (
        <div className="p-4 w-full max-w-8xl mx-auto overflow-hidden">
            <h1 className="text-4xl font-bold mb-2 text-center">Upcoming Events</h1>
            <div className="mb-4 flex items-center">
                <div className="flex flex-col gap-4 w-1/2 p-4">
                    {tempEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
                <div className="mb-4 w-1/2 p-4-auto h-[calc(100vh-15rem)] ">
                    <EventDesc event={tempEvents[0]} />
                </div>
            </div>
        </div>
    );
};

export default Events;