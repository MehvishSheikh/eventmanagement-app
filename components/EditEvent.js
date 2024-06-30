import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import axios from 'axios';
import { useTheme } from './ThemeContext'; // Assuming you have a ThemeContext

const EditEvent = ({ route, navigation }) => {
  const { event } = route.params;
  const { isDarkMode } = useTheme();

  const [eventName, setEventName] = useState(event.name);
  const [eventLocation, setEventLocation] = useState(event.location);
  const [eventDescription, setEventDescription] = useState(event.description);
  const [eventDate, setEventDate] = useState(new Date(event.date));
  const [eventTime, setEventTime] = useState(new Date(`${event.date}T${event.time}`));

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate) => {
    setEventDate(selectedDate);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (selectedTime) => {
    setEventTime(selectedTime);
    hideTimePicker();
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
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f8f8f8' }]}>
      <View style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
        <View style={styles.title}>
          <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>Edit Event</Text>
        </View>
        <TextInput
          label="Event Name"
          value={eventName}
          onChangeText={setEventName}
          style={[styles.input, { color: isDarkMode ? '#fff' : '#000', borderBottomColor: isDarkMode ? '#fff' : '#ccc' }]}
          placeholder="Enter Event Name"
          placeholderTextColor={isDarkMode ? '#888' : '#ccc'}
        />
        <Button
          title="Select Event Date"
          onPress={showDatePicker}
          color={isDarkMode ? '#702963' : '#5353c6'}
          style={styles.button}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />
        <Button
          title="Select Event Time"
          onPress={showTimePicker}
          color={isDarkMode ? '#702963' : '#5353c6'}
          style={styles.button}
        />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
        />
        <TextInput
          label="Event Location"
          value={eventLocation}
          onChangeText={setEventLocation}
          style={[styles.input, { color: isDarkMode ? '#fff' : '#000', borderBottomColor: isDarkMode ? '#fff' : '#ccc' }]}
          placeholder="Enter Event Location"
          placeholderTextColor={isDarkMode ? '#888' : '#ccc'}
        />
        <TextInput
          label="Event Description"
          value={eventDescription}
          onChangeText={setEventDescription}
          style={[styles.input, { color: isDarkMode ? '#fff' : '#000', borderBottomColor: isDarkMode ? '#fff' : '#ccc' }]}
          placeholder="Enter Event Description"
          placeholderTextColor={isDarkMode ? '#888' : '#ccc'}
        />
        <Button
          title="Update Event"
          onPress={updateEvent}
          color={isDarkMode ? '#702963' : '#5353c6'}
          style={styles.button}
        />
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
    borderRadius: 5,
    shadowColor: '#000',
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
  },
  button: {
    marginVertical: 10,
    padding: 20,
    borderRadius: 5,
    marginTop:20
  },
});

export default EditEvent;
