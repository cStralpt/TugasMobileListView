import React, { useState } from 'react';
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
function Home({ navigation }) {
  const GamesList = [
    { Title: 'Forza Horizon 5', Reviews: 5.6, Rating: '8+', Img: fH5() },
    {
      Title: 'Sekiro Shadows Die Twice',
      Reviews: 7.4,
      Rating: '15+',
      Img: sekiroSdT(),
    },
    {
      Title: 'Devil May Cry 5',
      Reviews: 8.4,
      Rating: '18+',
      Img: dMc5(),
    },
    {
      Title: 'Nier Automata',
      Reviews: 7.3,
      Rating: '18+',
      Img: nierAutomata(),
    },
    {
      Title: 'Far Cry 5',
      Reviews: 7.7,
      Rating: '14+',
      Img: farC5(),
    },
  ];
  function fH5() {
    return require('./src/Assets/Images/Games/forza_horizon_5.png');
  }
  function sekiroSdT() {
    return require('./src/Assets/Images/Games/sekiro.jpg');
  }
  function dMc5() {
    return require('./src/Assets/Images/Games/dmc5.jpg');
  }
  function farC5() {
    return require('./src/Assets/Images/Games/farcry5.jpg');
  }
  function nierAutomata() {
    return require('./src/Assets/Images/Games/nier_automata.jpg');
  }
  function venomLetTBC() {
    return require('./src/Assets/Images/Movies/venom.png');
  }
  function blackWidow() {
    return require('./src/Assets/Images/Movies/black_widow.jpg');
  }
  function dunE() {
    return require('./src/Assets/Images/Movies/dune.jpg');
  }
  function jokeR() {
    return require('./src/Assets/Images/Movies/joker.jpg');
  }
  function godZilla() {
    return require('./src/Assets/Images/Movies/godzilla.jpg');
  }
  function johnWick() {
    return require('./src/Assets/Images/Movies/john_wick.jpg');
  }
  function jurassicP() {
    return require('./src/Assets/Images/Movies/jurassic_park.jpg');
  }
  function LordOfTR() {
    return require('./src/Assets/Images/Movies/lord_of_the_rings.jpg');
  }
  function pikachuTM() {
    return require('./src/Assets/Images/Movies/pikachu_the_movie.jpg');
  }
  function starWars() {
    return require('./src/Assets/Images/Movies/starwars.jpg');
  }
  function theLionK() {
    return require('./src/Assets/Images/Movies/the_lion_king.jpg');
  }
  function theWolverine() {
    return require('./src/Assets/Images/Movies/the_wolverine.jpg');
  }

  const MoviesList = [
    {
      Title: 'Venom let There be Carnage',
      Reviews: 7.8,
      Rating: '17+',
      Released: '2018',
      Foster: venomLetTBC(),
    },
    {
      Title: 'Black Widow',
      Reviews: 7.7,
      Rating: '14+',
      Released: '2021',
      Foster: blackWidow(),
    },
    {
      Title: 'Dune',
      Reviews: 6.8,
      Rating: '15+',
      Released: '2021',
      Foster: dunE(),
    },
    {
      Title: 'Joker',
      Reviews: 8.8,
      Rating: '15+',
      Released: '2020',
      Foster: jokeR(),
    },
    {
      Title: 'Godzilla',
      Reviews: 7.8,
      Rating: '12+',
      Released: '2020',
      Foster: godZilla(),
    },
    {
      Title: 'John Wick',
      Reviews: 9.8,
      Rating: '17+',
      Released: '2017',
      Foster: johnWick(),
    },
    {
      Title: 'Jurassic Park',
      Reviews: 6.8,
      Rating: '13+',
      Released: '2016',
      Foster: jurassicP(),
    },
    {
      Title: 'Lord Of The Rings',
      Reviews: 7.9,
      Rating: '13+',
      Released: '2007',
      Foster: LordOfTR(),
    },
    {
      Title: 'Pikachu The Movie',
      Reviews: 5.8,
      Rating: '12+',
      Released: '2019',
      Foster: pikachuTM(),
    },
    {
      Title: 'Star Wars',
      Reviews: 6.8,
      Rating: '13+',
      Released: '2019',
      Foster: starWars(),
    },
    {
      Title: 'The Lion King',
      Reviews: 8.9,
      Rating: '12+',
      Released: '2019',
      Foster: theLionK(),
    },
    {
      Title: 'The Wolverine',
      Reviews: 7.6,
      Rating: '17+',
      Released: '2006',
      Foster: theWolverine(),
    },
  ];
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
            onPress={() =>
              navigation.navigate('Games', {
                GamesList: GamesList,
                DataType: 'GamesList',
              })
            }>
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
            onPress={() =>
              navigation.navigate('Games', {
                MoviesList: MoviesList,
                DataType: 'MoviesList',
              })
            }>
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
            onPress={() =>
              navigation.navigate('Games', {
                Recommendation: 'das',
                DataType: 'Recommendation',
              })
            }>
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
}
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
    // alignSelf: 'center',
    // padding: 20,
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
    // margin: 5,
    marginHorizontal: 5,
    marginVertical: 5,
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
