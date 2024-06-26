// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// const EventList = ({ route }) => {
//   const { user } = route.params;
//   const [loading, setLoading] = useState(true);
//   const [events, setEvents] = useState([]);
//   const navigation = useNavigation();

//   const fetchEvents = async (email) => {
//     try {
//       const response = await axios.get(`https://tumor-app-server.vercel.app/events/${email}`);
//       if (response.status === 200) {
//         setEvents(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user && user.email_user) {
//       fetchEvents(user.email_user);
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
//     <View style={styles.container}>
//       <Text style={styles.title}>Event List - {user.email_user}</Text>
//       {events.length === 0 ? (
//         <Text>No events found.</Text>
//       ) : (
//         <FlatList
//           data={events}
//           keyExtractor={(item) => item._id}
//           renderItem={({ item }) => (
//             <TouchableOpacity 
//               style={styles.eventItem} 
//               onPress={() => navigation.navigate('EventDetails', { event: item })}
//             >
//               <Text>{item.name}</Text>
//               <Text>Date: {item.date}</Text>
//               <Text>Time: {item.time}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   eventItem: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
// });

// export default EventList;


// import React, { useState , useEffect} from 'react';
// import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Modal } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';

// const EventList = ({ route }) => {
//   const { user } = route.params;
//   const [loading, setLoading] = useState(true);
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState(null); // State to hold filtered events
//   const [filterBy, setFilterBy] = useState(''); // State for filter selection ('time', 'location', 'rsvp')
//   const [showFilterModal, setShowFilterModal] = useState(false); // State to toggle filter modal
//   const navigation = useNavigation();

//   const fetchEvents = async (email) => {
//     try {
//       const response = await axios.get(`https://tumor-app-server.vercel.app/events/${email}`);
//       if (response.status === 200) {
//         setEvents(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user && user.email_user) {
//       fetchEvents(user.email_user);
//     }
//   }, [user]);

//   const applyFilter = () => {
//     let filtered = [...events]; // Create a copy of events to avoid mutating the state directly

//     if (filterBy === 'time') {
//       filtered.sort((a, b) => new Date(b.time) - new Date(a.time)); // Sort events by time descending
//     } else if (filterBy === 'location') {
//       filtered.sort((a, b) => a.location.localeCompare(b.location)); // Sort events by location alphabetically
//     } else if (filterBy === 'rsvp') {
//       filtered = events.filter(event => event.rsvp); // Filter events by RSVP status
//     }

//     setFilteredEvents(filtered);
//     setShowFilterModal(false); // Close the filter modal after applying filter
//   };

//   const clearFilter = () => {
//     setFilteredEvents(null);
//     setFilterBy('');
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.eventItem} 
//       onPress={() => navigation.navigate('EventDetails', { event: item })}
//     >
//       <Text>{item.name}</Text>
//       <Text>Date: {item.date}</Text>
//       <Text>Time: {item.time}</Text>
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Event List - {user.email_user}</Text>

//       {/* Filter button */}
//       <TouchableOpacity style={styles.filterButton} onPress={() => setShowFilterModal(true)}>
//         <Text style={styles.filterButtonText}>Filter</Text>
//       </TouchableOpacity>

//       {/* Modal for filter options */}
//       <Modal
//         visible={showFilterModal}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setShowFilterModal(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowFilterModal(false)}>
//               <FontAwesome name="close" size={24} color="black" />
//             </TouchableOpacity>
//             <Text style={styles.modalTitle}>Filter By</Text>
//             <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('time')}>
//               <Text style={styles.modalOptionText}>Time (Latest First)</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('location')}>
//               <Text style={styles.modalOptionText}>Location (A-Z)</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('rsvp')}>
//               <Text style={styles.modalOptionText}>RSVP Events</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.applyFilterButton} onPress={applyFilter}>
//               <Text style={styles.applyFilterButtonText}>Apply Filter</Text>
//             </TouchableOpacity>
//             {filteredEvents && (
//               <TouchableOpacity style={styles.clearFilterButton} onPress={clearFilter}>
//                 <Text style={styles.clearFilterButtonText}>Clear Filter</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </Modal>

