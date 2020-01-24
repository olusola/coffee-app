import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigator from './src/route/AppNavigator'
import { Provider } from 'react-redux'

import configureStore from './src/redux/store/configureStore'

const store  = configureStore()

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
        <Provider store= { store }>
          <AppNavigator/>
        </Provider>
    </SafeAreaProvider>
  )
}

export default App
