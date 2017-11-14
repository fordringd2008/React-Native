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
  View,
  Image,          // 引入组件
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// {/* source={require(data.src)} */}

/*
  resizeMode:
  图片填充模式
  cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。
  译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白。
  contain: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。
  译注：这样图片完全被包裹在容器中，容器中可能留有空白
  stretch: 拉伸图片且不维持宽高比，直到宽高都刚好填满容器。
*/


export default class App extends Component<{}> {
  render() {
    // var data={src:require('./Images/11111.png')}
    // source={require('./image/big_star.png')
    // source={require("image!lefborder")}
    return (

      <View style={styles.container}>

        <View style={styles.net}>
          <Image style={styles.netImage}
            source={{uri:"http://127.0.0.1/picUrl2.png"}} />
        </View>
        <View style={styles.local}>
          <Image style={styles.localImage}
                source={require('image!testImage')}
                 />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:25,
    alignItems:"center",
  },
  net: {
    marginTop:30,
    width:300,
    height:240,
    justifyContent:"center",
    alignItems:"center",
  },
  netImage: {
    width: 280,
    height: 200,
    backgroundColor:"gray",
  },
  local:{
    marginTop:30,
    width:300,
    height:200,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"cyan",
  },
  localImage:{
    width:180,
    height:180,
    backgroundColor:"gray",
  },

















});
