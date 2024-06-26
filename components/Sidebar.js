import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from './ThemeContext';
import { UserContext } from './UserContext';

const Sidebar = ({ navigation, route }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [userInfo, setUserInfo] = useState(null);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (route.params && route.params.user) {
      const { user_name, user_password } = route.params.user;
      fetchUserInfo(user_name, user_password);
    }
  }, [route.params]);

  const fetchUserInfo = async (user_name, user_password) => {
    try {
      const response = await fetch(
        'https://tumor-app-server.vercel.app/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_name: user_name,
            user_password: user_password,
          }),
        }
      );

      const data = await response.json();
      console.log('User Info:', data);

      if (data.success) {
        setUserInfo(data);
        setUser({ user_name: data.user_name }); 
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };
  // const { user_name } = route.params;
  // const [user, setUser] = useState({
  //   user_name: '',
  //   first_name: '',
  //   last_name: '',
  //   email_user: '',
  //   phone_no: '',
  //   user_role: '',
  //   user_password: ''
  // });

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Ecolense')}>
          <Ionicons name="eye-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Actions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('UserEdit', { user_name: userInfo.user_name })}>
          <Ionicons name="list-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Campaigns')}>
          <Ionicons name="megaphone-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Campaigns</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={toggleTheme}>
          <Ionicons name={isDarkMode ? "sunny-outline" : "moon-outline"} size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('EntryLoginPage')}>
          <Ionicons name="log-out-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="close-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '70%',
  },
  scrollViewContent: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '500',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 20,
  },
});

export default Sidebar;
