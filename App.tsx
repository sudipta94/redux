/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainRoute from './View';
import {Provider as StoreProvider} from 'react-redux'
import ConfigureStore from './Store/configureStore';
function App(): JSX.Element {
  const store = ConfigureStore()
  return (
  <StoreProvider store={store}>
   <NavigationContainer>
    <MainRoute/>
   </NavigationContainer>
   </StoreProvider>
  );
}


export default App;
