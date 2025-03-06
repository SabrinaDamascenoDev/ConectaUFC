import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
export default function BtnOutline({text, screen}){
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