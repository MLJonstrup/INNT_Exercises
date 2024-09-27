import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const InputComponent = () => {
    // State to store the input value
    const [inputValue, setInputValue] = useState("");

    return (
        <View>
            {/* TextInput updates the state when text is entered */}
            <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={(txt) => setInputValue(txt)}
                value={inputValue}
            />
            {/* Display the dynamic sentence */}
            <Text>Du har indtastet: {inputValue}</Text>
        </View>
    );
}

export default InputComponent;
