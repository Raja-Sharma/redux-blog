import axios from 'axios'

const ROOT_URL = 'http://127.0.0.1:3000'

export function fetchEntries() {
  const request = axios.get(`${ROOT_URL}/entries`)
  return {
    type: 'FETCH_ENTRIES',
    payload: request
  }

}
