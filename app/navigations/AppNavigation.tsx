// global imports
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// local imports
import {PokemonDetail, PokemonList} from '@Features'

// creating native stack navigator
const Stack = createNativeStackNavigator()

// screen header styling options
const screenOptions = {
  // changing the header background color
  headerStyle: {
    backgroundColor: '#2e7cf6',
  },
  // changing the header title text color
  headerTitleStyle: {
    color: 'white',
  },
  // changing the header back icon color
  headerTintColor: 'white',
}

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="List" screenOptions={screenOptions}>
      <Stack.Group>
        <Stack.Screen
          name="List"
          component={PokemonList}
          options={{title: 'Pokemon List'}}
        />
        <Stack.Screen name="Detail" component={PokemonDetail} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export {AppNavigation}
