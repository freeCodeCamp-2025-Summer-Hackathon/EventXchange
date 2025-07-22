import EventModel from "../models/Event";

const Event = EventModel;

// Getters

// GET /events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort({ createdAt: -1} );
    res.status(200).json(events);
  } catch (error) {
    console.error("Error in getAllEvents controller", error);
    res.status(500).json({ message: error.message });
  }
}

// GET /events/:id
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) 
      return res.status(404).json({ message: "Event not found!"});
    res.status(200).json(event);
  } catch (error) {
    console.error("Error in getEventById controller", error);
    res.status(500).json({ message: error.message });
  }
};

// POST /events
const createEvent = async (req, res) => {
  try {
    const newEvent = new Event({
      ...req.body,
      createdAt: new Date(),
    });
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (error) {
    console.error("Error in createEvent:", error);
    res.status(400).json({ message: error.message });
  }
};

// UPDATE /events/:id
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id, req.body);
    if (!event) 
      return res.status(404).json({ message: "Event not found!"});
    const updatedEvent = await Event.findById(id);
    res.status(200).json(updatedEvent)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

// DELETE /events/:id
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id, req.body);
    if (!event) 
      return res.status(404).json({ message: "Event not found!"});
    await Event.findByIdAndDelete(id);
    res.status(200).json({message:`${event.title} deleted successfully`});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}



// Export handlers
export {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
}