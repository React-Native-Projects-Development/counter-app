import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TaskScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.skyblueBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    // top: 100,
    // flex: 1,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#5856D6',
    top: 100,
    right: 100,
  },
  orangeBox: {
    width: 100,
    height: 100,
    // flex: 2,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#F0A23B',
    top: 50,
    // left: 100,
  },
  skyblueBox: {
    width: 100,
    height: 100,
    // flex: 3,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#28C4D9',
    bottom: 100,
    left: 100,
  },
});
