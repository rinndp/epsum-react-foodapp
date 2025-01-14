import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#181818',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
    },

    logo: {
        width: 110,
        height: 110,
        alignSelf: 'center',
        marginTop: '10%',
    },

    formContainer: {
        width: '90%',
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginHorizontal: 'auto',
        marginTop: '10%',
        borderRadius: 30,
    },


    formTitle: {
        fontSize: 16,
        color: '#3f3f3f',
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderBottomColor: '#5e5e5e',
        paddingBottom: 9,
        textTransform: 'uppercase',
        marginBottom: '8%',
    },

    formInputContainer: {
        marginBottom: "5%",
    },

    formInputContainerInline: {
        marginBottom: "5%",
        flexDirection: 'row',
    },

    formInput: {
        height: 48,
        borderColor: '#c5c5c5',
        borderWidth: 1,
        borderRadius: 13,
        paddingVertical: 7,
        paddingHorizontal: 10,
    },


    formInputInline: {
        width: '48%',
        marginEnd: 6,
        height: 48,
        borderColor: '#c5c5c5',
        borderWidth: 1,
        borderRadius: 13,
        paddingVertical: 7,
        paddingHorizontal: 10,
    },

    loginButton: {
        borderRadius: 20,
        alignSelf: 'center',
        width: '40%',
        backgroundColor: 'black',
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
});

export default styles;