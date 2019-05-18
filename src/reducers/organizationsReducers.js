export function organizations(
  state = {
    organizationsSet: []
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
    default:
      return state;
  }
}
