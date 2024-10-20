import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Rating from './Rating'; 

export default function DoctorCard({ name, type, rating }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.avatar}></View>
      <Text style={styles.doctorName}>{name}</Text>
      <Text style={styles.doctorType}>{type}</Text>
      <Rating rating={rating} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {  
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    width: 140,
    alignItems: 'center',
  },
  avatar: {  // circular image 
    width: 50,
    height: 50,
    borderRadius: 65,
    backgroundColor: '#d6c6f4',
    marginBottom: 10,
  },
  doctorName: {  
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  doctorType: { 
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
  },
});