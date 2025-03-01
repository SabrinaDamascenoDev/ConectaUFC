import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";


const { width } = Dimensions.get("window");

// Dados do carrossel
const data = [
    { id: "1", text: "Bem-vindo(a) ao Conecta UFC" },
    { id: "2", text: "Acesse tudo o que precisa para suas disciplinas em um só lugar!" },
    { id: "3", text: "Junte-se à nossa comunidade." }
];

export default function InicialPage() {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <ImageBackground source={require("../../assets/Rectangle.png")} style={styles.background} resizeMode="cover">
            <View style={styles.container}>
                <Image source={require("../../assets/Logo.png")} style={styles.image} />
                <Carousel
                    loop
                    width={width}
                    height={100}
                    autoPlay
                    pagingEnabled
                    data={data}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => setActiveSlide(index)} 
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                    )}
                />
                {/* Paginação */}
                <View style={styles.paginationContainer}>
                    {data.map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.dot,
                                activeSlide === index ? styles.activeDot : styles.inactiveDot
                            ]}
                            onPress={() => setActiveSlide(index)}
                        />
                    ))}
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        marginTop: "35%",
        alignItems: "center",
    },
    image: {
        width: "60%",
        height: "60%",
        resizeMode: "contain",
    },
    text: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        marginTop: 20,
        fontFamily: 'Poppins_300Light',
    },
    paginationContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: "20%", 
        alignSelf: "center",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "white",
    },
    inactiveDot: {
        backgroundColor: "transparent",
        borderColor: 'white', 
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
    },
    item: {
        marginEnd: '5%',
        marginStart: '5%',

    }
});
