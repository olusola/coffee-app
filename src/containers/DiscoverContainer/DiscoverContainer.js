import React from 'react'
import { useDispatch } from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native'

import { connect } from 'react-redux'
import { deleteMe } from '../../redux/actions/store/'
import { bindActionCreators } from 'redux'

import { withNavigation } from 'react-navigation'
import { useNavigation } from 'react-navigation-hooks'
import cafeList from '../../mock/cafeList.json'

const CafeListcard = ({item:{item: {name}, index}}) => {
  const { navigate } = useNavigation()
  return (
      <TouchableWithoutFeedback onPress={() => navigate('Details')}>
        <View key={index} style={styles.cafeListCardWrapper}>
          <View style={styles.cafeListCardPanelLeft}>
            <Image style={{width: 40, height: 40}} source={{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}/>
          </View>
          <View style={styles.cafeListCardPanelRight}>
            <Text style={styles.cafeListName}>
              {name}
            </Text>
            <View style={styles.cafeListCardFooter}>
              <View style={styles.cafeListCardFooterLocation}>
                <Text>Oxford</Text>
              </View>
              <View style={styles.cafeListCardFooterDistance}>
                <Text>0.2 miles</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
  )
}

const DiscoverBar = () => {

  return (
    <View style={styles.DiscoverBarWrapper}>
      <View style={styles.DiscoverBarSearchWrapper}>
        <Text style={styles.DiscoverBarText}>Near ▼</Text>
      </View>
      <View style={styles.DiscoverBarMapWrapper}>
        <Text style={styles.DiscoverBarText} >Map</Text>
      </View>
    </View>
  )
}

const DiscoverContainer = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView forceInset={{top: 'never'}}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <DiscoverBar/>
            <Text style={styles.DiscoverBarText} onPress={() =>
               dispatch(deleteMe('world'))
              }>Map</Text>
          </View>
          <View style={styles.bodyContainer}>
            <FlatList
              data={cafeList}
              renderItem={(item) => <CafeListcard item={item}/>}
            />
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  headerContainer: {
    paddingHorizontal: 20,
  },
  bodyContainer: {
    // backgroundColor: '#f3f5fa',
    padding: 20,
  },
  cafeListCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 10,
    height: 70
  },
  cafeListCardPanelRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  cafeListCardPanelLeft: {
    padding: 10
  },
  cafeListName: {
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'capitalize'
  },
  DiscoverBarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 20
  },
  DiscoverBarSearchWrapper: {
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  DiscoverBarMapWrapper: {
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  DiscoverBarText: {
    fontWeight: '600',
    fontSize: 16,
  },
  cafeListCardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cafeListCardFooterLocation: {
    padding: 2
  },
  cafeListCardFooterDistance: {
    padding: 2
  }
})

const mapStateToProps = state => {
  return {
    demo: state
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    deleteMe
  }, dispatch)
)
export default withNavigation(connect( mapStateToProps, mapDispatchToProps)(DiscoverContainer))
