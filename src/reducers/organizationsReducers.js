export function organizations(
  state = {
    organizationsSet: [],
    organizationsNearbySet: []
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
        organizationsSet: action.payload
        // total: action.payload.total
      };
    default:
      return state;
  }
}
