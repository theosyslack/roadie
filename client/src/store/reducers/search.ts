import {updateSearchType} from 'actions/updateSearch'
import updateSearch from 'reducers/updateSearch'

export default function searchReducer(state = "", { type, payload }) {
  switch (type) {
    case updateSearchType;
      return updateSearch(state, payload)
    default:
      return state;
  }
}
