import { StyleSheet, Text, View } from "react-native";
//import { AppRegistry } from 'react-native';
//import App from './App.js'; // Ensure the path to App.js is correct
//import config from './app.config.js'; // Change to app.config

//const { name: appName } = config.expo; // Destructure to get appName
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Components/home/home';
import AddPatient from '../Components/patient/addPatient';
import AddHealthWorker from '../Components/healthworker/addHealthWorker';
import ScheduleDelivery from '../Components/delivery/ScheduleDelivery';


////AppRegistry.registerComponent(appName, () => App);
const Stack = createNativeStackNavigator();

export default function Page() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomePage" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="AddPatient" component={AddPatient} options={{ title: 'Add Patient' }} />
      <Stack.Screen name="AddHealthWorker" component={AddHealthWorker} options={{ title: 'Add Medical Practitioner' }} />
      <Stack.Screen name="ScheduleDelivery" component={ScheduleDelivery} options={{ title: 'Schedule Delivery' }} />
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
