import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FAB} from '../components/FAB';

export const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>

      <FAB
        title="-1"
        onPress={() => setCount(prevState => prevState - 1)}
        position="bl"
      />

      <FAB
        title="+1"
        onPress={() => setCount(prevState => prevState + 1)}
        position="br"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
});
