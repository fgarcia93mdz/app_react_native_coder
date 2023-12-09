import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../global/colors';


const ButtonTouchBack = ({ title }) => {


  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
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
    color: colors.black,
  },
});

export default ButtonTouchBack;