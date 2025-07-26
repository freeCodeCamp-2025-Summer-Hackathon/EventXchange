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
 * @param {FormData} eventData
 */
export const updateEvent = async (id, eventData) => {
  if (id == null) return;
  const response = await fetch(`${apiBaseUrl}/events/${id}`, {
    method: "PUT",
    credentials: "include",
    body: eventData,
  }).then((r) => r.json());
  return response;
};
