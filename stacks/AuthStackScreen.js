import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '../screens/SigninScreen'
import SignUpScreen from '../screens/SignupScreen'
import MainStackScreen from '../stacks/MainStackScreens'

const AuthStackScreen = () => {

    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none" >
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
            <AuthStack.Screen name="Main" component={MainStackScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthStackScreen