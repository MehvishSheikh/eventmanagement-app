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

const SidebarIcon = ({ onPress }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.menuButton}>
        <Ionicons name="menu-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
        <Ionicons name={isDarkMode ? "sunny-outline" : "moon-outline"} size={24} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menuButton: {
    marginLeft: 20,
  },
  themeButton: {
    marginRight: 20,
  },
});

export default SidebarIcon;
