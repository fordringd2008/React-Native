/*
*   封装WebView, 根据传入的url展示网页信息
*
*   包含:  header, WebView
*
*   外部传入，
*
*     给 Header 设置的，navigator, initObj(backName, title)
*     给 WebView 设置的，source
** */


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';


var Header = require('./header');

export default class CustomWebView extends Component<{}> {


  constructor(props){
    super(props);
  }

  render() {

    console.log(this.props.url);

    return (
      <View style={ { flex:1, backgroundColor:'white'} }>
        <WebView
          startInLoadingState={true}
          contentInset={{ top: -44, bottom:-120 }}        //隐藏原有网页的 头部和底部
          source = {{ uri: this.props.url }}
        />
      </View>
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


module.exports = CustomWebView;