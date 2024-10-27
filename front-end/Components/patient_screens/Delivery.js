import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Delivery() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery Page</Text>
      {/* Add delivery information or options here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
