import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleDelivery = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Schedule Delivery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScheduleDelivery;