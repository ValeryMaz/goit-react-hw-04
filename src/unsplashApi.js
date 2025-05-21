import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export default async function fetchApi(query, page = 1) {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      page,
      perPage: 12,
    },
    headers: {
      Authorization: 'Client-ID Mgp6ciH6wzZ5mfd85pwGrIyDSgksuFL5Utpe1RcBy5g',
      'X-API-ID': '751395',
    },
  });
  //   console.log(response);
  return response.data.results;
}
