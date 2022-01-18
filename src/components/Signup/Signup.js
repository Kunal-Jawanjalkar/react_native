import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Separator from '../Separator/Separator';
import styles from './signupStyles';
import {useGlobalContext} from '../../context';

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [allCodes, setAllCodes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCountryCodes();
  }, []);

  const {dispatch} = useGlobalContext();
  const fetchCountryCodes = async () => {
    try {
      const url = 'https://dev.homzhub.com/api/v1/countries/';
      const response = await fetch(url);
      const {data} = await response.json();
      // console.log(data);
      setAllCodes(data);
    } catch (error) {}
  };

  const handleSignup = () => {
    if (!email && !phoneNumber) {
      setError('Email and PhoneNumber is compulsory...');
      setTimeout(() => {
        setError('');
      }, 2500);
    } else {
      dispatch({
        type: 'SET_USER_DETAILS',
        payload: {firstName, lastName, email, phoneNumber, countryCode},
      });
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup to continue</Text>
      <Text style={{textAlign: 'center', color: 'red'}}>{error}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your firstName"
        onChangeText={firstName => setFirstName(firstName)}
        value={firstName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your lastName"
        onChangeText={lastName => setlastName(lastName)}
        value={lastName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email"
        onChangeText={email => setEmail(email)}
        value={email}
      />

      <Picker
        selectedValue={countryCode}
        onValueChange={countryCode => setCountryCode(countryCode)}>
        {allCodes.map((code, index) => {
          return (
            <Picker.Item
              label={code.phone_codes[0].phone_code}
              value={code.phone_codes[0].phone_code}
              key={index}
            />
          );
        })}
      </Picker>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your phoneNumber"
        onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
        value={phoneNumber}
        keyboardType="numeric"
        maxLength={10}
      />

      <Separator />
      <Button title="Signup" onPress={handleSignup} />
      <Separator />
      <Text style={{textAlign: 'center'}}>OR</Text>
      <Separator />
      <Button title="Cancel" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Signup;
