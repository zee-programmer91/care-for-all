import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
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