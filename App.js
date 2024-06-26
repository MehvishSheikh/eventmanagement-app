import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import SidebarIcon from './components/SidebarIcon';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import EntryLoginPage from './components/Login/EntryLoginPage';
import Navigation from './Navigation/Navigation';
import NavigationStack from './components/NavigationStack';
import {ThemeProvider} from './components/ThemeContext';


const Stack = createStackNavigator();

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
     <NavigationContainer>
     
            <Header />
            
            
           
            <NavigationStack />
           
         
    </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ecf0f1',
    padding: 40,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
