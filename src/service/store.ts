import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {weatherReducer} from "./weather-slice";


const rootReducer = combineReducers({
    weather: weatherReducer,
})


export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
