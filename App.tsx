import React from 'react'
import {Provider} from 'react-redux'
import {StatusBar, SafeAreaView} from 'react-native'

import {store} from '@Store'
import {MainNavigation} from '@Navigations'

function App(): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar />

      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </SafeAreaView>
  )
}

export default App
