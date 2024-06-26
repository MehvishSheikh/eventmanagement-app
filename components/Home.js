// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
// import { useTheme } from './ThemeContext';
// import SidebarIcon from './SidebarIcon';

// const Home = ({ navigation, route }) => {
//   const [userInfo, setUserInfo] = useState(null);
//   const { isDarkMode } = useTheme();

//   useEffect(() => {
//     if (route.params && route.params.user) {
//       const { user_name, user_password } = route.params.user;
//       fetchUserInfo(user_name, user_password);
//     }
//   }, [route.params]);

//   const fetchUserInfo = async (user_name, user_password) => {
//     try {
//       const response = await fetch('https://tumor-app-server.vercel.app/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           user_name: user_name,
//           user_password: user_password,
//         }),
//       });

//       const data = await response.json();
//       console.log('User Info:', data);

//       if (data.success) {
//         setUserInfo(data);
//       }
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//     }
//   };

//   const handleTryNow = () => {
//     navigation.navigate('Ecolense');
//   };

//   const handleTumorDetails = () => {
//     navigation.navigate('TumorList');
//   };

//   const handleEditUser = () => {
//     if (userInfo) {
//       navigation.navigate('UserEdit', { user_name: userInfo.user_name });
//     }
//   };

//   const userPhoto = require('../assets/man-face.jpg');

//   return (
//     <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
//       <SidebarIcon onPress={() => navigation.navigate('Sidebar')} />
//       <View style={styles.contentContainer}>
//         <TouchableOpacity style={styles.userContainer} onPress={handleEditUser}>
//           <Image source={userPhoto} style={styles.userPhoto} />
//           <View style={styles.userInfo}>
//             {userInfo && (
//               <>
//                 <Text style={[styles.userName, { color: isDarkMode ? '#fff' : '#000' }]}>{userInfo.user_name}</Text>
//                 <Text style={[styles.userPhone, { color: isDarkMode ? '#ccc' : '#666' }]}>{userInfo.phone_no}</Text>
//                 <Text style={[styles.userEmail, { color: isDarkMode ? '#ccc' : '#666' }]}>{userInfo.email_user}</Text>
//               </>
//             )}
//           </View>
//         </TouchableOpacity>

//         <View style={styles.infoContainer}>
//           <Image source={require('../assets/home.jpg')} style={styles.image} />
//         </View>
//         <TouchableOpacity style={styles.uploadButton} onPress={handleTryNow}>
//           <Text style={styles.buttonText}>Try It Now ?</Text>
//         </TouchableOpacity>

//         <View style={styles.infoContainer}>
//           <Text style={[styles.infoTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Tumor Classification Information</Text>
//           <Text style={[styles.infoText, { color: isDarkMode ? '#ccc' : '#000' }]}>
//             Welcome to our comprehensive tumor classification app, designed to provide healthcare professionals and students with a detailed understanding of various tumor types encountered in clinical practice. Whether you're a seasoned oncologist, a pathology resident, or a medical student beginning your journey into the complexities of oncology, this app aims to serve as your go-to resource for tumor classification.
//           </Text>
//           <TouchableOpacity style={styles.uploadDetailsButton} onPress={handleTumorDetails}>
//             <Text style={styles.buttonDetailsText}>Tumor Details ?</Text>
//           </TouchableOpacity>
//           <Image source={require('../assets/chart.jpeg')} style={styles.image} />
//           <Text style={[styles.infoText, { color: isDarkMode ? '#ccc' : '#000' }]}>
//             From the intricate histological features to the nuanced clinical presentations, we've meticulously curated information on a wide array of benign and malignant tumors across different organ systems. With detailed descriptions, diagnostic criteria, treatment options, and prognostic insights, our app equips you with the knowledge needed to navigate the intricate landscape of tumor pathology. Explore, learn, and stay updated with the latest advancements in tumor classification with our user-friendly and intuitive interface.
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     width: 270,
//     height: 220,
//     marginBottom: 30,
//     borderRadius: 10,
//     marginTop: 30,
//   },
//   uploadButton: {
//     backgroundColor: 'green',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   uploadDetailsButton: {
//     backgroundColor: 'pink',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   buttonDetailsText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   infoContainer: {
//     marginTop: 10,
//     alignItems: 'center',
//     width: 300,
//   },
//   infoTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   infoText: {
//     fontSize: 16,
//     textAlign: 'justify',
//     marginBottom: 10,
//   },
//   userContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   userPhoto: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     marginRight: 15,
//     marginLeft: 15,
//   },
//   userInfo: {
//     flexDirection: 'column',
//     width: 150,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   userPhone: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   userEmail: {
//     fontSize: 14,
//     color: 'gray',
//   },
// });

