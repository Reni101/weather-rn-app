import React from 'react';
import {ListRenderItem, StyleSheet, Text, View} from "react-native";
import {weatherItemType} from "../../service/weather.slice";
import {PADDING, WIDTH} from "../../constant/constant";

import moment from "moment";

export const weatherItem: ListRenderItem<weatherItemType> = ({item}) => {

    return <View key={item.time} style={styles.container}>
        <Text style={styles.item}>{moment(item.time).local(true).format("dddd").slice(0, 3)}</Text>
        <Text style={[styles.item, {alignSelf:'center'}]}> {moment(item.time).format("DD.MM")}</Text>
        <Text style={styles.item}> {item.min} - {item.max} ℃</Text>

    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 5,
        marginVertical: 10,
        height: 40,
        width: WIDTH - PADDING,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    item: {
        // marginHorizontal:30,
        minWidth: 40,
    },
})
