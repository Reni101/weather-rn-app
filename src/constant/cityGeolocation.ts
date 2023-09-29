import {geolocationType} from "../service/weather.slice";

type CityGeolocationType = {
    [key: string]: geolocationType
}

export const cityGeolocation: CityGeolocationType = {
    'My location': {
        lat: null,
        lon: null
    },
    "Brest": {
        lat: 52.097622,
        lon: 23.734051,
    },
    "Vitebsk": {
        lat: 55.112544,
        lon: 30.201622,
    },
    "Gomel": {
        lat: 52.441176,
        lon: 30.987846,
    },
    "Grodno": {
        lat: 53.669353,
        lon: 23.813131,
    },
    "Mogilev": {
        lat: 53.900716,
        lon: 30.331360,
    },
    "Minsk": {
        lat: 53.893009,
        lon: 27.567444,
    },
}
