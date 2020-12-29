import React, { Profiler, useState } from 'react'
import Login from '../screen/Login'
import Register from '../screen/Register'
import Navigator from '../component/Navigator'
import Exchange from '../screen/Exchange'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
export default Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Exchange" component={Exchange} />
      <Stack.Screen name="Navigator" component={Navigator} />
    </Stack.Navigator>
  )
}
