import React from "react";
import {KeyboardType, StyleSheet, TextInput} from "react-native";

interface Props {
    placeholder: string;
    keyboardType: KeyboardType;
    secureTextEntry: boolean;
}

export const CustomTextInput = ({placeholder, keyboardType, secureTextEntry}: Props) => {
    return(
        <TextInput
            style={styles.formInput}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
        ></TextInput>
    )
}

const styles = StyleSheet.create ({
    formInput: {
        height: 48,
        borderColor: '#c5c5c5',
        borderWidth: 1,
        borderRadius: 13,
        paddingVertical: 7,
        paddingHorizontal: 10,
    },
})