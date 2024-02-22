const uuidv4: string | null = "ed536916-dfd9-41a7-bcde-247887cc6b52";

export default defineEventHandler(async () => {
  
  const response = await $fetch(`https://airalo.com/api/v2/countries`);
  return response
});
