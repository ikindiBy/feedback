export function organizations(
  state = {
    organizationsSet: [],
    organizationsNearbySet: [],
    distance: 1
  },
  action
) {
  console.log("----------", action);
  switch (action.type) {
    case "ORGANIZATIONS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        organizationsSet: action.payload
        // total: action.payload.total
      };
    case "ORGANIZATIONS_NEARBY_FETCH_DATA_SUCCESS":
      return {
        ...state,
        organizationsNearbySet: action.payload
        // total: action.payload.total
      };
    case "INCREASE_DISTANCE":
      return {
        ...state,
        distance: action.payload
      };
    default:
      return state;
  }
}
