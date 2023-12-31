import React, {useState} from 'react';
import {FlatList, StatusBar, StyleSheet, Text} from "react-native";
import {useAppSelector} from "../../common/hooks/useAppHooks";
import {selectWeatherForDays} from "../../service/weather-slice";
import {LinearGradient} from "expo-linear-gradient";
import {Header} from "../header/header";
import {CurrentWeather} from "../current-weather/current-weather";
import {weatherItem} from "../weather-Item/weather-Item";
import {DaysButtonRender} from "../days-button-item/days-button-render";


export const WeatherRoot = () => {

    const weatherForDays = useAppSelector(selectWeatherForDays)
    const [selectedDays, setSelectDays] = useState<number>(0)

    return (

        <LinearGradient colors={['#6f94d9', '#393f86', '#192f6a']} style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <Header selectedDays={selectedDays}/>

            <Text style={styles.title}>
                {selectedDays !== 0 ? `weather for ${selectedDays} days` : 'check the weather for the next day'}
            </Text>

            <DaysButtonRender setSelectDays={setSelectDays} selectedDays={selectedDays}/>

            <CurrentWeather/>

            <FlatList data={weatherForDays} renderItem={weatherItem} bounces={false}/>
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
});