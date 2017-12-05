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
  Image,
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={[styles.container, { justifyContent:'center', alignItems:'center', flexDirection:'column' }]}>

        {/* 加载本地资源 */}
        <Image source = { require('./img/home/tab_home.png')}  />

        {/*加载网络图片*/}
        <Image source = { { uri:'http://192.168.0.25/%E6%B5%8B%E8%AF%95%E5%9B%BE%E7%89%87/icon.jpeg' } }
               style={{width: 40, height: 40}}/>

        {/*加载原生程序中的图片 tabA */}
        <Image source={{ uri:'tabA' }} style={{width: 40, height: 40}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
