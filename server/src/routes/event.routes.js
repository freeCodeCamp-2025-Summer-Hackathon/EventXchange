import {Router} from 'express';
import multer from 'multer';
import path from 'node:path';
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  updateEvent,
} from '../controllers/event.controller.js';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
      const originalname = file.originalname;
      const extension = path.extname(originalname);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const newFilename = file.fieldname + '-' + uniqueSuffix + extension;
      cb(null, newFilename);
    },
  }),
});

export const eventsRouter = Router();

eventsRouter.post('/', upload.array('photos', 12), async (req, res) => {
  try {
    const photos = req.files
      .filter(f => f.mimetype.startsWith('image/'))
      .map(f => `/uploads/${f.filename}`);
    const newEvent = await createEvent({
      ...req.body,
      organizer: req.session.user.id,
      photos,
    });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

eventsRouter.get('/', async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

eventsRouter.get('/:id', async (req, res) => {
  try {
    const event = await getEventById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    const statusCode = error.message.includes('not found') ? 404 : 500;
    res.status(statusCode).json({error: error.message});
  }
});

eventsRouter.patch('/:id', upload.array(12, 'photos'), async (req, res) => {
  try {
    const updated = await updateEvent(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    const statusCode = error.message.includes('not found') ? 404 : 400;
    res.status(statusCode).json({error: error.message});
  }
});

eventsRouter.delete('/:id', async (req, res) => {
  try {
    const result = await deleteEvent(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    const statusCode = error.message.includes('not found') ? 404 : 500;
    res.status(statusCode).json({error: error.message});
  }
});
