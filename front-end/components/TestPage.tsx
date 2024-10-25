import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define any props the component might accept (optional)
interface TestPageProps {
    message?: string;
}

const TestPage: React.FC<TestPageProps> = () => {
    const [message, setMessage] = useState<string | null>(null);
    const apiPoint = 'http://127.0.0.1:8000/';
    const defaultErrorData = {
        message: "Failed to load message",
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiPoint);

                if (response.ok) {
                    const data = await response.json();
                    setMessage(data.message);
                } else {
                    console.error(`Failed to fetch data: ${response.status}`);
                    setMessage(defaultErrorData.message);
                }
            } catch (error) {
                console.error("Error fetching message:", error);
                setMessage(defaultErrorData.message);
            } finally {
                // Clean up the fetch request
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#f0f0f0',
    margin: 20,
},
text: {
    fontSize: 20,
    color: '#333',
},
});

export default TestPage;