import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigator from './src/route/AppNavigator'

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
        <AppNavigator/>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default App;
