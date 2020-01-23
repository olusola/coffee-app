import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'

import DiscoverContainer from '../containers/DiscoverContainer/DiscoverContainer'
import StoreDetailsContainer from '../containers/StoreDetailsContainer/StoreDetailsContainer'
import Dummy from "../components/dummy"


const DiscoverStack = createStackNavigator({
  Discover: {
    screen: DiscoverContainer,
  },
  Details: {
    screen: StoreDetailsContainer,
  }
},{
  headerMode: 'none',
  navigationOptions: ({navigation}) => ({
    tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'Details' ? false : true
  })
})

const rootStack = createBottomTabNavigator({
  Discover: {
    screen: DiscoverStack
  },
  Account: {
    screen: Dummy
  },
  Rewards: {
    screen: Dummy
  }
},{
  headerMode: 'none',
  initialRouteName: 'Discover',
  order: ['Account', 'Discover', 'Rewards'],
  tabBarOptions: {
    // showLabel: false,
    activeTintColor: 'black',
    inactiveTintColor: 'gray'
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      
      if (routeName === 'Discover') {
        iconName = `ios-cafe${focused ? '' : ''}`;
      } else if (routeName === 'Account') {
        iconName = `ios-person${focused ? '' : ''}`;
      } else if (routeName === 'Rewards') {
        iconName = `ios-gift${focused ? '' : ''}`;
      }
      return <Icon name={iconName} size={30} color={tintColor} />;
    },
  })
})

const AppNavigator = createStackNavigator({
  App: rootStack
},{
  headerMode: 'none',
})

export default createAppContainer (AppNavigator)