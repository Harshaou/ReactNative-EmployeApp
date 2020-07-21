import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import Home from './screens/Home';
import CreateEmploye from './screens/CreateEmploye';
import { color } from 'react-native-reanimated';
import Profile from './screens/Profile';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <CreateEmploye /> */}
      <Profile />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    marginTop: Constants.statusBarHeight,
  },
})

export default App;
