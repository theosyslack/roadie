import axios from 'axios';
import {Facility} from 'types';

async function getFacilities(query = "camp"): Facility[] {
  const {data} = await axios.get(`http://localhost:5000/facilities/${query}`)

  return data;
}

export default getFacilities