import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';

import AppNavigator from './src/route/AppNavigator'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <AppNavigator/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f5fa'
  }
})

export default App;
