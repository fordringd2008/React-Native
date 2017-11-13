/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


/*
  第一步：

  导入 ReactNative包，导入 ReactNative组件

  AppRegistry, JS运行所有ReactNative应用的入口 （ 当前版本已移除）
  StyleSheet : ReactNative中使用的样式表，类似CSS样式表
  各种开发中需要使用的组件
  模板中使用的ES6写法，
  ES5写法如下
  let React = require("react-native");
  let {
    AppRegistry,
    StyleSheet,
    Text,
    View
  } = React;

  require 函数，搜索目录加载文件

*/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,           // 组件
  View            // 组件
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/*
  第二步：
  创建组件

下列代码是ES5中的写法，模板中使用的是ES6的写法，
ES5 render:function(){...}
ES6 render(){}

var HelloWord = React.createClass({
  render:function(){
    return {};
  }
});
*/

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome 32丁!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

/*

  第三步：
  创建样式表

  StyleSheet.create 创建样式实例
  在应用中只会创建一次，不用每次在渲染周期中重新创建

  第四步： 在 index.js 中

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan', 
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red', //#333333
    marginBottom: 5,
  },
});

//
