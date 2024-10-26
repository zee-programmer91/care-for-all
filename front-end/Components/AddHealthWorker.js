import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddHealthWorker = () => {
    const [persalNumber, setPersalNumber] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState(new Date());
    const [idNumber, setIdNumber] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const apiPoint = 'http://127.0.0.1:8000/index';

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShowDatePicker(false);
        setDob(currentDate);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('persal_number', persalNumber);
        formData.append('job_title', jobTitle);
        formData.append('license_number', licenseNumber);
        formData.append('full_name', fullName);
        formData.append('dob', dob.toISOString().split('T')[0]);
        formData.append('id_number', idNumber);
        formData.append('gender', gender);
        formData.append('phone_number', phoneNumber);
        formData.append('email_address', emailAddress);

        try {
            const response = await fetch(apiPoint, {
                method: 'POST',
                body: formData,
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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.formContainer}>
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
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
                    <Text>{dob.toDateString()}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker value={dob} mode="date" display="default" onChange={onChangeDate} />
                )}

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
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        padding: 20,
        backgroundColor: '#f5f5f5',
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
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        width: '100%',
    },
    picker: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
});

export default AddHealthWorker;
