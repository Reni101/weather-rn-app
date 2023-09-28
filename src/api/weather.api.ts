//forecast?latitude=53.9&longitude=27.5667&hourly=temperature_2m/

import {instance} from "./instance";
import {weatherRes} from "./type";

export const weatherApi = {
    getWeather(lat:number,lon:number,day:number = 0) {
        return instance.get<weatherRes>(`forecast?daily=temperature_2m_max&daily=temperature_2m_min&current_weather=true`,{
            params:{
                latitude:lat,
                longitude:lon,
                forecast_days:day+1,
            }
        })
    },

}