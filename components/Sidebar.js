import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Sidebar = ({ navigation}) => {
 
  const handleDetails = () => {
    navigation.navigate('TumorList'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <TouchableOpacity style={styles.option}  onPress={() => navigation.navigate('Home')}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text style={styles.optionText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}  onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Ecolense')}>
          <Ionicons name="eye-outline" size={24} color="black" />
          <Text style={styles.optionText}>Ecolens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('TumorList')}>
          <Ionicons name="megaphone-outline" size={24} color="black" />
          <Text style={styles.optionText}>Tumor Classes</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Campaigns')}>
          <Ionicons name="megaphone-outline" size={24} color="black" />
          <Text style={styles.optionText}>Campaigns</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="close-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%', // Make the container full width
    flexDirection: 'row', // Arrange items horizontally
  },
  sidebar: {
    flex: 1, // Take remaining space
    backgroundColor: 'white',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Sidebar;
