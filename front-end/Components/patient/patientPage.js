import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Patient = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* <TouchableOpacity onPress={() => navigation.navigate('AddPatient')}>
        <Text style={styles.addText}>Add Patient</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddHealthWorker')}>
        <Text style={styles.addText}>Add Health Worker</Text>
      </TouchableOpacity> */}
      <Text>Patient</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    centerElement: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    addText: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#007bff',
      borderColor: '#ffa500',
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginTop: 20,
    },
  });

export default Patient;