import React from 'react'
import { useNavigation } from 'react-navigation-hooks'

import {
  View,
  Button,
  Text,
  SafeAreaView
} from 'react-native';


const StoreDetailsHeader = () => {
  return (
    <View>
      <Text>store hedfdf</Text>
    </View>
  )
}
const StoreDetailsContainer = () => {
  const navigation  = useNavigation();
  return (
    <SafeAreaView>
    <Text>hvhv</Text>
    <StoreDetailsHeader/>
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  </SafeAreaView>
  )
}

export default StoreDetailsContainer