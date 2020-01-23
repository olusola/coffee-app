import React, { useState } from 'react'
import {
  Text, View, StyleSheet, TouchableOpacity, Dimensions
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons'

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Platform.OS === "ios"
  ? Dimensions.get("window").height
  : null

const AddBtn = () => {
  const navigation  = useNavigation()
  const[toggleModal, setToggleModal] = useState(false)


  console.log(toggleModal)
  return (
    <TouchableOpacity onPress={() => setToggleModal(true)}>
      <Icon name="ios-add-circle-outline" size={30} color="#000" />
      <Modal isVisible={toggleModal}
        deviceWidth={deviceWidth} 
        deviceHeight={deviceHeight}
        onBackdropPress={() => setToggleModal(false)}
        style={{ margin: 0 }}
        >
        <View style={{ flex: 1, backgroundColor: '#ffffff', marginTop: 200, paddingHorizontal: 20 }}>
          <View style={{
            backgroundColor:'#ffffff',
            width: 60, height: 60, 
            borderRadius: 60/2,
            borderColor: '#f3f5fa',
            borderWidth: 5,
            marginTop: -30,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
              <Icon name="ios-cafe" size={30} color="#000" />
            </View>
            <View>
              <Text style={styles.itemTitle}>Latte</Text>
              <Text style={styles.itemDesc}>Single shot with the best milk</Text>
            </View>
            <View>
              <Text style={{textTransform: 'uppercase', fontSize:14, fontWeight: '500', paddingVertical: 10, color: 'silver'}}>size</Text>
              <Text style={{textTransform: 'uppercase', fontSize:14, fontWeight: '500', paddingVertical: 10, color: 'silver'}}>Quantity</Text>
              <Text style={{textTransform: 'uppercase', fontSize:14, fontWeight: '500', paddingVertical: 10, color: 'silver'}}>Temp</Text>
              <Text style={{textTransform: 'uppercase', fontSize:14, fontWeight: '500', paddingVertical: 10, color: 'silver'}}>shots</Text>
              <Text style={{textTransform: 'uppercase', fontSize:14, fontWeight: '500', paddingVertical: 10, color: 'silver'}}>Milk/Alternative</Text>
              <Text style={{textTransform: 'uppercase', fontSize:14, fontWeight: '500', paddingVertical: 10, color: 'silver'}}>syrup</Text>
              <Text style={{textTransform: 'uppercase', fontSize:14, fontWeight: '500', paddingVertical: 10, color: 'silver'}}>toppings</Text>
            </View>
        </View>
    </Modal>
    </TouchableOpacity>
  )
}

const MenuItem = () => {
  return (
    <>
          <View style={styles.container}>
      <View>
        <Text style={[styles.text, styles.item]}>white chocolate mocha</Text>
        <Text style={[styles.text, styles.price]}>{`£2.00`}</Text>
      </View>
      {/* <View>
        <Text style={[styles.text, styles.price]}>{`£2.00`}</Text>
      </View> */}
      <View>
        <AddBtn/>
      </View>
  </View>
  <View style={styles.container}>
      <View>
        <Text style={[styles.text, styles.item]}>iced lattee</Text>
        <Text style={[styles.text, styles.price]}>{`£2.00`}</Text>
      </View>
      {/* <View>
        <Text style={[styles.text, styles.price]}>{`£2.00`}</Text>
      </View> */}
      <View>
        <AddBtn/>
      </View>
  </View>
  <View style={styles.container}>
      <View>
        <Text style={[styles.text, styles.item]}>classic iced cappuccino</Text>
        <Text style={[styles.text, styles.price]}>{`£2.00`}</Text>
      </View>
      {/* <View>
        <Text style={[styles.text, styles.price]}>{`£2.00`}</Text>
      </View> */}
      <View>
        <AddBtn/>
      </View>
  </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 10,
    paddingVertical: 10,
    padding: 15,
    alignContent: 'center',
    alignItems: 'center'
  },
  text: {
    textTransform: 'capitalize',
    color: '#000000'
  },
  item: {
    fontWeight: '400',
  },
  price: {
    fontWeight: '300'
  },
  itemTitle: {
    fontSize: 28,
    fontWeight: '700'
  },
  itemDesc: {
    fontWeight: '300',
    fontSize: 14
  }
})
export default MenuItem