import { StyleSheet, Text, View } from "react-native";
//import { AppRegistry } from 'react-native';
//import App from './App.js'; // Ensure the path to App.js is correct
//import config from './app.config.js'; // Change to app.config

//const { name: appName } = config.expo; // Destructure to get appName
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../Components/home/home';
import AddPatient from '../Components/patient/addPatient';
import AddHealthWorker from '../Components/healthworker/addHealthWorker';
import ScheduleDelivery from '../Components/delivery/scheduleDelivery';
import Add from "@/Components/admin/add-patient-or-health-worker";


////AppRegistry.registerComponent(appName, () => App);
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
  
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Add') {
          iconName = 'person-outline';
        } else if (route.name === 'ScheduleDelivery') {
          iconName = 'car-sport-outline';
        }
  
        return <Icon name={iconName ?? 'home-outline'} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="ScheduleDelivery" component={ScheduleDelivery} />
    </Tab.Navigator>
  );
}

export default function Page() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Care For All" component={TabNavigator} />
      <Stack.Screen name="AddPatient" component={AddPatient} options={{ title: 'Add Patient' }} />
      <Stack.Screen name="AddHealthWorker" component={AddHealthWorker} options={{ title: 'Add Medical Practitioner' }} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
