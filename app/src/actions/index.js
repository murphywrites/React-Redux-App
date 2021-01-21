import axios from 'axios'
export const FETCH_BREWERY_START = "FETCH_BREWERY_START"
export const FETCH_BREWERY_SUCCESS = "FETCH_BREWERY_SUCCESS"
export const FETCH_BREWERY_FAIL = "FETCH_BREWERY_FAIL"

const yourCity = 'chicago'

export const fetchBreweries = () => dispatch => {
    dispatch({ type: FETCH_BREWERY_START});
    axios
    .get(`https://api.openbrewerydb.org/breweries?by_city=${yourCity}`)
    .then((res) => {
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
        let randomNumber = getRandomArbitrary(0, 19)
        console.log(res.data[randomNumber])

        dispatch({ type: FETCH_BREWERY_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        console.log(err)
        dispatch({ type: FETCH_BREWERY_FAIL, payload:err.response})
    })
}