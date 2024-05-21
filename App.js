import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Screen1, Screen2, Screen3 } from './screens'
  


const Stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Screen1"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
          
        </Stack.Navigator>
      </NavigationContainer>
  )
}