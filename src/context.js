import React, {useReducer} from 'react';
import {View, Text} from 'react-native';
import {reducer} from '../reducer';

const AppContext = React.createContext();

const initialState = {
  userDetails: {},
};

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => React.useContext(AppContext);

export {AppProvider, useGlobalContext};
