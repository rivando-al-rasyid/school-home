export default defineEventHandler(async () => {
  return await $fetch('http://127.0.0.1:8000/events');
});
