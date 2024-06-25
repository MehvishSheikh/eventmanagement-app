// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { ProgressBar } from 'react-native-paper';

// const Notifications = () => {
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       <Text style={styles.title}>Notifications</Text>

//       {/* MRI Notifications */}
//       <View style={[styles.notification, styles.mriNotification]}>
//         <Ionicons name="scan-outline" size={24} color="#007AFF" />
//         <View style={styles.notificationContent}>
//           <Text style={styles.notificationText}>Your MRI scan is scheduled for next week.</Text>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>View Details</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* CT-scan Notifications */}
//       <View style={[styles.notification, styles.ctScanNotification]}>
//         <Ionicons name="scan-outline" size={24} color="#000" />
//         <View style={styles.notificationContent}>
//           <Text style={styles.notificationText}>CT-scan report available. Check your inbox for details.</Text>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Open Email</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Tumor Notifications */}
//       <View style={[styles.notification, styles.tumorNotification]}>
//         <Ionicons name="alert-circle-outline" size={24} color="#FF6347" />
//         <View style={styles.notificationContent}>
//           <Text style={styles.notificationText}>Reminder: Follow-up appointment for tumor treatment.</Text>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Schedule Now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* MRI Scan Timing */}
//       <View style={styles.timingContainer}>
//         <Text style={styles.timingTitle}>MRI Scan General Timings</Text>
//         <View style={styles.timing}>
//           <Text style={styles.timingLabel}>Morning:</Text>
//           <Text style={styles.timingValue}>9:00 AM - 12:00 PM</Text>
//         </View>
//         <View style={styles.timing}>
//           <Text style={styles.timingLabel}>Afternoon:</Text>
//           <Text style={styles.timingValue}>1:00 PM - 4:00 PM</Text>
//         </View>
//       </View>

//       {/* CT-scan Timing */}
//       <View style={styles.timingContainer}>
//         <Text style={styles.timingTitle}>CT-scan General Timings</Text>
//         <View style={styles.timing}>
//           <Text style={styles.timingLabel}>Morning:</Text>
//           <Text style={styles.timingValue}>10:00 AM - 1:00 PM</Text>
//         </View>
//         <View style={styles.timing}>
//           <Text style={styles.timingLabel}>Afternoon:</Text>
//           <Text style={styles.timingValue}>2:00 PM - 5:00 PM</Text>
//         </View>
//       </View>

//       {/* Visualization Components */}
//       <View style={styles.visualizationContainer}>
//         <Text style={styles.visualizationTitle}>Tumor Progress</Text>
//         <ProgressBar progress={0.6} color="#FF6347" style={{ marginTop: 10 }} />
//       </View>

