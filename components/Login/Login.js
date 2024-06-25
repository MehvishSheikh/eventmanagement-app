import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useTheme } from '../ThemeContext'; 

const Login = ({ navigation }) => {
  const { isDarkMode } = useTheme(); 
  const [user_name, setUsername] = useState('');
  const [user_password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
     
      const response = await axios.post('https://tumor-app-server.vercel.app/api/login', {
        user_name,
        user_password
      });

      
      if (response.data.success) {
        navigation.navigate('Home', { user: response.data });
      } else {
        
        setError('Invalid username or password');
      }
    } catch (error) {
   
      console.error('Error logging in:', error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}> User Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
        placeholder="Username"
        placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
        value={user_name}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
        value={user_password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={[styles.link, { color: isDarkMode ? '#66b3ff' : 'blue' }]}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: 'center',
    paddingTop: 100,
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
