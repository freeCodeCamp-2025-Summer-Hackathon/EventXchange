import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventCard from "../components/EventCard";
import { getAllEvents } from "../services/eventService.js";
import React, { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [user] = useContext(UserContext);

  const fetchEvents = async () => {
    const response = await getAllEvents();
    if (response.error != null) {
      // TODO: notify the user
      console.error(response.error);
      setEvents([]);
      return;
    }
    setEvents(response);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="p-4 w-full max-w-8xl mx-auto overflow-x-auto">
      {events && events.length > 0 && (
        <>
          <h1 className="text-4xl font-bold text-center">Upcoming Events</h1>
          <div className="mb-4 overflow-x-auto">
            <Carousel
              responsive={{
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 3000 },
                  items: 5,
                },
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 3,
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 2,
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                },
              }}
            >
              {events.slice(0, 5).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </Carousel>
          </div>
        </>
      )}
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8">
        {events.map((event) => (
            <EventCard key={event.id} event={event} />
        ))}
      </div>
      {(!events || events.length === 0) && (
        <div className="text-2xl font-bold text-center mt-10">
          No upcoming events available.
        </div>
      )}
      <div className="flex justify-center mt-4 space-x-8">
        {user && (
          <Link to="events/create-event" className="mt-4 p-2 bg-darkTangerine text-center text-white rounded w-48">
              Create an Event
          </Link>
        )}
        <button
          className="mt-4 p-2 bg-gray-500 text-center text-white rounded w-48 cursor-pointer"
          onClick={() => fetchEvents()}
        >
          Refresh Events
        </button>
      </div>
    </div>
  );
};

export default Events;
