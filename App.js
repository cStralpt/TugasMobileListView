import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Label, { Orientation } from 'react-native-label';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fa from 'react-native-vector-icons/FontAwesome';
import Games from './src/Components/Screens/Games';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
const Stack = createNativeStackNavigator();
const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="rgb(250, 250, 250)"
        style={{ borderRadius: 15 }}
        onPress={() => alert('Pressed!')}>
        <View>
          <Icon style={styles.user} name="user" />
        </View>
      </TouchableHighlight>
    </View>
  );
};
const Home = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <View style={styles.main}>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="rgb(250, 250, 250)"
            style={{ borderRadius: 15 }}
            onPress={() => navigation.navigate('Games')}>
            <View style={styles.fitContents}>
              <Label
                orientation={Orientation.BOTTOM_RIGHT}
                containerStyle={{}}
                style={{ fontSize: 20 }}
                title="Games"
                color="#f77"
                extent={0}
                distance={150}>
                <View style={styles.contentContainer}>
                  <Icon
                    style={styles.gamesIcon}
                    name="sports-esports"
                    size={30}
                  />
                </View>
              </Label>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="rgb(250, 250, 250)"
            style={{ borderRadius: 15 }}
            onPress={() => navigation.navigate('Games')}>
            <View style={styles.fitContents}>
              <Label
                orientation={Orientation.BOTTOM_RIGHT}
                containerStyle={{}}
                style={{ fontSize: 20 }}
                title="Movies"
                color="#f77"
                extent={0}
                distance={150}>
                <View style={styles.contentContainer}>
                  <Icon
                    style={styles.gamesIcon}
                    name="local-movies"
                    size={30}
                  />
                </View>
              </Label>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="rgb(250, 250, 250)"
            style={{ borderRadius: 15 }}
            onPress={() => navigation.navigate('Games')}>
            <View style={styles.fitContents}>
              <Label
                orientation={Orientation.BOTTOM_RIGHT}
                containerStyle={{}}
                style={{ fontSize: 20 }}
                title="Recommendations"
                color="#f77"
                extent={0}
                distance={150}>
                <View style={styles.contentContainer}>
                  <Icon
                    style={styles.gamesIcon}
                    name="local-fire-department"
                    size={30}
                  />
                </View>
              </Label>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="rgb(250, 250, 250)"
            style={{ borderRadius: 15 }}
            onPress={() => navigation.navigate('Games')}>
            <View style={styles.fitContents}>
              <Label
                orientation={Orientation.BOTTOM_RIGHT}
                containerStyle={{}}
                style={{ fontSize: 20 }}
                title="All Contents"
                color="#f77"
                extent={0}
                distance={150}>
                <View style={styles.contentContainer}>
                  <Icon style={styles.gamesIcon} name="view-list" size={30} />
                </View>
              </Label>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      <View style={styles.header}>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="rgb(250, 250, 250)"
          style={{ borderRadius: 15 }}
          onPress={() => navigation.navigate('Games')}>
          <View>
            <Fa style={styles.user} name="user" />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Games" component={Games} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
  rootContainer: {
    height: '100%',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  gamesIcon: {
    display: 'flex',
    color: '#FBFFE2',
    fontSize: 150,
    // flexGrow: 1,
    textAlign: 'center',
  },
  contentContainer: {
    display: 'flex',
    // margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFAFAF',
    padding: 10,
    borderRadius: 15,
  },
  fitContents: {
    margin: 5,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
    // padding: 50,
    flex: 1,
    width: '100%',
    padding: 10,
    position: 'absolute',
    elevation: 1,
    // borderWidth: 5,
    // borderBottomColor: 'rgba(111,111,999, .2)',
  },
  user: {
    fontSize: 35,
    color: '#FFEBCC',
    backgroundColor: '#f77',
    padding: 10,
    borderRadius: 10,
  },
});
