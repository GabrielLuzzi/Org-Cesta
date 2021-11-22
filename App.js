
import React from 'react';
import { StatusBar , SafeAreaView, View, Dimensions } from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/cesta/index.js'
import mock from './src/mocks/cesta'

const width = Dimensions.get('screen').width

export default function App() {
  const [fonteCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  })

  if(!fonteCarregada){
    return <AppLoading />

  }


  return (
    <SafeAreaView>
      <Cesta {...mock} />
      
    </SafeAreaView>
  );
}