import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from './screens/Home';
import CreateEmploye from './screens/CreateEmploye';
import Profile from './screens/Profile';
import reducer from './reducer';


const App = () => {
  const Stack = createStackNavigator();

  const options = {
    title: 'Employe App',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: "white"
    }
  }

  const store = createStore(reducer)


  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={options} />
      <Stack.Screen name="Create" component={CreateEmploye} options={{...options, title: 'Create'}} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
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
