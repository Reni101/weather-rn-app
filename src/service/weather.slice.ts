import {createSelector, createSlice} from '@reduxjs/toolkit'
import {createAppAsyncThunk} from "../utils/create-app-async-thunk";
import {weatherApi} from "../api/weather.api";
import {weatherRes} from "../api/type";
import {RootState} from "./store";


export const getWeather = createAppAsyncThunk<any, { lat: number, lon: number, day: number }>(
    'weatherReducer/getWeather',
    async (params, {rejectWithValue}) => {
        try {
            const res = await weatherApi.getWeather(params.lat, params.lon, params.day)
            return res.data

        } catch (e) {
            return rejectWithValue(e)
        }


    }
)
const initialState = {} as weatherRes

const slice = createSlice({
    name: 'weatherReducer',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getWeather.fulfilled, (state, action) => {
            return action.payload
        })
    }

})

export const {} = slice.actions
export const weatherReducer = slice.reducer

export const selectState = (state: RootState) => state.weather
export const selectWeather = createSelector(selectState, (state) => {

    const arr:weatherItemType[] = []
    for (let i = 1; i < state.daily?.time.length; i++) {
        arr[i - 1] = {
            max: state.daily.temperature_2m_max[i],
            min: state.daily.temperature_2m_min[i],
            time: state.daily.time[i]
        }
    }

    return arr
})

export type weatherItemType = {
    time: string,
    min: number,
    max: number
}