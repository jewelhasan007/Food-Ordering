//import liraries
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import CartListItem from '../components/CartListItem';
import { useCart } from '../providers/CartProvider';

// create a component
const CartScreen = () => {
    const {items, total} = useCart()
    
    return (
        <View style={styles.container}>
          <FlatList data={items} 
          renderItem={({item}) => <CartListItem cartItem={item}></CartListItem>} 
          contentContainerStyle={{padding: 10, gap: 10}}></FlatList>
       <Text style={{marginTop: 20, fontSize: 25, fontWeight: '600'}}>Total: ${total}</Text>
          <Button text='Checkout'></Button>
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
        backgroundColor: '#e2edf8ff',
        padding: 10
    },
});

//make this component available to the app
export default CartScreen;
