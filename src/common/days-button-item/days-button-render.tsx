import React from 'react';
import {Pressable, StyleSheet, Text} from "react-native";

type PropsType = {
    selectedDays: number
    setSelectDays: (value:number)=>void
}

const arrDays = [1, 3, 5]

export const DaysButtonRender = (props: PropsType) => {

    const onPressButtonUpHandler = (value: number) => {
        props.setSelectDays(value)
    }


    return <>
        {arrDays.map((days) => {
            return <Pressable hitSlop={30}
                              key={days}
                              style={[styles.day_button, {
                                  backgroundColor: props.selectedDays === days ? "#6f94d9" : "white"
                              }]}
                              onPress={() => {
                                  onPressButtonUpHandler(days)
                              }}
            >
                <Text>{days}</Text>
            </Pressable>
        })}

    </>


};

const styles = StyleSheet.create({
    day_button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 4,
    },
})