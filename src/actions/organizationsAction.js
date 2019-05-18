export function organizationsFetchDataSuccess(data) {
  return {
    type: "ORGANIZATIONS_FETCH_DATA_SUCCESS",
    payload: data
  };
}

export function organizationsFetchData(url) {
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


export function organizationsNearbyFetchData(url, payload) {
  return dispatch => {
    fetch(url, payload)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(organizationsNearbyFetchDataSuccess(data)))
      .catch(() => {});
  };
}