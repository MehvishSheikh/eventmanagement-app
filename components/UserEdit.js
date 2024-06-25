// 



import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { useTheme } from './ThemeContext'; // Assuming you have a ThemeContext to manage dark mode

const UserEdit = ({ route, navigation }) => {
  const { user_name } = route.params;
  const { isDarkMode } = useTheme(); // Fetching dark mode state from context

  const [user, setUser] = useState({
    user_name: '',
    first_name: '',
    last_name: '',
    email_user: '',
    phone_no: '',
    user_role: '',
    user_password: ''
  });

  const [isEditMode, setIsEditMode] = useState(false); // Track edit mode

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`https://tumor-app-server.vercel.app/api/data/username/${user_name}`);
      console.log('Fetched user data:', response.data); // Log the fetched data
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`https://tumor-app-server.vercel.app/api/data/username/${user_name}`, user);
      Alert.alert('Success', 'User information updated successfully');
      navigation.goBack();
    } catch (error) {
      console.error('Error updating user data:', error);
      Alert.alert('Error', 'Failed to update user information');
    }
  };

  const handleEditDetails = () => {
    setIsEditMode(true); // Enable edit mode
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={[styles.card, isDarkMode && styles.darkCard]}>
        <Text style={[styles.heading, isDarkMode && styles.darkHeading]}>User Information</Text>

        <View style={styles.row}>
          <Text style={[styles.label, isDarkMode && styles.darkLabel]}>Username:</Text>
          <Text style={[styles.value, isDarkMode && styles.darkValue]}>{user.user_name}</Text>
        </View>

        <View style={styles.row}>
          <Text style={[styles.label, isDarkMode && styles.darkLabel]}>First Name:</Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.darkInput]}
            value={user.first_name}
            onChangeText={(text) => handleChange('first_name', text)}
            editable={isEditMode}
          />
        </View>

        <View style={styles.row}>
          <Text style={[styles.label, isDarkMode && styles.darkLabel]}>Last Name:</Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.darkInput]}
            value={user.last_name}
            onChangeText={(text) => handleChange('last_name', text)}
            editable={isEditMode}
          />
        </View>

        <View style={styles.row}>
          <Text style={[styles.label, isDarkMode && styles.darkLabel]}>Email:</Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.darkInput]}
            value={user.email_user}
            onChangeText={(text) => handleChange('email_user', text)}
            editable={isEditMode}
          />
        </View>

        <View style={styles.row}>
          <Text style={[styles.label, isDarkMode && styles.darkLabel]}>Phone Number:</Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.darkInput]}
            value={String(user.phone_no)}  // Ensure phone_no is treated as a string
            onChangeText={(text) => handleChange('phone_no', text)}
            keyboardType="numeric"
            editable={isEditMode}
          />
        </View>

        <View style={styles.row}>
          <Text style={[styles.label, isDarkMode && styles.darkLabel]}>User Role:</Text>
          <TextInput
            style={[styles.input, isDarkMode && styles.darkInput]}
            value={user.user_role}
            onChangeText={(text) => handleChange('user_role', text)}
            editable={isEditMode}
          />
        </View>

        <View style={styles.buttonContainer}>
          {isEditMode ? (
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.button, styles.editButton]} onPress={handleEditDetails}>
              <Text style={styles.buttonText}>Edit Details</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  darkCard: {
    backgroundColor: '#1e1e1e',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  darkHeading: {
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  darkLabel: {
    color: '#ccc',
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  darkValue: {
    color: '#ccc',
    borderBottomColor: '#555',
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },
  darkInput: {
    borderColor: '#555',
    backgroundColor: '#333',
    color: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  },
  saveButton: {
    backgroundColor: '#28a745',
    marginRight: 10,
  },
  editButton: {
    backgroundColor: '#007AFF',
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserEdit;

