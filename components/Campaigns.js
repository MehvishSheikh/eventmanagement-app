import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

const Campaigns = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Campaigns</Text>

      {/* Campaign 1 */}
      <View style={[styles.campaignContainer, styles.campaign1]}>
        <View style={styles.campaignHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#007AFF" />
          <Text style={styles.campaignHeaderText}>Breast Cancer Awareness Campaign</Text>
        </View>
        <Text style={styles.campaignText}>Date: June 15, 2024</Text>
        <Text style={styles.campaignText}>Time: 10:00 AM - 2:00 PM</Text>
        <Text style={styles.campaignText}>Location: Central Park</Text>
        <ProgressBar progress={0.7} color="#FF6347" style={{ marginTop: 10 }} />
      </View>

      {/* Campaign 2 */}
      <View style={[styles.campaignContainer, styles.campaign2]}>
        <View style={styles.campaignHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#007AFF" />
          <Text style={styles.campaignHeaderText}>Prostate Cancer Screening Campaign</Text>
        </View>
        <Text style={styles.campaignText}>Date: July 5, 2024</Text>
        <Text style={styles.campaignText}>Time: 9:00 AM - 1:00 PM</Text>
        <Text style={styles.campaignText}>Location: City Hall</Text>
        <ProgressBar progress={0.5} color="#FF6347" style={{ marginTop: 10 }} />
      </View>

      {/* Campaign 3 */}
      <View style={[styles.campaignContainer, styles.campaign3]}>
        <View style={styles.campaignHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#007AFF" />
          <Text style={styles.campaignHeaderText}>Lung Cancer Awareness Drive</Text>
        </View>
        <Text style={styles.campaignText}>Date: August 20, 2024</Text>
        <Text style={styles.campaignText}>Time: 11:00 AM - 3:00 PM</Text>
        <Text style={styles.campaignText}>Location: Community Center</Text>
        <ProgressBar progress={0.6} color="#FF6347" style={{ marginTop: 10 }} />
      </View>

      {/* Campaign 4 */}
      <View style={[styles.campaignContainer, styles.campaign4]}>
        <View style={styles.campaignHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#007AFF" />
          <Text style={styles.campaignHeaderText}>Skin Cancer Screening Event</Text>
        </View>
        <Text style={styles.campaignText}>Date: September 10, 2024</Text>
        <Text style={styles.campaignText}>Time: 10:30 AM - 2:30 PM</Text>
        <Text style={styles.campaignText}>Location: Riverside Park</Text>
        <ProgressBar progress={0.8} color="#FF6347" style={{ marginTop: 10 }} />
      </View>

      {/* Campaign 5 */}
      <View style={[styles.campaignContainer, styles.campaign5]}>
        <View style={styles.campaignHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#007AFF" />
          <Text style={styles.campaignHeaderText}>Colon Cancer Awareness Walkathon</Text>
        </View>
        <Text style={styles.campaignText}>Date: October 15, 2024</Text>
        <Text style={styles.campaignText}>Time: 8:00 AM - 12:00 PM</Text>
        <Text style={styles.campaignText}>Location: Liberty Park</Text>
        <ProgressBar progress={0.9} color="#FF6347" style={{ marginTop: 10 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  campaignContainer: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
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
  campaign1: {
    backgroundColor: '#E5F0FF',
  },
  campaign2: {
    backgroundColor: '#FFF3E0',
  },
  campaign3: {
    backgroundColor: '#FFEAEA',
  },
  campaign4: {
    backgroundColor: '#F5E6E8',
  },
  campaign5: {
    backgroundColor: '#E9F7F1',
  },
});

export default Campaigns;
