import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import Profile from '../Components/patient_screens/Profile';
import Delivery from '../Components/patient_screens/Delivery';
import History from '../Components/patient_screens/History';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="UP Coming Delivery" component={Delivery} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}




const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
