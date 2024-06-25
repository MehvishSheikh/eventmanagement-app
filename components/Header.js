import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign for custom icon
import { useTheme } from './ThemeContext'; // Import useTheme hook from your ThemeContext
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  // const { isDarkMode } = useTheme(); // Fetching dark mode state from context

  const [animation] = useState(new Animated.Value(0)); // Animation value for scaling effect
  const { isDarkMode, toggleTheme } = useTheme(); // Get isDarkMode state and toggleTheme function from context

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const resetAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyles = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.1],
        }),
      },
    ],
  };

  return (
    <View style={[styles.header, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={startAnimation} onPressOut={resetAnimation}>
          <AntDesign name="staro" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Event Manager</Text>
      </View>
      {/* <TouchableOpacity style={styles.rightContainer}>
        <AntDesign name="setting" size={24} color="white" />
        <Text style={styles.profileText}></Text>
      </TouchableOpacity> */}
        {/* <View style={styles.toggleContainer}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode}
          style={{ alignSelf: 'flex-end', marginRight: 7, marginTop: 2 }}
        />
        <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
      </View> */}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
        <Ionicons name={isDarkMode ? "sunny-outline" : "moon-outline"} size={24} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop:0,
    height: '40px'
  },
  toggleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // width: '100%',
    paddingRight: 0,
    marginTop: 10,

  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:10,
    marginTop: 10,
   
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  profileText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  animationView: {
    width: 10,
    height: 10,
    backgroundColor: 'yellow',
    borderRadius: 5,
    position: 'absolute',
    right: 20,
  },
  themeButton: {
    marginRight: 10,
  },
});

export default Header;
