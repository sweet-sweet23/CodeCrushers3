import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import Footer from './Footer';

const Dashboard = ({ navigation }) => {
  const [cartItems, setCartItems] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);

  const categories = {
    'Cups': [
      { id: 1, name: 'Cute Panda', image: require('../assets/item1.jpg'), price: '₱500.00', description: 'Panda Cup' },
      { id: 2, name: 'Orange', image: require('../assets/item2.jpg'), price: '₱900.00', description: 'Orange Cup' },
    ],
    'Mugs': [
      { id: 3, name: 'Heart', image: require('../assets/item3.jpg'), price: '₱700.00', description: 'Heart Mug' },
      { id: 4, name: 'Flower', image: require('../assets/item4.jpg'), price: '₱800.00', description: 'Flower Mug' },
    ],
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    Alert.alert('Item added to cart!');
  };

  const handleBuyNow = () => {
    console.log('Navigate to checkout or purchase page');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/CC logo.png')} style={styles.logo} />
        <Text style={styles.header}>Welcome to our Store!</Text>
      </View>
      {/* Display items by category */}
      {Object.entries(categories).map(([category, items]) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <View style={styles.menuContainer}>
            {items.map((item) => (
              <View key={item.id} style={styles.menuItem}>
                <Image source={item.image} style={styles.menuItemImage} />
                <Text style={styles.menuItemText}>{item.name}</Text>
                <Text style={styles.menuItemPrice}>{item.price}</Text>
                <Text style={styles.menuItemDescription}>{item.description}</Text>
                <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.addToCartButton}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      ))}
      <TouchableOpacity onPress={() => setShowCart(!showCart)}>
        <Text style={styles.buttonText}>View Cart ({cartItems.length})</Text>
      </TouchableOpacity>
      {showCart && (
        <View style={styles.cartContainer}>
          <Text style={styles.cartTitle}>Shopping Cart</Text>
          {cartItems.map((cartItem, index) => (
            <View key={index} style={styles.cartItem}>
              <Text>{cartItem.name}</Text>
              <Text>{cartItem.price}</Text>
            </View>
          ))}
          <TouchableOpacity onPress={() => setShowCart(false)}>
            <Text style={styles.buttonText}>Close Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBuyNow}>
            <Text style={styles.buttonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E0EEE0',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#8C6A5D',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8C6A5D',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  menuItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  menuItemText: {
    color: '#944E63',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuItemPrice: {
    color: '#944E63',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  menuItemDescription: {
    color: '#944E63',
    fontSize: 14,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});
 
export default Dashboard;
