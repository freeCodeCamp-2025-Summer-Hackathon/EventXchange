import { apiBaseUrl } from "../helpers/api";

export const createEvent = async (eventData) => {
  const response = await fetch(apiBaseUrl + "/events", {
    method: "POST",
    credentials: "include",
    body: eventData,
  }).then((r) => r.json());
  return response;
};

/**
 * Gets all events from the api
 */
export const getAllEvents = async () => {
  const response = await fetch(`${apiBaseUrl}/events`, {
    credentials: "include",
  }).then((r) => r.json());
  return response;
};

/**
 * Gets a single event from the api
 * @param {string} id
 */
export const getEvent = async (id) => {
  const response = await fetch(`${apiBaseUrl}/events/${id}`, {
    credentials: "include",
  }).then((r) => r.json());
  return response;
};

/**
 * Updates an event
 * @params {id} string
 * @param {FormData} eventData
 */
export const updateEvent = async (id, eventData) => {
  if (id == null) return;
  const response = await fetch(`${apiBaseUrl}/events/${id}`, {
    method: "PATCH",
    credentials: "include",
    body: eventData,
  }).then((r) => r.json());
  return response;
};

/**
 * RSVP to an event
 * @params {Object} event
 * @params {string} userId
 * @params {boolean} going
 */
export const rsvpEvent = async (event, userId, going = true) => {
  if (event == null) return;
  const attendees = going
    ? event.attendees.concat(userId)
    : event.attendees.filter((id) => id !== userId);
  const data = new FormData();
  attendees.forEach((attendee) => {
    data.append("attendees[]", attendee);
  });
  const response = await fetch(`${apiBaseUrl}/events/${event.id}`, {
    method: "PATCH",
    credentials: "include",
    body: data,
  }).then((r) => r.json());
  return response;
};
