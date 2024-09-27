import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import FirstComponent from './components/FirstComponent';
import PropsComponent from './components/PropsComponent';
import InputComponent from './components/InputComponent'; 
import ButtonComponent from './components/ButtonComponent';
import AssetComponent from './components/AssetComponent';

export default function App() {
  return (
      <View style={styles.container}>
          <View style={{flex: 1, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
              <FirstComponent></FirstComponent>
              <PropsComponent name="Michael"></PropsComponent>
              <InputComponent> {/* Add InputComponent */} </InputComponent>
              <ButtonComponent> {/* Add ButtonComponent */} </ButtonComponent>
              <AssetComponent url={require('./assets/favicon.png')}></AssetComponent>
          </View>
          <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50
  },
});