import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import DiscoverContainer from '../containers/DiscoverContainer/DiscoverContainer'
import StoreDetailsContainer from '../containers/StoreDetailsContainer/StoreDetailsContainer'
import Dummy from "../components/dummy"


const DiscoverStack = createStackNavigator({
  Discover: {
    screen: DiscoverContainer
  },
  Details: {
    screen: StoreDetailsContainer,
  }
},{
  headerMode: 'none'
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
  order: ['Account', 'Discover', 'Rewards'],
  tabBarOptions: {
    // showLabel: false,
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      
      if (routeName === 'Discover') {
        iconName = `circle${focused ? '' : ''}`;
      } else if (routeName === 'Account') {
        iconName = `user${focused ? '' : ''}`;
      } else if (routeName === 'Rewards') {
        iconName = `gift${focused ? '' : ''}`;
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