import React from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesForms";
import {useNavigation} from "@react-navigation/native";
import {RegisterScreen} from "./Register";
import {RoundedButton} from "../../components/RoundedButton";
import {CustomTextInput} from "../../components/CustomTextInput";

export function LoginScreen() {
    const router = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../../../../assets/logo.png")} style={styles.logo}></Image>
                <Text style={styles.title}>Food App</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Iniciar sesión</Text>

                <View style={styles.formInputContainer}>
                    <CustomTextInput placeholder={"Correo"}
                                     keyboardType={'email-address'}
                                     secureTextEntry={false}></CustomTextInput>
                </View>

                <View style={styles.formInputContainer}>
                    <CustomTextInput placeholder={"Contraseña"}
                                     keyboardType={'default'}
                                     secureTextEntry={true}></CustomTextInput>

                </View>

                <View>
                   <RoundedButton text={"Iniciar sesión"}
                                  onPressFromInterface={() => ToastAndroid.show("Iniciando sesión", ToastAndroid.SHORT)}></RoundedButton>
                </View>

                <View>
                    <Text style={styles.formTextHints}>¿No tienes cuenta?</Text>
                </View>

                <View>
                    <RoundedButton text={"Registrarse"}
                                   onPressFromInterface={() => router.navigate("RegisterScreen")}
                    ></RoundedButton>
                </View>
            </View>
        </View>
    );
}
