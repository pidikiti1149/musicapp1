import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {Button} from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to MUSICFEST  app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
