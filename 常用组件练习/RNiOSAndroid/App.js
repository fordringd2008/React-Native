/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 * RN 与 原生的交互
 * http://www.guiyongdong.com/2017/04/01/ReactNative%E5%AE%9E%E7%8E%B0js%E5%92%8C%E5%8E%9F%E7%94%9F%E4%BA%A4%E4%BA%92/
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

import Home from './home';

//导入iOS原生模块
var LocalModuleiOS = NativeModules.LocalModule;

//导入Android原生模块
// var LocalModuleAndroid = NativeModules.LocalModuleAndroid;

//iOS事件监听
const localModuleEmitter = new NativeEventEmitter(LocalModuleiOS);


export default class App extends Component<{}> {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      text:'hello word',
      isLogin:false
    };
  }
  render() {
    return (
      <Home style={styles.container}/>
    );
  }

  async onclick() {
    //qq登录
    // LocalModule.loginWithqq('123456789',(result)=>{
    //     var code = result['result'];
    //     this.setState({
    //         text:code,
    //         isLogin:true
    //     })
    // });
    //这里使用async/await的方法
    var result = await LocalModule.loginWithqq('123456789');
    var code = result['result'];
    this.setState({
      text:code,
      isLogin:true
    });
    //添加退出登录的响应
    LocalModule.addLoginOutCallBack((result)=>{
      var code = result['result'];
      if (code == 1) {
        this.setState({
          text:'hello word',
          isLogin:false
        });
      }
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
