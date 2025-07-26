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

// export const updateEvent = async (id, eventData) => {
//   eventData.
//   const response = await fetch(apiBaseUrl + "/events", {
//     method: "PUT",
//     credentials: "include",
//     body: eventData,
//   }).then((r) => r.json());
//   return response;
// };
