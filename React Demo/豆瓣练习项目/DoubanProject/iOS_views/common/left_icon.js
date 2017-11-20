/*
*   导航条左侧的返回按钮
*
*
* */


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export default class Icon extends Component<{}> {


  render() {
    return (
      <View>
        <View style={styles.go} ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  go: {
    width:15,
    height:15,
    borderLeftWidth:2,
    borderBottomWidth:2,
    borderColor:'#fff',
    marginLeft:10,
    transform:[{ rotate:'45deg' }]    // 将一个矩形框旋转45度

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Icon;