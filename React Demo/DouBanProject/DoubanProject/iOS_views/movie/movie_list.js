/*
*   展示电影列表
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
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

var Util      = require('../common/util');
var SearchBar = require('../common/searchBar');
var ServerURL = require('../common/server');
var MovieItem  = require('./movie_item');
var MovieWebView = require('../common/customWebView');

export default class MovieList extends Component<{}> {


  constructor(props){
    super(props);
    this.getData = this.getData.bind(this);
    this._onPressSearchBtn = this._onPressSearchBtn.bind(this);
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
      keyWords:'哈利波特'
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
    var url = ServerURL.movie_search + '?count=20&q=' + this.state.keyWords;
    Util.getRequst(url, (data)=>{
      // 请求成功

      console.log(data.subjects);
      console.log(data.subjects.length);

      if (!data.subjects || data.subjects.length == 0){
        return alert('未查询到相关书籍');
      }else{
        // 设置下载状态和数据源
        that.setState({
          show:true,
          dataSource:data.subjects
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

  // 点击行
  _onPressItem(e){

    var movie = e.item;


    var detailRoute = {
      component:MovieWebView,
      title:movie.title,
      passProps:{
        url:movie.alt
      }
    };

    this.props.navigator.push(detailRoute);
  }

  _renderItem(movie){

    /*
    *
    * 其onPressItem属性使用箭头函数而非bind的方式进行绑定，使其不会在每次列表重新render时生成一个新的函数，
    * 从而保证了props的不变性（当然前提是 id、selected和title也没变），
    * 不会触发自身无谓的重新render。换句话说，如果你是用bind来绑定onPressItem，
    * 每次都会生成一个新的函数，导致props在===比较时返回false，从而触发自身的一次不必要的重新render。
    * */

    return (
      <MovieItem movie={ movie } onPress={ () => this._onPressItem(movie) }
      ></MovieItem>
    )
  }

  // 分割线
  _reanderSeparator(){
    return (
      <View
        style={{
          height: 1,
          width: Util.windowSize.width,
          backgroundColor: "#CED0CE",
          marginLeft: "5%"
        }}
      />
    );
  }


  //点击搜索事件
  _onPressSearchBtn(){
    this.getData();
  }

  // 搜索文本变化事件
  _onChangeText(text){
    this.setState({
      keyWords:text
    });
  }


  render() {

    return (
      <ScrollView>
        <SearchBar placeHolder='搜索电影'
                   onPress ={ this._onPressSearchBtn }
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
  item: {
    flexDirection:'row',
    height:120,
    padding:"5%",
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width:80,
    height:110,
  },
  contentContainer: {
    flex:1,
    marginLeft:15,
  },
  textContainer: {
    flex:1,
    justifyContent: 'center',
  },
  text: {
    color:'black',
  },
});


module.exports = MovieList;
