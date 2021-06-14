import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { auth } from '../Firebase'

import AuthStackScreen from '../stacks/AuthStackScreen'
import MainStackScreens from '../stacks/MainStackScreens'

const AppStackScreen = () => {

    const AppStack = createStackNavigator()

    return (
       <AppStack.Navigator headerMode="none" >
           {!auth ? (
               <AppStack.Screen name="Main" component={MainStackScreens} />
           ) : (
               <AppStack.Screen name="Auth" component={AuthStackScreen} />
           )}
       </AppStack.Navigator>
    )
}

export default AppStackScreen