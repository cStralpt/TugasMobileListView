import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

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

export default Header;
const styles = StyleSheet.create({
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
    // borderWidth: 0,
    // borderStartWidth: 0,
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
