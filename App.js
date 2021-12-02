import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import Header from './src/Components/LayoutComponents/Header';
import Main from './src/Components/LayoutComponents/Main';
import Footer from './src/Components/LayoutComponents/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Games } from './src/Components/Screens/Games';

const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={{ height: '100%' }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            // borderWidth: 5,
            // borderColor: '#ff7',
          }}>
          <View style={styles.mainContainer}>
            <Main />
          </View>
        </ScrollView>
      </View>
      <Header />
    </View>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Games" component={Games} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  main: {
    display: 'flex',
    height: '100%',
    borderWidth: 5,
  },
  rootContainer: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 5,
    height: '100%',
    // backgroundColor: '#FF9999',
    position: 'relative',
  },
});