// export default Home;

import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useTheme } from './ThemeContext';
import SidebarIcon from './SidebarIcon';
import { UserContext } from './UserContext';
import UpcomingEvents from './Upcoming/UpcomingEvents';
const Home = ({ navigation, route }) => {
  const [userInfo, setUserInfo] = useState(null);
  const { isDarkMode } = useTheme();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (route.params && route.params.user) {
      const { user_name, user_password } = route.params.user;
      fetchUserInfo(user_name, user_password);
    }
  }, [route.params]);

  const fetchUserInfo = async (user_name, user_password) => {
    try {
      const response = await fetch(
        'https://tumor-app-server.vercel.app/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_name: user_name,
            user_password: user_password,
          }),
        }
      );

      const data = await response.json();
      console.log('User Info:', data);

      if (data.success) {
        setUserInfo(data);
        setUser({ user_name: data.user_name }); 
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const handleTryNow = () => {
    navigation.navigate('EventForm', { user: userInfo });
  };

  const handleTumorDetails = () => {
    navigation.navigate('EventList', { user: userInfo });
  };
  const handleEditUser = () => {
    if (userInfo) {
      navigation.navigate('UserEdit', { user_name: userInfo.user_name });
    }
  };

  const handleRsvpEvents = () => {
    navigation.navigate('RsvpEventList', { user: userInfo });
  };
  
  const handleCompleteEvents = () => {
    navigation.navigate('CompletedEvents', {user : userInfo});
  };

  const handleCardPress1 = () => {
    navigation.navigate('EventDisplay', { user: userInfo });
  };

  const handleCardPress2 = () => {
    navigation.navigate('EventList', { user: userInfo });
  };

  const handleCardPress3 = () => {
    navigation.navigate('RsvpEventList', { user: userInfo });
  };

  const handleCardPress4 = () => {
    navigation.navigate('CompletedEvents', { user: userInfo });
  };
  const userPhoto = require('../assets/man-face.jpg');

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#121212' : '#fff' },
      ]}>
        <ImageBackground 
       source={isDarkMode ? require('../assets/image/darkbg2.jpg') : require('../assets/image/lightbg.png')}  
      style={styles.backgroundImage}
    >
      <SidebarIcon onPress={() => navigation.navigate('Sidebar',  { user_name: userInfo.user_name })} />
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.userContainer} onPress={handleEditUser}>
          <Image source={userPhoto} style={styles.userPhoto} />
          <View style={styles.userInfo}>
            {userInfo && (
              <>
                <Text
                  style={[
                    styles.userName,
                    { color: isDarkMode ? '#fff' : '#000' },
                  ]}>
                  {userInfo.user_name}
                </Text>
                <Text
                  style={[
                    styles.userPhone,
                    { color: isDarkMode ? '#ccc' : '#666' },
                  ]}>
                  {userInfo.phone_no}
                </Text>
                <Text
                  style={[
                    styles.userEmail,
                    { color: isDarkMode ? '#ccc' : '#666' },
                  ]}>
                  {userInfo.email_user}
                </Text>
              </>
            )}
          </View>
        </TouchableOpacity>
        {/* <View style={styles.infoContainer}>
        
          <Image source={require('../assets/home.jpg')} style={styles.image} />
        </View> */}
<View style={styles.eventcontainer}>
      {/* Other components */}
      <UpcomingEvents email={userInfo ? userInfo.email_user : null} />
      {/* Other components */}
    </View>
    <TouchableOpacity style={[styles.neweventbutton, { backgroundColor: isDarkMode ? '#f2e5ae' : '#5353c6' }]} onPress={handleTryNow}>
          <Text style={[styles.buttonText, {color: isDarkMode ? '#000' : '#fff'  }]}>Create a New Event</Text>
        </TouchableOpacity>
