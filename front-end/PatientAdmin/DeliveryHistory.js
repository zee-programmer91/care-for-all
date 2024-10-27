import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';

const DeliveryHistory = () => {
  // Sample data for delivery history
  const [history] = useState([
    {
      id: '1',
      deliveryDate: 'October 10, 2024',
      medication: 'Lisinopril 10mg (30 Tablets)',
      status: 'Delivered',
    },
    {
      id: '2',
      deliveryDate: 'September 15, 2024',
      medication: 'Metformin 500mg (60 Tablets)',
      status: 'Delivered',
    },
  ]);

  const handleViewDetails = (deliveryId) => {
    // Prompt for OTP before viewing details
    Alert.prompt(
      'OTP Required',
      'Please enter your OTP to view delivery details',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Submit',
          onPress: (otp) => {
            // Check OTP validity here
            if (otp === '1234') {
              Alert.alert("Access Granted", `Details for delivery ID: ${deliveryId}`);
            } else {
              Alert.alert("Invalid OTP", "Please try again.");
            }
          },
        },
      ],
      'plain-text'
    );
  };

  const renderHistoryItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.deliveryDate}>Delivered on: {item.deliveryDate}</Text>
      <Text style={styles.medication}>Medication: {item.medication}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => handleViewDetails(item.id)}
      >
        <Text style={styles.detailsButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery History</Text>
      <FlatList
        data={history}
        renderItem={renderHistoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
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
    color: '#333',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffa500',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  deliveryDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  medication: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: '#008000',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default DeliveryHistory;