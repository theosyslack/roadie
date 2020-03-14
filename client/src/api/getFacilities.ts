import axios from 'axios';
import {Facility} from 'types';

const SERVER_PORT = process.env.SERVER_PORT;

async function getFacilities(query = "camp"): Facility[] {
  const {data} = await axios.get(`http://localhost:${SERVER_PORT}/facilities/${query}`)

  return data;
}

export default getFacilities