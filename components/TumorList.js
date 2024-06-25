import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const TumorData = () => {
  const [tumorData, setTumorData] = useState(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/MehvishSheikh/restapi-app/db');
        const data = await response.json();
        setTumorData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {tumorData && tumorData.tumors && tumorData.tumors.map((tumorType, index) => (
        <View key={index} style={styles.container}>
          <View style={[styles.tumorTypeContainer, isDarkMode && styles.darkTumorTypeContainer]}>
            <Text style={[styles.tumorTypeHeader, isDarkMode && styles.darkTumorTypeHeader]}>{tumorType.type}</Text>
            <Text style={[styles.tumorTypeDescription, isDarkMode && styles.darkTumorTypeDescription]}>Description: {tumorType.description}</Text>
            <Image source={{ uri: tumorType.image_url }} style={styles.tumorTypeImage} />
          </View>
          <View style={[styles.tumorsContainer, isDarkMode && styles.darkTumorsContainer]}>
            {tumorType.tumors.map((tumor, tumorIndex) => (
              <View key={tumorIndex} style={[styles.tumorContainer, isDarkMode && styles.darkTumorContainer]}>
                <Text style={[styles.tumorName, isDarkMode && styles.darkTumorName]}>{tumor.type}</Text>
                <View style={styles.tumorInfoContainer}>
                  <Text style={[styles.infoText, isDarkMode && styles.darkInfoText]}>
                    {"\u2022"} Name: {tumor.name} {"\n"}
                    {"\u2022"} Percentage: {tumor.percentage} {"\n"}
                    {"\u2022"} Causes: {tumor.causes} {"\n"}
                    {"\u2022"} Treatments: {tumor.treatments.join(', ')} {"\n"}
                    {"\u2022"} Info: {tumor.info}
                  </Text>
                  <Image source={{ uri: tumor.image_url }} style={styles.tumorImage} />
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container: {
    marginBottom: 20,
  },
  tumorTypeContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  darkTumorTypeContainer: {
    backgroundColor: '#333',
  },
  tumorTypeHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF1493',
  },
  darkTumorTypeHeader: {
    color: '#FF1493',
  },
  tumorTypeDescription: {
    marginBottom: 10,
    color: '#000',
  },
  darkTumorTypeDescription: {
    color: '#ccc',
  },
  tumorTypeImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  tumorsContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
  },
  darkTumorsContainer: {
    backgroundColor: '#444',
  },
  tumorContainer: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  darkTumorContainer: {
    backgroundColor: '#333',
  },
  tumorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF1493',
  },
  darkTumorName: {
    color: '#FF1493',
  },
  tumorInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    flex: 1,
    lineHeight: 20,
    color: '#000',
  },
  darkInfoText: {
    color: '#ccc',
  },
  tumorImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 20,
  },
});

export default TumorData;
