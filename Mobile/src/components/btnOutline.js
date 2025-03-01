import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
export default function BtnOutline({text}){
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
        backgroundColor: 'transparent',
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1
    },
    textBtn:{
        fontFamily: 'JuliusSansOne_400Regular',
        fontSize: 18,
        color: 'white'
    }
})