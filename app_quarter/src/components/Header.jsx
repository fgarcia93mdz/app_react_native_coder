import { StyleSheet, Text, View } from 'react-native'
import {colors} from '../global/colors'
import ButtonTouch from '@components/ButtonTouchBack';

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <ButtonTouch title="Volver" onPress={() => navigation.goBack()} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
} 

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  headerTitle: {
    color: colors.black,
    fontSize: 20,
    fontFamily: 'Karla-Bold',
    marginTop: 20,
  },
})