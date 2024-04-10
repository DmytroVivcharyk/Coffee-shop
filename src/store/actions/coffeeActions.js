import axios from "axios";
import { coffeeFetching, coffeeFetched, coffeeFetchingError } from '../slices/coffeeSlice.js'

export const fetchCoffee = () => {
    return async (dispatch) => {
        dispatch(coffeeFetching())
        try {
            const response = await axios.get('http://localhost:3100/coffee')

            dispatch(coffeeFetched(response.data))
        } catch (e) {
            dispatch(coffeeFetchingError(e))
        }
    }
}
