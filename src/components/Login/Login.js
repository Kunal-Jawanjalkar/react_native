import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './loginStyles';
import Separator from '../Separator/Separator';
import {Link} from '@react-navigation/native';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login to continue</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your username"
        onChangeText={username => setUsername(username)}
        value={username}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        value={password}
      />
      <Separator />
      <Button title="Login" />
      <Separator />
      <Text style={{textAlign: 'center'}}>OR</Text>
      <Separator />

      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default Login;
