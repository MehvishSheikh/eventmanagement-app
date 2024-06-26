// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView, Platform, Alert, TextInput, Button, Text } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import axios from 'axios';
// import { useRoute } from '@react-navigation/native';

// const EventForm = ({ route }) => {
//   // const route = useRoute();
//   const { user } = route.params;

//   const [eventName, setEventName] = useState('');
//   const [eventCreationDate, setEventCreationDate] = useState(new Date());
//   const [eventCreationTime, setEventCreationTime] = useState(new Date());
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventDescription, setEventDescription] = useState('');
//   const [eventDate, setEventDate] = useState(null);
//   const [eventTime, setEventTime] = useState(null);

//   const [showEventDatePicker, setShowEventDatePicker] = useState(false);
//   const [showEventTimePicker, setShowEventTimePicker] = useState(false);

//   const onChangeEventDate = (event, selectedDate) => {
//     const currentDate = selectedDate || eventDate;
//     setShowEventDatePicker(Platform.OS === 'ios');
//     setEventDate(currentDate);
//   };

//   const onChangeEventTime = (event, selectedTime) => {
//     const currentTime = selectedTime || eventTime;
//     setShowEventTimePicker(Platform.OS === 'ios');
//     setEventTime(currentTime);
//   };

//   const createEvent = async () => {
//     try {
//       const newEvent = {
//         name: eventName,
//         creationDate: eventCreationDate.toISOString().split('T')[0],
//         creationTime: eventCreationTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
//         date: eventDate ? eventDate.toISOString().split('T')[0] : '',
//         time: eventTime ? eventTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) : '',
//         location: eventLocation,
//         description: eventDescription,
//         userEmail: user.email_user,
//       };

//       const response = await axios.post('https://tumor-app-server.vercel.app/events', newEvent);

//       if (response.status === 201 || response.status === 200) {
//         setEventName('');
//         setEventCreationDate(new Date());
//         setEventCreationTime(new Date());
//         setEventDate(null);
//         setEventTime(null);
//         setEventLocation('');
//         setEventDescription('');
//         Alert.alert("Success", "Event created successfully");
//       } else {
//         Alert.alert("Error", "Failed to create event");
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "An error occurred while creating the event");
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={[styles.container]}>
//       <View style={[styles.card]}>
//         <View style={styles.title}>
//           <Text>Create Event - {user.email_user}</Text>
//         </View>
//         <TextInput
//           label="Event Name"
//           value={eventName}
//           onChangeText={setEventName}
//           style={styles.input}
//           placeholder="Enter Event Name"
//         />
//         <View style={styles.input}>
//           <Text>Event Creation Date: {eventCreationDate.toISOString().split('T')[0]}</Text>
//         </View>
//         <View style={styles.input}>
//           <Text>Event Creation Time: {eventCreationTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</Text>
//         </View>
//         <Button title="Select Event Date" onPress={() => setShowEventDatePicker(true)} />
//         {showEventDatePicker && (
//           <DateTimePicker
//             value={eventDate || new Date()}
//             mode="date"
//             display="default"
//             onChange={onChangeEventDate}
//           />
//         )}
//         <Button title="Select Event Time" onPress={() => setShowEventTimePicker(true)} />
//         {showEventTimePicker && (
//           <DateTimePicker
//             value={eventTime || new Date()}
//             mode="time"
//             display="default"
//             onChange={onChangeEventTime}
//           />
//         )}
//         <TextInput
//           label="Event Location"
//           value={eventLocation}
//           onChangeText={setEventLocation}
//           style={styles.input}
//           placeholder="Enter Event Location"
//         />
//         <TextInput
//           label="Event Description"
//           value={eventDescription}
//           onChangeText={setEventDescription}
//           style={styles.input}
//           placeholder="Enter Event Description"
//         />
//         <Button title="Create Event" onPress={createEvent} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//   },
//   card: {
//     margin: 20,
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 5,
//     shadowColor: '#000000',
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: 15,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#CCCCCC',
//   },
// });

