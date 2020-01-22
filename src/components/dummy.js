import React from 'react'
import { useNavigation } from 'react-navigation-hooks'

import {
  Button,
  Text,
  SafeAreaView
} from 'react-native';

const Dummy = () => {
  const navigation  = useNavigation();
  return (
    <SafeAreaView>
    <Text>hvhv</Text>
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  </SafeAreaView>
  )
}

export default Dummy