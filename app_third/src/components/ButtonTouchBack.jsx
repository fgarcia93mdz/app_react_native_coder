import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ButtonTouchBack = ({ title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <AntDesign name="caretleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.transparent,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    position: 'absolute',
    top: 30,
    left: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default ButtonTouchBack;