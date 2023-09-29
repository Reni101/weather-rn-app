import {Platform, StyleSheet, View} from "react-native";
import {Dropdown} from "react-native-element-dropdown";
import {useState} from "react";
import {PADDING, WIDTH} from "../../constant/constant";

const data = [
    {label: 'My location', value: '1'},
    {label: 'Brest', value: '2'},
    {label: 'Vitebsk', value: '3'},
    {label: 'Gomel', value: '4'},
    {label: 'Grodno', value: '5'},
    {label: 'Mogilev', value: '6'},
    {label: 'Minsk', value: '7'},
];

export const Header = () => {
    const [value, setValue] = useState<string | null>('1');
    const [isFocus, setIsFocus] = useState(false);
    console.log(value)


    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Dropdown
                    style={[styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select city' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}

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
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})
//         <View style={styles.header}>
//                 <Select
//                     placeholderTextColor={'text.500'}
//                     variant={"unstyled"}
//                     placeholder="Select Location"
//                     selectedValue={location}
//                     onValueChange={(itemValue: string) => setLocation(itemValue)}
//                 >
//                     <Select.Item label="My location" value="key0"/>
//                     <Select.Item label="Brest" value="key1"/>
//                     <Select.Item label="Vitebsk" value="key2"/>
//                     <Select.Item label="Gomel" value="key3"/>
//                     <Select.Item label="Grodno" value="key4"/>
//                     <Select.Item label="Mogilev" value="key5"/>
//                     <Select.Item label="Minsk" value="key6"/>
//                 </Select>
