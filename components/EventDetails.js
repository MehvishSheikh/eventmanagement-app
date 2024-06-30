// // import React from 'react';
// // import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// // import axios from 'axios';

// // const EventDetails = ({ route, navigation }) => {
// //   const { event } = route.params;

// //   const deleteEvent = async () => {
// //     try {
// //       const response = await axios.delete(`https://tumor-app-server.vercel.app/events/${event._id}`);
// //       if (response.status === 200) {
// //         Alert.alert("Success", "Event deleted successfully", [
// //           { text: "OK", onPress: () => navigation.goBack() }
// //         ]);
// //         Navigation.navigate('Home');
// //       }
// //     } catch (error) {
// //       console.error('Error deleting event:', error);
// //       Alert.alert("Error", "Failed to delete event");
// //     }
// //   };

// //   const editEvent = () => {
// //     navigation.navigate('EditEvent', { event });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>{event.name}</Text>
// //       <Text>Date: {event.date}</Text>
// //       <Text>Time: {event.time}</Text>
// //       <Text>Location: {event.location}</Text>
// //       <Text>Description: {event.description}</Text>
// //       <View style={styles.buttonContainer}>
// //         <Button title="Edit Event" onPress={editEvent} />
// //         <Button title="Delete Event" onPress={deleteEvent} color="red" />
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   buttonContainer: {
// //     marginTop: 20,
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     width: '100%',
// //   },
// // });

// // export default EventDetails;



// import React from 'react';
// import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';
// import { FontAwesome } from '@expo/vector-icons';

// const EventDetails = ({ route, navigation }) => {
//   const { event } = route.params;

//   const deleteEvent = async () => {
//     try {
//       const response = await axios.delete(`https://tumor-app-server.vercel.app/events/${event._id}`);
//       if (response.status === 200) {
//         Alert.alert("Success", "Event deleted successfully", [
//           { text: "OK", onPress: () => navigation.goBack() }
//         ]);
//         navigation.navigate('Home');
//       }
//     } catch (error) {
//       console.error('Error deleting event:', error);
//       Alert.alert("Error", "Failed to delete event");
//     }
//   };

//   const editEvent = () => {
//     navigation.navigate('EditEvent', { event });
//   };

//   const rsvpEvent = async () => {
//     try {
//       const response = await axios.put(`https://tumor-app-server.vercel.app/events/${event._id}/rsvp`);
//       if (response.status === 200) {
//         Alert.alert("Success", "You have RSVPed to the event", [
//           { text: "OK", onPress: () => navigation.goBack() }
//         ]);
//       }
//     } catch (error) {
//       console.error('Error RSVPing event:', error);
//       Alert.alert("Error", "Failed to RSVP for the event");
//     }
//   };


//   return (
//     <View style={styles.container}>
//       <Text style={[styles.title, event.rsvp && styles.rsvpedTitle]}>{event.name}</Text>
//       {event.rsvp && (
//         <View style={styles.rsvpedContainer}>
//           <FontAwesome name="check-circle" size={24} color="green" />
//           <Text style={styles.rsvpedText}>RSVPed</Text>
//         </View>
//       )}
//       <Text>Date: {event.date}</Text>
//       <Text>Time: {event.time}</Text>
//       <Text>Location: {event.location}</Text>
//       <Text>Description: {event.description}</Text>
//       <View style={styles.buttonContainer}>
//         <Button title="Edit Event" onPress={editEvent} />
//         <Button title="Delete Event" onPress={deleteEvent} color="red" />
//       </View>
//       {!event.rsvp && (
//         <View style={styles.rsvpButtonContainer}>
//           <Button title="RSVP" onPress={rsvpEvent} color="blue" />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   rsvpedTitle: {
//     color: 'green',
//   },
//   rsvpedContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   rsvpedText: {
//     marginLeft: 5,
//     color: 'green',
//     fontSize: 16,
//   },
//   buttonContainer: {
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   rsvpButtonContainer: {
//     marginTop: 20,
//   },
// });

// export default EventDetails;

// import React from 'react';
// import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { FontAwesome, Ionicons } from '@expo/vector-icons';

// const EventDetails = ({ route, navigation }) => {
//   const { event } = route.params;

//   // Log event object to verify its structure
//   console.log('Event object:', event);

//   const deleteEvent = async () => {
//     try {
//       const response = await axios.delete(`https://tumor-app-server.vercel.app/events/${event._id}`);
//       if (response.status === 200) {
//         Alert.alert("Success", "Event deleted successfully", [
//           { text: "OK", onPress: () => navigation.goBack() }
//         ]);
//         navigation.navigate('Home');
//       }
//     } catch (error) {
//       console.error('Error deleting event:', error);
//       Alert.alert("Error", "Failed to delete event");
//     }
//   };

//   const editEvent = () => {
//     navigation.navigate('EditEvent', { event });
//   };

//   const rsvpEvent = async () => {
//     try {
//       const response = await axios.put(`https://tumor-app-server.vercel.app/events/${event._id}/rsvp`);
//       if (response.status === 200) {
//         Alert.alert("Success", "You have RSVPed to the event", [
//           { text: "OK", onPress: () => navigation.goBack() }
//         ]);
//       }
//     } catch (error) {
//       console.error('Error RSVPing event:', error);
//       Alert.alert("Error", "Failed to RSVP for the event");
//     }
//   };

//   const viewMap = () => {
//     navigation.navigate('EventMap', { eventId: event._id });
//   };

//   if (!event) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>Event data not available</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={[styles.title, event.rsvp && styles.rsvpedTitle]}>{event.name}</Text>
//       {event.rsvp && (
//         <View style={styles.rsvpedContainer}>
//           <FontAwesome name="check-circle" size={24} color="green" />
//           <Text style={styles.rsvpedText}>RSVPed</Text>
//         </View>
//       )}
//       <Text>Date: {event.date}</Text>
//       <Text>Time: {event.time}</Text>
//       <Text>Location: {event.location}</Text>
//       <Text>Description: {event.description}</Text>
//       <View style={styles.buttonContainer}>
//         <Button title="Edit Event" onPress={editEvent} />
//         <Button title="Delete Event" onPress={deleteEvent} color="red" />
//       </View>
//       {!event.rsvp && (
//         <View style={styles.rsvpButtonContainer}>
//           <Button title="RSVP" onPress={rsvpEvent} color="blue" />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   rsvpedTitle: {
//     color: 'green',
//   },
//   rsvpedContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   rsvpedText: {
//     marginLeft: 5,
//     color: 'green',
//     fontSize: 16,
//   },
//   buttonContainer: {
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   rsvpButtonContainer: {
//     marginTop: 20,
//   },
//   mapButton: {
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   mapButtonText: {
//     marginLeft: 5,
//     fontSize: 16,
//     color: '#007bff',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//   },
// });

// export default EventDetails;


import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert, Animated, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useTheme } from './ThemeContext'; // Assuming you have a ThemeContext for dark mode
import MapView, { Marker } from 'react-native-maps';

const EventDetails = ({ route, navigation }) => {
  const { event } = route.params;
  const { isDarkMode } = useTheme(); // Using isDarkMode from the context

  const [countdown, setCountdown] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity
  const [isRSVPed, setIsRSVPed] = useState(event.rsvp);
  const [isCompleted, setIsCompleted] = useState(event.completed);

  // Log event object to verify its structure
  // console.log('Event object:', event);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const eventDate = new Date(event.date);
      const now = new Date();
      const timeRemaining = eventDate - now;

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        setCountdown('Event has started. Hurry Up!');
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => clearInterval(intervalId);
  }, [event.date]);

  const deleteEvent = async () => {
    try {
      const response = await axios.delete(`https://tumor-app-server.vercel.app/events/${event._id}`);
      if (response.status === 200) {
        Alert.alert("Success", "Event deleted successfully", [
          { text: "OK", onPress: () => navigation.goBack() }
        ]);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      Alert.alert("Error", "Failed to delete event");
    }
  };

  const editEvent = () => {
    navigation.navigate('EditEvent', { event });
  };

  const rsvpEvent = async () => {
    try {
      const response = await axios.put(`https://tumor-app-server.vercel.app/events/${event._id}/rsvp`);
      if (response.status === 200) {
        setIsRSVPed(true);
        Alert.alert("Success", "You have RSVPed to the event");
      }
    } catch (error) {
      console.error('Error RSVPing event:', error);
      Alert.alert("Error", "Failed to RSVP for the event");
    }
  };

  const viewMap = () => {
    navigation.navigate('EventMap', { location: event.location });
  };

  const completedEvent = async () => {
    try {
      const response = await axios.put(`https://tumor-app-server.vercel.app/events/${event._id}/completed`);
      if (response.status === 200) {
        setIsCompleted(true);
        Alert.alert("Success", "Your event has been marked as completed");
      }
    } catch (error) {
      console.error('Error marking event as completed:', error);
      Alert.alert("Error", "Failed to mark event as completed");
    }
  };

  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Event data not available</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <View style={styles.mapButtonContainer}>
        <TouchableOpacity style={styles.option} onPress={viewMap}>
          <Ionicons name="map-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Open Map</Text>
        </TouchableOpacity>
      </View>
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.option} onPress={editEvent}>
            <Ionicons name="create-outline" size={24} color="#2196f3" />
            <Text style={styles.optionText}>Edit Event</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={deleteEvent}>
            <Ionicons name="trash-outline" size={24} color="#2196f3" />
            <Text style={styles.optionText}>Delete Event</Text>
          </TouchableOpacity>
        </View>
        {!isRSVPed && (
          <View style={styles.rsvpButtonContainer}>
            <TouchableOpacity style={styles.option} onPress={rsvpEvent}>
              <Ionicons name="checkmark-circle-outline" size={24} color="green" />
              <Text style={styles.optionText}>RSVP</Text>
            </TouchableOpacity>
          </View>
        )}
        {!isCompleted && (
          <View style={styles.completedButtonContainer}>
            <TouchableOpacity style={styles.option} onPress={completedEvent}>
              <Ionicons name="checkmark-done-outline" size={24} color="#f44336" />
              <Text style={styles.optionText}>Mark as Complete</Text>
            </TouchableOpacity>
          </View>
        )}
        <ImageBackground source={require('../assets/image/cardbg.jpg')} style={styles.countdownContainer}>
          <View style={[styles.countdownContainer]}>
            <Text style={[styles.countdown, { color: '#d32f2f' }]}>{countdown}</Text>
            <Text style={[styles.countdown, { color: '#1976d2' }]}>{event.name}</Text>
            {isRSVPed && (
              <View style={styles.statusContainer}>
                <FontAwesome name="check-circle" size={33} color="green" />
                <Text style={[styles.statusText, { color: 'green' }]}>RSVPed</Text>
              </View>
            )}
            {isCompleted && (
              <View style={styles.statusContainer}>
                <FontAwesome name="check-square" size={24} color="#d32f2f" />
                <Text style={[styles.statusText, { color: '#d32f2f' }]}>Completed</Text>
              </View>
            )}
          </View>
        </ImageBackground>
        <View style={[styles.detailContainer, { backgroundColor: isDarkMode ? '#222' : '#ffffff' }]}>
          <View style={styles.detailItem}>
            <Ionicons name="calendar-outline" size={24} color="#1976d2" />
            <Text style={[styles.detailText, { color: isDarkMode ? '#ccc' : '#424242' }]}>Date: {event.date}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="time-outline" size={24} color="#1976d2" />
            <Text style={[styles.detailText, { color: isDarkMode ? '#ccc' : '#424242' }]}>Time: {event.time}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="location-outline" size={24} color="#1976d2" />
            <Text style={[styles.detailText, { color: isDarkMode ? '#ccc' : '#424242' }]}>Location: {event.location}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="information-circle-outline" size={24} color="#1976d2" />
            <Text style={[styles.detailText, { color: isDarkMode ? '#ccc' : '#424242' }]}>Description: {event.description}</Text>
          </View>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  mapButtonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  countdownContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    height: 180,
    width: 320,
    justifyContent: 'center',
  },
  countdown: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  statusText: {
    marginLeft: 5,
    fontSize: 16,
  },
  detailContainer: {
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  rsvpButtonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  completedButtonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default EventDetails;





