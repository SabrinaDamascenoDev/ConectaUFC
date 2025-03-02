import { View, ImageBackground, StyleSheet } from "react-native"

export default function Login(){
    return(
        <ImageBackground source={require("../../assets/Rectangle.png")} style={styles.background} resizeMode="cover">
            <View>
                
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: "100%",
        height: "100%",
    }
})