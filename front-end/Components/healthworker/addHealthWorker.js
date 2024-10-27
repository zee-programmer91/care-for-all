import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddHealthWorker = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Medical Practitioner</Text>
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

export default AddHealthWorker;
