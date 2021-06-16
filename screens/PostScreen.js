import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, ScrollView, View, Image, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import db, { auth, store } from '../Firebase'
import { AntDesign } from '@expo/vector-icons'
import { FloatingAction } from 'react-native-floating-action';
import * as ImagePicker from 'expo-image-picker'
import firebase from 'firebase'

const PostScreen = ({ navigation }) => {
    const [caption, setCaption] = useState()
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState()

    const name = auth?.currentUser?.displayName

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

    useEffect(() => {
        db.collection("posts").where("email", '==', auth?.currentUser?.email).onSnapshot((snapshot) => {
            snapshot.forEach(doc => {
                setProfile(doc.data().image)
            })
        })
    }, [])


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
          }
        }
        else if (name === "camera") {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage(result.uri)
              }
          }
    }

    const ShowToast = () => {
        ToastAndroid.show("Your post was successfully added", ToastAndroid.LONG)
    }

    const sendPost = async () => {
        await setLoading(!loading)
        const uri = image;
        const refPath = `feed/${auth?.currentUser?.email}/${Math.random().toString(36)}`;

        const response = await fetch(uri);
        const blob = await response.blob();

        try {
            const storeRef = store.ref(refPath)
            await storeRef.put(blob)
            await storeRef.getDownloadURL().then(url => {
                db.collection("feed").add({
                    name: name,
                    image: url,
                    profile: profile,
                    caption: caption,
                    likes: 0,
                    comments: 0,
                    shares: 0,
                    time: firebase.firestore.FieldValue.serverTimestamp(),
                    col: "black"
                })
            })
        } catch (error) {
            console.log(error);
        }
            await setImage(null)
            await setCaption('')
            await setLoading(loading)
            await ShowToast()
            await navigation.navigate("Home")
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
                        }}>POST</Text>
                    </View>
                </View>
            <ScrollView>
            <View style={styles.chose}>
                    <Image style={styles.chosen} source={{ uri: image }} />
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
                    <TextInput value={caption} onChangeText={(text) => setCaption(text)} autoFocus={true} multiline={true} numberOfLines={4} style={styles.input} placeholder="What is on your mind?" />
                </View>
                <TouchableOpacity onPress={sendPost} style={styles.button}>
                    {loading ? <ActivityIndicator color="#ffffff" size="small" /> : <Text style={{color: "#FFF", fontWeight: "bold"}}>Post 🚀 🚀 </Text> }
                </TouchableOpacity>
            </View>
            </ScrollView>
            <View style={{height: 100}} />
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
