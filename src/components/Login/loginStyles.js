import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    paddingHorizontal: Platform.OS === 'web' ? 350 : 20,
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
});

export default styles;
