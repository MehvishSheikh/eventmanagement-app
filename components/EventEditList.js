// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import axios from 'axios';
// import { useTheme } from './ThemeContext';

// const EventLocationList = ({ route }) => {
//   const { user } = route.params; 
//   const [loading, setLoading] = useState(true);
//   const [events, setEvents] = useState([]);
//   const { isDarkMode } = useTheme(); 

//   const fetchRsvpEvents = async (email) => {
//     try {
//       const response = await axios.get(`https://tumor-app-server.vercel.app/user/${email}/events/rsvp`);
//       if (response.status === 200) {
//         setEvents(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching RSVPed events:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     if (user && user.email_user) {
//       fetchRsvpEvents(user.email_user);
//     }
//   }, [user]);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <>
//     <TouchableOpacity style={styles.profileImageContainer}>
//   <Image
//     source={isDarkMode ? require('../assets/image/cards/7.jpg') : require('../assets/image/cards/8.jpg')}
//     style={styles.profileImage}
//   />
// </TouchableOpacity>
//     <ImageBackground
//     source={require('../assets/image/locationconbg.jpg')} // Path to your background image
//     style={styles.backgroundImage}
//   >
//     <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f8f8f8' }]}>
  

//       {/* <Text style={styles.title}>RSVPed Events for {user.email_user}</Text> */}
//       {events.length === 0 ? (
//         <Text style={styles.noEventsText}>No RSVPed events found.</Text>
//       ) : (
//         <FlatList
//           data={events}
//           keyExtractor={(item) => item._id}
//           renderItem={({ item }) => (
//             <View style={styles.eventContainer}>
//               <Text style={styles.eventName}>{item.name}</Text>
//               {/* <Text>Date: {item.date}</Text>
//               <Text>Time: {item.time}</Text> */}
//               <Text>Location: {item.location}</Text>
//               {/* <Text>Description: {item.description}</Text> */}
//             </View>
//           )}
//         />
//       )}
//     </View>
//     </ImageBackground>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     // backgroundColor: '#f8f8f8',
//     margingTop: 50,
//   },
//   backgroundImage: {
//     // backgroundColor: '#e0f7fa',
//     // backgroundColor: '#e0f7fa',
//     borderRadius: 10,
//     padding: 15,
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   profileImageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     marginTop: 30,
//     alignSelf: 'center',
//   },
//   filterButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//     marginTop: 30,
//   },
//   filterButtonText: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     marginHorizontal: 20,
//     padding: 20,
//     borderRadius: 10,
//   },
//   modalCloseButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalOption: {
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   modalOptionText: {
//     fontSize: 14,
//   },
//   applyFilterButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   applyFilterButtonText: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   clearFilterButton: {
//     backgroundColor: '#dc3545',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   clearFilterButtonText: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   eventsContainer: {
//     flex: 1,
//     marginTop: 10,
//   },
//   eventContainer: {
//     backgroundColor: '#e0f7fa',
//     borderRadius: 10,
//     padding: 15,
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   eventName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#00796b',
//     marginBottom: 5,
//   },
//   eventDate: {
//     fontSize: 14,
//     color: '#00796b',
//     marginBottom: 5,
//   },
//   eventTime: {
//     fontSize: 14,
//     color: '#00796b',
//     marginBottom: 5,
//   },
//   eventLocation: {
//     fontSize: 14,
//     color: '#00796b',

//   },
// });

// export default EventLocationList;



import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { useTheme } from './ThemeContext';
import { Ionicons } from '@expo/vector-icons';
const EventEditList = ({ navigation ,route }) => {
  const { user } = route.params; 
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const { isDarkMode } = useTheme(); 

  const fetchRsvpEvents = async (email) => {
    try {
      const response = await axios.get(`https://tumor-app-server.vercel.app/events/${email}`);
      if (response.status === 200) {
        setEvents(response.data);
      }
    } catch (error) {
      console.error('Error fetching RSVPed events:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user && user.email_user) {
      fetchRsvpEvents(user.email_user);
    }
  }, [user]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f8f8f8' }]}>
  <TouchableOpacity style={styles.profileImageContainer}>
  <Image
    source={isDarkMode ? require('../assets/image/editimg/11.jpg') : require('../assets/image/editimg/12.jpg')}
    style={styles.profileImage}
  />
</TouchableOpacity>

      {/* <Text style={styles.title}>RSVPed Events for {user.email_user}</Text> */}
      {events.length === 0 ? (
        <Text style={styles.noEventsText}>No RSVPed events found.</Text>
      ) : (
        <FlatList
        data={events}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.eventContainer}>
            <View style={styles.detailsContainer}>
            <Text style={styles.eventName}>{item.name} | Location: {item.location}</Text>
            <Text style={styles.eventDateTime}>Date: {item.date} at {item.time}</Text>
            </View>
            <View style={styles.iconContainer}>
            {/* <Ionicons
              name="location"
              size={30}
              color="#007bff"
              style={styles.icon}
              onPress={() => navigation.navigate('EventMap', { location: item.location })}
            /> */}
            <Ionicons
              name="pencil"
              size={40}
              color="#007bff"
              style={styles.icon}
              onPress={() => navigation.navigate('EditEvent', { event: item })}
            />
          </View>
          </View>
        )}
      />
      )}
    </View>
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
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 270,
    gap:230,
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

export default EventEditList;