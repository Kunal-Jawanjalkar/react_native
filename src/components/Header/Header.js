import React from 'react';
import {View, Text} from 'react-native';
import headerStyles from './headerStyles';

const Header = props => {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.headerText}>{props.title}</Text>
    </View>
  );
};

export default Header;
