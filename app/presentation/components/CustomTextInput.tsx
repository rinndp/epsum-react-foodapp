import React from "react";
import {KeyboardType, StyleSheet, TextInput} from "react-native";

interface Props {
    placeholder: string;
    keyboardType: KeyboardType;
    secureTextEntry: boolean;
    onPressFromInterface: (text: string) => void;
}

export const CustomTextInput = ({placeholder, keyboardType, secureTextEntry, onPressFromInterface}: Props) => {
    return(
        <TextInput
            style={styles.formInput}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            onChangeText={(text) => onPressFromInterface(text)}
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