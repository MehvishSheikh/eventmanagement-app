import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { useTheme } from './ThemeContext'; // Assuming you have a ThemeContext for dark mode

const Campaigns = () => {
  const { isDarkMode } = useTheme(); // Using isDarkMode from the context

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Campaigns</Text>

      {/* Campaign 1 */}
      <View style={[styles.campaignContainer, { backgroundColor: isDarkMode ? '#1a1a1a' : '#E5F0FF' }]}>
        <View style={styles.campaignHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#007AFF" />
          <Text style={[styles.campaignHeaderText, { color: isDarkMode ? '#fff' : '#000' }]}>Breast Cancer Awareness Campaign</Text>
        </View>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Date: June 15, 2024</Text>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Time: 10:00 AM - 2:00 PM</Text>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Location: Central Park</Text>
        <ProgressBar progress={0.7} color="#FF6347" style={{ marginTop: 10 }} />
      </View>

      {/* Campaign 2 */}
      <View style={[styles.campaignContainer, { backgroundColor: isDarkMode ? '#1a1a1a' : '#FFF3E0' }]}>
        <View style={styles.campaignHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#007AFF" />
          <Text style={[styles.campaignHeaderText, { color: isDarkMode ? '#fff' : '#000' }]}>Prostate Cancer Screening Campaign</Text>
        </View>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Date: July 5, 2024</Text>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Time: 9:00 AM - 1:00 PM</Text>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Location: City Hall</Text>
        <ProgressBar progress={0.5} color="#FF6347" style={{ marginTop: 10 }} />
      </View>

      {/* Campaign 3 */}
      <View style={[styles.campaignContainer, { backgroundColor: isDarkMode ? '#1a1a1a' : '#FFEAEA' }]}>
        <View style={styles.campaignHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#007AFF" />
          <Text style={[styles.campaignHeaderText, { color: isDarkMode ? '#fff' : '#000' }]}>Lung Cancer Awareness Drive</Text>
        </View>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Date: August 20, 2024</Text>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Time: 11:00 AM - 3:00 PM</Text>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Location: Community Center</Text>
        <ProgressBar progress={0.6} color="#FF6347" style={{ marginTop: 10 }} />
      </View>

      {/* Campaign 4 */}
      <View style={[styles.campaignContainer, { backgroundColor: isDarkMode ? '#1a1a1a' : '#F5E6E8' }]}>
        <View style={styles.campaignHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#007AFF" />
          <Text style={[styles.campaignHeaderText, { color: isDarkMode ? '#fff' : '#000' }]}>Skin Cancer Screening Event</Text>
        </View>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Date: September 10, 2024</Text>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Time: 10:30 AM - 2:30 PM</Text>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Location: Riverside Park</Text>
        <ProgressBar progress={0.8} color="#FF6347" style={{ marginTop: 10 }} />
      </View>

      {/* Campaign 5 */}
      <View style={[styles.campaignContainer, { backgroundColor: isDarkMode ? '#1a1a1a' : '#E9F7F1' }]}>
        <View style={styles.campaignHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#007AFF" />
          <Text style={[styles.campaignHeaderText, { color: isDarkMode ? '#fff' : '#000' }]}>Colon Cancer Awareness Walkathon</Text>
        </View>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Date: October 15, 2024</Text>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Time: 8:00 AM - 12:00 PM</Text>
        <Text style={[styles.campaignText, { color: isDarkMode ? '#ccc' : '#000' }]}>Location: Liberty Park</Text>
        <ProgressBar progress={0.9} color="#FF6347" style={{ marginTop: 10 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // Adjusted to match dark mode background color
  },
  campaignContainer: {
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  campaignHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  campaignHeaderText: {
    fontSize: 18,
    marginLeft: 10,
  },
  campaignText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Campaigns;
