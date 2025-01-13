import React from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";
import {RegisterScreen} from "./Register";

export function LoginScreen() {
    const router = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../../../../assets/logo.png")} style={styles.logo}></Image>
                <Text style={styles.title}>First App</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Iniciar sesión</Text>

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

                <View>
                    <TouchableOpacity style={styles.loginButton} onPress={() => {ToastAndroid.show("Se ha presionado el Toast", ToastAndroid.SHORT)}}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.loginButton} onPress={() => {router.navigate("RegisterScreen")}}>
                        <Text style={styles.loginButtonText}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
