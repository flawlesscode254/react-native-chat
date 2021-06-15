import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import db from '../Firebase'
import firebase from 'firebase'

const PostHelper = ({ profile, name, time, caption, image, likes, dislikes, comments, shares }) => {
    const [col, setCol] = useState("black")

    const add = firebase.firestore.FieldValue.increment(1)
    const substract = firebase.firestore.FieldValue.increment(-1)

    const updateLikes = async () => {
        if (col === "black") {
            await setCol("#E9446A")
            await db.collection("feed").doc(name).update({
                likes: add
            })
        }
        else if (col === "#E9446A"){
            await setCol("black")
            await db.collection("feed").doc(name).update({
                likes: substract
            })
        }
      
    }

    return (
        <View style={styles.post}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Image style={styles.chosen} source={{ uri: profile }} />
                            <TouchableOpacity style={styles.button}>
                                <Text style={{color: "#FFF", fontWeight: "bold"}}>Follow 🐦 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{color: "#FFF", fontWeight: "bold"}}>Message 📰  </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "black"
                        }}>
                            <Text style={{
                                fontSize: 17,
                                color: "green",
                                fontWeight: "bold"
                            }}>{name}</Text>
                            <Text style={{
                                color: "#E9446A"
                            }}>{new Date(time?.toDate()).toUTCString()}</Text>
                            <Text style={{
                                marginBottom: 10
                            }}>
                                {caption}
                            </Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image style={styles.image} source={{ uri: image }} />
                        </View>
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            flexDirection: "row",
                            marginTop: 10,
                            marginBottom: 10,
                            backgroundColor: "white",
                            borderRadius: 15,
                            paddingVertical: 10
                        }}>
                            <View>
                                <TouchableOpacity onPress={updateLikes}>
                                    <Ionicons name="thumbs-up" color={col} size={24} />
                                    <Text style={{color: "gray"}}>{likes}</Text>
                                </TouchableOpacity>
                            </View>
                           <View>
                               <TouchableOpacity>
                                   <Ionicons name="thumbs-down" size={24} />
                                   <Text style={{color: "gray"}}>{dislikes}</Text>
                               </TouchableOpacity>
                           </View>
                           <View>
                               <TouchableOpacity>
                                   <Ionicons name="chatbubbles" size={24} />
                                   <Text style={{color: "gray"}}>{comments}</Text>
                               </TouchableOpacity>
                           </View>
                           <View>
                               <TouchableOpacity>
                                    <Ionicons name="share" size={24} />
                                    <Text style={{color: "gray"}}>{shares}</Text>
                               </TouchableOpacity> 
                           </View>
                        </View>
                    </View>
    )
}

export default PostHelper

const styles = StyleSheet.create({
    post: {
        display: "flex",
        backgroundColor: "#E3E9F3",
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 12,
        marginBottom: 10
    },
    chosen: {
        height: 45,
        width: 45,
        borderRadius: 64
    },
    image: {
        width: 280,
        height: 280,
        borderRadius: 12,
        marginTop: 10
    },
    button: {
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20
    }
})
