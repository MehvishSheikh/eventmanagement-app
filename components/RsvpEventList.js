import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const RsvpEventList = ({ route }) => {
  const { user } = route.params; 
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  const fetchRsvpEvents = async (email) => {
    try {
      const response = await axios.get(`https://tumor-app-server.vercel.app/user/${email}/events/rsvp`);
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
    <View style={styles.container}>
      <Text style={styles.title}>RSVPed Events for {user.email_user}</Text>
      {events.length === 0 ? (
        <Text style={styles.noEventsText}>No RSVPed events found.</Text>
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.eventItem}>
              <Text style={styles.eventName}>{item.name}</Text>
              <Text>Date: {item.date}</Text>
              <Text>Time: {item.time}</Text>
              <Text>Location: {item.location}</Text>
              <Text>Description: {item.description}</Text>
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
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  noEventsText: {
    fontSize: 18,
    textAlign: 'center',
  },
  eventItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default RsvpEventList;

