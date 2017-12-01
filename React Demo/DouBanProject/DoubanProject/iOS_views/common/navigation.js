/*
*   封装到导航器初始化设置
*
*   外部传入：
*     compoment:  需要展示的组件
*
*
*
*
*   内部处理
*     route 对象  必须添加compoment属性，如果需要还可以添加passPorps属性
* */



import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';


var Icon = require('./left_icon');

export default class Navigation extends Component<{}> {

  constructor(props){
    super(props);
    this._pop = this._pop.bind(this);
  }


  // 返回事件
  _pop(){
    this.props.navigator.pop();
  }

  render() {

    var route = {
      component:this.props.compoment,
      title:'电影'
    };

    return (
      <NavigatorIOS
        initialRoute = { route }
        { ...this.props }
      />
    );
  }


}

const styles = StyleSheet.create({
  header: {
    height:44,
    backgroundColor: '#3497ff',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left_btn: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    backgroundColor: '#fff',
    fontSize:17,
    fontWeight:'bold',
  },
  title_container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
    lineHeight:18,
    width:200,
  },
});

module.exports = Navigation;