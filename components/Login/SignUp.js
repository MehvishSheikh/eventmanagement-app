// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { useTheme } from '../ThemeContext'; // Assuming you have a ThemeContext for managing dark mode

// const SignUp = ({ navigation }) => {
//   const { isDarkMode } = useTheme(); // Retrieve dark mode state from context
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [user_name, setUsername] = useState('');
//   const [user_password, setPassword] = useState('');

//   const handleSignUp = async () => {
//     console.log('Sending data:', { firstName, lastName, email, phone, user_name, user_password });
//     try {
//       // Send POST request to server to save user details
//       await axios.post('https://tumor-app-server.vercel.app/api/data', {
//         user_name: user_name,
//         first_name: firstName,
//         last_name: lastName,
//         email_user: email,
//         phone_no: phone,
//         user_role: 'user',
//         user_password: user_password,
//       });
//       navigation.navigate('EntryLoginPage');
//     } catch (error) {
//       console.error('Error signing up:', error);
    
//     }
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
//       <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Sign Up</Text>
//       <TextInput
//         style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
//         placeholder="First Name"
//         placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
//         value={firstName}
//         onChangeText={setFirstName}
//       />
//       <TextInput
//         style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
//         placeholder="Last Name"
//         placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
//         value={lastName}
//         onChangeText={setLastName}
//       />
//       <TextInput
//         style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
//         placeholder="Email Address"
//         placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
//         placeholder="Phone Number"
//         placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
//         value={phone}
//         onChangeText={setPhone}
//         keyboardType="phone-pad"
//       />
//       <TextInput
//         style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
//         placeholder="Username"
//         placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
//         value={user_name}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
//         placeholder="Password"
//         placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
//         value={user_password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={[styles.button, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]} onPress={handleSignUp}>
//         <Text style={[styles.buttonText,]}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('EntryLoginPage')}>
//         <Text style={[styles.link, { color: isDarkMode ? '#66b3ff' : 'blue' }]}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 50,
//     paddingVertical: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   button: {
//     width: '100%',
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   link: {
//     marginTop: 10,
//   },
// });

// export default SignUp;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useTheme } from '../ThemeContext'; // Assuming you have a ThemeContext for managing dark mode

const SignUp = ({ navigation }) => {
  const { isDarkMode } = useTheme(); // Retrieve dark mode state from context
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [user_name, setUsername] = useState('');
  const [user_password, setPassword] = useState('');

  const handleSignUp = async () => {
    console.log('Sending data:', { firstName, lastName, email, phone, user_name, user_password });
    try {
      // Send POST request to server to save user details
      await axios.post('https://tumor-app-server.vercel.app/api/data', {
        user_name: user_name,
        first_name: firstName,
        last_name: lastName,
        email_user: email,
        phone_no: phone,
        user_role: 'user',
        user_password: user_password,
      });
      Alert.alert(
        "Success",
        "You have successfully registered!",
        [
          { text: "OK", onPress: () => navigation.navigate('EntryLoginPage') }
        ]
      );
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Error', 'Failed to sign up. Please try again.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Sign Up</Text>
      <TextInput
        style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
        placeholder="First Name"
        placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
        placeholder="Last Name"
        placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
        placeholder="Email Address"
        placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { color: isDarkMode ? '#fff' : '#000', backgroundColor: isDarkMode ? '#555' : '#ddd', borderColor: isDarkMode ? '#777' : 'gray' }]}
        placeholder="Phone Number"
        placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
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
        placeholderTextColor={isDarkMode ? '#aaa' : 'gray'}
        value={user_password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]} onPress={handleSignUp}>
        <Text style={[styles.buttonText]}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EntryLoginPage')}>
        <Text style={[styles.link, { color: isDarkMode ? '#66b3ff' : 'blue' }]}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
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
});

export default SignUp;
