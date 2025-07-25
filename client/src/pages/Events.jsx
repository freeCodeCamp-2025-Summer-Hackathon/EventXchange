import EventCard from "../components/EventCard";
import eventDummy from "../../lib/event-dummy.js";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { api } from "../helpers/api";
import { useEffect } from "react";
import { useState } from "react";

const Events = () => {
    const [tempEvents, setTempEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await api("GET", "/events");
        

        if (response == null) {
            setTempEvents([]);
        }

        return response;
    };

    useEffect(() => {
        fetchEvents().then(events => {
            const tempEvents = [...events].sort(
                (a, b) => new Date(`${a.start[0]} ${a.start[1]}`) - new Date(`${b.start[0]} ${b.start[1]}`)
            );

            setTempEvents(tempEvents);
        });
    }, []);

    if (!tempEvents || tempEvents.length === 0) {
        return (
            <div className="text-2xl font-bold text-center mt-10">
                No upcoming events available.
                <div className="flex justify-center mt-4">
                    <a href="events/create-event">
                        <div className="mt-4 p-2 bg-blue-500 text-white rounded"> Create an Event </div>
                    </a>
                    <button className="mt-4 p-2 bg-gray-500 text-white rounded" onClick={() => fetchEvents()}>
                        Refresh Events
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="p-4 w-full max-w-8xl mx-auto overflow-x-auto">
            <h1 className="text-4xl font-bold text-center">Upcoming Events</h1>
            <div className="mb-4 overflow-x-auto">
                <Carousel
                    responsive={{
                        superLargeDesktop: {
                            breakpoint: { max: 4000, min: 3000 },
                            items: 5
                        },
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 3
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1
                        }
                    }}
                >
                    {tempEvents.map((event) => (
                        <EventCard key={event.id} event={event}/>
                    ))}
                </Carousel>
            </div>
            <div className="flex justify-center mt-4 space-x-8">
                <a href="events/create-event">
                    <div className="mt-4 p-2 bg-blue-500 text-center text-white rounded w-48"> Create an Event </div>
                </a>
                <button className="mt-4 p-2 bg-gray-500 text-center text-white rounded w-48 cursor-pointer" onClick={() => fetchEvents()}>
                    Refresh Events
                </button>
            </div>
        </div>
    );
};

export default Events;