import EventModel from '../models/Event.js';

// Getters

// GET /events
export async function getAllEvents() {
  try {
    return (await EventModel.find({}).sort({createdAt: -1})).map(
      createEventDTO,
    );
  } catch (error) {
    console.error('Error in getAllEvents controller', error);
    throw new Error('Could not retrieve events.');
  }
}

// GET /events/:id
export async function getEventById(id) {
  try {
    const event = await EventModel.findById(id);
    if (!event) throw new Error('Event not found!');
    return createEventDTO(event);
  } catch (error) {
    console.error('Error in getEventById controller', error);
    throw error; // Re-throw the original error
  }
}

// POST /events
export async function createEvent(eventData) {
  try {
    // Validation should be added here or in a middleware
    const newEvent = new EventModel(eventData);
    const savedEvent = await newEvent.save();
    return createEventDTO(savedEvent);
  } catch (error) {
    console.error('Error in createEvent:', error);
    throw new Error(error.message);
  }
}

// UPDATE /events/:id
export async function updateEvent(id, eventData) {
  try {
    const updatedEvent = await EventModel.findByIdAndUpdate(id, eventData, {
      new: true,
      runValidators: true,
    });
    if (!updatedEvent) throw new Error('Event not found!');
    return createEventDTO(updatedEvent);
  } catch (error) {
    console.error('Error in updateEvent:', error);
    throw new Error(error.message);
  }
}

// DELETE /events/:id
export async function deleteEvent(id) {
  try {
    const event = await EventModel.findByIdAndDelete(id);
    if (!event) throw new Error('Event not found!');
    return {message: `${event.title} deleted successfully`};
  } catch (error) {
    console.error('Error in deleteEvent:', error);
    throw new Error(error.message);
  }
}

function createEventDTO(rawEvent) {
  return {
    id: rawEvent._id.toString(),
    attendees: rawEvent.attendees,
    createdAt: rawEvent.createdAt,
    description: rawEvent.description,
    end: rawEvent.end,
    location: rawEvent.location,
    maxAttendees: rawEvent.maxAttendees,
    online: rawEvent.online,
    organizer: rawEvent.organizer,
    photos: rawEvent.photos,
    start: rawEvent.start,
    title: rawEvent.title,
    updatedAt: rawEvent.updatedAt,
    visibility: rawEvent.visibility,
  };
}
