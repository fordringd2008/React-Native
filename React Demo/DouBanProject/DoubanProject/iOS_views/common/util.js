/*
*
*   实现功能，定义多个属性，在项目中使用的一些功能，包括，获取屏幕尺寸。loading组件，Get请求方法
*
*   包含组件：
*
*
*   外部出入：
*
*     Get请求方法需要从外部传入 url， 请求成功/请求失败的回调方法
*
*
* */


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,         // 系统方法
  ActivityIndicator,  // 菊花
} from 'react-native';



var Util = {

  windowSize: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },


  // 基于fetch 的get方法，只负责下载数据
  getRequst(url:string, successCallBack, failCallBack){
    fetch(url)
      .then((response)=>{
        return response.json();
      })
      .then((responseData)=>{
        successCallBack(responseData);
      })
      .catch((error)=>{
        failCallBack(error);
      })
  },

  // 加载效果
  loading: <ActivityIndicator style={{ marginTop:200 }}/>


}

module.exports = Util;