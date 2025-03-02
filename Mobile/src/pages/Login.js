import { View, ImageBackground, StyleSheet, Image, Text } from "react-native"

export default function Login(){
    return(
        <ImageBackground source={require("../../assets/Rectangle.png")} style={styles.background} resizeMode="cover">
            <View>
                <View style={styles.logoContainer}>
                    <Image source={require("../../assets/Logo2.png")} style={styles.logo} />
                    <Text style={styles.textLogo}>Bem-vindo(a) de volta ao conecta UFC.</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: "100%",
        height: "100%",
    },
    logoContainer:{
        backgroundColor: 'white',
        height: '68%',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        alignItems: "center",
        textAlign: 'center'

    },
    logo:{
        width: '67%',
        height: '45%',
        marginTop: '15%'
    },
    textLogo:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        width: '75%',
        textAlign: 'center',
        marginTop: '5%',
        color: '#00488C'
    }
})