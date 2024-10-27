import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  // Example counts - replace with dynamic data in a real app
  const [patientCount, setPatientCount] = useState(10);
  const [practitionerCount, setPractitionerCount] = useState(5);
  const [deliveryCount, setDeliveryCount] = useState(3);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.statsContainer}>
      <Text>Welcome to CareForAll</Text>
      </View>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('UpcomingDelivery')}>
        <Text style={styles.cardText}>Upcoming Deliveries</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DeliveryHistory')}>
        <Text style={styles.cardText}>Delivery History</Text>
      </TouchableOpacity>
      <TouchableOpacity 
         style={styles.card}  onPress={() => navigation.navigate('UpcomingAppointments')}>
         <Text style={styles.cardTitle}>Upcoming Appointments</Text>
        </TouchableOpacity>

      <View style={styles.profileSection}>
        <Text style={styles.profileTitle}>Clinic Admin Profile</Text>
        {/* Add any profile details here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  statsContainer: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 15,
  },
  statsText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#ffa500',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    color: '#333',
  },
});

export default Home;