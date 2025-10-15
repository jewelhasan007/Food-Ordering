//import liraries
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// create a component
const ProductDetailsScreen = () => {
    const {id} = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Stack.Screen 
            options={{title: "Details: "  + id}}
            ></Stack.Screen>

            <Text style={{fontSize: 20}}>ProductDetailsScreen for id: {id}</Text>
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
