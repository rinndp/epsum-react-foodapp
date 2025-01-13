import React from "react";
import {View, Text, TextInput, Image} from "react-native";
import styles from "./StylesLogin";

export function RegisterScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../../../../assets/logo.png")} style={styles.logo}></Image>
                <Text style={styles.title}>First App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Registro</Text>

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
            </View>
        </View>
    );
}
