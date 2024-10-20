import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Rating({ rating }) {
  return (
    <View style={styles.ratingContainer}>
      <Icon name="star" size={14} color="yellow" />
      <Text style={styles.ratingText}> {rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {  
    backgroundColor: '#6a4fc7',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {  
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
  },
});