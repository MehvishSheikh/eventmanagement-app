import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from './ThemeContext';

const EventDisplay = ({ route }) => {
  const { user } = route.params;
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterType, setFilterType] = useState('');
  const navigation = useNavigation();
  const { isDarkMode } = useTheme(); 

  const fetchEvents = async (email) => {
    try {
      const response = await axios.get(`https://tumor-app-server.vercel.app/events/${email}`);
      if (response.status === 200) {
        const incompleteEvents = response.data.filter(event => !event.completed);
        setEvents(incompleteEvents);
        setFilteredEvents(incompleteEvents);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.email_user) {
      fetchEvents(user.email_user);
    }
  }, [user]);

  const applyFilter = () => {
    let filtered = [...events];

    if (filterBy === 'time') {
      filtered.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time));
    } else if (filterBy === 'location') {
      filtered.sort((a, b) => a.location.localeCompare(b.location));
    } else if (filterBy === 'rsvp') {
      filtered = events.filter(event => event.rsvp);
    }

    setFilteredEvents(filtered);
    setShowFilterModal(false);
  };

  const clearFilter = () => {
    setFilteredEvents(events);
    setFilterBy('');
  };

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || new Date();
      setShowDatePicker(false);
      setSelectedDate(currentDate);

      if (filterType === 'month') {
        const selectedMonth = currentDate.toISOString().split('-').slice(0, 2).join('-');
        const filtered = events.filter(event => event.date.startsWith(selectedMonth));
        setFilteredEvents(filtered);
      }
    } else {
      setShowDatePicker(false);
    }
  };

  const renderEventItem = (item) => (
    <View key={item._id} style={styles.eventContainer}>
    <Text style={styles.eventName}>{item.name}    |  Location : {item.location}</Text>
    <Text style={styles.eventDateTime}>Date : {item.date}   at  {item.time}</Text>
  </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
    
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f8f8f8' }]}>

    <TouchableOpacity style={styles.profileImageContainer}>
  <Image
     source={isDarkMode ? require('../assets/image/cards/5.jpg') : require('../assets/image/cards/6.jpg')}
    style={styles.profileImage}
  />
</TouchableOpacity>

      {/* <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>All Events for User {user.user_name}</Text> */}

      <TouchableOpacity style={[styles.filterButton, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]} onPress={() => setShowFilterModal(true)}>
        <Text style={styles.filterButtonText}>Apply a Filter</Text>
      </TouchableOpacity>

      <Modal
        visible={showFilterModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowFilterModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowFilterModal(false)}>
              <FontAwesome name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Filter By</Text>
            <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('time')}>
              <Text style={styles.modalOptionText}>Time (Latest First)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('location')}>
              <Text style={styles.modalOptionText}>Location (A-Z)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('rsvp')}>
              <Text style={styles.modalOptionText}>RSVP Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={() => {
              setFilterType('month');
              setShowDatePicker(true);
            }}>
              <Text style={styles.modalOptionText}>Select Month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyFilterButton} onPress={applyFilter}>
              <Text style={styles.applyFilterButtonText}>Apply Filter</Text>
            </TouchableOpacity>
            {filteredEvents && (
              <TouchableOpacity style={styles.clearFilterButton} onPress={clearFilter}>
                <Text style={styles.clearFilterButtonText}>Clear Filter</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )}

<ScrollView contentContainerStyle={[styles.container]}>
        {filteredEvents.map(renderEventItem)}
      </ScrollView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#f8f8f8',
    margingTop: 50,
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    alignSelf: 'center',
  },
  filterButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalOptionText: {
    fontSize: 14,
  },
  applyFilterButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  applyFilterButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  clearFilterButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  clearFilterButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  eventsContainer: {
    flex: 1,
    marginTop: 10,
  },
  eventContainer: {
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#00796b',
    marginBottom: 5,
  },
  eventTime: {
    fontSize: 14,
    color: '#00796b',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    color: '#00796b',
  },
});

export default EventDisplay;