import { FacilityTypeDescription } from "../types";
export function transformResultTypeToEmoji(
  type: FacilityTypeDescription
): string {
  switch (type) {
    case FacilityTypeDescription.Campground:
      return "🏕️";
    case FacilityTypeDescription.Facility:
      return "🏘️";
    default:
      return "❓";
  }
}
