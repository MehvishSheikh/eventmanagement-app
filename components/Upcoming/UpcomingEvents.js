import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const UpcomingEvents = ({ email }) => {
  const [loading, setLoading] = useState(true);
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [eventCount, setEventCount] = useState(0);
  const [countdown, setCountdown] = useState('');
  const navigation = useNavigation();

  const fetchEvents = async (email) => {
    try {
      const response = await axios.get(`https://tumor-app-server.vercel.app/events/${email}`);
      if (response.status === 200) {
        const currentDate = new Date();
        const validEvents = response.data.filter(event => {
          const eventDate = new Date(event.date);
          const eventTime = event.time.match(/(\d{1,2}):(\d{2})\s?(AM|PM)?/);
          if (!eventTime) return false;

          let [_, hours, minutes, period] = eventTime;
          hours = parseInt(hours, 10);
          minutes = parseInt(minutes, 10);
          if (period === 'PM' && hours < 12) hours += 12;
          if (period === 'AM' && hours === 12) hours = 0;

          const eventDateTime = new Date(eventDate);
          eventDateTime.setHours(hours, minutes);

          return !event.completed && !isNaN(eventDateTime) && eventDateTime >= currentDate;
        });

        setEventCount(validEvents.length);

        if (validEvents.length > 0) {
          validEvents.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            const timeA = a.time.match(/(\d{1,2}):(\d{2})\s?(AM|PM)?/);
            const timeB = b.time.match(/(\d{1,2}):(\d{2})\s?(AM|PM)?/);

            let [_, hoursA, minutesA, periodA] = timeA;
            let [__, hoursB, minutesB, periodB] = timeB;

            hoursA = parseInt(hoursA, 10);
            minutesA = parseInt(minutesA, 10);
            if (periodA === 'PM' && hoursA < 12) hoursA += 12;
            if (periodA === 'AM' && hoursA === 12) hoursA = 0;

            hoursB = parseInt(hoursB, 10);
            minutesB = parseInt(minutesB, 10);
            if (periodB === 'PM' && hoursB < 12) hoursB += 12;
            if (periodB === 'AM' && hoursB === 12) hoursB = 0;

            const dateTimeA = new Date(dateA);
            dateTimeA.setHours(hoursA, minutesA);

            const dateTimeB = new Date(dateB);
            dateTimeB.setHours(hoursB, minutesB);

            return dateTimeA - dateTimeB;
          });

          setUpcomingEvent(validEvents[0]);
        }
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateCountdown = (eventDateTime) => {
    const now = new Date();
    const difference = eventDateTime - now;

    if (difference <= 0) {
      return 'Event started!';
    }

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    if (email) {
      fetchEvents(email);
    }
  }, [email]);

  useEffect(() => {
    if (upcomingEvent) {
      const eventDate = new Date(upcomingEvent.date);
      const eventTime = upcomingEvent.time.match(/(\d{1,2}):(\d{2})\s?(AM|PM)?/);
      let [_, hours, minutes, period] = eventTime;
      hours = parseInt(hours, 10);
      minutes = parseInt(minutes, 10);
      if (period === 'PM' && hours < 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;

      const eventDateTime = new Date(eventDate);
      eventDateTime.setHours(hours, minutes);

      const intervalId = setInterval(() => {
        setCountdown(calculateCountdown(eventDateTime));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [upcomingEvent]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!upcomingEvent) {
    return (
      <View style={styles.container}>
        <Text style={styles.noEventText}>No upcoming events</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventCountText}>Upcoming Events: {eventCount}</Text>
      <View style={styles.eventContainer}>
      <Text style={styles.countdownText}>Starts in: {countdown}</Text>
        <Text style={styles.eventTitle}>{upcomingEvent.name}</Text>
        <Text style={styles.eventDate}>{upcomingEvent.date} at {upcomingEvent.time}</Text>
        
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigation.navigate('EventDetails', { event: upcomingEvent })}
        >
          <Text style={styles.detailsButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  noEventText: {
    fontSize: 16,
    color: '#666',
  },
  eventCountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  countdownText: {
    fontSize: 18,
    color: '#ff0000',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default UpcomingEvents;