import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import db, { auth } from '../Firebase'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native';


const PostHelper = ({ id, profile, name, time, caption, image, likes, comments, shares, col }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation();
    const uname = auth?.currentUser?.displayName

    const add = firebase.firestore.FieldValue.increment(1)
    const substract = firebase.firestore.FieldValue.increment(-1)

    const updateLikes = async () => {
        if (col === "black") {
            await db.collection("feed").doc(id).update({
                likes: add,
                col: "#E9446A"
            })
        }
        else if (col === "#E9446A"){
            await db.collection("feed").doc(id).update({
                likes: substract,
                col: "black"
            })
        }
      
    }

    const Send = () => {
        navigation.navigate("Comments", {
            username: name,
            id: id,
            name: uname
        })
    }

    const saveFile = () => {
        
    }

    return (
        <View style={styles.post}>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                            <Image  style={styles.image} source={{ uri: profile }} />
                        <TouchableOpacity style={{
                            backgroundColor: "blue",
                            marginTop: 5,
                            marginBottom: 5,
                            paddingHorizontal: 20,
                            borderRadius: 999
                        }} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>X</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
            </View>
            
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Image style={styles.chosen} source={{ uri: profile }} />
                            </TouchableOpacity>
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
                            }}>{new Date(time?.toDate()).toDateString() + ' ' + ' '} <Text style={{color: "black"}}>{new Date(time?.toDate()).toLocaleTimeString()}</Text> </Text>
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
                            <TouchableOpacity onPress={saveFile}>
                                <Image style={styles.image} source={{ uri: image }} />
                            </TouchableOpacity>
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
                            paddingVertical: 5
                        }}>

                            <View>
                                <TouchableOpacity onPress={updateLikes}>
                                    <Ionicons name="thumbs-up" color={col} size={24} />
                                    <Text style={{color: "gray"}}>{likes}</Text>
                                </TouchableOpacity>
                            </View>

                           <View>
                               <TouchableOpacity onPress={Send}>
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
        marginBottom: 10,
        justifyContent: "center"
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 300,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: 280
    }
})
