

// 引入
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


// 组件
export default class Header extends Component<{}>{
  render(){
    return (
      <View style={styles.flex}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>网易</Text>
          <Text style={styles.font_2}>新闻</Text>
          <Text>有态度</Text>
        </Text>
      </View>
    );
  }
}

// 样式
const styles = StyleSheet.create({
  // 父层
  flex:{
    marginTop:64,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:"gray",
    alignItems:"center"
  },
  // 字体设置的公共部分
  font:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center",
  },
  font_1:{
    color:"red",
  },
  font_2:{
    color:"white",
    backgroundColor:"red"
  },


});

// 样式

// 导入 组件名称
module.exports = Header;
