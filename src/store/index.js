import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import coffee from './slices/coffeeSlice'

const rootReducer = combineReducers({
    coffee
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
})