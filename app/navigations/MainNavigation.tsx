// global imports
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

// local imports
import {AppNavigation} from '@Navigations'

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )
}

export {MainNavigation}
