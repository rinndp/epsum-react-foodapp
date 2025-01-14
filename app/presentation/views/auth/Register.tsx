import React from "react";
import {View, Text, TextInput, Image, TouchableOpacity, ToastAndroid} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";

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
                    <TextInput
                        style={styles.formInputInline}
                        placeholder={"Nombre"}
                        keyboardType={'default'}
                    ></TextInput>
                    <TextInput
                        style={styles.formInputInline}
                        placeholder={"Teléfono"}
                        keyboardType={'numeric'}
                    ></TextInput>
                </View>

                <View style={styles.formInputContainer}>
                    <TextInput
                        style={styles.formInput}
                        placeholder={"Correo"}
                        keyboardType={'email-address'}
                    ></TextInput>
                </View>

                <View style={styles.formInputContainer}>
                    <TextInput
                        style={styles.formInput}
                        placeholder={"Contraseña"}
                        keyboardType={'default'}
                        secureTextEntry={true}
                    ></TextInput>
                </View>

                <View style={styles.formInputContainer}>
                    <TextInput
                        style={styles.formInput}
                        placeholder={"Confirmar contraseña"}
                        keyboardType={'default'}
                        secureTextEntry={true}
                    ></TextInput>
                </View>

                <View>
                    <TouchableOpacity style={styles.loginButton} onPress={() => {ToastAndroid.show("Se ha registrado correctamente", ToastAndroid.SHORT), router.navigate("LoginScreen")}}>
                        <Text style={styles.loginButtonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
