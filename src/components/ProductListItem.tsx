import { Text } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet } from 'react-native';

export const defaultPizzaImage =
'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type ProductListItemProps = {
    product: string;

}

const ProductListItem = ({product}: ProductListItemProps) =>{
  return (
    <Link href={`/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image 
      source={{uri: product.image || defaultPizzaImage}} 
      style={styles.image}
      resizeMode='contain'
      ></Image>
      
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
 </Link> 

  )
}
export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%'
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
