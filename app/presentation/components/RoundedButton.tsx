import React from "react";
import {StyleSheet, Text, ToastAndroid, TouchableOpacity} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface Props {
    text: string;
    onPressFromInterface: () => void;
}

export const RoundedButton= ({text, onPressFromInterface}: Props) => {
    return (
        <TouchableOpacity
            style={styles.loginButton}
            onPress={() => onPressFromInterface()}
        >
            <Text style={styles.loginButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    loginButton: {
        borderRadius: 20,
        alignSelf: 'center',
        width: '100%',
        backgroundColor: AppColors.primary,
        marginTop: 20,
        marginBottom: 10,
        color: 'white',
        padding: 13,
    },

    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})