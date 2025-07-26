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
export const updateEvent = async (eventData) => {
  const id = eventData.get("id");
  if (id == null) return;
  const response = await fetch(`${apiBaseUrl}/events/${id}`, {
    method: "PUT",
    credentials: "include",
    body: eventData,
  }).then((r) => r.json());
  return response;
};
