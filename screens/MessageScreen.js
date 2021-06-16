import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const MessageScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Message Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Comments", {
                username: "Duncan"
            })}>
                <Text>Go</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    }
})
