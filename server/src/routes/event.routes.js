
import { Router } from 'express';
import EventModel from '../models/Event.js';
const router = Router();

// controllers
import { getAllEvents, getEventsById, createEvent, updateEvent, deleteEvent } from '../controllers/event.controller.js';


router.post('/', createEvent);
router.get('/', getAllEvents);
router.get('/:id', getEventsById)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)

export default router;