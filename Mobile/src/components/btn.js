import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
export default function Botao({text, screen}){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.containerBtn} onPress={() => navigation.navigate(screen)}>
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerBtn: {
        width: '87%',
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