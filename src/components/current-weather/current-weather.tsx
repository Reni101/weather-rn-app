import React from 'react';
import {StyleSheet, Text} from "react-native";
import moment from "moment/moment";
import {useAppSelector} from "../../hooks/useAppHooks";

export const CurrentWeather = () => {
    const current_weather = useAppSelector(state => state.weather.current_weather)

    return (
        <>
            <Text style={styles.currentDate}>Today {moment(current_weather?.time).format("DD.MM")}</Text>
            <Text style={styles.currentTemp}>{current_weather?.temperature} ℃</Text>
        </>
    );
};

const styles = StyleSheet.create({
    currentDate: {
        marginTop: 10,
        color: '#fff',
        fontSize: 25,
    },
    currentTemp: {
        color: '#fff',
        fontSize: 30,
        marginVertical: 10,
    },
})