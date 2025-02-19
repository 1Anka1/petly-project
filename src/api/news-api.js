import axios from 'axios';

const getNewsAPI = axios.create({ baseURL: 'https://content.guardianapis.com' });

export async function getNews() {
  try {
    const { data } = await getNewsAPI('/search', {
      params: {
        'api-key': '2e7e609f-60c0-4a89-a416-d5c3b63f7d43',
        q: 'animals',
        page: 1,
        tag: 'world/animals',
        'show-fields': 'thumbnail',
      },
    });
    return data.response.results.slice(0, 6);
  } catch (error) {
    console.error(error);
  }
}
