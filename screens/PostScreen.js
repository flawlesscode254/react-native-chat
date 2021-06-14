import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import db, { auth } from '../Firebase'
import { AntDesign } from '@expo/vector-icons'
import { FloatingAction } from 'react-native-floating-action';
import * as ImagePicker from 'expo-image-picker'

const PostScreen = ({ navigation }) => {
    const [name, setName] = useState()
    const [teller, setTeller] = useState()
    const [image, setImage] = useState(null)
    const [profile, setProfile] = useState()

    const actions = [{
        text: 'Take Picture',
        icon: <AntDesign name="camera" size={25} color="#ffffff" />,
        name: 'camera',
        position: 2
      }, {
        text: 'Choose Picture', 
        icon: <AntDesign name="picture" size={25} color="#ffffff" />,
        name: 'gallery',
        position: 1
      }
    ];

        navigation.addListener('focus', () => {
            db.collection("posts").where("email", '==', auth?.currentUser?.email)
            .onSnapshot((snapshot) => {
                snapshot.forEach(doc => {
                    setName(doc.data().name)
                    setProfile(doc.data().image)
                })
            })
        })


    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

      const addProfile = () => {
          if (image && teller == "gallery") {
            let result = ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

      
          if (!result.cancelled) {
            setImage(result.uri);
          }
          }
          else if (image && teller == "camera"){
            let result = ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage(result.uri)
                setTeller(name)
              }
          }
      }

    const addProfilePhoto = async (name) => {
        if (name === "gallery" ){
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

      
          if (!result.cancelled) {
            setImage(result.uri);
            setTeller(name)
          }
        }
        else {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage(result.uri)
                setTeller(name)
              }
          }
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View>
            <View style={styles.banner}>
                <Text style={{fontWeight: "bold", fontSize: 20 }}>POST</Text>
            </View>
            <View style={styles.chose}>
                <TouchableOpacity onPress={addProfile}>
                    <Image style={styles.chosen} source={{ uri: image }} />
                </TouchableOpacity>
                <FloatingAction
                        actions={actions}
                        buttonSize={50}
                        position="right"
                        dismissKeyboardOnPress={true}
                        showBackground={true}
                        onPressItem={
                        (name) => {
                            addProfilePhoto(name)
                        }
                        }
                    />
            </View>
            <View style={styles.postSection}>
                <View style={styles.postSite}>
                    <Image style={styles.image} source={{ uri: profile }} />
                    <TextInput autoFocus={true} multiline={true} numberOfLines={4} style={styles.input} placeholder="What is on your mind?" />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: "#FFF", fontWeight: "bold"}}>Post 🚀 🚀 </Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 100}} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    postSite: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10
    },
    banner: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        height: 50,
        borderBottomColor: "black"
    },
    image: {
        height: 45,
        width: 45,
        borderRadius: 64,
        marginRight: 10
    },
    button: {
        marginHorizontal: 90,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        flex: 1,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    chosen: {
        width: 300,
        height: 300,
        borderRadius: 12
    },
    chose: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10
    }
})
