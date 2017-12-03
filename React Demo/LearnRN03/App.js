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
  BackAndroid,
} from 'react-native';

// 平台检测
/*
*   http://blog.csdn.net/jiangbo_phd/article/details/52794470
*
*
*
*
*
* */


// 1, 用不同的文件夹区分
/*
*

/common/components/     通用组件
/android/components/    安卓组件
/ios/components/        ios组件
*
* */

// 2, 用不同的文件名字来区分, 不推荐

/*
*   ButtonIOS.js
*   ButtonAndroid.js
*
* */


// 3, 扩展名区分

/*
*   Button.ios.js
*   Button.android.js
*
*   引用的时候, 会自动根据平台进行加载
*   import Button from '.components/Button'
*
* */


// 4, Platform 模块来区分

// 1，加载组件
// var Button = Platform.select({
//   ios: ()=>require('ComponentIOS'),
//   android: ()=>require('ComponentAndroid'),
// });


// 2, 样式表

var myStyle = StyleSheet.create({
  container:{
    ...Platform.select({
      ios:{
        backgroundColor:'red',
      },
      android:{
        backgroundColor:'blue',
      }
    }),
    fontSize:(Platform.OS === 'ios') ? 18:12
  },
});



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {


  testPress =()=>{
    alert('1');
  }

  handleBackAndroid = ()=> {

    alert('点击了退出按钮');
    return true;
  }

  componentDidMount() {
    if (Platform.OS === 'android'){
      BackAndroid.addEventListener('hardwareBackPress', this.handleBackAndroid);
    }
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAndroid);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={ [styles.instructions, myStyle.container]}>
          To get started, edit App.js
        </Text>
        <Text style={ [styles.instructions, myStyle.container]}
              onPress={ this.testPress }
        >
          {instructions}
        </Text>
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
