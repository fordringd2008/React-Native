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
  TextInput,
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

/*
  TextInput 是一个允许用户在应用中通过键盘输入文本的基本组件。
  提供了多种属性的配置，例如自动完成，自动大小写，占位文字，以及多种不同类型的键盘等等，
  常用的：
  placeholder 占位符
  value 输入框的值
  password 是否是密文输入
  editable 是否可以编辑
  returnKeyType 键盘return键类型
  onChange 文本变化时调用
  onEndEditing 结束编辑时调用
  onSubmitEditing 结束编辑，点击提交按钮时调用

*/



export default class App extends Component<{}> {


  // ES5 的写法
  // getInitialState(){
  //   return {
  //     inputText:"ddd"
  //   };
  // }

  // ES6中的写法，代替了  getInitialState
  constructor(props){
    super(props);

    // 这两种方式都可以
    // this.state = {
    //   inputText : "默认"
    // }

    this.setState({
        inputText : "默认"
    })
  }

  btnClick(){
    alert(this.state.inputText);
  }

  getContent(text){
     alert(text);
     this.setState({
       inputText: text,
     });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          {/*<View style={styles.input}></View>*/}
          {/*this.getContent
            value = { this.state.inputText }
            onPress={this.show.bind(this, textString)}
            */}
          <TextInput style={styles.input}
            placeholder="请输入"
            returnKeyType="search"
            onChangeText = { this.getContent.bind(this) }
          ></TextInput>
        </View>

        {/* 绑定事件 */}

        <TouchableOpacity style={styles.btn}
          onPress={this.btnClick.bind(this)}>
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
