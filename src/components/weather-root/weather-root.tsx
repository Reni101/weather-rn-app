import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppHooks";
import {getWeather, selectWeather} from "../../service/weather.slice";

import {useGetLocation} from "../../hooks/useGetLocation";

import {LinearGradient} from "expo-linear-gradient";
import {Header} from "../header/header";
import {PADDING, WIDTH} from "../../constant/constant";
import {CurrentWeather} from "../current-weather/current-weather";
import {weatherItem} from "../../common/weather-Item/weather-Item";
import {DaysButtonRender} from "../../common/days-button-item/days-button-render";

export const WeatherRoot = () => {
    const dispatch = useAppDispatch()
    const {lat, lon} = useGetLocation()
    const arrWeather = useAppSelector(selectWeather)

    const [selectedDays, setSelectDays] = useState<number>(0)


    useEffect(() => {

        lat && lon && dispatch(getWeather({lat, lon, day:selectedDays}))
    }, [lat, lon, selectedDays])

    return (

        <LinearGradient colors={['#6f94d9', '#393f86', '#192f6a']} style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <Header/>

            <Text style={styles.title}>
                {selectedDays !== 0 ? `weather for ${selectedDays} days` : 'check the weather for the next day'}
            </Text>

            <View style={styles.select_day_container}>
                <DaysButtonRender setSelectDays={setSelectDays} selectedDays={selectedDays}/>
            </View>

            <CurrentWeather/>

            <FlatList data={arrWeather} renderItem={weatherItem} bounces={false}/>
        </LinearGradient>

    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
        color: '#fff'
    },
    select_day_container: {
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