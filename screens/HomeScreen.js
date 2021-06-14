import React from 'react'
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image, SafeAreaView, StatusBar } from 'react-native'
import Test from '../assets/Splash.png'
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = () => {

    return (
    <SafeAreaView>
        <ScrollView>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true} />
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={{width: 320}}>
                    <View style={styles.banner}>
                        <Text style={{fontWeight: "bold", fontSize: 20 }}>FEED</Text>
                    </View>


                    <View style={styles.post}>
                        <View>
                            <Image style={styles.chosen} source={Test} />
                        </View>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "black"
                        }}>
                            <Text style={{
                                fontSize: 17,
                                color: "black",
                                fontWeight: "bold"
                            }}>Duncan Kipkemoi</Text>
                            <Text style={{
                                color: "#E9446A"
                            }}>Mon Jun 14 9:20 pm</Text>
                            <Text style={{
                                marginBottom: 10
                            }}>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Delectus assumenda voluptatem 
                                suscipit ratione eius praesentium, odit, nobis 
                            </Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image style={styles.image} source={Test} />
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
                                <Ionicons name="thumbs-up" size={24} />
                                <Text style={{color: "gray"}}>1200</Text>
                            </View>
                           <View>
                               <Ionicons name="thumbs-down" size={24} />
                               <Text style={{color: "gray"}}>300</Text>
                           </View>
                           <View>
                               <Ionicons name="chatbubbles" size={24} />
                               <Text style={{color: "gray"}}>450</Text>
                           </View>
                           <View>
                               <Ionicons name="share" size={24} />
                               <Text style={{color: "gray"}}>57</Text>
                           </View>
                        </View>
                    </View>

                    <View style={styles.post}>
                        <View>
                            <Image style={styles.chosen} source={Test} />
                        </View>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "black"
                        }}>
                            <Text style={{
                                fontSize: 17,
                                color: "black",
                                fontWeight: "bold"
                            }}>Duncan Kipkemoi</Text>
                            <Text style={{
                                color: "#E9446A"
                            }}>Mon Jun 14 9:20 pm</Text>
                            <Text style={{
                                marginBottom: 10
                            }}>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Delectus assumenda voluptatem 
                                suscipit ratione eius praesentium, odit, nobis 
                            </Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image style={styles.image} source={Test} />
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
                                <Ionicons name="thumbs-up" size={24} />
                                <Text style={{color: "gray"}}>1200</Text>
                            </View>
                           <View>
                               <Ionicons name="thumbs-down" size={24} />
                               <Text style={{color: "gray"}}>300</Text>
                           </View>
                           <View>
                               <Ionicons name="chatbubbles" size={24} />
                               <Text style={{color: "gray"}}>450</Text>
                           </View>
                           <View>
                               <Ionicons name="share" size={24} />
                               <Text style={{color: "gray"}}>57</Text>
                           </View>
                        </View>
                    </View>


                    <View style={styles.post}>
                        <View>
                            <Image style={styles.chosen} source={Test} />
                        </View>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "black"
                        }}>
                            <Text style={{
                                fontSize: 17,
                                color: "black",
                                fontWeight: "bold"
                            }}>Duncan Kipkemoi</Text>
                            <Text style={{
                                color: "#E9446A"
                            }}>Mon Jun 14 9:20 pm</Text>
                            <Text style={{
                                marginBottom: 10
                            }}>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Delectus assumenda voluptatem 
                                suscipit ratione eius praesentium, odit, nobis 
                            </Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image style={styles.image} source={Test} />
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
                                <Ionicons name="thumbs-up" size={24} />
                                <Text style={{color: "gray"}}>1200</Text>
                            </View>
                           <View>
                               <Ionicons name="thumbs-down" size={24} />
                               <Text style={{color: "gray"}}>300</Text>
                           </View>
                           <View>
                               <Ionicons name="chatbubbles" size={24} />
                               <Text style={{color: "gray"}}>450</Text>
                           </View>
                           <View>
                               <Ionicons name="share" size={24} />
                               <Text style={{color: "gray"}}>57</Text>
                           </View>
                        </View>
                    </View>


                    <View style={styles.post}>
                        <View>
                            <Image style={styles.chosen} source={Test} />
                        </View>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "black"
                        }}>
                            <Text style={{
                                fontSize: 17,
                                color: "black",
                                fontWeight: "bold"
                            }}>Duncan Kipkemoi</Text>
                            <Text style={{
                                color: "#E9446A"
                            }}>Mon Jun 14 9:20 pm</Text>
                            <Text style={{
                                marginBottom: 10
                            }}>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Delectus assumenda voluptatem 
                                suscipit ratione eius praesentium, odit, nobis 
                            </Text>
                        </View>
                        <View style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image style={styles.image} source={Test} />
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
                                <Ionicons name="thumbs-up" size={24} />
                                <Text style={{color: "gray"}}>1200</Text>
                            </View>
                           <View>
                               <Ionicons name="thumbs-down" size={24} />
                               <Text style={{color: "gray"}}>300</Text>
                           </View>
                           <View>
                               <Ionicons name="chatbubbles" size={24} />
                               <Text style={{color: "gray"}}>450</Text>
                           </View>
                           <View>
                               <Ionicons name="share" size={24} />
                               <Text style={{color: "gray"}}>57</Text>
                           </View>
                        </View>
                    </View>


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
    },
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
    }
})