//       <View style={styles.visualizationContainer}>
//         <Text style={styles.visualizationTitle}>MRI Scan Availability</Text>
//         <View style={styles.availability}>
//           <View style={[styles.availabilityItem, { width: '40%', backgroundColor: '#E5F0FF' }]}>
//             <Text style={styles.availabilityText}>Available</Text>
//           </View>
//           <View style={[styles.availabilityItem, { width: '60%', backgroundColor: '#FFF3E0' }]}>
//             <Text style={styles.availabilityText}>Booked</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   notification: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   notificationContent: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   notificationText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     padding: 5,
//     borderRadius: 5,
//     alignSelf: 'flex-start',
//   },
//   buttonText: {
//     color: '#fff',
//   },
//   mriNotification: {
//     backgroundColor: '#E5F0FF',
//   },
//   ctScanNotification: {
//     backgroundColor: '#FFF3E0',
//   },
//   tumorNotification: {
//     backgroundColor: '#FFEAEA',
//   },
//   timingContainer: {
//     backgroundColor: '#F9F9F9',
//     padding: 20,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   timingTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   timing: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 5,
//   },
//   timingLabel: {
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   timingValue: {
//     flex: 1,
//   },
//   visualizationContainer: {
//     backgroundColor: '#F9F9F9',
//     padding: 20,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   visualizationTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   availability: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   availabilityItem: {
//     padding: 10,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   availabilityText: {
//     fontWeight: 'bold',
//   },
// });

// export default Notifications;




// Notifications.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { useTheme } from './ThemeContext';

const Notifications = () => {
  const { isDarkMode } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Notifications</Text>

        {/* MRI Notifications */}
        <View style={[styles.notification, styles.mriNotification, isDarkMode && styles.darkNotification]}>
          <Ionicons name="scan-outline" size={24} color="#007AFF" />
          <View style={styles.notificationContent}>
            <Text style={[styles.notificationText, { color: isDarkMode ? '#ccc' : '#000' }]}>Your MRI scan is scheduled for next week.</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CT-scan Notifications */}
        <View style={[styles.notification, styles.ctScanNotification, isDarkMode && styles.darkNotification]}>
          <Ionicons name="scan-outline" size={24} color="#000" />
          <View style={styles.notificationContent}>
            <Text style={[styles.notificationText, { color: isDarkMode ? '#ccc' : '#000' }]}>CT-scan report available. Check your inbox for details.</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Open Email</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tumor Notifications */}
        <View style={[styles.notification, styles.tumorNotification, isDarkMode && styles.darkNotification]}>
          <Ionicons name="alert-circle-outline" size={24} color="#FF6347" />
          <View style={styles.notificationContent}>
            <Text style={[styles.notificationText, { color: isDarkMode ? '#ccc' : '#000' }]}>Reminder: Follow-up appointment for tumor treatment.</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Schedule Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* MRI Scan Timing */}
        <View style={[styles.timingContainer, isDarkMode && styles.darkContainer]}>
          <Text style={[styles.timingTitle, { color: isDarkMode ? '#fff' : '#000' }]}>MRI Scan General Timings</Text>
          <View style={styles.timing}>
            <Text style={[styles.timingLabel, { color: isDarkMode ? '#ccc' : '#000' }]}>Morning:</Text>
            <Text style={[styles.timingValue, { color: isDarkMode ? '#ccc' : '#000' }]}>9:00 AM - 12:00 PM</Text>
          </View>
          <View style={styles.timing}>
            <Text style={[styles.timingLabel, { color: isDarkMode ? '#ccc' : '#000' }]}>Afternoon:</Text>
            <Text style={[styles.timingValue, { color: isDarkMode ? '#ccc' : '#000' }]}>1:00 PM - 4:00 PM</Text>
          </View>
        </View>

        {/* CT-scan Timing */}
        <View style={[styles.timingContainer, isDarkMode && styles.darkContainer]}>
          <Text style={[styles.timingTitle, { color: isDarkMode ? '#fff' : '#000' }]}>CT-scan General Timings</Text>
          <View style={styles.timing}>
            <Text style={[styles.timingLabel, { color: isDarkMode ? '#ccc' : '#000' }]}>Morning:</Text>
            <Text style={[styles.timingValue, { color: isDarkMode ? '#ccc' : '#000' }]}>10:00 AM - 1:00 PM</Text>
          </View>
          <View style={styles.timing}>
            <Text style={[styles.timingLabel, { color: isDarkMode ? '#ccc' : '#000' }]}>Afternoon:</Text>
            <Text style={[styles.timingValue, { color: isDarkMode ? '#ccc' : '#000' }]}>2:00 PM - 5:00 PM</Text>
          </View>
        </View>

        {/* Visualization Components */}
        <View style={[styles.visualizationContainer, isDarkMode && styles.darkContainer]}>
          <Text style={[styles.visualizationTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Tumor Progress</Text>
          <ProgressBar progress={0.6} color="#FF6347" style={{ marginTop: 10 }} />
        </View>

        <View style={[styles.visualizationContainer, isDarkMode && styles.darkContainer]}>
          <Text style={[styles.visualizationTitle, { color: isDarkMode ? '#fff' : '#000' }]}>MRI Scan Availability</Text>
          <View style={styles.availability}>
            <View style={[styles.availabilityItem, { width: '40%', backgroundColor: isDarkMode ? '#37474F' : '#E5F0FF' }]}>
              <Text style={[styles.availabilityText, { color: isDarkMode ? '#fff' : '#000' }]}>Available</Text>
            </View>
            <View style={[styles.availabilityItem, { width: '60%', backgroundColor: isDarkMode ? '#B0BEC5' : '#FFF3E0' }]}>
              <Text style={[styles.availabilityText, { color: isDarkMode ? '#fff' : '#000' }]}>Booked</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  darkNotification: {
    backgroundColor: '#333',
  },
  notificationContent: {
    flex: 1,
    marginLeft: 10,
  },
  notificationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
  },
  mriNotification: {
    backgroundColor: '#E5F0FF',
  },
  ctScanNotification: {
    backgroundColor: '#FFF3E0',
  },
  tumorNotification: {
    backgroundColor: '#FFEAEA',
  },
  timingContainer: {
    backgroundColor: '#F9F9F9',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  timingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  timingLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  timingValue: {
    flex: 1,
  },
  visualizationContainer: {
    backgroundColor: '#F9F9F9',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  visualizationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  availability: {
    flexDirection: 'row',
    marginTop: 10,
  },
  availabilityItem: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  availabilityText: {
    fontWeight: 'bold',
  },
});

export default Notifications;
