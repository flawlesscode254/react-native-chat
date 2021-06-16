import React, { useState, useEffect } from 'react'
import db from '../Firebase';
import firebase from 'firebase'
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, TextInput, StatusBar, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import CommentsHelper from './CommentsHelper';

const CommentsScreen = ({ route, navigation }) => {
    const [input, setInput] = useState('')
    const [data, setData] = useState([])

    const { username, id, name } = route.params;

    const add = firebase.firestore.FieldValue.increment(1)

    useEffect(() => {
      db.collection('comments')
      .orderBy("time", "desc")
      .onSnapshot(snapshot => (
          setData(snapshot.docs.map(doc => ({
              id: doc.id,
              name: doc.data().name,
              comment: doc.data().comment,
              time: doc.data().time
          })))
      ))
    }, [])

    const Finish = () => {
      db.collection("feed").doc(id).update({
          comments: add
      })
    }

    const sendMessage = async () => {
        await db.collection("comments").add({
            name: name,
            comment: input,
            target: username,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        await setInput('')
        await Finish()
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar style="light" />
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={90}
        >
            <TouchableWithoutFeedback>
          <>
                <View style={styles.head}>
                    <View style={{
                        marginTop: 30,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                            <Ionicons style={{ marginRight: 50 }} name="arrow-back" size={24} />
                        </TouchableOpacity>                        
                        <Text>{`${username}'s Post`}</Text>
                    </View>
                </View>

            <ScrollView contentContainerStyle={{ paddingTop: 15 }}>

                  {data.map(({ id, name, comment, time }) => (
                    <CommentsHelper
                      key={id}
                      name={name}
                      comment={comment}
                      time={time}
                    />
                  ))}

            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                placeholder="Enter a comment..."
                style={styles.textInput}
              />
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <Ionicons name="send" color="#2B68E6" size={24} />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
    )
}

export default CommentsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      footer: {
        flexDirection: "row",
        width: "100%",
        padding: 15,
        alignItems: "center",
      },
      head: {
        flexDirection: "row",
        width: "100%",
        padding: 15,
        alignItems: "center",
        borderBottomWidth: 1
      },
      textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        backgroundColor: "#ECECEC",
        padding: 10,
        color: "grey",
        borderRadius: 30,
      }
})
