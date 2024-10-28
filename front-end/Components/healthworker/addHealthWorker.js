import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddHealthWorker = () => {
  const [persalNumber, setPersalNumber] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const apiPoint = 'http://127.0.0.1:8000/profiles/';

  const handleSubmit = async () => {
    if (!persalNumber || !jobTitle|| !licenseNumber || !fullName || !idNumber || !dob || !gender || !phoneNumber || !emailAddress) {
      alert('Please fill in all required fields.');
      return;
    }

    if (persalNumber.length !== 8) {
      alert('Persal Number must be 8 digits long.');
      return;
    }

    if (licenseNumber.length !== 13) {
      alert('License Number must be 13 digits long.');
      return;
    }

    if (idNumber.length !== 13) {
      alert('ID Number must be 13 digits long.');
      return;
    }

    if (phoneNumber.length !== 10) {
      alert('Phone Number must be 10 digits long.');
      return;
    }

    const medPracData = new FormData();
    medPracData.append('persal_number', persalNumber);
    medPracData.append('job_title', jobTitle);
    medPracData.append('license_number', licenseNumber);
    medPracData.append('full_name', fullName);
    medPracData.append('dob', dob);
    medPracData.append('id_number', idNumber);
    medPracData.append('gender', gender);
    medPracData.append('phone_number', phoneNumber);
    medPracData.append('email_address', emailAddress);

    try {
      const response = await fetch(apiPoint, {
        method: 'POST',
        body: medPracData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const result = await response.json();
      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Failed to submit form: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during form submission');
    }
  };

  return (
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.heading}>Add Medical Practitioner</Text>

        <Text>Persal Number</Text>
        <TextInput value={persalNumber} onChangeText={setPersalNumber} style={styles.input} />

        <Text>Job Title</Text>
        <View style={styles.pickerWrapper}>
          <Picker
              selectedValue={jobTitle}
              onValueChange={(itemValue) => setJobTitle(itemValue)}
              style={styles.picker}
          >
            <Picker.Item label="Select Job Title" value="" />
            <Picker.Item label="Nurse" value="nurse" />
            <Picker.Item label="Doctor" value="doc" />
            <Picker.Item label="Community Health Worker" value="ch_worker" />
          </Picker>
        </View>

        <Text>License Number</Text>
        <TextInput value={licenseNumber} onChangeText={setLicenseNumber} style={styles.input} />

        <Text>Full Name</Text>
        <TextInput value={fullName} onChangeText={setFullName} style={styles.input} />

        <Text>ID Number</Text>
        <TextInput value={idNumber} onChangeText={setIdNumber} style={styles.input} />

        <Text>Date of Birth</Text>
        <TextInput
            placeholder="Date of Birth (YYYY/MM/DD)"
            value={dob}
            onChangeText={(text) => setDob(text)}
            style={styles.input}
        />

        <Text>Gender</Text>
        <View style={styles.pickerWrapper}>
          <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        <Text>Phone Number</Text>
        <TextInput value={phoneNumber} onChangeText={setPhoneNumber} style={styles.input} keyboardType="phone-pad" />

        <Text>Email Address</Text>
        <TextInput value={emailAddress} onChangeText={setEmailAddress} style={styles.input} keyboardType="email-address" />

        <Button title="Submit" onPress={handleSubmit} />

      </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '50%',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    width: '50%',
  },
  picker: {
    height: 42,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default AddHealthWorker;
