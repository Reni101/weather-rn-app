import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {createAppAsyncThunk} from "../common/utils/create-app-async-thunk";
import {weatherApi} from "../api/weather.api";
import {weatherResType} from "../api/type";
import {RootState} from "./store";


export const getWeather = createAppAsyncThunk<weatherResType, { day: number }>(
    'weatherReducer/getWeather',
    async (params, {rejectWithValue, getState}) => {

        try {
            const {lat, lon} = getState().weather.geolocation
            const res = await weatherApi.getWeather(lat!, lon!, params.day)
            return res.data

        } catch (e) {
            return rejectWithValue(e)
        }


    }
)

type initStateType = {
    weatherRes: weatherResType,
    geolocation: geolocationType
}

const initialState: initStateType = {
    weatherRes: {} as weatherResType,
    geolocation: {
        lat: null,
        lon: null
    }
}

const slice = createSlice({
    name: 'weatherReducer',
    initialState,
    reducers: {
        setLocation(state, action: PayloadAction<geolocationType>) {
            state.geolocation.lat = action.payload.lat
            state.geolocation.lon = action.payload.lon
        }
    },
    extraReducers: builder => {
        builder.addCase(getWeather.fulfilled, (state, action) => {
            state.weatherRes = action.payload
        })
    }

})

export const {setLocation} = slice.actions
export const weatherReducer = slice.reducer

export const selectState = (state: RootState) => state.weather.weatherRes
export const selectCurrentWeather = (state: RootState) => state.weather.weatherRes.current_weather
export const selectGeolocation = (state: RootState) => state.weather.geolocation
export const selectWeather = createSelector(selectState, (state) => {

    const arr: weatherItemType[] = []
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

export type geolocationType = {
    lat: null | number,
    lon: null | number
}

