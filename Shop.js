import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Shop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Shop!</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Shop;
