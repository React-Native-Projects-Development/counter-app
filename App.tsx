import React from 'react';
import {SafeAreaView} from 'react-native';
import {TaskScreen} from './src/screens/TaskScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TaskScreen />
    </SafeAreaView>
  );
};

export default App;
