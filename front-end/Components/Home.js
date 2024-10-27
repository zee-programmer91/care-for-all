import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomePage = () => {
  const navigation = useNavigation();
  
  // Example counts - replace with dynamic data in a real app
  const [patientCount, setPatientCount] = useState(10);
  const [practitionerCount, setPractitionerCount] = useState(5);
  const [deliveryCount, setDeliveryCount] = useState(3);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Patients: {patientCount}</Text>
        <Text style={styles.statsText}>Medical Practitioners: {practitionerCount}</Text>
        <Text style={styles.statsText}>Scheduled Deliveries: {deliveryCount}</Text>
      </View>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AddPatient')}>
        <Text style={styles.cardText}>Add Patient</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AddHealthWorker')}>
        <Text style={styles.cardText}>Add Medical Practitioner</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ScheduleDelivery')}>
        <Text style={styles.cardText}>Schedule Delivery</Text>
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
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    summaryContainer: {
      marginBottom: 20,
      width: '100%',
      paddingHorizontal: 15,
    },
    summaryText: {
      fontSize: 16,
      marginBottom: 10,
      color: '#555',
    },
    cardContainer: {
      width: '100%',
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

export default HomePage;