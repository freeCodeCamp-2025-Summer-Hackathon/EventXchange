import mongoose from "mongoose"
import {model, Schema} from mongoose;

/**
 * @typedef Event
 * @type {object}
 * @property {string} _id
 * @property {string} title
 * @property {string} description
 * @property {string[]} media
 * @property {Date} createdAt
 * @property {Date} start_date
 * @property {string} location
 * @property {string} organizer
 * @property {string[]} attendees
 * @property {string[]} tags
 */

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  media: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    immutable: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  attendees: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  tags: {
    type: [String],
  }
});

const EventModel = model('Event', eventSchema);

export default EventModel;