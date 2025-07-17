import EventModel from "../models/Event";

const Event = EventModel;

// Getters

// GET /events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1} );
    res.status(200).json(events);
  } catch (error) {
    console.error("Error in getAllEvents controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// GET /events/:id
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Note not found!"});
    res.json(event);
  } catch (error) {
    console.error("Error in getEventById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Posters

// POST /events
const createEvent = async (req, res) => {
  try {
    const newEvent = new Event({
      ...req.body,
      createdAt: new Date(),
    });
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error("Error in createEvent:", error);
    res.status(400).json({ message: "Failed to create event" });
  }
};



// Export handlers
export {
  getAllEvents,
  getEventById,
  createEvent,
}