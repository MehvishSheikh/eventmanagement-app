import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView, ScrollView} from 'react-native';
import Header from './Header';
import SidebarIcon from './SidebarIcon';
import Sidebar from './Sidebar';

const Home = ({ navigation, route }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Check if user data exists in route params
    if (route.params && route.params.user) {
      // Extract user data from route params
      const { user_name, user_password } = route.params.user;
      // Call fetchUserInfo with user data
      fetchUserInfo(user_name, user_password);
    }
  }, [route.params]);

  const fetchUserInfo = async (user_name, user_password) => {
    try {
      // Make a POST request to login endpoint with user credentials
      const response = await fetch('https://tumor-app-server.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: user_name,
          user_password: user_password,
        }),
      });

      const data = await response.json();
      console.log('User Info:', data);

      // If login successful, set the user info in state
      if (data.success) {
        setUserInfo(data); // Assuming the server returns user information
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const handleTryNow = () => {
    navigation.navigate('Ecolense'); // Navigate to the EcoLens screen
  };

  const handleTumorDetails = () => {
    navigation.navigate('TumorList'); // Navigate to the EcoLens screen
  };
  const userPhoto = require('../assets/man-face.jpg');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    navigation.navigate('Sidebar');
    
  };


    return (
      <ScrollView>
          
    <SidebarIcon onPress={toggleSidebar} />
    <View style={styles.container}>
    
    <View style={styles.userContainer}>
        <Image source={userPhoto} style={styles.userPhoto} />
         <View style={styles.userInfo}>
            {userInfo && (
              <>
                <Text style={styles.userName}>{userInfo.user_name}</Text>
                <Text style={styles.userPhone}>{userInfo.phone_no}</Text>
                <Text style={styles.userEmail}>{userInfo.email_user}</Text>
              </>
            )}
          </View>
        
      </View>
        
       
      
      <View style={styles.infoContainer}>
      
      <Image source={require('../assets/home.jpg')} style={styles.image} />
    
      </View>
       <TouchableOpacity style={styles.uploadButton} onPress={handleTryNow}>
        <Text style={styles.buttonText}>Try It Now ?</Text>
      </TouchableOpacity>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Tumor Classification Information</Text>
        <Text style={styles.infoText}>
        Welcome to our comprehensive tumor classification app, designed to provide healthcare 
        professionals and students with a detailed understanding of various tumor types encountered 
        in clinical practice. Whether you're a seasoned oncologist, a pathology resident, or a medical 
        student beginning your journey into the complexities of oncology, this app aims to serve as your 
        go-to resource for tumor classification.

        </Text>
         <TouchableOpacity style={styles.uploadDetailsButton} onPress={handleTumorDetails}>
        <Text style={styles.buttonDetailsText}>Tumor Details ?</Text>
      </TouchableOpacity>
        <Image source={require('../assets/chart.jpeg')} style={styles.image} />
        <Text style={styles.infoText}>
        From the intricate histological features to the nuanced clinical presentations, 
        we've meticulously curated information on a wide array of benign and malignant tumors
         across different organ systems. With detailed descriptions, diagnostic criteria, treatment 
         options, and prognostic insights, our app equips you with the knowledge needed to navigate the 
         intricate landscape of tumor pathology. Explore, learn, and stay updated with the latest advancements 
         in tumor classification with our user-friendly and intuitive interface.
        </Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 270,
    height: 220,
    marginBottom: 30,
    borderRadius: 10,
    marginTop: 30
  },
  uploadButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 10,
  },

  uploadDetailsButton: {
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 10,
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
    // height: 200,
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
    marginLeft: 15
  },
  userInfo: {
    flexDirection: 'column',
    width: 150,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  userPhone: {
    fontSize: 14,
    color: 'gray',
    alignItems: 'center',
  },
  userEmail: {
    fontSize: 14,
    color: 'gray',
    alignItems: 'center',
  },
});
export default Home;