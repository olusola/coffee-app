
const BackBtn = () => {
  const navigation  = useNavigation()
  return (
    <TouchableOpacity onPress={() => { navigation.goBack()}}>
      <Icon name="ios-arrow-round-back" size={30} color="#000" />
    </TouchableOpacity>
  )
}