<View style={styles.cardsContainer}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => handleCardPress1('EventDisplay')}>
                <Image
                  source={isDarkMode ? require('../assets/image/cards/5.jpg') : require('../assets/image/cards/6.jpg')}
                  style={styles.card}
                />
                {/* <Text style={styles.cardText}>Component 1</Text> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                onPress={() => handleCardPress2('EventList')}>
                <Image
                  source={isDarkMode ? require('../assets/image/cards/11.jpg') : require('../assets/image/cards/12.jpg')}
                  style={styles.card}
                />
                {/* <Text style={styles.cardText}>Component 2</Text> */}
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => handleCardPress3('RsvpEventList')}>
                <Image
                  source={isDarkMode ? require('../assets/image/cards/7.jpg') : require('../assets/image/cards/8.jpg')}
                  style={styles.card}
                />
                {/* <Text style={styles.cardText}>Component 3</Text> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                onPress={() => handleCardPress4('CompletedEvents')}>
                <Image
                  source={isDarkMode ? require('../assets/image/cards/9.jpg') : require('../assets/image/cards/10.jpg')}
                  style={styles.card}
                />
                {/* <Text style={styles.cardText}>Component 4</Text> */}
              </TouchableOpacity>
            </View>
          </View>
       

        <View style={styles.infoContainer}>
          {/* <Text
            style={[styles.infoTitle, { color: isDarkMode ? '#fff' : '#000' }]}>
            Tumor Classification Information
          </Text> */}
          {/* <Text
            style={[styles.infoText, { color: isDarkMode ? '#ccc' : '#000' }]}>
            Welcome to our comprehensive tumor classification app, designed to
            provide healthcare professionals and students with a detailed
            understanding of various tumor types encountered in clinical
            practice. Whether you're a seasoned oncologist, a pathology
            resident, or a medical student beginning your journey into the
            complexities of oncology, this app aims to serve as your go-to
            resource for tumor classification.
          </Text> */}
          {/* <TouchableOpacity
            style={styles.uploadDetailsButton}
            onPress={handleTumorDetails}>
            <Text style={styles.buttonDetailsText}>Event Details</Text>
          </TouchableOpacity> */}
        
          {/* <TouchableOpacity
            style={styles.uploadDetailsButton}
            onPress={handleRsvpEvents}>
            <Text style={styles.buttonDetailsText}>View RSVPed Events</Text>
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            style={styles.uploadDetailsButton}
            onPress={handleCompleteEvents}>
            <Text style={styles.buttonDetailsText}>View Completed Events</Text>
          </TouchableOpacity> */}
          {/* <Image
            source={require('../assets/chart.jpeg')}
            style={styles.image}
          /> */}
          {/* <Text
            style={[styles.infoText, { color: isDarkMode ? '#ccc' : '#000' }]}>
            From the intricate histological features to the nuanced clinical
            presentations, we've meticulously curated information on a wide
            array of benign and malignant tumors across different organ systems.
            With detailed descriptions, diagnostic criteria, treatment options,
            and prognostic insights, our app equips you with the knowledge
            needed to navigate the intricate landscape of tumor pathology.
            Explore, learn, and stay updated with the latest advancements in
            tumor classification with our user-friendly and intuitive interface.
          </Text> */}
        </View>
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
  },
  neweventbutton: {
    width: 220,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 10,
  },
  image: {
    width: 270,
    height: 220,
    marginBottom: 30,
    borderRadius: 10,
    marginTop: 30,
  },
  uploadButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 0,
  },
  uploadDetailsButton: {
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 10,
  },
  eventcontainer: {
    // flex: 1,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonDetailsText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 10,
    alignItems: 'center',
    width: 300,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userPhoto: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 15,
    marginLeft: 15,
  },
  userInfo: {
    flexDirection: 'column',
    width: 150,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userPhone: {
    fontSize: 14,
    color: 'gray',
  },
  userEmail: {
    fontSize: 14,
    color: 'gray',
  },
  cardsContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    // backgroundColor: '#702963',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: 150,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    marginHorizontal: 5,
    height: 150,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImage: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover', // or 'stretch' based on your preference
  },
});

export default Home;

// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
// import { useTheme } from './ThemeContext';
// import SidebarIcon from './SidebarIcon';

