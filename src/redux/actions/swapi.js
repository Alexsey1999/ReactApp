import axios from 'axios'

export const setPeople = (payload) => ({
  type: 'SET_PEOPLE',
  payload,
})

export const setLoading = (payload) => ({
  type: 'SET_LOADING',
  payload,
})

export const swapiRequest = () => {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios
      .get('https://swapi.dev/api/people/')
      .then((response) => {
        dispatch(setPeople(response.data.results))
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}
