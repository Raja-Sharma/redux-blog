import axios from 'axios'

const ROOT_URL = 'https://secure-mountain-36871.herokuapp.com/'

export function fetchEntries() {
  const request = axios.get(`${ROOT_URL}/entries`)
  return {
    type: 'FETCH_ENTRIES',
    payload: request
  }
}

export function fetchEntry(id) {
  const request = axios.get(`${ROOT_URL}/entries/${id}`)
  return {
    type: 'FETCH_ENTRY',
    payload: request
  }
}
