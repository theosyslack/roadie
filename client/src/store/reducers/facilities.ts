import { addNewFacilitiesType } from "../actions/addNewFacilities";
import addNewFacilities from "../reducers/addNewFacilities";
import {
  updateFacilitiesStatusType,
  FACILITIES_STATUSES
} from "../actions/updateFacilitiesStatus";
import updateFacilitiesStatus from "../reducers/updateFacilitiesStatus";

const DEFAULT_STATE = {
  entities: {},
  ids: [],
  status: FACILITIES_STATUSES[0]
};

export default function facilitiesReducer(
  state = DEFAULT_STATE,
  { type, payload }
) {
  switch (type) {
    case updateFacilitiesStatusType:
      return updateFacilitiesStatus(state, payload);
    case addNewFacilitiesType:
      return addNewFacilities(state, payload);
    default:
      return state;
  }
}
