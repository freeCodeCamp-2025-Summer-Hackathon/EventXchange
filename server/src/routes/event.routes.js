import {Router} from 'express';
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  updateEvent,
} from '../controllers/event.controller.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const newEvent = await createEvent(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

router.get('/', async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const event = await getEventById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    const statusCode = error.message.includes('not found') ? 404 : 500;
    res.status(statusCode).json({error: error.message});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await updateEvent(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    const statusCode = error.message.includes('not found') ? 404 : 400;
    res.status(statusCode).json({error: error.message});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await deleteEvent(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    const statusCode = error.message.includes('not found') ? 404 : 500;
    res.status(statusCode).json({error: error.message});
  }
});

export default router;
