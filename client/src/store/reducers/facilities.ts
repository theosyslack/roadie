import { addNewFacilities } from '../actions/addNewFacilities';
import { FACILITIES_STATUSES } from '../actions/updateFacilitiesStatus';


const DEFAULT_STATE = {
  entities: {}
  status: FACILITIES_STATUSES[0]
}

export default function facilitiesReducer(
  state = [],
  { type, payload }
) {
  switch (type) {
    case addNewFacilities:
      return updateFacilities(state, payload)
    default:
      return state;
  }
}
