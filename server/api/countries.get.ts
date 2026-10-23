const uuidv4: string | null = 'ed536916-dfd9-41a7-bcde-247887cc6b52';

export default defineEventHandler(async () => {
  try {
    const response = await $fetch(`https://www.airalo.com/api/v2/countries`, {
      headers: uuidv4 ? { Authorization: `Bearer ${uuidv4}` } : {},
    });
    return response;
  } catch (error: unknown) {
    const err = error as { statusCode?: number; message?: string };
    throw createError({
      statusCode: err.statusCode ?? 500,
      statusMessage: err.message ?? 'Failed to fetch countries',
    });
  }
});
