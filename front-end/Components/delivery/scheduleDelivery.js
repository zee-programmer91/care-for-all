import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, CheckBox, StyleSheet, Button, Alert } from 'react-native';
import {Dropdown} from "react-native-element-dropdown";

const ScheduleDelivery = () => {
    const [patientId, setPatientId] = useState('');
    const [medicationName, setMedicationName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [deliveryStatus, setDeliveryStatus] = useState('Pending');
    const [sendNotification, setSendNotification] = useState(false);
    const [additionalNotes, setAdditionalNotes] = useState('');

    const apiPoint = 'http://127.0.0.1:8000/index/';

    // replace with data fetched from backend
    const patients = [
        { label: '7912211264084', value: '1' },
        { label: '9910211264082', value: '2' },
        { label: '8812011264082', value: '3' }
    ];

    // replace with data fetched from backend
    const medications = [
        { label: 'Medication A', value: 'MedA' },
        { label: 'Medication B', value: 'MedB' },
        { label: 'Medication C', value: 'MedC' }
    ];

    const submitForm = async () => {
        if (!patientId || !medicationName || !quantity || !deliveryDate || !deliveryTime || !deliveryStatus|| !sendNotification || !additionalNotes) {
            alert('Please fill in all required fields.');
            return;
        }
        const deliveryData = new FormData();
        deliveryData.append('patientId', patientId);
        deliveryData.append('medicationName', medicationName);
        deliveryData.append('quantity', quantity);
        deliveryData.append('deliveryDate', deliveryDate);
        deliveryData.append('deliveryTime', deliveryTime);
        deliveryData.append('deliveryStatus', deliveryStatus);
        deliveryData.append('sendNotification', sendNotification);
        deliveryData.append('additionalNotes', additionalNotes);

        try {
            const response = await fetch(apiPoint, {
                method: 'POST',
                body: deliveryData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const result = await response.json();
            if (response.ok) {
                Alert.alert('Form submitted successfully');
            } else {
                Alert.alert('Failed to submit form: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('An error occurred during form submission');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.formContainer}>
            <Text style={styles.heading}>Schedule Delivery</Text>

            <Text>Patient ID:</Text>
            <Dropdown
                style={{borderWidth: 1, borderColor: '#ccc', padding: 10,
                    marginBottom: 10, width: '50%', borderRadius: 10, backgroundColor: '#fff',justifyContent: 'center',}}
                data={patients}
                search
                labelField="label"
                valueField="value"
                placeholder="Select a patient"
                searchPlaceholder="Search patient"
                value={patientId}
                onChange={item => setPatientId(item.value)}
            />

            <Text>Medication Name:</Text>
            <Dropdown
                style={{borderWidth: 1, borderColor: '#ccc', padding: 10,
                    marginBottom: 10, width: '50%', borderRadius: 10, backgroundColor: '#fff',justifyContent: 'center',}}
                data={medications}
                search
                labelField="label"
                valueField="value"
                placeholder="Select medication"
                searchPlaceholder="Search medication"
                value={medicationName}
                onChange={item => setMedicationName(item.value)}
            />


            <Text>Quantity:</Text>
            <TextInput
                placeholder="Enter quantity"
                keyboardType="numeric"
                value={quantity}
                onChangeText={(text) => setQuantity(text)}
                style={styles.input}
            />

            <Text>Scheduled Delivery Date:</Text>
            <TextInput
                placeholder="Date (YYYY/MM/DD)"
                value={deliveryDate}
                onChangeText={(text) => setDeliveryDate(text)}
                style={styles.input}
            />

            <Text>Scheduled Delivery Time:</Text>
            <TextInput
                placeholder="Time (HH:mm)"
                value={deliveryTime}
                onChangeText={(text) => setDeliveryTime(text)}
                style={styles.input}
            />

            <Text>Delivery Status:</Text>
            <Dropdown
                style={{borderWidth: 1, borderColor: '#ccc', padding: 10,
                    marginBottom: 10, width: '50%', borderRadius: 10, backgroundColor: '#fff',justifyContent: 'center',}}
                data={[
                    { label: 'Pending', value: 'Pending' },
                    { label: 'In Process', value: 'In Process' },
                    { label: 'Completed', value: 'Completed' }
                ]}
                labelField="label"
                valueField="value"
                placeholder="Select status"
                value={deliveryStatus}
                onChange={item => setDeliveryStatus(item.value)}
            />


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <CheckBox value={sendNotification} onValueChange={setSendNotification} />
                <Text>Send confirmation notification</Text>
            </View>


            <Text>Additional Notes:</Text>
            <TextInput
                placeholder="Enter any additional notes"
                value={additionalNotes}
                onChangeText={(text) => setAdditionalNotes(text)}
                multiline
                style={styles.input}
            />

            <Button title="Schedule" onPress={submitForm} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
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

});


export default ScheduleDelivery;