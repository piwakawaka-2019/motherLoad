export const GET_LOCATION = 'GET_LOCATION'

export function saveLocation(location) {
  return {
    type: GET_LOCATION,
    location
  };
}

