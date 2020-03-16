import axios from "axios";
import { Facility } from "types";
import store from "store/store";
import updateFacilitiesStatus, {
  FACILITIES_STATUSES
} from "actions/updateFacilitiesStatus";
import { SERVER_PORT } from "../consts";

async function getFacilities(query = "camp"): Facility[] {
  const { dispatch } = store;

  const url = `http://localhost:${SERVER_PORT}/facilities/${query}`;
  console.log(updateFacilitiesStatus(FACILITIES_STATUSES[2]));
  const updateStatusToPending = updateFacilitiesStatus(FACILITIES_STATUSES[1]);
  const updateStatusToSuccess = updateFacilitiesStatus(FACILITIES_STATUSES[2]);
  dispatch(updateStatusToPending);
  const { data } = await axios.get(url);

  return data;
}

export default getFacilities;
