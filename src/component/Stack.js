import React from 'react'

Stack = () => {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="main" component={main} />
      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="P2P"
        component={P2P}
      />
      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="Referral"
        component={Referral}
      />
      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="setting"
        component={setting}
      />
      <Stack.Screen
        options={{
          animationEnabled: false,
        }}
        name="sosial"
        component={sosial}
      />
    </Stack.Navigator>
  )
}
