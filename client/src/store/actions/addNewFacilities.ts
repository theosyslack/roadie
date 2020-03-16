import { Facility } from '../../types';

export const addNewFacilitiesType = "[facilities] ADD_NEW";

export default (payload: Facility[]) => ({
  type: addNewFacilitiesType,
  payload
});
