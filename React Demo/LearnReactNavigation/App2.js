/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 * TabNavigator tabBar练习
 *
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
    navigationOptions: {
      tabBarLabel:'One',
      tabBarIcon: ()=>(
        <Image
          source = { { uri: 'http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg' }}
          resizeMode='contain'
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
    navigationOptions : ( () => TabOptions('Two!', null, null, 'TwoFirst'))
  },
});

const tabBarImageStyle = { width:30, height:30 };

// 之定义tabBar样式
const TabOptions = (tabBarTitle, normalImage, selectedImage, navTitle)=>{
  const tabBarLabel = tabBarTitle;
  const tabBarIcon = (({ tintColor, focused })=>{
    return (
      focused ?
        <Image source={ { uri: 'http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg' } }
               resizeMode='contain'
               style={ tabBarImageStyle }
        />:
        <Image source={ { uri: 'http://img9.3lian.com/c1/vector/10/01/043.jpg' } }
               resizeMode='contain'
               style={ tabBarImageStyle }
        />
      );
  });
  // const tabBarIcon = ()=>(
  //     <Image source={{ uri: 'http://img9.3lian.com/c1/vector/10/01/043.jpg' }}
  //       resizeMode='contain'
  //       style={ {  width:30, height:30 } }
  //     />
  // );
  const headerTitle = navTitle;
  const headerTitleStyle = { fontSize:20, color:'white' };
  const headerStyle = { backgroundColor:'black' };
  return { tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle };
}



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
