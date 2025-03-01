import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

export default function InicialPage(){
    return(
        <ImageBackground source={require('../../assets/Rectangle.png')} 
        style={styles.background}
        resizeMode="cover">
            <View style={styles.container}>
                <Image source={require('../../assets/Logo.png')} style={styles.image} />


            </View>
        </ImageBackground>
       
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "40%",
        alignItems: "center"

    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    }, 
    image: {
        width: "60%",
        height: "60%",
        
    }
})

