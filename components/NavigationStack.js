import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from './ThemeContext';
import { UserProvider } from './UserContext'; // Assuming you have a ThemeContext for managing dark mode
import Home from './Home';
import Ecolense from './Ecolense';
import EntryLoginPage from './Login/EntryLoginPage';
import SignUp from './Login/SignUp';
import Login from './Login/Login';
import TumorList from './TumorList';
import Sidebar from './Sidebar';
import SidebarIcon from './SidebarIcon';
import Notifications from './Notifications';
import Campaigns from './Campaigns';
import Settings from './Settings';
import UserEdit from './UserEdit';
import EventForm from './EventForm';
import EventList from './EventList';
import EventDetails from './EventDetails'
import EditEvent from './EditEvent'
import RsvpEventList from './RsvpEventList'
import CompletedEvents from './CompletedEvents';
import EventDisplay from './EventDisplay';
const Stack = createStackNavigator();

const NavigationStack = () => {
  const { isDarkMode } = useTheme(); // Retrieve dark mode state from context

  return (
    <UserProvider>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? '#333' : '#fff', // Adjust background color based on theme
          },
          headerTintColor: isDarkMode ? '#fff' : '#333', // Adjust text color based on theme
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="EntryLoginPage"
          component={EntryLoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: true, title: 'Sign Up' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true, title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventForm"
          component={EventForm}
          options={{ title: 'EventForm' }}
        />

        <Stack.Screen
          name="EventList"
          component={EventList}
          options={{ title: 'EventList' }}
        />

         <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{ title: 'EventDetails' }}
        />

        <Stack.Screen
          name="EventDisplay"
          component={EventDisplay}
          options={{ title: 'EventDisplay' }}
        />

        <Stack.Screen
          name="EditEvent"
          component={EditEvent}
          options={{ title: 'EditEvent' }}
        />
        <Stack.Screen
          name="RsvpEventList"
          component={RsvpEventList}
          options={{ title: 'RsvpEventList' }}
        />
        <Stack.Screen
          name="Sidebar"
          component={Sidebar}
          options={{ title: 'Sidebar' }}
        />
        <Stack.Screen
          name="SidebarIcon"
          component={SidebarIcon}
          options={{ title: 'Sidebar Icon' }}
        />
        <Stack.Screen
          name="Campaigns"
          component={Campaigns}
          options={{ title: 'Campaigns' }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ title: 'Notifications' }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: 'Settings' }}
        />

        <Stack.Screen
          name="UserEdit"
          component={UserEdit}
          options={{ title: 'UserEdit' }}
        />
        <Stack.Screen
          name="CompletedEvents"
          component={CompletedEvents}
          options={{ title: 'Missed Events' }}
        />

        
      </Stack.Navigator>
    </UserProvider>
  );
};

export default NavigationStack;
