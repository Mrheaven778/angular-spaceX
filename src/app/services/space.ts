import { APISpacesXResponse, Doc } from '../Interface/doc';

export const getLatestLaunches = async () => {
  const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        query: {},
        sort: {
          date_unix: 'asc',
        },
        limit: 12,
      },
    }),
  });
  const { docs } = (await res.json()) as APISpacesXResponse;
  return docs;
};