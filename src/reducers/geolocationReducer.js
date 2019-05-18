export function geolocation(
  state = {
    location: {
      latitude: 0,
      longitude: 0
    },
    distance: 1
  },
  action
) {
  console.log("----------", action);
  switch (action.type) {
    case "GET_GEOLOCATION":
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
}
