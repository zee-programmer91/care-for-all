import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Picker, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [idNumber, setIdNumber] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [chronicConditions, setChronicConditions] = useState('');
  const [allergies, setAllergies] = useState('');
  const [currentMedications, setCurrentMedications] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  const handleSave = async () => {
    const profileData = {
      fullName,
      dob: dob.toISOString(),
      idNumber,
      gender,
      phoneNumber,
      email,
      address1,
      address2,
      city,
      postalCode,
      chronicConditions,
      allergies,
      currentMedications,
      emergencyContactName,
      emergencyContactPhone,
    };

    try {
      // Save data to AsyncStorage
      await AsyncStorage.setItem('profileData', JSON.stringify(profileData));
      Alert.alert('Success', 'Profile information saved successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save profile information.');
    }
  };

  const loadProfileData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('profileData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setFullName(parsedData.fullName);
        setDob(new Date(parsedData.dob));
        setIdNumber(parsedData.idNumber);
        setGender(parsedData.gender);
        setPhoneNumber(parsedData.phoneNumber);
        setEmail(parsedData.email);
        setAddress1(parsedData.address1);
        setAddress2(parsedData.address2);
        setCity(parsedData.city);
        setPostalCode(parsedData.postalCode);
        setChronicConditions(parsedData.chronicConditions);
        setAllergies(parsedData.allergies);
        setCurrentMedications(parsedData.currentMedications);
        setEmergencyContactName(parsedData.emergencyContactName);
        setEmergencyContactPhone(parsedData.emergencyContactPhone);
      }
    } catch (error) {
      console.error('Failed to load profile data:', error);
    }
  };

  useEffect(() => {
    loadProfileData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Update Profile</Text>

      {/* Full Name */}
      <Text>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name(name and surnmae)"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Date of Birth */}
      <Text>Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="Select Date"
        value={dob.toLocaleDateString()}
        onFocus={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* ID Number */}
      <Text>ID Number</Text>
      <TextInput
        style={styles.input}
        placeholder="ID Number"
        value={idNumber}
        onChangeText={setIdNumber}
      />

      {/* Gender */}
      <Text>Gender</Text>
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      {/* Contact Information */}
      <Text>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <Text>Email Address (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Address Details */}
      <Text>Address Line 1</Text>
      <TextInput
        style={styles.input}
        placeholder="Address Line 1"
        value={address1}
        onChangeText={setAddress1}
      />

      <Text>Address Line 2 (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Address Line 2"
        value={address2}
        onChangeText={setAddress2}
      />

      <Text>City</Text>
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />

      <Text>Postal Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Postal Code"
        keyboardType="numeric"
        value={postalCode}
        onChangeText={setPostalCode}
      />

      {/* Medical Information */}
      <Text>Chronic Conditions</Text>
      <TextInput
        style={styles.input}
        placeholder="Chronic Conditions"
        value={chronicConditions}
        onChangeText={setChronicConditions}
      />

      <Text>Allergies</Text>
      <TextInput
        style={styles.input}
        placeholder="Allergies"
        value={allergies}
        onChangeText={setAllergies}
      />

      <Text>Current Medications</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Medications"
        value={currentMedications}
        onChangeText={setCurrentMedications}
      />

      {/* Emergency Contact */}
      <Text>Emergency Contact Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Emergency Contact Name"
        value={emergencyContactName}
        onChangeText={setEmergencyContactName}
      />

      <Text>Emergency Contact Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Emergency Contact Phone Number"
        keyboardType="phone-pad"
        value={emergencyContactPhone}
        onChangeText={setEmergencyContactPhone}
      />

      <Button title="Save" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 15, 
    padding: 10, 
    borderRadius: 5 
  },
});

export default Profile;