//       {/* List of events */}
//       <FlatList
//         data={filteredEvents || events}
//         keyExtractor={(item) => item._id}
//         renderItem={renderItem}
//         style={styles.flatList}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   eventItem: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     width: '100%',
//   },
//   filterButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   filterButtonText: {
//     color: '#fff',
//     fontSize: 16,
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
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalOption: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   modalOptionText: {
//     fontSize: 16,
//   },
//   applyFilterButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   applyFilterButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   clearFilterButton: {
//     backgroundColor: '#dc3545',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   clearFilterButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   flatList: {
//     width: '100%',
//   },
// });

// export default EventList;






// working**********************************************************************************************************
// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';

// const EventList = ({ route }) => {
//   const { user } = route.params;
//   const [loading, setLoading] = useState(true);
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState(null); // State to hold filtered events
//   const [filterBy, setFilterBy] = useState(''); // State for filter selection ('time', 'location', 'rsvp')
//   const [showFilterModal, setShowFilterModal] = useState(false); // State to toggle filter modal
//   const navigation = useNavigation();
//   const isDarkMode = false; // Define isDarkMode or fetch it from your app's theme context

//   const fetchEvents = async (email) => {
//     try {
//       const response = await axios.get(`https://tumor-app-server.vercel.app/events/${email}`);
//       if (response.status === 200) {
//         setEvents(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user && user.email_user) {
//       fetchEvents(user.email_user);
//     }
//   }, [user]);

//   const applyFilter = () => {
//     let filtered = [...events]; // Create a copy of events to avoid mutating the state directly

//     if (filterBy === 'time') {
//       filtered.sort((a, b) => new Date(b.time) - new Date(a.time)); // Sort events by time descending
//     } else if (filterBy === 'location') {
//       filtered.sort((a, b) => a.location.localeCompare(b.location)); // Sort events by location alphabetically
//     } else if (filterBy === 'rsvp') {
//       filtered = events.filter(event => event.rsvp); // Filter events by RSVP status
//     }

//     setFilteredEvents(filtered);
//     setShowFilterModal(false); // Close the filter modal after applying filter
//   };

//   const clearFilter = () => {
//     setFilteredEvents(null);
//     setFilterBy('');
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.row}>
//       <Text style={styles.cell}>{item.name}</Text>
//       <Text style={styles.cell}>{item.date}</Text>
//       <Text style={styles.cell}>{item.time}</Text>
      
//       <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('EventDetails', { event: item })}>
//         <Ionicons name="eye-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
//       </TouchableOpacity>
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Event List - {user.email_user}</Text>

//       {/* Filter button */}
//       <TouchableOpacity style={styles.filterButton} onPress={() => setShowFilterModal(true)}>
//         <Text style={styles.filterButtonText}>Filter</Text>
//       </TouchableOpacity>

//       {/* Modal for filter options */}
//       <Modal
//         visible={showFilterModal}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setShowFilterModal(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowFilterModal(false)}>
//               <FontAwesome name="close" size={24} color="black" />
//             </TouchableOpacity>
//             <Text style={styles.modalTitle}>Filter By</Text>
//             <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('time')}>
//               <Text style={styles.modalOptionText}>Time (Latest First)</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('location')}>
//               <Text style={styles.modalOptionText}>Location (A-Z)</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('rsvp')}>
//               <Text style={styles.modalOptionText}>RSVP Events</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.applyFilterButton} onPress={applyFilter}>
//               <Text style={styles.applyFilterButtonText}>Apply Filter</Text>
//             </TouchableOpacity>
//             {filteredEvents && (
//               <TouchableOpacity style={styles.clearFilterButton} onPress={clearFilter}>
//                 <Text style={styles.clearFilterButtonText}>Clear Filter</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </Modal>

