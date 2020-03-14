import transform from "transform/transformRawResultDataToResultData";
import {updateFacilitiesType} from 'actions/updateFacilities'
import updateFacilities from 'reducers/updateFacilities'


import facilities from "../default/facilities";

const DEFAULT_STATE = facilities.map(transform);

export default function facilitiesReducer(
  state = [],
  { type, payload }
) {
  switch (type) {
    case updateFacilitiesType:
      return updateFacilities(state, payload)
    default:
      return state;
  }
}
