import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from './ThemeContext';

const Sidebar = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();

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
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Ecolens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('TumorList')}>
          <Ionicons name="list-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Tumor Classes</Text>
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
