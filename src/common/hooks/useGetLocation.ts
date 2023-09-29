import {useEffect, useState} from "react";
import * as Location from "expo-location";
import {LocationObject} from "expo-location";

export const useGetLocation = () => {
    const [location, setLocation] = useState<LocationObject | null>(null);

  useEffect(()=>{
      (async () => {

          let {status} = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
              console.log("error")
              return;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
      })();
  },[])

    return {lat:location?.coords.latitude,lon:location?.coords.longitude}
}