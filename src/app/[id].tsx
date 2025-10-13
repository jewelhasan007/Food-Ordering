//import liraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// create a component
const ProductDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ProductDetailsScreen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c9caccff',
    },
});

//make this component available to the app
export default ProductDetailsScreen;
