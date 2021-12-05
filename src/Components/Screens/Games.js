import * as React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import Fa from 'react-native-vector-icons/FontAwesome';
import Ionic from 'react-native-vector-icons/Ionicons';
export default function Games({ route }) {
  const { GamesList, MoviesList } = route.params;
  if (route.params.DataType == 'MoviesList') {
    dynamicStylesValue(20);
    console.log('Movies');
  }
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
  const RenderMoviesList = ({ item }) => (
    <View style={styles.moviesItem}>
      <View style={styles.fosterContainer}>
        <Image style={styles.foster} source={item.Foster} />
      </View>
      <View style={styles.movieItemData}>
        <Text style={styles.mTitle}>{item.Title}</Text>
        <View style={styles.ratRev}>
          <Text style={styles.mReleased}>{item.Released}</Text>
          <View style={styles.ratRevCont}>
            <Text style={styles.mRev}>Reviews: {item.Reviews}</Text>
            <Text style={styles.Dot}>.</Text>
            <Text style={styles.mRat}>Rating: {item.Rating}</Text>
          </View>
        </View>
      </View>
      <Ionic style={styles.mPlayBtnIcon} name="play-circle-outline" />
      <View style={[styles.mPlayBtnIcon, styles.playBtnPrettier]} />
    </View>
  );
  if (route.params.DataType == 'GamesList') {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.fListG}
          data={GamesList}
          renderItem={RenderGamesList}
        />
      </View>
    );
  } else if (route.params.DataType == 'MoviesList') {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          style={styles.fListM}
          data={MoviesList}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={true}
          renderItem={RenderMoviesList}
        />
      </View>
    );
  } else if (route.params.DataType == 'Recommendation') {
    return (
      <View style={styles.recContainer}>
        <View style={styles.recImgCont}>
          <Image
            style={styles.recImg}
            source={require('../../Assets/Images/Movies/wonder_women.png')}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.recTitle}>Wonder Women</Text>
          <View style={styles.recRatRevCont}>
            <View style={styles.recRevC}>
              <Text style={styles.recRevRatValue}>8.9</Text>
              <Text style={styles.recRatRev}>Review</Text>
            </View>
            <View style={[styles.recRatC, styles.recRevC]}>
              <Text style={styles.recRevRatValue}>17+</Text>
              <Text style={styles.recRatRev}>Rating</Text>
            </View>
          </View>
          <View style={styles.recBtnCont}>
            <Text style={styles.recBtn}>BUTTON</Text>
          </View>
        </View>
      </View>
    );
  }
}
// <Text>{JSON.stringify(data[0].Title)}</Text>
let styleValue = { flistPad: 20 };
function dynamicStylesValue(sV) {
  styleValue.flistPad = 20;
  console.log('benar');
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fListM: {
    paddingTop: styleValue.flistPad,
    paddingBottom: styleValue.flistPad,
    width: '100%',
  },
  fListG: {
    padding: styleValue.flistPad,
    width: '100%',
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
  moviesItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    // borderWidth: 3,
    width: 350,
    height: '100%',
    marginHorizontal: 20,
    position: 'relative',
    padding: 20,
    backgroundColor: '#f77',
    borderRadius: 15,
  },
  fosterContainer: {
    width: '100%',
    height: '60%',
    flexGrow: 1,
  },
  foster: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  movieItemData: {
    display: 'flex',
    // height: '100%',
    backgroundColor: '#f77',
  },
  mTitle: {
    fontSize: 20,
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
  ratRev: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    alignContent: 'center',
  },
  mRat: {
    color: '#f77',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  mPlayBtnIcon: {
    display: 'flex',
    color: '#f77',
    fontSize: 150,
    // borderWidth: 4,
    textAlign: 'center',
    position: 'absolute',
    elevation: 2,
    left: '35%',
    bottom: '40%',
  },
  mReleased: {
    padding: 5,
    backgroundColor: 'rgba(255, 119, 119, .2)',
    color: '#f77',
    fontWeight: 'bold',
    borderRadius: 3,
  },
  mRev: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  ratRevCont: {
    display: 'flex',
    flexDirection: 'row',
  },
  Dot: {
    fontWeight: 'bold',
    color: 'silver',
  },
  recImgCont: {
    height: '50%',
  },
  recImg: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  recContainer: {
    // borderWidth: 3,
    margin: 20,
    flexGrow: 1,
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: 'white',
    flexGrow: 1,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    padding: 20,
    // borderWidth: 3,
  },
  recTitle: {
    color: '#f77',
    fontSize: 35,
    fontFamily: 'times new roman',
    textAlign: 'center',
  },
  recRatRevCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recBtnCont: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  recBtn: {
    display: 'flex',
    backgroundColor: 'rgba(255, 119, 119, .5)',
    borderWidth: 3,
    borderColor: '#f77',
    color: '#f77',
    textAlign: 'center',
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 100,
    fontWeight: 'bold',
    // fontSize: 30,
  },
  recRevC: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
  },
  recRatC: {
    marginRight: 20,
  },
  recRevRatValue: {
    color: '#f77',
    fontWeight: 'bold',
    fontSize: 30,
  },
  recRatRev: {
    backgroundColor: 'rgba(255, 119, 119, .2)',
    color: '#f77',
    padding: 5,
    borderRadius: 3,
  },
  // playBtnPrettier: {
  //   width: 120,
  //   height: 120,
  //   backgroundColor: 'whitesmoke',
  //   elevation: 1,
  //   borderRadius: 160,
  //   left: '38%',
  //   bottom: '43%',
  // },
});
