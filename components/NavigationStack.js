import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Ecolense from './Ecolense';
import EntryLoginPage from './Login/EntryLoginPage';
import SignUp from './Login/SignUp';
import Login from './Login/Login';
import TumorList from './TumorList';
import Sidebar from './Sidebar';
import SidebarIcon from './SidebarIcon'
import Notifications from './Notifications'
import Campaigns from './Campaigns'

const Stack = createStackNavigator();

const NavigationStack = () => {
  

  

  return (
    <Stack.Navigator>
      <Stack.Screen name="EntryLoginPage" component={EntryLoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Ecolense" component={Ecolense} />
      <Stack.Screen name="TumorList" component={TumorList} />   
      <Stack.Screen name="Sidebar" component={Sidebar}  />
      <Stack.Screen name="SidebarIcon" component={SidebarIcon} />
      <Stack.Screen name="Campaigns" component={Campaigns} />
      <Stack.Screen name="Notifications" component={Notifications} />
      
    </Stack.Navigator>
  );
};

export default NavigationStack;
