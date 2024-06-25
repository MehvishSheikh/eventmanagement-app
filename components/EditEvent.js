import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const EditEvent = ({ route, navigation }) => {
  const { event } = route.params;

  const [eventName, setEventName] = useState(event.name);
  const [eventLocation, setEventLocation] = useState(event.location);
  const [eventDescription, setEventDescription] = useState(event.description);
  const [eventDate, setEventDate] = useState(new Date(event.date));
  const [eventTime, setEventTime] = useState(new Date(`${event.date}T${event.time}`));

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

  const updateEvent = async () => {
    try {
      const updatedEvent = {
        ...event,
        name: eventName,
        date: eventDate.toISOString().split('T')[0],
        time: eventTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        location: eventLocation,
        description: eventDescription,
      };

      const response = await axios.put(`https://tumor-app-server.vercel.app/events/${event._id}`, updatedEvent);

      if (response.status === 200) {
        Alert.alert("Success", "Event updated successfully", [
          { text: "OK", onPress: () => navigation.goBack() }
        ]);
      } else {
        Alert.alert("Error", "Failed to update event");
      }
    } catch (error) {
      console.error('Error updating event:', error);
      Alert.alert("Error", "An error occurred while updating the event");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text>Edit Event</Text>
        </View>
        <TextInput
          label="Event Name"
          value={eventName}
          onChangeText={setEventName}
          style={styles.input}
          placeholder="Enter Event Name"
        />
        <Button title="Select Event Date" onPress={() => setShowEventDatePicker(true)} />
        {showEventDatePicker && (
          <DateTimePicker
            value={eventDate}
            mode="date"
            display="default"
            onChange={onChangeEventDate}
          />
        )}
        <Button title="Select Event Time" onPress={() => setShowEventTimePicker(true)} />
        {showEventTimePicker && (
          <DateTimePicker
            value={eventTime}
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
        <Button title="Update Event" onPress={updateEvent} />
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

export default EditEvent;
