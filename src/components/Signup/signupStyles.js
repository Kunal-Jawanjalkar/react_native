import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Platform.OS === 'web' ? 350 : 20,
    paddingVertical: 30,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#131313',
    borderRadius: 4,
    marginVertical: 10,
    fontSize: 18,
  },
  phoneNumberInput: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
  },
  picker: {
    flex: 1,
  },
  phoneInput: {
    flex: 5,
  },
});

export default styles;