// export default EventForm;

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Platform, Alert, TextInput, Button, Text, Switch, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { useTheme } from './ThemeContext';

const EventForm = ({ route }) => {
  const { user } = route.params;

  const [eventName, setEventName] = useState('');
  const [eventCreationDate, setEventCreationDate] = useState(new Date());
  const [eventCreationTime, setEventCreationTime] = useState(new Date());
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState(null);
  const [eventTime, setEventTime] = useState(null);
  const { isDarkMode, toggleDarkMode } = useTheme();

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
        creationTime: eventCreationTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: eventDate ? eventDate.toISOString().split('T')[0] : '',
        time: eventTime ? eventTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
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
    <ScrollView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={[styles.card, isDarkMode && styles.darkCard]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, isDarkMode && styles.darkTitle]}>Create Event</Text>
        </View>
        <TextInput
          value={eventName}
          onChangeText={setEventName}
          style={[styles.input, isDarkMode && styles.darkInput]}
          placeholder="Enter Event Name"
          placeholderTextColor={isDarkMode ? "#ccc" : "#999"}
        />
        <View style={[styles.input, styles.disabledInput, isDarkMode && styles.darkInput]}>
          <Text style={isDarkMode ? styles.darkText : styles.lightText}>
            Event Creation Date: {eventCreationDate.toISOString().split('T')[0]}
          </Text>
        </View>
        <View style={[styles.input, styles.disabledInput, isDarkMode && styles.darkInput]}>
          <Text style={isDarkMode ? styles.darkText : styles.lightText}>
            Event Creation Time: {eventCreationTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </View>
        <TouchableOpacity style={[styles.button, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]} onPress={() => setShowEventDatePicker(true)}>
        <Text style={[styles.buttonText,]}>Select Event Date</Text>
      </TouchableOpacity>
        {/* <Button title="Select Event Date" onPress={() => setShowEventDatePicker(true)} style={[styles.button, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]}/> */}
        {showEventDatePicker && (
          <DateTimePicker
            value={eventDate || new Date()}
            mode="date"
            display="default"
            onChange={onChangeEventDate}
          />
        )}
        {eventDate && (
          <View style={styles.input}>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>
              Selected Event Date: {eventDate.toISOString().split('T')[0]}
            </Text>
          </View>
        )}
           <TouchableOpacity style={[styles.button, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]} onPress={() => setShowEventTimePicker(true)}>
        <Text style={[styles.buttonText,]}>Select Event Time</Text>
      </TouchableOpacity>
       
        {showEventTimePicker && (
          <DateTimePicker
            value={eventTime || new Date()}
            mode="time"
            display="default"
            onChange={onChangeEventTime}
          />
        )}
        {eventTime && (
          <View style={styles.input}>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>
              Selected Event Time: {eventTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </View>
        )}
        <TextInput
          value={eventLocation}
          onChangeText={setEventLocation}
          style={[styles.input, isDarkMode && styles.darkInput]}
          placeholder="Enter Event Location"
          placeholderTextColor={isDarkMode ? "#ccc" : "#999"}
        />
        <TextInput
          value={eventDescription}
          onChangeText={setEventDescription}
          style={[styles.input, isDarkMode && styles.darkInput]}
          placeholder="Enter Event Description"
          placeholderTextColor={isDarkMode ? "#ccc" : "#999"}
        />
        <TouchableOpacity style={[styles.button, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]} onPress={createEvent}>
        <Text style={[styles.buttonText,]}>Create</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  card: {
    margin: 9,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  darkCard: {
    backgroundColor: '#333',
  },
  titleContainer: {
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
  },
  darkTitle: {
    color: '#fff',
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    color: '#000',
  },
  darkInput: {
    borderBottomColor: '#555',
    backgroundColor: '#444',
    color: '#fff',
  },
  disabledInput: {
    backgroundColor: '#f0f0f0',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  darkLabel: {
    color: '#ccc',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default EventForm;
