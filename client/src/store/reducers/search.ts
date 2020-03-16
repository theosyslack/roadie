import {updateSearchType} from 'actions/updateSearch'
import updateSearch from 'reducers/updateSearch'

const DEFAULT_STATE = ""

export default function searchReducer(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case updateSearchType;
      return updateSearch(state, payload)
    default:
      return state;
  }
}
