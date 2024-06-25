// import React from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import Login from './Login'; // Import Login component
// import Signup from './SignUp'; // Import Signup component
// import { SafeAreaView, ScrollView} from 'react-native';

// export default function EntryLoginPage({ navigation }) {
  

//   const handleLoginPress = () => {
//     navigation.navigate('Login');
//   };

//   const handleSignupPress = () => {
//    navigation.navigate('SignUp');
//   };

//   return (
//     <ScrollView>
//     <View style={styles.container}>
//      <Text style={styles.heading}> Tumor Classification  </Text>
//       <Image source={require('../../assets/tumor.jpeg')} style={styles.logo} />
     
//       <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={[styles.button, { backgroundColor: '#007bff' }]} onPress={handleSignupPress}>
//         <Text style={styles.buttonText}>Signup</Text>
//       </TouchableOpacity>

     
//     </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width:'100%',
//     height:'100%',
//     marginTop: 20,
    
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     borderRadius: 0,
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#28a745', // Green color for Login button
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginBottom: 10,
//     width:200,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },

// });



// 






// import React from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, Switch } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler'; // Import ScrollView from 'react-native-gesture-handler' for better performance
// import { useTheme } from '../ThemeContext'; // Import useTheme hook from your ThemeContext

// export default function EntryLoginPage({ navigation }) {
//   const { isDarkMode, toggleTheme } = useTheme(); // Get isDarkMode state and toggleTheme function from context

//   const handleLoginPress = () => {
//     navigation.navigate('Login');
//   };

//   const handleSignupPress = () => {
//     navigation.navigate('SignUp');
//   };

//   return (
//     <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
//       <View style={styles.toggleContainer}>
//         <Switch
//           trackColor={{ false: "#767577", true: "#81b0ff" }}
//           thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
//           ios_backgroundColor="#3e3e3e"
//           onValueChange={toggleTheme}
//           value={isDarkMode}
//           style={{ alignSelf: 'flex-end', marginRight: 7, marginTop: 2 }}
//         />
//         <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
//       </View>

//       <View style={styles.innerContainer}>
//         <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#000' }]}>Tumor Classification</Text>
//         <Image source={require('../../assets/image/entrypage.png')} style={styles.logo} /> 

//         <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, { backgroundColor: '#007bff' }]} onPress={handleSignupPress}>
//           <Text style={styles.buttonText}>Signup</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 20,
//   },
//   innerContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     width: '100%',
//     paddingRight: 20,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     borderRadius: 0,
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#28a745',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginBottom: 10,
//     width: 200,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Switch, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'; // Import ScrollView from 'react-native-gesture-handler' for better performance
import { useTheme } from '../ThemeContext'; // Import useTheme hook from your ThemeContext
import * as Animatable from 'react-native-animatable'; // Import Animatable for animations

export default function EntryLoginPage({ navigation }) {
  const { isDarkMode, toggleTheme } = useTheme(); // Get isDarkMode state and toggleTheme function from context

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    navigation.navigate('SignUp');
  };

  // Animated value for floating effect
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 10,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [floatAnim]);

  return (
  
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#1e1e1e' : '#fff'}]}>
      <ImageBackground 
       source={isDarkMode ? require('../../assets/image/darkbg2.jpg') : require('../../assets/image/lightbg.png')}  
      style={styles.backgroundImage}
    >
    

      <View style={styles.innerContainer}>
        <Animatable.Text 
          animation="fadeInDown" // Fade in animation
          duration={1500} // Duration of the animation
          style={[styles.heading, { color: isDarkMode ? '#b3059b' : '#8f24f2'  }]}
        >
          Event Management
        </Animatable.Text>
        <Animated.Image 
          source={require('../../assets/image/entrypage.png')} 
          style={[styles.logo, { transform: [{ translateY: floatAnim }] }]} 
        />

        <Animatable.View 
          animation="bounceInLeft" 
          delay={1000} 
        >
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View 
          animation="bounceInRight" 
          delay={1000} 
        >
          <TouchableOpacity style={[styles.button, { backgroundColor: '#5353c6' }]} onPress={handleSignupPress}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
 
    </ImageBackground>
       </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // alignItems: '',
    justifyContent: 'center',
    paddingTop: 0,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 0,
    marginTop: 30,
    marginBottom: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#990099',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   backgroundImage: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    resizeMode: 'stretch',
    marginTop: 0, // or 'stretch'
  },
});

