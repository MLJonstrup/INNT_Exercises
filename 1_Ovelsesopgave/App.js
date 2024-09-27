import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { getApps, initializeApp } from 'firebase/app';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

// Import your components
import AddEditCar from './components/add_edit_car'; // Ensure the component name matches
import CarDetails from './components/CarDetails';
import CarList from './components/CarList';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADvL16QaGmXg8ezO35f2SHfuS7b-JOvfE",
  authDomain: "ovelseinnt.firebaseapp.com",
  projectId: "ovelseinnt",
  storageBucket: "ovelseinnt.appspot.com",
  messagingSenderId: "650756283665",
  appId: "1:650756283665:web:3aedccd7112f60a494c0b0",
};

// Initialize Firebase if not already initialized
if (getApps().length < 1) {
  initializeApp(firebaseConfig);
  console.log("Firebase On!");
}

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const StackNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Car List" component={CarList} />
        <Stack.Screen name="Car Details" component={CarDetails} />
        <Stack.Screen name="Add/Edit Car" component={AddEditCar} />
      </Stack.Navigator>
    );
  };
  

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={StackNavigation} 
          options={{
            tabBarIcon: () => (<Ionicons name="home" size={20} />),
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="Add" 
          component={AddEditCar} 
          options={{
            tabBarIcon: () => (<Ionicons name="add" size={20} />),
            headerShown: false
          }} 
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
