import axios from "axios";
import { Facility } from "types";
import store from "store/store";
import updateFacilitiesStatus, {
  FACILITIES_STATUSES
} from "actions/updateFacilitiesStatus";
import addNewFacilities from 'actions/addNewFacilities';
import { SERVER_PORT } from "../consts";

async function getFacilities(query = "camp"): Facility[] {
  const { dispatch } = store;

  const url = `http://localhost:${SERVER_PORT}/facilities/${query}`;

  const updateStatusToPending = updateFacilitiesStatus(FACILITIES_STATUSES[1]);
  const updateStatusToSuccess = updateFacilitiesStatus(FACILITIES_STATUSES[2]);
  const updateStatusToFailure = updateFacilitiesStatus(FACILITIES_STATUSES[3]);

  dispatch(updateStatusToPending);

  const { data, status, ..rest  } = await axios.get(url).catch((e) => {
    const {message, name, code} = e.toJSON()
    dispatch(updateStatusToFailure);
    console.error(message)
    return {}
  });

  const ok = status >= 200 && status < 400

  if (ok) {
    dispatch(updateStatusToSuccess);
    dispatch(addNewFacilities(data));
    return data;
  } else {
    dispatch(updateStatusToFailure);
    console.error(`Error: Status ${status}`)
    return []
  }

  return data;
}

export default getFacilities;
