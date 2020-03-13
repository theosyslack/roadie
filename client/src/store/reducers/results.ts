import transform from "transform/transformRawResultDataToResultData";
import facilities from "../default/facilities";

const DEFAULT_STATE = facilities.map(transform);

export default function resultReducer(
  state = DEFAULT_STATE,
  { type, payload }
) {
  switch (type) {
    default:
      return state;
  }
}
