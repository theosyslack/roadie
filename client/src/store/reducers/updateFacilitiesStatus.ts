import {updateFacilitiesType, FACILITIES_STATUSES} from 'actions/updateFacilities'



export default (state, status) => {
  const isValidStatus = FACILITIES_STATUSES.includes(status);
  if (payload && isValidStatus) {
    return {...state, status};
  } else if (!isValidStatus) {
    console.log(`${status} is not a valid status.`)
    return state;
  } else {
    return state;
  }
};
