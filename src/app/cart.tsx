//import liraries
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

// create a component
const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CartScreen</Text>
              <StatusBar style={Platform.OS === 'web' ? 'light' : 'auto'} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CartScreen;
