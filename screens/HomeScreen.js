import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native'
import PostHelper from './PostHelper'
import db from '../Firebase'

const HomeScreen = ({ navigation }) => {

    const [feed, setFeed] = useState([])

    navigation.addListener('focus', async () => {
       await db.collection('feed')
        .orderBy('time', 'desc')
        .onSnapshot(snapshot => (
            setFeed(snapshot.docs.map(doc => ({
                id: doc.id,
                profile: doc.data().profile,
                name: doc.data().name,
                time: doc.data().time,
                caption: doc.data().caption,
                image: doc.data().image,
                likes: doc.data().likes,
                dislikes: doc.data().dislikes,
                comments: doc.data().comments,
                shares: doc.data().shares
            })))
        ))
    })    

    return (
    <SafeAreaView>
        <ScrollView>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true} />
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={{width: 320}}>
                    <View style={styles.banner}>
                        <Text style={{fontWeight: "bold", fontSize: 20 }}>FEED</Text>
                    </View>

                {feed.map(({ id, profile, name, time, caption, image, likes, dislikes, comments, shares }) => (
                    <View>
                        <PostHelper
                            key={id}
                            profile={profile}
                            name={name}
                            time={time}
                            caption={caption}
                            image={image}
                            likes={likes}
                            dislikes={dislikes}
                            comments={comments}
                            shares={shares}
                        />
                    </View>
                ))}
                    
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    banner: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        height: 50,
        borderBottomColor: "black",
        marginTop: 30
    }
})
