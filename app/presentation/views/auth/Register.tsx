import React from "react";
import {View, Text, TextInput, Image, TouchableOpacity, ToastAndroid} from "react-native";
import styles from "./StylesForms";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import {CustomTextInputInline} from "../../components/CustomTextInputInline";
import {CustomTextInput} from "../../components/CustomTextInput";

export function RegisterScreen() {
    const router = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../../../../assets/logo.png")} style={styles.logo}></Image>
                <Text style={styles.title}>First App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Registro</Text>

                <View style={styles.formInputContainerInline}>
                    <CustomTextInputInline placeholder={"Nombre"}></CustomTextInputInline>
                    <CustomTextInputInline placeholder={"Apellido"}></CustomTextInputInline>
                </View>

                <View style={styles.formInputContainer}>
                    <CustomTextInput placeholder={"Correo"}
                                     keyboardType={"email-address"}
                                     secureTextEntry={false}></CustomTextInput>
                </View>

                <View style={styles.formInputContainer}>
                    <CustomTextInput placeholder={"Teléfono"}
                                     keyboardType={"default"}
                                     secureTextEntry={false}></CustomTextInput>
                </View>

                <View style={styles.formInputContainer}>
                    <CustomTextInput placeholder={"Contraseña"}
                                     keyboardType={"default"}
                                     secureTextEntry={true}></CustomTextInput>
                </View>

                <View style={styles.formInputContainer}>
                    <CustomTextInput placeholder={"Confirmar contraseña"}
                                     keyboardType={"default"}
                                     secureTextEntry={true}></CustomTextInput>
                </View>

                <View>
                    <RoundedButton text={"Registrarme"} onPressFromInterface={() => ToastAndroid.show("Iniciando sesión", ToastAndroid.SHORT)}></RoundedButton>
                </View>
            </View>
        </View>
    );
}
