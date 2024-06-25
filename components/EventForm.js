import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Platform, Alert, TextInput, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const EventForm = ({ route }) => {
  // const route = useRoute();
  const { user } = route.params;

  const [eventName, setEventName] = useState('');
  const [eventCreationDate, setEventCreationDate] = useState(new Date());
  const [eventCreationTime, setEventCreationTime] = useState(new Date());
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState(null);
  const [eventTime, setEventTime] = useState(null);

  const [showEventDatePicker, setShowEventDatePicker] = useState(false);
  const [showEventTimePicker, setShowEventTimePicker] = useState(false);

  const onChangeEventDate = (event, selectedDate) => {
    const currentDate = selectedDate || eventDate;
    setShowEventDatePicker(Platform.OS === 'ios');
    setEventDate(currentDate);
  };

  const onChangeEventTime = (event, selectedTime) => {
    const currentTime = selectedTime || eventTime;
    setShowEventTimePicker(Platform.OS === 'ios');
    setEventTime(currentTime);
  };

  const createEvent = async () => {
    try {
      const newEvent = {
        name: eventName,
        creationDate: eventCreationDate.toISOString().split('T')[0],
        creationTime: eventCreationTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        date: eventDate ? eventDate.toISOString().split('T')[0] : '',
        time: eventTime ? eventTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) : '',
        location: eventLocation,
        description: eventDescription,
        userEmail: user.email_user,
      };

      const response = await axios.post('https://tumor-app-server.vercel.app/events', newEvent);

      if (response.status === 201 || response.status === 200) {
        setEventName('');
        setEventCreationDate(new Date());
        setEventCreationTime(new Date());
        setEventDate(null);
        setEventTime(null);
        setEventLocation('');
        setEventDescription('');
        Alert.alert("Success", "Event created successfully");
      } else {
        Alert.alert("Error", "Failed to create event");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while creating the event");
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={[styles.card]}>
        <View style={styles.title}>
          <Text>Create Event - {user.email_user}</Text>
        </View>
        <TextInput
          label="Event Name"
          value={eventName}
          onChangeText={setEventName}
          style={styles.input}
          placeholder="Enter Event Name"
        />
        <View style={styles.input}>
          <Text>Event Creation Date: {eventCreationDate.toISOString().split('T')[0]}</Text>
        </View>
        <View style={styles.input}>
          <Text>Event Creation Time: {eventCreationTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</Text>
        </View>
        <Button title="Select Event Date" onPress={() => setShowEventDatePicker(true)} />
        {showEventDatePicker && (
          <DateTimePicker
            value={eventDate || new Date()}
            mode="date"
            display="default"
            onChange={onChangeEventDate}
          />
        )}
        <Button title="Select Event Time" onPress={() => setShowEventTimePicker(true)} />
        {showEventTimePicker && (
          <DateTimePicker
            value={eventTime || new Date()}
            mode="time"
            display="default"
            onChange={onChangeEventTime}
          />
        )}
        <TextInput
          label="Event Location"
          value={eventLocation}
          onChangeText={setEventLocation}
          style={styles.input}
          placeholder="Enter Event Location"
        />
        <TextInput
          label="Event Description"
          value={eventDescription}
          onChangeText={setEventDescription}
          style={styles.input}
          placeholder="Enter Event Description"
        />
        <Button title="Create Event" onPress={createEvent} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    margin: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
});

export default EventForm;
