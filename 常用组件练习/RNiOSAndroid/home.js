
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import LocalModule from './localModule';

export default class home extends Component {
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
      <View>
        <TouchableHighlight style={styles.clikeButton} onPress={this.onclick.bind(this)}>
          <Text style={styles.text}>{this.state.isLogin?'已登录':'登录'}</Text>
        </TouchableHighlight>
        <Text style={styles.contentText}>{this.state.text}</Text>
      </View>
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
  clikeButton:{
    marginLeft:20,
    marginTop:40,
    width:60,
    height:30,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'white'
  },
  contentText:{
    fontSize:30,
    alignSelf:'center',
    marginTop:30
  }
});

//导出模块
module.exports = home;