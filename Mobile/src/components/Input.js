import { View, StyleSheet, TextInput, Image } from "react-native"

export default function Input({placeholder, image}){
    return(
        <View style={styles.inputContainer}>
            <View>
                <Image source={require("../../assets/email.svg")}/>
            </View>

            <TextInput
                placeholder={placeholder}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {

    }
})