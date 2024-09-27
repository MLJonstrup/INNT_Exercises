import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const AssetComponent = ({ url }) => {
    // Determine if the url is a local asset or a remote URL
    const isLocalAsset = typeof url === 'number';  // `require` returns a number

    return (
        <View style={styles.container}>
            <Image
                source={isLocalAsset ? url : { uri: url }}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
});

export default AssetComponent;
