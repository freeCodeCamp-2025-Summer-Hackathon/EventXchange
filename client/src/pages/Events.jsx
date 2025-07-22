import EventCard from "../components/EventCard";
import eventDummy from "../../lib/event-dummy.js";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Events = () => {
    const tempEvents = [...eventDummy].sort((a, b) => new Date(a.start) - new Date(b.start));

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
        </div>
    );
};

export default Events;