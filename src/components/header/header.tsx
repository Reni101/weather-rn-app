import {Platform, StyleSheet, View} from "react-native";
import {Dropdown} from "react-native-element-dropdown";
import {useEffect, useState} from "react";
import {PADDING, WIDTH} from "../../common/constant/constant";
import {getWeather, selectGeolocation, setLocation} from "../../service/weather-slice";
import {useAppDispatch, useAppSelector} from "../../common/hooks/useAppHooks";
import {useGetLocation} from "../../common/hooks/useGetLocation";
import {cityGeolocation} from "../../common/constant/city-geolocation";

type PropsType = {
    selectedDays: number
}

export const Header = ({selectedDays}: PropsType) => {
    const dispatch = useAppDispatch()
    const {lat, lon} = useAppSelector(selectGeolocation)

    const [value, setValue] = useState<string | null>('My location');
    const [isFocus, setIsFocus] = useState(false);

    const {lat: myLat, lon: myLon} = useGetLocation()


    useEffect(() => {
        if (lat && lon) {
            dispatch(getWeather({day: selectedDays}))
        } else if (myLat && myLon) {
            dispatch(setLocation({lat: myLat, lon: myLon}))
        }
    }, [lat, lon, myLat, myLon, selectedDays])


    const onChangeHandler = (item: { label: string, value: string }) => {

        dispatch(setLocation({
            lat: cityGeolocation[item.value].lat,
            lon: cityGeolocation[item.value].lon
        }))

        setValue(item.value);
        setIsFocus(false);

    };
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Dropdown
                    style={[styles.dropdown]}
                    placeholderStyle={styles.placeholder}
                    selectedTextStyle={styles.selected_text}
                    inputSearchStyle={styles.input_search}
                    iconStyle={styles.icon_style}
                    data={Object.keys(cityGeolocation).map(el => ({
                        label: el,
                        value: el
                    }))}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select city' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={onChangeHandler}

                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
    },
    container: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 8,
        width: WIDTH - PADDING,
    },
    dropdown: {
        height: 50,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholder: {
        fontSize: 16,
    },
    selected_text: {
        fontSize: 16,
    },
    icon_style: {
        width: 20,
        height: 20,
    },
    input_search: {
        height: 40,
        fontSize: 16,
    },
})

