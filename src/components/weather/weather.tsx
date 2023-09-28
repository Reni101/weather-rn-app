import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Pressable, StatusBar, StyleSheet, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppHooks";
import {getWeather, selectWeather} from "../../service/weather.slice";

import {useGetLocation} from "../../hooks/useGetLocation";
import {weatherItem} from "../../common/weatherItem/weatherItem";
import {LinearGradient} from "expo-linear-gradient";
import {Header} from "../header/header";
import {PADDING, WIDTH} from "../../constant/constant";
import moment from "moment";

const arrDays = [1,3,5]

export const Weather = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.weather)
    const arrWeather = useAppSelector(selectWeather)
    console.log(arrWeather)

    const [day, setDay] = useState(0)


    const {lat, lon} = useGetLocation()

    useEffect(() => {

        lat && lon && dispatch(getWeather({lat, lon, day}))
    }, [lat, lon, day])

    if (!lon && !lat) {
        return <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <ActivityIndicator/>
        </View>
    }

    const onPressButtonUpHandler = (value: number) => {
        setDay(value)
    }

    return (

        <LinearGradient colors={['#6f94d9', '#393f86', '#192f6a']} style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <Header/>

            <Text style={styles.title}> { day !== 0 ? `weather for ${day} day` : 'check the weather for the next day'}  </Text>
            <View style={styles.selectDay_container}>

                {arrDays.map((days)=>{
                    return <Pressable   hitSlop={30}
                                        key={days}
                                        style={[styles.dayButton, {
                                            backgroundColor: day === days ? "#6f94d9" : "white"
                                        }]}
                                        onPress={() => {
                                            onPressButtonUpHandler(days)
                                        }}
                    >
                        <Text>{days}</Text>
                    </Pressable>
                })}

            </View>
            <Text style={styles.currentDate}>Today {moment(data.current_weather?.time).format("DD.MM")}</Text>
            <Text style={styles.currentTemp}>{data.current_weather?.temperature} ℃</Text>

            {/*<Text>{`lat:${location?.coords.latitude}, lon:${location?.coords.longitude}`}</Text>*/}

            <FlatList data={arrWeather} renderItem={weatherItem} invertStickyHeaders={true} />
        </LinearGradient>

    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    title:{
        fontSize:20,
        marginVertical:20,
        color:'#fff'
    },
    currentDate:{
        marginTop:10,
        color:'#fff',
        fontSize:25,
    },
    currentTemp:{
        color:'#fff',
        fontSize:30,
        marginVertical:10,
    },
    dayButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 4,
    },
    selectDay_container: {
        width: WIDTH - PADDING,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        padding: 10,
        backgroundColor: 'white'
    },

});