//       {/* Table of events */}
//       <ScrollView style={styles.tableContainer}>
//         <View style={styles.tableHeader}>
//           <Text style={styles.headerCell}>Name</Text>
//           <Text style={styles.headerCell}>Date</Text>
//           <Text style={styles.headerCell}>Time</Text>
//           <Text style={styles.headerCell}>Actions</Text>
//         </View>
//         {(filteredEvents || events).map((item) => (
//           <View key={item._id} style={styles.row}>
//             <Text style={styles.cell}>{item.name}</Text>
//             <Text style={styles.cell}>{item.date}</Text>
//             <Text style={styles.cell}>{item.time}</Text>
//             <TouchableOpacity
//               style={styles.detailsButton}
//               onPress={() => navigation.navigate('EventDetails', { event: item })}
//             >
//               <Ionicons name="eye-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f8f8f8',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   filterButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
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
//   tableContainer: {
//     flex: 1,
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//     marginTop: 10,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     paddingVertical: 8,
//     backgroundColor: '#007bff',
//   },
//   headerCell: {
//     flex: 1,
//     textAlign: 'center',
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   row: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   cell: {
//     flex: 1,
//     padding: 8,
//     textAlign: 'center',
//     fontSize: 12,
//   },
//   detailsButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     alignItems: 'center',
//   },
// });

// export default EventList;

import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from './ThemeContext';

const EventList = ({ route }) => {
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
  
    const convertTo24Hour = (time) => {
      const [hours, minutes] = time.split(/[: ]/);
      const period = time.split(' ')[1];
      let hour = parseInt(hours);
      if (period === 'PM' && hour !== 12) hour += 12;
      if (period === 'AM' && hour === 12) hour = 0;
      return `${hour.toString().padStart(2, '0')}:${minutes}`;
    };
  
    if (filterBy === 'time') {
      filtered.sort((a, b) => {
        const dateA = new Date(`${a.date}T${convertTo24Hour(a.time)}:00`);
        const dateB = new Date(`${b.date}T${convertTo24Hour(b.time)}:00`);
        return dateA - dateB;
      });
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

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.time}</Text>
      <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('EventDetails', { event: item })}>
        <Ionicons name="eye-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f8f8f8' }]}>
      {/* <Text style={styles.title}>Event List - {user.email_user}</Text> */}
      <TouchableOpacity style={styles.profileImageContainer}>
  <Image
     source={isDarkMode ? require('../assets/image/cards/5.jpg') : require('../assets/image/cards/6.jpg')}
    style={styles.profileImage}
  />
</TouchableOpacity>

      <TouchableOpacity style={[styles.filterButton, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]} onPress={() => setShowFilterModal(true)}>
        <Text style={styles.filterButtonText}>Filter</Text>
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

      <ScrollView style={[styles.tableContainer, { backgroundColor: isDarkMode ? '#2b2b2a' : '#f8f8f8' }]}>
        <View style={[styles.tableHeader, { backgroundColor: isDarkMode ? '#702963' : '#5353c6' }]}>
          <Text style={styles.headerCell}>Name</Text>
          <Text style={styles.headerCell}>Date</Text>
          <Text style={styles.headerCell}>Time</Text>
          <Text style={styles.headerCell}>Actions</Text>
        </View>
        {filteredEvents.map((item) => (
          <View key={item._id} style={styles.row}>
            <Text style={[styles.cell , {color: isDarkMode ? '#fff' : '#000'}]}>{item.name}</Text>
            <Text style={[styles.cell , {color: isDarkMode ? '#fff' : '#000'}]}>{item.date}</Text>
            <Text style={[styles.cell , {color: isDarkMode ? '#fff' : '#000'}]}>{item.time}</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigation.navigate('EventDetails', { event: item })}
            >
              <Ionicons name="pencil" size={24} color={isDarkMode ? '#fff' : '#000'} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
  filterButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
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
  tableContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 8,
    // backgroundColor: '#007bff',
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    fontSize: 15,
  },
  detailsButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});

export default EventList;





// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';
// import { Table, Row, Rows } from 'react-native-table-component';

// const EventList = ({ route }) => {
//   const { user } = route.params;
//   const [loading, setLoading] = useState(true);
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState(null);
//   const [filterBy, setFilterBy] = useState('');
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const navigation = useNavigation();

//   const fetchEvents = async (email) => {
//     try {
//       const response = await axios.get(`https://tumor-app-server.vercel.app/events/${email}`);
//       if (response.status === 200) {
//         setEvents(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user && user.email_user) {
//       fetchEvents(user.email_user);
//     }
//   }, [user]);

//   const applyFilter = () => {
//     let filtered = [...events];

//     if (filterBy === 'time') {
//       filtered.sort((a, b) => new Date(b.time) - new Date(a.time));
//     } else if (filterBy === 'location') {
//       filtered.sort((a, b) => a.location.localeCompare(b.location));
//     } else if (filterBy === 'rsvp') {
//       filtered = events.filter(event => event.rsvp);
//     }

//     setFilteredEvents(filtered);
//     setShowFilterModal(false);
//   };

//   const clearFilter = () => {
//     setFilteredEvents(null);
//     setFilterBy('');
//   };

//   const renderTable = () => {
//     const tableHead = ['Sr. No.', 'Title', 'Date', 'Time', 'Details'];
//     const tableData = (filteredEvents || events).map((event, index) => [
//       index + 1,
//       event.name,
//       event.date,
//       event.time,
//       <TouchableOpacity 
//         onPress={() => navigation.navigate('EventDetails', { event })}
//         style={styles.detailsButton}
//       >
//         <Text style={styles.detailsButtonText}>View</Text>
//       </TouchableOpacity>
//     ]);

//     return (
//       <View style={styles.tableContainer}>
//         <ScrollView horizontal>
//           <View>
//             <Table borderStyle={{ borderWidth: 1, borderColor: '#ccc' }}>
//               <Row data={tableHead} style={styles.tableHead} textStyle={styles.tableText} />
//               <Rows data={tableData} textStyle={styles.tableText} />
//             </Table>
//           </View>
//         </ScrollView>
//       </View>
//     );
//   };

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Event List - {user.email_user}</Text>

//       <TouchableOpacity style={styles.filterButton} onPress={() => setShowFilterModal(true)}>
//         <Text style={styles.filterButtonText}>Filter</Text>
//       </TouchableOpacity>

//       <Modal
//         visible={showFilterModal}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setShowFilterModal(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowFilterModal(false)}>
//               <FontAwesome name="close" size={24} color="black" />
//             </TouchableOpacity>
//             <Text style={styles.modalTitle}>Filter By</Text>
//             <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('time')}>
//               <Text style={styles.modalOptionText}>Time (Latest First)</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('location')}>
//               <Text style={styles.modalOptionText}>Location (A-Z)</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalOption} onPress={() => setFilterBy('rsvp')}>
//               <Text style={styles.modalOptionText}>RSVP Events</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.applyFilterButton} onPress={applyFilter}>
//               <Text style={styles.applyFilterButtonText}>Apply Filter</Text>
//             </TouchableOpacity>
//             {filteredEvents && (
//               <TouchableOpacity style={styles.clearFilterButton} onPress={clearFilter}>
//                 <Text style={styles.clearFilterButtonText}>Clear Filter</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </Modal>

//       {renderTable()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   filterButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   filterButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   tableContainer: {
//     flex: 1,
//     width: '100%',
//   },
//   tableHead: {
//     height: 40,
//     backgroundColor: '#f1f8ff',
//   },
//   tableText: {
//     margin: 6,
//   },
//   detailsButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   detailsButtonText: {
//     color: '#fff',
//     fontSize: 12,
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
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalOption: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   modalOptionText: {
//     fontSize: 16,
//   },
//   applyFilterButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   applyFilterButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   clearFilterButton: {
//     backgroundColor: '#dc3545',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   clearFilterButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default EventList;


