import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'


import HomeScreen from '../screens/HomeScreen'
import MessageScreen from '../screens/MessageScreen'
import PostScreen from '../screens/PostScreen'
import NotificationScreen from '../screens/NotificationScreen'
import ProfileScreen from '../screens/ProfileScreen'

const MainStackScreens = () => {

    const MainStack = createBottomTabNavigator()

    const tabBarOptions = {
        showLabel: false,
        style: {
            backgroundColor: "#222222",
            paddingBottom: 12,
            paddingTop: 12
        }
    }

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName = "home"

            switch (route.name) {
                case "Home":
                    iconName = "home"
                    break;
                case "Message":
                    iconName = "chatbox"
                    break;
                case "Notification":
                    iconName = "notifications"
                    break;
                case "Profile":
                    iconName = "person"
                    break;

                default:
                    iconName = "home"
            }

            if (route.name === "Post") {
                return(
                    <Ionicons 
                        name="add-circle" 
                        size={48} 
                        color="#E9446A"
                    />
                )
            }

            return <Ionicons name={iconName} size={24} color={focused ? "#ffffff" : "#666666"} />
        }
    })
    return(
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Message" component={MessageScreen} />
            <MainStack.Screen name="Post" component={PostScreen} />
            <MainStack.Screen name="Notification" component={NotificationScreen} />
            <MainStack.Screen name="Profile"component={ProfileScreen} />
        </MainStack.Navigator>
    )
}

export default MainStackScreens