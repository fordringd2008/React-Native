/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 引入组件
var Header = require("./Header");

export default class App extends Component<{}> {
  render() {
    return (
      //ddd
      <View style={styles.flex}>
        <Header></Header>
      {/* header */}
      {/* news */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex:1,
    // width:300,
    // height:64,
    // marginTop:64,
    // backgroundColor:"gray",
  },
});
