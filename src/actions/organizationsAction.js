export function organizationsFetchDataSuccess(data) {
  return {
    type: "ORGANIZATIONS_FETCH_DATA_SUCCESS",
    payload: data
  };
}

export function organizationsFetchData(url) {
  console.log("===== fetching data for orgs =====");
  return dispatch => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(organizationsFetchDataSuccess(data)))
      .catch(() => {});
  };
}

export function organizationsNearbyFetchDataSuccess(data) {
  return {
    type: "ORGANIZATIONS_NEARBY_FETCH_DATA_SUCCESS",
    payload: data
  };
}

export function organizationsNearbyFetchData(url) {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          distance: 1
        })
      })
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(data => dispatch(organizationsNearbyFetchDataSuccess(data)))
        .catch(() => {});
    });
  };
}
