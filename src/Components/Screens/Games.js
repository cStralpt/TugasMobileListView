import * as React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import Fa from 'react-native-vector-icons/FontAwesome';
export default function Games({ route }) {
  const { GamesList } = route.params;
  const { DataType } = route.params;
  const RenderGamesList = ({ item }) => (
    <View style={styles.gameItem}>
      <View style={styles.imgContainer}>
        <Image style={styles.gameImg} source={item.Img} />
        <View style={styles.gameRatingCont}>
          <Text style={styles.gameRating}>{item.Rating}</Text>
        </View>
      </View>
      <View style={styles.gameData}>
        <Text style={styles.gTitle}>{item.Title}</Text>
        <View style={styles.gReviewsCont}>
          <View style={styles.gIcon}>
            <Fa style={styles.gReviesIcon} name="star" />
          </View>
          <Text style={styles.gReviews}>{item.Reviews}</Text>
        </View>
      </View>
    </View>
  );
  if (route.params.DataType == 'GamesList') {
    return (
      <View style={styles.container}>
        <FlatList data={GamesList} renderItem={RenderGamesList} />
      </View>
    );
  }
}
// <Text>{JSON.stringify(data[0].Title)}</Text>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  gameItem: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
    borderBottomWidth: 3,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'whitesmoke',
    borderColor: '#f77',
  },
  imgContainer: {
    width: 100,
    // flexBasis: '30%',
    height: 100,
    position: 'relative',
  },
  gameImg: {
    width: '100%',
    resizeMode: 'cover',
    height: '100%',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#f77',
  },
  gameData: {
    display: 'flex',
    // width: '100%',
    flexGrow: 1,
    // borderWidth: 3,
    paddingLeft: 10,
  },
  gameRatingCont: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#f77',
    borderRadius: 30,
    padding: 4,
    width: 35,
    height: 35,
    color: 'white',
  },
  gameRating: {
    textAlign: 'center',
    color: 'white',
  },
  gTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gReviews: {
    fontSize: 20,
    color: '#f77',
    marginStart: 5,
  },
  gReviewsCont: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 119, 119, .5)',
    padding: 10,
    borderRadius: 5,
  },
  gReviesIcon: {
    fontSize: 25,
    color: '#f77',
    // borderWidth: 4,
    textAlign: 'center',
  },
  gIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
