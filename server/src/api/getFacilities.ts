import axios from "axios";
import memoizeWith from "ramda/src/memoizeWith";
import { RawFacility } from "../types";
import { API_KEY } from "../consts";

async function getFacilities({ query }): RawFacility[] {
  const { data } = await axios({
    method: "GET",
    url: "https://ridb.recreation.gov/api/v1/facilities",
    params: {
      offset: "0",
      state: "WI,IL,MN",
      sort: "Name",
      query
    },
    headers: {
      Accept: "application/json",
      Apikey: API_KEY
    }
  });

  return data.RECDATA;
}

export default memoizeWith(({ query }) => query, getFacilities);
