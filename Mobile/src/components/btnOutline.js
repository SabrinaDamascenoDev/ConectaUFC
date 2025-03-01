import { View, StyleSheet, Text } from "react-native"
export default function btnOutline(){
    return(
        <View style={styles.containerBtn}>
            <Text>sd</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerBtn: {
        width: '90%',
        borderWidth: 2,
        borderColor: 'white'
    }
})