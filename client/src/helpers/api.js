export async function api(method, endpoint, body) {
  return await fetch(`http://localhost:3000/api/v1${endpoint}`, {
    method,
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: body == null ? undefined : JSON.stringify(body),
  }).then((r) => r.json());
}