import { FACILITIES_STATUSES } from "../actions/updateFacilitiesStatus";
import { Facility } from "../../types";

export default (state, facilities: Facility[]) => {
  console.log(`Added ${facilities.length} facilities`);
  if (facilities) {
    return { ...state, facilities };
  } else {
    return state;
  }
};
