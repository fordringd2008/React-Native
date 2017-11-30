/*
*   展示图书详情，点击item进入图书详情页面
*
*   外部传入，
*
*   book     图书对象
*   onPress  事件处理对象，通过 {...this.props}绑定，需要设置参数，即图书id
*
*   image 图书缩略图
    title 图书名称
    publisher 出版社
    auther  作者
    price  价格
    pages  图书总页数
*
*
* */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';


var ServerURL = require('../common/server');
var Util      = require('../common/util');
var Header = require('../common/header');
var BookItem  = require('./book_item');


export default class BookDetail extends Component<{}> {


  constructor(props){
    super(props);
    this.state = {
      bookData:null       // 图书对象详情信息
    };
  }

  render() {
    return (
        <ScrollView style={styles.container}>
          {
            this.state.bookData ?
              <View>
                <Header initObj={{ backName:'图书', barTitle:this.state.bookData.title }}/>
                <BookItem book={ this.state.bookData } />
                <View>
                  <Text style={styles.title}>图书简介</Text>
                  <Text style={styles.text}>{ this.state.bookData.summary }</Text>
                </View>
                <View>
                  <Text style={styles.title}>作者简介</Text>
                  <Text style={styles.text}>{ this.state.bookData.author_intro }</Text>
                </View>
                <View style={{height:55}}></View>
              </View> : Util.loading
          }
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
  },
  title:{
    fontSize:16,
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    fontWeight:'bold',
  },
  text:{
    marginLeft:10,
    marginRight:10,
    color:'#000d22',
  },
});


module.exports = BookDetail;