// const Home = ({ navigation, route }) => {
//   const [userInfo, setUserInfo] = useState(null);
//   const { isDarkMode } = useTheme();

//   useEffect(() => {
//     if (route.params && route.params.user) {
//       const { user_name, user_password } = route.params.user;
//       fetchUserInfo(user_name, user_password);
//     }
//   }, [route.params]);

//   const fetchUserInfo = async (user_name, user_password) => {
//     try {
//       const response = await fetch('https://tumor-app-server.vercel.app/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           user_name: user_name,
//           user_password: user_password,
//         }),
//       });

//       const data = await response.json();
//       console.log('User Info:', data);

//       if (data.success) {
//         setUserInfo(data);
//       }
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//     }
//   };

//   const handleTryNow = () => {
//     navigation.navigate('Ecolense');
//   };

//   const handleTumorDetails = () => {
//     navigation.navigate('TumorList');
//   };

//   const userPhoto = require('../assets/man-face.jpg');

//   return (
//     <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
//       <SidebarIcon onPress={() => navigation.navigate('Sidebar')} />
//       <View style={styles.contentContainer}>
//         <View style={styles.userContainer}>
//           <Image source={userPhoto} style={styles.userPhoto} />
//           <View style={styles.userInfo}>
//             {userInfo && (
//               <>
//                 <Text style={[styles.userName, { color: isDarkMode ? '#fff' : '#000' }]}>{userInfo.user_name}</Text>
//                 <Text style={[styles.userPhone, { color: isDarkMode ? '#ccc' : '#666' }]}>{userInfo.phone_no}</Text>
//                 <Text style={[styles.userEmail, { color: isDarkMode ? '#ccc' : '#666' }]}>{userInfo.email_user}</Text>
//               </>
//             )}
//           </View>
//         </View>

//         <View style={styles.infoContainer}>
//           <Image source={require('../assets/home.jpg')} style={styles.image} />
//         </View>
//         <TouchableOpacity style={styles.uploadButton} onPress={handleTryNow}>
//           <Text style={styles.buttonText}>Try It Now ?</Text>
//         </TouchableOpacity>

//         <View style={styles.infoContainer}>
//           <Text style={[styles.infoTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Tumor Classification Information</Text>
//           <Text style={[styles.infoText, { color: isDarkMode ? '#ccc' : '#000' }]}>
//             Welcome to our comprehensive tumor classification app, designed to provide healthcare professionals and students with a detailed understanding of various tumor types encountered in clinical practice. Whether you're a seasoned oncologist, a pathology resident, or a medical student beginning your journey into the complexities of oncology, this app aims to serve as your go-to resource for tumor classification.
//           </Text>
//           <TouchableOpacity style={styles.uploadDetailsButton} onPress={handleTumorDetails}>
//             <Text style={styles.buttonDetailsText}>Tumor Details ?</Text>
//           </TouchableOpacity>
//           <Image source={require('../assets/chart.jpeg')} style={styles.image} />
//           <Text style={[styles.infoText, { color: isDarkMode ? '#ccc' : '#000' }]}>
//             From the intricate histological features to the nuanced clinical presentations, we've meticulously curated information on a wide array of benign and malignant tumors across different organ systems. With detailed descriptions, diagnostic criteria, treatment options, and prognostic insights, our app equips you with the knowledge needed to navigate the intricate landscape of tumor pathology. Explore, learn, and stay updated with the latest advancements in tumor classification with our user-friendly and intuitive interface.
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     width: 270,
//     height: 220,
//     marginBottom: 30,
//     borderRadius: 10,
//     marginTop: 30,
//   },
//   uploadButton: {
//     backgroundColor: 'green',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   uploadDetailsButton: {
//     backgroundColor: 'pink',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   buttonDetailsText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   infoContainer: {
//     marginTop: 10,
//     alignItems: 'center',
//     width: 300,
//   },
//   infoTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   infoText: {
//     fontSize: 16,
//     textAlign: 'justify',
//     marginBottom: 10,
//   },
//   userContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   userPhoto: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     marginRight: 15,
//     marginLeft: 15,
//   },
//   userInfo: {
//     flexDirection: 'column',
//     width: 150,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   userPhone: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   userEmail: {
//     fontSize: 14,
//     color: 'gray',
//   },
// });

// export default Home;
