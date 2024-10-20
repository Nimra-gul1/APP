import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar() {
  return (
    <TextInput
      style={styles.inputField}
      placeholder="Search doctors..."
    />
  );
}

const styles = StyleSheet.create({
  inputField: {  
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    marginTop:12,
  },
});