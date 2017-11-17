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
  TouchableOpacity,
} from 'react-native';

/*
*   在 ReactNative 中使用fetch 实现网络请求，fetch 同 XMLHttpRequest 非常类似，是一个封装度非常高的网络API,
*   使用起来非常简单，因为使用了 Promise
*
*   Promise是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理更强大，ES6将其写进了语言标准，统一了用法
*   原生提供了 Promise对象。简单来说就是一个容器，里面保存了某个未来才会结束的事件，（通常是一个异步操作的）结果。
*
*   Promise代表了一个异步操作，有三种状态，Pending(进行中),  Resolved(已完成),  Rejected(已失败)
*
*   Promise实例生成后，可以指定一个"完成"和"失败"的h回调函数。实现方式，链式调用方法，fetch中使用了该特性
*
*
*   语法，
*
*   fetch(参数)
*   .then(完成的回调函数)
*   .catch(失败的回调函数)
*
*
*   fetch(url, opts)
*   .then((response) => {
*     // 网络请求成功，执行该函数，得到的对象，通过respone可以获取请求的数据
*     // 列入 ： json, text...
*     return response.text();
*     return response.json();
*   })
*   .then((responeData) => {
*     // 处理请求得到的数据
*   })
*   .catch((error) => {
*     // 网络请求失败，执行该回调函数，得到错误信息
*   })
*
*
*
*
* */


// Get请求
function getRequest(url:string) {
  var opts = {
    method:"Get"
  };
  fetch(url, opts)
    .then((response)=> {
      return response.text();
    })
    .then((responseData)=>{
      alert(responseData);
    })
    .catch((error)=>{
      alert(error);
    });
}

/*
*   FormData
*
*    Web应用中频繁使用的一种表单数据的序列化， XMLHttpRequst2级定义了 FormData类型，
*    FormData主要用于实现序列化表单以及创建与表单格式相同的数据，
*
*    var data = new FormData();
*    data.append("name", "ddddd");
*
*    append 两个参数，键和值
*
* */

// Post 请求
function postRequst(url, opts) {

  let formData= new FormData();
  formData.append("userId", "13510886027");
  formData.append("password", "7c4a8d09ca3762af61e59520943dc26494f8941b");

  var opts = {
    method:'POST',
    body:formData,
  };



  fetch(url, opts)
    .then((response)=>{
      return response.text();
    })
    .then((responeData)=>{
      alert(responeData);
    })
    .catch((error)=>{
      alert(error);
    });
}

// http://www.shenzhenxinrui.top:8080/zhjf-v2/user/session/13510886027

// Put 请求
function putRequst(url, opts) {

  let formData= new FormData();
  formData.append("username", "react-native");
  formData.append("password", "23232");

  var opts = {
    method:'PUT',
    body:formData,
  };

  fetch(url, opts)
    .then((response)=>{
      return response.text();
    })
    .then((responeData)=>{
      alert(responeData);
    })
    .catch((error)=>{
      alert(error);
    });
}

export default class GetData extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ getRequest.bind(this, "http://127.0.0.1/TestJson/demo.json") }>
          <View  style={styles.btn}>
            <Text>Get</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ putRequst.bind(this, "http://www.shenzhenxinrui.top:8080/zhjf-v2/user/session/13510886027") }>
          <View style={styles.btn}>
            <Text>Put</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: 'cyan',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    width:60,
    height:30,
    borderColor:'black',
    borderWidth:1,
    borderRadius:3,
    justifyContent:'center',
    backgroundColor:'yellow',
    alignItems:'center',

  },
});

module.exports = GetData;