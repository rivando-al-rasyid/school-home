export default defineEventHandler(async (event) => {
  // Get the HTTP method and route parameters
  const method = event.method;
  const { id } = getRouterParams(event);
  const url = getRequestURL(event);
  const path = url.pathname;
  
  // Handle different endpoints based on HTTP method and path
  
  // GET /events (list all events)
  if (method === 'GET' && !id) {
    return await $fetch('http://127.0.0.1:8000/api/events');
  }
  
  // GET /events/:id (get event details)
  if (method === 'GET' && id) {
    return await $fetch(`http://127.0.0.1:8000/api/events/${id}`);
  }
  
  // POST /events (create new event)
  if (method === 'POST') {
    const body = await readBody(event);
    return await $fetch('http://127.0.0.1:8000/api/events', {
      method: 'POST',
      body,
    });
  }
  
  // PUT /events/:id (update event)
  if (method === 'PUT' && id) {
    const body = await readBody(event);
    return await $fetch(`http://127.0.0.1:8000/api/events/${id}`, {
      method: 'PUT',
      body,
    });
  }
  
  // DELETE /events/:id (delete event)
  if (method === 'DELETE' && id) {
    return await $fetch(`http://127.0.0.1:8000/api/events/${id}`, {
      method: 'DELETE',
    });
  }
  
  // If no handler matches, return 404
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
    message: `No handler for ${method} ${path}`,
  });
});
