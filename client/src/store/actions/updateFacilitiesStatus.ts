export const updateFacilitiesStatusType = "[facilities] UPDATE_STATUS";

export const FACILITIES_STATUSES = ["WAITING", "PENDING", "SUCCESS", "FAILURE"]

export default (payload: string) => ({
  type: updateFacilitiesStatusType,
  payload
});
