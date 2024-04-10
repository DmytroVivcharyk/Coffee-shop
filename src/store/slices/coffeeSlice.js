import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coffee: [],
    isCoffeeLoading: false,
    coffeeError: null,
    activeCoffeeFilter: 'all'
}

const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        coffeeFetching: (state) => {
            state.isCoffeeLoading = true
        },
        coffeeFetched: (state, action) => {
            state.coffee = action.payload
            state.isCoffeeLoading = false
        },
        coffeeFetchingError: (state, action) => {
            state.coffeeError = action.payload
            state.isCoffeeLoading = false
        },
        changeActiveCoffeeFilter: (state, action) => {
            state.activeCoffeeFilter = action.payload
        }
    }
})

const {reducer, actions} = coffeeSlice

export const {coffeeFetching, coffeeFetched, coffeeFetchingError, changeActiveCoffeeFilter} = actions
export default reducer