import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useGlobalContext} from '../../context';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

const Home = () => {
  const {state} = useGlobalContext();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hi, {state.userDetails.firstName + ' ' + state.userDetails.lastName}
      </Text>
      <Text style={styles.text}>{state.userDetails.email}</Text>
      <Text style={styles.text}>
        {state.userDetails.countryCode + '-' + state.userDetails.phoneNumber}
      </Text>
    </View>
  );
};

export default Home;
