import React from 'react';
import {StyleSheet, Text} from "react-native";
import moment from "moment/moment";
import {useAppSelector} from "../../common/hooks/useAppHooks";
import {selectCurrentWeather} from "../../service/weather-slice";

export const CurrentWeather = () => {
    const current_weather = useAppSelector(selectCurrentWeather)

    return (
        <>
            <Text style={styles.current_date}>Today {moment(current_weather?.time).format("DD.MM")}</Text>
            <Text style={styles.current_temp}>{current_weather?.temperature} ℃</Text>
        </>
    );
};

const styles = StyleSheet.create({
    current_date: {
        marginTop: 10,
        color: '#fff',
        fontSize: 25,
    },
    current_temp: {
        color: '#fff',
        fontSize: 30,
        marginVertical: 10,
    },
})