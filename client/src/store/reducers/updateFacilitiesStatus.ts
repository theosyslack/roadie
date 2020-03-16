import { FACILITIES_STATUSES } from "../actions/updateFacilitiesStatus.ts";

export default (state, status) => {
  const isValidStatus = FACILITIES_STATUSES.includes(status);
  if (status && isValidStatus) {
    return { ...state, status };
  } else if (!isValidStatus) {
    return state;
  } else {
    return state;
  }
};
