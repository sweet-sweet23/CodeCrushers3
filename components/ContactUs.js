import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.text}>Feel free to reach out to us at:</Text>
      <Text style={styles.contactInfo}>Email: 20201374@nbsc.edu.ph</Text>
      <Text style={styles.contactInfo}>Phone: +63-947-644-5486</Text>
      <Text style={styles.contactInfo}>Located at Kihare, Manolo Fortich, Bukidnon</Text>
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
    color: '#944E63',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#8C6A5D',
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: '#8C6A5D',
  },
});

export default ContactUs;
