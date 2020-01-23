import React, { useState } from 'react'

import {
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view'
import MenuItem from '../MenuItem/MenuItem';

const FirstRoute = () => (
  <View style={[styles.scene]}>
    <MenuItem/>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene]}>
    <Text>f f </Text>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene]}>
    <Text>f f </Text>
  </View>
)

const StoreMenu = () => {

  const [mytab, setMytab] = useState({
    index: 0,
    routes: [
      {key: 'first', title: 'coffee'},
      {key: 'second', title: 'espresso'},
      {key: 'third', title: 'Tea'},
    ],
  })

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#000000'}}
      style={{ backgroundColor: 'transparent', marginBottom: 20}}
      activeColor={'#000000'}
      inactiveColor={'gray'}
      labelStyle={{
        fontSize: 14,
        fontWeight: '400',
        textTransform: 'uppercase',
      }}
    />
  )

  return (
    <View style={styles.container}>
      <TabView
            renderTabBar={renderTabBar}
            navigationState={mytab}
            swipeEnabled={false}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
              third: ThirdRoute,
            })}
            onIndexChange={index => setMytab({...mytab, index})}
            initialLayout={{
              width: Dimensions.get('window').width,
            }}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 20
  }
})

export default StoreMenu