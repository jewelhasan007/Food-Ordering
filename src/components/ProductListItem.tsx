import products from '@/assets/data/products';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import { Image, StyleSheet } from 'react-native';

const product = products[0]

const ProductListItem = ({product}: any) =>{
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}></Image>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View> 

  )
}
export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
image: {
  width: '50%',
  // height: "100%",
  aspectRatio: 1,
},
  title: {
    fontSize: 20, 
    fontWeight: '700',
    marginVertical: 10,
    },
    price:{
      color: Colors.light.tint,
    }
});
