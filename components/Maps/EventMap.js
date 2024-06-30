// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, ActivityIndicator, Alert, TextInput, Button, Text, Share, TouchableOpacity } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import axios from 'axios';
// import { Ionicons } from '@expo/vector-icons';

// const EventMap = ({ route }) => {
//   const { location } = route.params;
//   const [coords, setCoords] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(location);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCoordinates(location);
//   }, [location]);

//   const fetchCoordinates = async (query) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`);
//       if (response.data.length > 0) {
//         const { lat, lon } = response.data[0];
//         setCoords({
//           latitude: parseFloat(lat),
//           longitude: parseFloat(lon),
//         });
//       } else {
//         Alert.alert('Error', 'Location not found');
//       }
//     } catch (error) {
//       console.error('Error fetching coordinates:', error);
//       Alert.alert('Error', 'Failed to fetch coordinates');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onShare = async () => {
//     try {
//       await Share.share({
//         message: `Event Location: ${searchQuery}\nLatitude: ${coords.latitude}\nLongitude: ${coords.longitude}`,
//       });
//     } catch (error) {
//       Alert.alert('Error', 'Failed to share the location');
//     }
//   };

//   const handleSearch = () => {
//     fetchCoordinates(searchQuery);
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchBar}
//           placeholder="Search for a location"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//         <Ionicons name="search-outline" size={24} color="white" />
//         </TouchableOpacity>
//       </View>
//       {coords && (
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: coords.latitude,
//             longitude: coords.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           <Marker coordinate={coords} title={searchQuery} />
//         </MapView>
//       )}
//       {coords && (
//         <View style={styles.coordsContainer}>
//           <Text style={styles.coordsText}>Latitude: {coords.latitude}</Text>
//           <Text style={styles.coordsText}>Longitude: {coords.longitude}</Text>
//         </View>
//       )}
//       <TouchableOpacity style={styles.shareButton} onPress={onShare}>
//       <Ionicons name="share-outline" size={24} color="white" />
//         <Text style={styles.shareButtonText}>Share Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   searchBar: {
//     flex: 1,
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginRight: 10,
//   },
//   searchButton: {
//     backgroundColor: '#2196f3',
//     padding: 10,
//     borderRadius: 5,
//   },
//   map: {
//     flex: 1,
//   },
//   coordsContainer: {
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     alignItems: 'center',
//     margin: 10,
//   },
//   coordsText: {
//     fontSize: 16,
//   },
//   shareButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#2196f3',
//     borderRadius: 5,
//     margin: 10,
//   },
//   shareButtonText: {
//     marginLeft: 5,
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default EventMap;


import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert, TextInput, Text, Share, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const EventMap = ({ route }) => {
  const { location } = route.params;
  const [coords, setCoords] = useState(null);
  const [searchQuery, setSearchQuery] = useState(location);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoordinates(location);
  }, [location]);

  const fetchCoordinates = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`);
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setCoords({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
        });
      } else {
        Alert.alert('Error', 'Location not found');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
      Alert.alert('Error', 'Failed to fetch coordinates');
    } finally {
      setLoading(false);
    }
  };

  const onShare = async () => {
    if (coords) {
      try {
        await Share.share({
          message: `Event Location: ${searchQuery}\nLatitude: ${coords.latitude}\nLongitude: ${coords.longitude}`,
        });
      } catch (error) {
        Alert.alert('Error', 'Failed to share the location');
      }
    } else {
      Alert.alert('Error', 'No coordinates to share');
    }
  };

  const handleSearch = () => {
    fetchCoordinates(searchQuery);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a location"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {coords && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={coords} title={searchQuery} />
        </MapView>
      )}
      {coords && (
        <View style={styles.coordsContainer}>
          <Text style={styles.coordsText}>Latitude: {coords.latitude}</Text>
          <Text style={styles.coordsText}>Longitude: {coords.longitude}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Ionicons name="share-outline" size={24} color="white" />
        <Text style={styles.shareButtonText}>Share Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 5,
  },
  map: {
    flex: 1,
  },
  coordsContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  coordsText: {
    fontSize: 16,
  },
  shareButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2196f3',
    borderRadius: 5,
    margin: 10,
  },
  shareButtonText: {
    marginLeft: 5,
    color: 'white',
    fontSize: 16,
  },
});

export default EventMap;
