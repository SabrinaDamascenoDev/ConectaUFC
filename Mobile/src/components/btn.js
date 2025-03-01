import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
export default function Botao({text, onPress}){
    return(
        <TouchableOpacity style={styles.containerBtn}>
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerBtn: {
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn:{
        fontFamily: 'JuliusSansOne_400Regular',
        fontSize: 18,
        color: '#00488C'
    }
})