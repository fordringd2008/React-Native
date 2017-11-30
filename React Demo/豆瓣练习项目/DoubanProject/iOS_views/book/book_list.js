/*
*   图书列表模块，搜索栏，图书列表
*   图书列表的内容:通过调用图书搜索接口获取多条图书数据
*   图书列表item是单独封装的
* */

import React, { Component, PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,       // 最外层
  FlatList,         // 列表
} from 'react-native';


var Util      = require('../common/util');
var SearchBar = require('../common/searchBar');
var ServerURL = require('../common/server');
var BookItem  = require('./book_item');

export default class BookList extends  Component<{}>{

  constructor(props){
    super(props);
    this.getData = this.getData.bind(this);
    this._onPress = this._onPress.bind(this);
    this._onChangeText = this._onChangeText.bind(this);
    this._keyExtractor = this._keyExtractor.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this._reanderSeparator = this._reanderSeparator.bind(this);

    var ds = [];

    this.state= {

      // 数据源
      dataSource:ds,

      // 网络加载标示
      show:false,

      // 搜索关键字
      //
      keyWords:'React'


    };
  }

  // 加载数据
  getData(){

    // 开启loading
    this.setState({
      show:false
    });

    // 请求数据
    var that = this;
    var url = ServerURL.book_search + '?count=20&q=' + this.state.keyWords;
    Util.getRequst(url, (data)=>{
      // 请求成功

      console.log(data.books);
      console.log(data.books.lengthbooks);

      if (!data.books || data.books.length == 0){
        return alert('未查询到相关书籍');
      }else{
        // 设置下载状态和数据源
        that.setState({
          show:true,
          dataSource:data.books
        });
      }
    }, (error)=>{
      // 请求失败
      alert(error);
    });

  }

  // keyExtractor: (item: ItemT, index: number) => string
  _keyExtractor(item, index){
    return item.id;
  }

  //renderItem: (info: {item: ItemT, index: number}) => ?React.Element<any>
  // return <BookItem book = { book }/>

/*<View style={ { flex:1, backgroundColor:'red', height:40, width:Util.windowSize.width } }/>*/
  /*book={ book }*/

  _renderItem(book){
    return (
      <BookItem book={ book }></BookItem>
    )
  }

  // 分割线
  _reanderSeparator(){
    return (
      <View
        style={{
          height: 1,
          // width: Util.windowSize.width,
          // backgroundColor: "#CED0CE",
          // marginLeft: 15,
          width: Util.windowSize.width,
          backgroundColor: "#CED0CE",
          marginLeft: "5%"
        }}
      />
    );
  }



// {
//   // 请求数据时显示loading,数据请求成功后，显示列表
//
//   this.state.show ? <FlatList
//
// data = { this.state.dataSource }
// extraData = { this.state }
// keyExtractor ={this._keyExtractor}
// renderItem ={this._renderItem}
//
//
// /> : Util.loading

// }

  // *   外部传入：
  // *     输入框和按钮的属性设置由外部传入，placeHolder, onPress, onChangeText
  // *     使用 ...this.props将外部传入的属性设置给 TextInput 和 TouchableOpacity
  // *

  //点击事件
  _onPress(){
    this.getData();
  }

  // 搜索文本变化事件
  _onChangeText(text){
    this.setState({
      keyWords:text
    });
  }

  render(){
    return(
      <ScrollView>
        <SearchBar placeHolder='搜索图书'
                   onPress ={ this._onPress }
                   onChangeText={ this._onChangeText }
        ></SearchBar>

        { this.state.show ?
          <FlatList
          data = { this.state.dataSource }
          keyExtractor = { (item, index) => item.id }
          extraData = { this.state }
          renderItem={ this._renderItem }
          ItemSeparatorComponent = { this._reanderSeparator }
          /> :
          Util.loading
        }


      </ScrollView>
    );
  }
  componentDidMount() {
    this.getData();
  }
}

const styles = StyleSheet.create({


})

module.exports = BookList;