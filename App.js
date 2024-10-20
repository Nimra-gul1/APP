import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './Components/SearchBar'; 
import DoctorCard from './Components/DoctorCard'; 

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <SearchBar />
      <Text style={styles.headerText}>Find Your Doctor</Text>
      <View style={styles.doctorRow}>
        <DoctorCard name="Dr. John Smith" type="Dermatologist" rating="4.9" />
        <DoctorCard name="Dr. Anna Dinn" type="Psychologist" rating="4.9" />
      </View>
      <View style={styles.doctorRow}>
        <DoctorCard name="Dr. Angela Rayez" type="Therapist" rating="4.8" />
        <DoctorCard name="Dr. Chris Bronte" type="Dentist" rating="5" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {  
    flex:1,
    backgroundColor: 'lavender',
    padding: 40,
  },
  headerText: {  
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 10,
    color:'darkblue',
  },
  doctorRow: {  
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
});