import { FACILITIES_STATUSES } from '../actions/updateFacilitiesStatus';



export default (state, status: string) => {
  const isValidStatus = FACILITIES_STATUSES.includes(status);
  if (status && isValidStatus) {
    return { ...state, status };
  } else if (!isValidStatus) {
    console.log(`${status} is not a valid status.`)
    return state;
  } else {
    return state;
  }
};
