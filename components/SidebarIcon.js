// import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; 

// const SidebarIcon = ({ onPress }) => {
//   return (
//     <TouchableOpacity onPress={onPress} style={{ marginLeft: 20, marginTop: 10 }}> 
//       <Ionicons name="menu-outline" size={24} color="black" /> 
//     </TouchableOpacity>
//   );
// }

// export default SidebarIcon;


// SidebarIcon.js
// SidebarIcon.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useTheme } from './ThemeContext';
import { useNavigation } from '@react-navigation/native';

const SidebarIcon = ({ onPress }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.menuButton}>
        <Ionicons name="menu-outline" size={35} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.themeButton}>
      <Ionicons name={isDarkMode ? "settings" : "settings"} size={30} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Aligns the icon to the left
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menuButton: {
    marginLeft: -150,
  },
  themeButton: {
    marginRight: -150,
    paddingLeft: 250
  },
});

export default SidebarIcon;
