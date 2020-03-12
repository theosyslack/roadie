// {
//   "FacilityID": "233503",
//   "LegacyFacilityID": "73193",
//   "OrgFacilityID": "AN373193",
//   "ParentOrgID": "130",
//   "ParentRecAreaID": "159",
//   "FacilityName": "GRANT RIVER",
//   "FacilityDescription": "<h2>Overview</h2>\nSpread along the banks of the Upper Mississippi River, the Grant River Campground, located in the \"Catfish Capital of Wisconsin,\" is a modern campground that offers a plethora of outdoor and recreational activities.<h2>Recreation</h2>\nThe famous fishing on the Mississippi River draws crowds of anglers each year. The most popular species is the channel catfish, earning the city of Potosi the nickname \"Catfish Capital of Wisconsin.\" Other species include bluegill, walleye, crappie, northern pike and bass. \n<br/><br/>\nAside from fishing, boating and water sports are the most popular activities, and a boat ramp is available at the campsite for visitors. <h2>Facilities</h2>\nPicnic shelter and a playgrounds create an ideal environment for a small party or family get-together. Both tent and RV sites are available, and amenities like showers, drinking water and flush toilets offer a comfortable camping experience.<h2>Natural Features</h2>\nSurrounding the large campsite is a lush river landscape with towering bluffs and beautiful sunsets, creating a nature experience for visitors without losing the comforts of modern camping.  \n  \n\n<h2>Nearby Attractions</h2>\n<p>Potosi Brewing Company Restauraunt & Museum (Potosi, WI - 2 miles)</p>\n<p>Lock and Dam 11 (Dubuque, IA - 19 miles)</p>\n<p>National Mississippi River Museum & Aquarium (Dubuque, IA - 20 miles)</p>\n<p>Diamond Jo Casino & The Q Casino (Dubuque, IA - 20 miles)</p>\n<p>Historic sites, Antiques, Fine Dining (Galena, IL - 28 miles)</p>\n",
//   "FacilityTypeDescription": "Campground",
//   "FacilityUseFeeDescription": "",
//   "FacilityDirections": "From WI-133, Turn East on River Lane (two miles south of Potosi) and follow the directional signs approximately two miles to the campground. \nFrom US-61/WI-35, Turn S on River Lane and follow directional signs to campground.",
//   "FacilityPhone": "RANGER OFFICE - 563-582-0881 / CAMPGROUND ENTRANCE STATION - 608-763-2140",
//   "FacilityEmail": "",
//   "FacilityReservationURL": "",
//   "FacilityMapURL": "",
//   "FacilityAdaAccess": "N",
//   "GEOJSON": {
//     "TYPE": "Point",
//     "COORDINATES": [
//       -90.7097222,
//       42.6594444
//     ]
//   }


import { RawResultData, ResultData } from "../types";
import transformStringToUppercase from "./transformStringToUppercase";

export function transformRawResultDataToResultData(data: RawResultData): ResultData {
  const { FacilityName, FacilityDescription, FacilityTypeDescription, FacilityID, FacilityMapURL } = data;

  return {
    id: FacilityID,
    mapUrl: FacilityMapURL,
    name: transformStringToUppercase(FacilityName),
    description: FacilityDescription,
    type: FacilityTypeDescription
  }
}
