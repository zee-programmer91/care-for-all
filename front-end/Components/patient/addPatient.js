import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddPatient = () => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState(''); // Store date of birth as a string
  const [idNumber, setIdNumber] = useState('');
  const [folderNumber, setFolderNumber] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [chronicConditions, setChronicConditions] = useState('');
  const [allergies, setAllergies] = useState('');
  const [currentMedications, setCurrentMedications] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');

  // Validate the date format YYYY/MM/DD
  const isValidDate = (dateString) => {
    const regex = /^\d{4}\/\d{2}\/\d{2}$/; // YYYY/MM/DD format
    if (!dateString.match(regex)) return false;

    const parts = dateString.split('/');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are 0-based
    const day = parseInt(parts[2], 10);
    const date = new Date(year, month, day);

    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!fullName || !dob || !idNumber || !folderNumber || !gender || !phoneNumber || !addressLine1 || !city || !postalCode) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate ID number
    if (idNumber.length !== 13) {
      alert('ID Number must be 13 digits long.');
      return;
    }

    // Validate phone number
    if (phoneNumber.length !== 10) {
      alert('Phone Number must be 10 digits long.');
      return;
    }

    // Validate date
    if (!isValidDate(dob)) {
      alert('Please enter a valid date in the format YYYY/MM/DD');
      return;
    }

    const patientData = {
      fullName,
      dob,
      idNumber,
      folderNumber,
      gender,
      phoneNumber,
      email,
      addressLine1,
      addressLine2,
      city,
      postalCode,
      chronicConditions,
      allergies,
      currentMedications,
      emergencyContactName,
      emergencyContactPhone,
    };

    console.log("Patient Data Submitted:", patientData);
    // You can add your database submission or API call here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Patient Profile</Text>

      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <TextInput
        placeholder="Date of Birth (YYYY/MM/DD)"
        value={dob}
        onChangeText={setDob}
        style={styles.input}
      />
       <TextInput
        placeholder="ID Number"
        value={idNumber}
        onChangeText={(text) => {
          if (text.length <= 13) {
            setIdNumber(text); // Only set value if it's 13 characters or less
          }
        }}
        keyboardType="numeric"
        maxLength={13} // Limit input to 13 digits
        style={styles.input}
      />
      <TextInput
        placeholder="Folder Number"
        value={folderNumber}
        onChangeText={setFolderNumber}
        style={styles.input}
      />
      <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)} style={styles.picker}>
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => {
          if (text.length <= 10) {
            setPhoneNumber(text); // Only set value if it's 10 characters or less
          }
        }}
        keyboardType="numeric"
        maxLength={10} // Limit input to 10 digits
        style={styles.input}
      />
      <TextInput
        placeholder="Email Address (Optional)"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Address Line 1"
        value={addressLine1}
        onChangeText={setAddressLine1}
        style={styles.input}
      />
      <TextInput
        placeholder="Address Line 2"
        value={addressLine2}
        onChangeText={setAddressLine2}
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Postal Code"
        value={postalCode}
        onChangeText={setPostalCode}
        style={styles.input}
      />
      <TextInput
        placeholder="Chronic Conditions"
        value={chronicConditions}
        onChangeText={setChronicConditions}
        style={styles.input}
        multiline
      />
      <TextInput
        placeholder="Allergies"
        value={allergies}
        onChangeText={setAllergies}
        style={styles.input}
        multiline
      />
      <TextInput
        placeholder="Current Medications"
        value={currentMedications}
        onChangeText={setCurrentMedications}
        style={styles.input}
        multiline
      />
      <TextInput
        placeholder="Emergency Contact Name"
        value={emergencyContactName}
        onChangeText={setEmergencyContactName}
        style={styles.input}
      />
      <TextInput
        placeholder="Emergency Contact Phone"
        value={emergencyContactPhone}
        onChangeText={setEmergencyContactPhone}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Submit Patient Profile" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF', // White background
        flexGrow: 1, // Ensure the scroll view grows to fill the screen
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
     
      picker: {
        height: 30,
        marginBottom: 15,
        color: '#000', // Text color for picker
      },
      input: {
        borderWidth: 1,
        borderColor: '#FFA500', // Orange border color
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
      },
      Button: {
        backgroundColor: '#28A745',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: '#FFFFFF', // White text for the button
        fontWeight: 'bold',
        fontSize: 16,
      },
});

export default AddPatient;
