import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './store';
import Header from './components/Header';
import WrapperCoins from './components/WrapperCoins';

export default function App() {
  return (
    <Provider store={Store}>
      <View>
        <Header />
        <WrapperCoins />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
