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
                        comments: doc.data().comments,
                        shares: doc.data().shares,
                        col: doc.data().col
                    })))
                ))
    })

    return (
    <SafeAreaView>
        <View style={styles.head}>
                    <View style={{
                        marginTop: 30,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row"
                    }}>                       
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            letterSpacing: 20
                        }}>FEED</Text>
                    </View>
                </View>
        <ScrollView>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true} />
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={{width: 320}}>
                {feed.map(({ id, profile, name, time, caption, image, likes, comments, shares, col }) => (
                    <View>
                        <PostHelper
                            key={id}
                            id={id}
                            profile={profile}
                            name={name}
                            time={time}
                            caption={caption}
                            image={image}
                            likes={likes}
                            comments={comments}
                            shares={shares}
                            col={col}
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
    head: {
        flexDirection: "row",
        width: "100%",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1
      }
})
