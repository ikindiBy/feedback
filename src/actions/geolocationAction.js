//not used


export function getLocation() {
  console.log("!!!!");

  return dispatch => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(position => {
      console.log("!!!!coords", position.coords);
      dispatch({
        type: "GET_GEOLOCATION",
        payload: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
    });
  };
}
