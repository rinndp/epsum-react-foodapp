import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#00011c',
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
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        color: '#707070',
        borderBottomColor: AppColors.secondary,
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
        gap: 11,
    },

    formTextHints: {
        marginTop: 20,
        marginBottom: -10,
        color: '#575757',
        alignSelf: 'center',
    }

});

export default styles;