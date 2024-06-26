import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { useTheme } from './ThemeContext'; // Assuming ThemeContext provides isDarkMode and toggleDarkMode
import { UserContext } from './UserContext'; // Import UserContext to get the user information
import * as ImagePicker from 'expo-image-picker'; // Assuming you have expo-image-picker installed
import { Ionicons } from '@expo/vector-icons';

const Settings = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { user } = useContext(UserContext); // Get the user from context
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirmation do not match');
      return;
    }

    try {
      const response = await fetch(`https://tumor-app-server.vercel.app/api/data/update-password/${user.user_name}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Password changed successfully');
      } else {
        Alert.alert('Error', data.error || 'Failed to change password');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      Alert.alert('Error', 'Failed to change password');
    }
  };

  const handleProfileImageChange = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
      // Add logic to upload the image to the server if necessary
    }
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => {/* Add delete account logic here */} },
      ],
    );
  };

  return (
    <ScrollView style={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* <Text style={[styles.title, isDarkMode && styles.darkTitle]}>Change Your Password</Text> */}

      <View style={styles.userNameContainer}>
        <Text style={[styles.userName, isDarkMode && styles.darkUserName]}>Change Your Password {user.user_name}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UserEdit', { user_name: user.user_name })}>
          <Ionicons name="edit-outline" size={24} color={isDarkMode ? "#ccc" : "#333"} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.profileImageContainer} onPress={handleProfileImageChange}>
        <Image
          source={profileImage ? { uri: profileImage } : require('../assets/man-face.jpg')}
          style={styles.profileImage}
        />
        <Text style={[styles.changeImageText, isDarkMode && styles.darkChangeImageText]}>Change Profile Image</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, isDarkMode && styles.darkLabel]}>Current Password</Text>
        <TextInput
          style={[styles.input, isDarkMode && styles.darkInput]}
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, isDarkMode && styles.darkLabel]}>New Password</Text>
        <TextInput
          style={[styles.input, isDarkMode && styles.darkInput]}
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, isDarkMode && styles.darkLabel]}>Confirm New Password</Text>
        <TextInput
          style={[styles.input, isDarkMode && styles.darkInput]}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

      <View style={styles.switchContainer}>
        <Text style={[styles.label, isDarkMode && styles.darkLabel]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.label, isDarkMode && styles.darkLabel]}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        />
      </View>

      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDeleteAccount}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>

      <View style={styles.spacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  darkTitle: {
    color: '#fff',
  },
  userNameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    color: '#666',
    marginRight: 10,
  },
  darkUserName: {
    color: '#ccc',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changeImageText: {
    color: '#007AFF',
  },
  darkChangeImageText: {
    color: '#81b0ff',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  darkLabel: {
    color: '#ccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  darkInput: {
    borderColor: '#555',
    backgroundColor: '#333',
    color: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  spacing: {
    height: 50, // Adjust the value as needed
  },
});

export default Settings;
