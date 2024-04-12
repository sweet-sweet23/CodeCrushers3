import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Footer from './Footer';

const AboutUs = () => {
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: '#944E63' }]}>About Us</Text>
      <View style={[styles.imageContainer, { flexDirection: windowWidth > 600 ? 'row' : 'column' }]}>
        <View style={styles.imageTextContainer}>
          <Image source={require('../assets/Juliet.jpg')} style={styles.image} />
          <Text style={[styles.imageText, { color: '#944E63' }]}>Juliet B. Pinalas</Text>
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('../assets/Veian.jpg')} style={styles.image} />
          <Text style={[styles.imageText, { color: '#944E63' }]}>Veian Keth C. Cay-uman</Text>
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={require('../assets/irish.jpg')} style={styles.image} />
          <Text style={[styles.imageText, { color: '#944E63' }]}>Irish Divine N. Lumala</Text>
        </View>
      </View>
      <Text style={[styles.text, { color: '#D1BB9E' }]}>
        Welcome to CodeCrushers! 
        We're a team of BSIT students from Northern Bukidnon State College 
        passionate about crafting stylish mugs and cups. 
      </Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0EEE0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#335A02',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#335A02',
    textAlign: 'center',
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: '#335A02',
  },
  imageContainer: {
    marginBottom: 20,
  },
  imageTextContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  imageText: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default AboutUs;
