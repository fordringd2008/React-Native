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
  Button,
  View,
  Image
} from 'react-native';

// TabBar
import { TabNavigator } from 'react-navigation';

// Icon
// import { Ionicons } from 'react-native-vector-icons/Ionicons';

// 使用这个矢量图像库，需要引入库文件，命令 npm install react-native-vector-icons --save
import Ionicons from 'react-native-vector-icons/Ionicons';



// 第一个视图
export class OneScreen extends Component<{}>{
  render(){
    return (
      <View style={{ flex:1, backgroundColor:'red' }}></View>
    );
  }
}

// 第二个视图
export class TwoScreen extends Component<{}>{
  render(){
    return (
      <View style={{ flex:1, backgroundColor:'blue' }}></View>
    );
  }
}

// 主导航器
const RootTabNavigator = TabNavigator({
  OneS : {
    screen: OneScreen,
    navigationOptions:{
      tabBarLabel:'One',
      tabBarIcon: ({ tintColor })=>(
        <Image
          source = { { uri: 'http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg' }}
          resizeMode='contain'
          // tintColor:tintColor,
          style={ {  width:30, height:30 } }
        />
      ),
      tabBarPosition: 'bottom',
      swipeEnabled:false,
      animationEnabled:false,
      tabBarOptions: {
        style: {
          height:49
        },
        activeBackgroundColor:'white',
        // activeTintColor:'#4ECBFC',
        activeTintColor:'red',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#aaa',
        showLabel:false,
      }
    }
  },
  TwoS : {
    screen: TwoScreen,
    navigationOptions:{
      tabBarLabel:'Two',
    }
  },

});


export default class App2 extends Component<{}> {
  render() {
    return (
      <RootTabNavigator/>
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
