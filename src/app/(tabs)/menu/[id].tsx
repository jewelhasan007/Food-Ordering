//import liraries
import products from '@/assets/data/products';
import Button from '@/src/components/Button';
import { defaultPizzaImage } from '@/src/components/ProductListItem';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const sizes = ['S', 'M', 'L', 'XL']
// create a component
const ProductDetailsScreen = () => {
    const {id} = useLocalSearchParams();

    const [selectSize, setSelectSize] = useState('M');

    const product = products.find((p)=>p.id.toString()===id);
    const addToCart = () => {
        console.warn('Adding to Cart, size: ', selectSize)
    }
    if(!product){
        return<Text>Product not found</Text>
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: product.name}}></Stack.Screen>
            <Image source={{uri: product.image || defaultPizzaImage}} style={styles.image}></Image>

            <Text>Select Size</Text>

            <View style={styles.sizes}>
            {sizes.map((size)=>(
                <Pressable onPress={() => {setSelectSize(size)}} style={[styles.size, {backgroundColor: selectSize === size ? 'gainsboro' : 'white'}]}>
            <Text key={size} style={[styles.styleText, {color: selectSize === size ? 'black' : 'gray'}]}>{size}
            </Text>
            </Pressable>
            ))}
            </View>

            <Text style={styles.price}>${product.price}</Text>

            <Button onPress={addToCart} text="Add to cart"></Button>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 'auto'
    },
    sizes: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    size:{
        backgroundColor: 'gainsboro',
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'

    },
    styleText: {
        fontSize: 20
    }
});

//make this component available to the app
export default ProductDetailsScreen;
