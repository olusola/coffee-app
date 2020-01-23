import React from 'react'

import {
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import StoreDetailsHeader from '../../components/StoreDetailsHeader/StoreDetailsHeader';
import StoreMenu from '../../components/StoreMenu/StoreMenu';

const StoreDetailsBody = () => {
  return (
    <View style={styles.sdbContainer}>
      <StoreMenu/>
    </View>
  )
}

const StoreDetailsContainer = () => {
  const insets = useSafeArea()
  return (
    <View style={{ paddingTop: insets.top, flex:1 }}>
      <StoreDetailsHeader/>
      <StoreDetailsBody/>
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
  },
  sdhContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  sdbContainer: {
    backgroundColor: '#f3f5fa',
    flex: 4
  }
})

export default StoreDetailsContainer