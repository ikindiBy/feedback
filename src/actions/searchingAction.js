export function setSearchingParams(word) {
  return {
    type: "SET_SEARCHING_PARAMS",
    payload: { word }
  };
}

export function showMessageEmptyParams() {
  return {
    type: "SHOW_EMPTY_PARAMS"
  };
}
