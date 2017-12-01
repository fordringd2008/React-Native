/*
*
*   封装header, 在头部展示标题和返回按钮
*
*   外部传入：
*
*     navigator  点击按钮返回上一级页面
*     initObj(backName, barTitle) 返回按钮的名称，标题
*
* */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


var Icon = require('./left_icon');

export default class Header extends Component<{}> {


  constructor(props){
    super(props);
    this._pop = this._pop.bind(this);
  }
  render() {

    // 传入的对象， 包括 backName(按钮名称)， barTitle
    var headerContent = this.props.initObj;

    // alert(headerContent);

    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.left_btn}
                          onPress={this._pop}
        >
          <Icon/>
          <Text style={styles.btn_text}>{headerContent.backName}</Text>
        </TouchableOpacity>
        <View  style={styles.title_container}>
          <Text  style={styles.title}
                 numberOfLines={1}
          >{headerContent.barTitle}</Text>
        </View>
      </View>
    );
  }

  // 返回事件
  _pop(){
    this.props.navigator.pop();
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


module.exports = Header;

