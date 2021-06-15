import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import db, { auth } from '../Firebase'

const ProfileScreen = ({ navigation }) => {
    const [profile, setProfile] = useState()

    useEffect(() => {
        db.collection("posts").where("email", '==', auth?.currentUser?.email).onSnapshot((snapshot) => {
            snapshot.forEach(doc => {
                setProfile(doc.data().image)
            })
        })
    }, [])
    

    const Out = async () => {
        await auth.signOut()
        await navigation.navigate("SignIn")
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={{uri: profile}} style={styles.image} />
            </View>
            <Text style={styles.name}>{auth?.currentUser?.displayName}</Text>

            <View style={styles.info}>
                <View>
                    <Text style={styles.number}>20</Text>
                    <Text style={styles.tell}>Posts</Text>
                </View>
                <View>
                    <Text style={styles.number}>34,000</Text>
                    <Text style={styles.tell}>Followers</Text>
                </View>
                <View>
                    <Text style={styles.number}>450</Text>
                    <Text style={styles.tell}>Following</Text>
                </View>
            </View>
            <View style={styles.below}>
                <TouchableOpacity onPress={Out}>
                    <Text style={styles.log}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    profileContainer: {
        shadowOpacity: 0.8,
        shadowRadius: 30,
        shadowColor: "#222222"
    },
    image: {
        width: 128,
        height: 128,
        borderRadius: 64,
        marginTop: 100
    },
    name: {
        fontWeight: "bold",
        marginTop: 30,
        fontSize: 18,
        textAlign: "center",
        letterSpacing: 5,
        color: "gray"
    },
    info: {
        marginTop: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 260,
        flexDirection: "row"
    },
    number: {
        fontWeight: "bold",
        color: "black",
        letterSpacing: 5,
        fontSize: 22,
        textAlign: "center"
    },
    tell: {
        color: "gray",
        textAlign: "center",
        fontSize: 15
    },
    below: {
        marginTop: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    log: {
        color:"#10CBF7",
        fontWeight: "bold",
        fontSize: 20
    }
})