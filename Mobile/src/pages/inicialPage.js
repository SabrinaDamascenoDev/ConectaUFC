import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";


const { width } = Dimensions.get("window");

// Dados do carrossel
const data = [
    { id: "1", text: "Bem-vindo(a) ao Conecta UFC, seu portal acadêmico digital!" },
    { id: "2", text: "Acesse tudo o que precisa para suas disciplinas em um só lugar!" },
    { id: "3", text: "Junte-se à nossa comunidade e torne sua rotina universitária mais prática!" }
];
import BtnOutline from "../components/btnOutline";
import Botao from "../components/btn";

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

                <View style = {styles.botoes}>
                    <Text style = {styles.bntTexto2}>Já possui Login?</Text>
                    <Botao text={'ACESSAR'}/>
                    <View style={styles.botaoSec}>
                        <Text style = {styles.bntTexto}>Ainda não possui cadastro?</Text>
                        <BtnOutline text={'CADASTRE-SE'}/>
                    </View>
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
        flex: 1,
        alignItems: "center",
        marginTop: '30%'
    },
    image: {
        width: "59%",
        height: "35%",

    },
    text: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        fontFamily: 'Poppins_300Light',
    },
    paginationContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: '8%'
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
        borderWidth: 1
    },
    item: {
        marginEnd: '5%',
        marginStart: '5%',
        marginTop: '15%'

    },
    botoes: {
        width: '100%',
        marginTop: '15%',
        alignContent: 'center',
        alignItems: 'center',

    },

    botaoSec: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '7%'
    },
    
    bntTexto:{
        marginRight:'35%',
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        fontSize: 15
    },
    bntTexto2:{
        marginRight: '58%',
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        fontSize: 15
    }
   
});
