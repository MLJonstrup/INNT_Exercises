import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const ButtonComponent = () => {
    // State to track if the button has been pressed
    const [isPressed, setIsPressed] = useState(false);

    // Function to toggle the state
    const toggleState = () => {
        setIsPressed(prevState => !prevState);
    };

    return (
        <View style={styles.container}>
            {/* Display different text based on the state */}
            <Text style={styles.text}>
                {isPressed ? "Ja til kode!" : "Nej til kode"}
            </Text>
            {/* Button that toggles the state when pressed */}
            <Button title="Tryk her" onPress={toggleState} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ButtonComponent;
1