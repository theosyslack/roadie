import getFacilities from "../../api/getFacilities";
import transformRawFacilityToFacility from "../transform/transformRawFacilityToFacility";

const addFacilitiesRoutes = app => {
  app.get("/facilities/:query?", async (req, res) => {
    const { query } = req.params;

    const rawFacilities = await getFacilities({ query });
    const facilities = rawFacilities.map(transformRawFacilityToFacility);

    res.json(facilities);
  });
};

export default addFacilitiesRoutes;
