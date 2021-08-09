import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.purpleBox, {width: width * 2}]} />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        W: {Math.round(width)} , H: {Math.round(height)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    // width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
