import React from 'react'
import { useNavigation } from 'react-navigation-hooks'
import Icon from 'react-native-vector-icons/Ionicons'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const BackBtn = () => {
  const navigation  = useNavigation()
  return (
    <TouchableOpacity onPress={() => { navigation.goBack()}}>
      <Icon name="ios-arrow-round-back" size={30} color="#000" />
    </TouchableOpacity>
  )
}

const ProfileBtn = () => (
  <TouchableOpacity>
    <Icon name="ios-contact" size={30} color="#000" />
  </TouchableOpacity>
)

const StoreDetailsHeader = () => {
  return (
    <View style={styles.sdhContainer}>
      <View style={styles.headerBar}>
        <BackBtn/>
        <ProfileBtn/>
      </View>
      <View style={styles.headerMetaBar}>
        <View>
          <Text style={styles.storeTitle}>Star Bucks</Text>
          <Text>Oxford Street</Text>
        </View>
        <View>
          <Text>0.3 miles</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sdhContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerMetaBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storeTitle : {
    fontWeight: '700',
    fontSize: 22,
  }
})

export default StoreDetailsHeader