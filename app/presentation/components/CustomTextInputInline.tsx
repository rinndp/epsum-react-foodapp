import React from "react";
import {KeyboardType, StyleSheet, TextInput} from "react-native";

interface Props {
    placeholder: string;
    onPressFromInterface: (text: string) => void;
}

export const CustomTextInputInline = ({placeholder, onPressFromInterface}: Props) => {
    return (
        <TextInput
            style={styles.formInputInline}
            placeholder={placeholder}
            keyboardType={'default'}
            onChangeText={(text) => onPressFromInterface(text)}
        ></TextInput>
    )
}

const styles = StyleSheet.create({
    formInputInline: {
        width: '48%',
        height: 48,
        borderColor: '#c5c5c5',
        borderWidth: 1,
        borderRadius: 13,
        paddingVertical: 7,
        paddingHorizontal: 10,
    },

})