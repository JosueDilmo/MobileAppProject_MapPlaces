import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// THIS IS THE STARTING POINT OF THE APP
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Mobile Project app!</Text>
    
    <View style={styles.card}>
      <Text style={styles.cardTitle}>This is a Title</Text>
      <Text style={styles.cardSubtitle}>This is a subtitle</Text>
    </View>
    </View>

  );
}

//DEFINE THE STYLES THIS CODE WILL HAVE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  card:{
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },

  cardTitle:{
    fontSize: 20,
    fontWeight: 'bold',
  },

  cardSubtitle:{
    fontSize: 15,
    color: 'gray',
  },

});
