import React from 'react';
import Login from './src/Screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './src/Navigation/StackNavigation/LoginStack';

const App = () => {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};

export default App;
