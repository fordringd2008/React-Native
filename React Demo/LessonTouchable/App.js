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
  TouchableOpacity,         // 这里要引入需要的系统组件
  TouchableHighlight,         // 这里要引入需要的系统组件
  TouchableWithoutFeedback,         // 这里要引入需要的系统组件
} from 'react-native';

/*
  React Native 提供了3个组件用于给没有触摸事件的组件绑定触摸事件，
  TouchableOpacity 透明触摸，点击时，组件会出现透明过渡的效果
  TouchableHightlight 高亮触摸，点击时，组件会出现高亮效果

  TouhableWithoutFeedback 无反馈性触摸，点击时，组件无视觉变化
  除非你有一个很好的理由，否则不要用这个组件。
  所有能够响应触屏操作的元素在触屏后都应该有一个视觉上的反馈（然而本组件没有任何视觉反馈）。
  这也是为什么一个"web"应用总是显得不够"原生"的主要原因之一
*/

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<{}> {
  btnClick(){
    alert("点击了搜索按钮");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <View style={styles.input}></View>
        </View>

        {/* 绑定事件 */}


        <TouchableOpacity style={styles.btn}
          onPress={this.btnClick}>
          <Text style={styles.search}>搜索</Text>
        </TouchableOpacity>


                {/*

        <TouchableHighlight style={styles.btn}
          onPress={this.btnClick}>
          <Text style={styles.search}>搜索</Text>
        </TouchableHighlight>



        <TouchableWithoutFeedback style={styles.btn}
          onPress={this.btnClick}>
          <Text style={styles.search}>搜索1111</Text>
        </TouchableWithoutFeedback>
*/}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    height:45,
    marginTop:65,
  },
  flex:{
    flex:1,
  },
  input:{
    height:45,
    borderWidth:1,
    marginLeft:5,
    paddingLeft:5,
    borderColor:"#CCC",
    borderRadius:4,
  },
  btn:{
    width:55,
    marginLeft:5,
    marginRight:5,
    backgroundColor:"#23BEFF",
    height:45,
    justifyContent:"center",
    alignItems:"center"
  },
  search:{
    color:"#FFF",
    fontSize:15,
    fontWeight:"bold",
  },





});
