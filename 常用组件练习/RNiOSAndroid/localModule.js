import React, { Component } from 'react';
import {
  Platform,
  NativeModules,
  NativeEventEmitter,
  DeviceEventEmitter
} from 'react-native';

//导入iOS原生模块
var LocalModuleiOS = NativeModules.LocalModule;

//导入Android原生模块
var LocalModuleAndroid = NativeModules.LocalModuleAndroid;
//iOS事件监听
const localModuleEmitter = new NativeEventEmitter(LocalModuleiOS);

var LocalModule = {
  //添加事件监听
  addLoginOutCallBack(callBack) {
    if (Platform.OS == 'ios') {
      //监听iOS的QQLoginOut事件
      localModuleEmitter.addListener('QQLoginOut',(result)=>{
        if (callBack) {
          callBack(result);
        }
      })
    }else  {
      //监听Android的QQLoginOut事件
      DeviceEventEmitter.addListener('QQLoginOut',(result)=>{
        if (callBack) {
          callBack(result);
        }
      })
    }
  },

  //调用原生QQ登录
  loginWithqq(appkey,callBack) {
    if (Platform.OS == 'ios') {
      // LocalModuleiOS.loginWithqq(appkey,(result) => {
      //     if (callBack) {
      //         callBack(result);
      //     }
      // });
      //使用ES7新特性 async/await
      return LocalModuleiOS.asyncLoginWithqq(appkey);
    }else  {
      //使用Callback回调
      LocalModuleAndroid.loginWithqq(appkey,(result)=>{
        if (callBack) {
          callBack(result);
        }
      });
      // return LocalModuleAndroid.asyncLoginWithqq(appkey);
    }
  }
};
//导出模块
module.exports = LocalModule;