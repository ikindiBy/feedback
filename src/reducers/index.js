import { combineReducers } from "redux";

import { search } from "./searchReducers";
import { organizations } from "./organizationsReducers";

export default combineReducers({
  search,
  organizations
});
