/*
*   展示图书详情，点击item进入图书详情页面
*
*   外部传入，
*
*   bookID
*   navigator
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

    this.getData = this.getData.bind(this);

    this.state = {
      bookData:null       // 图书对象详情信息
    };
  }

  // 获取数据
  getData(){

    var that = this;

    var url = ServerURL.book_detail_id + this.props.bookID;

    Util.getRequst(url, (data)=>{
      this.setState({
        bookData:data
      });
    }, (error)=>{
        alert(error);
    })
  }

  render() {
    return (
        <ScrollView style={styles.container}>
          {
            this.state.bookData ?
              <View>
                <Header initObj={{ backName:'图书', barTitle:this.state.bookData.title }}
                        navigator={ this.props.navigator }
                />
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

  componentDidMount() {
    this.getData();
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
