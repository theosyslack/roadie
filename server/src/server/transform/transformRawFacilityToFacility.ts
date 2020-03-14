import { RawResultData, ResultData } from "../../types";
import transformStringToUppercase from "./transformStringToUppercase";

export default function transformRawResultDataToResultData(
  data: RawResultData
): ResultData {
  const {
    FacilityName,
    FacilityDescription,
    FacilityTypeDescription,
    FacilityID,
    FacilityMapURL
  } = data;

  return {
    id: FacilityID,
    mapUrl: FacilityMapURL,
    name: transformStringToUppercase(FacilityName),
    description: FacilityDescription,
    type: FacilityTypeDescription
  };
}
