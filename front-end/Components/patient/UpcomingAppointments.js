import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const UpcomingAppointments = () => {
  // Sample data for appointments
  const appointments = [
    {
      id: '1',
      date: 'November 1, 2024',
      type: 'Check Up',
      time: '10:00 AM',
      location: 'Community Health Clinic',
    },
    {
      id: '2',
      date: 'November 15, 2024',
      type: 'Follow-Up',
      time: '2:30 PM',
      location: 'Community Health Clinic',
    },
    // Add more appointments as needed
  ];

  // Function to handle viewing details (this can be modified to navigate to a detail page)
  const handleViewDetails = (appointment) => {
    alert(`Viewing details for ${appointment.type} on ${appointment.date} at ${appointment.time}`);
    // Here, you could navigate to a detailed view for the appointment if you have one.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Appointments</Text>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.appointmentCard}>
            <Text style={styles.appointmentDate}>{item.date}</Text>
            <Text style={styles.appointmentType}>{item.type}</Text>
            <Text style={styles.appointmentTime}>Time: {item.time}</Text>
            <Text style={styles.appointmentLocation}>Location: {item.location}</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => handleViewDetails(item)}
            >
              <Text style={styles.detailsButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  appointmentCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffa500',
  },
  appointmentDate: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  appointmentType: {
    fontSize: 16,
  },
  appointmentTime: {
    fontSize: 14,
  },
  appointmentLocation: {
    fontSize: 14,
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#4caf50', // Green button
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default UpcomingAppointments;