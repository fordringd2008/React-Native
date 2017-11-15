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
  ListView,
  Image,
} from 'react-native';

var movieData = require("./data.json");

// 原始数据
var movies = movieData.movies;

export default class MovieList extends Component<{}> {

  constructor(props){
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged:(oldRow, newRow) => oldRow != newRow
    });

    this.state = {
      dataSource: ds.cloneWithRows(movies)
    };
  }

  // 渲染头部
  _renderRow(movie){
    return (
      <View style={styles.row}>
        <Image
           style={styles.thumbnail}
          source={{uri:movie.posters.thumbnail}}
          ></Image>
        <View  style={styles.rightContainer}>
          <Text  style={styles.title}>{movie.title}</Text>
          <Text  style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }

  // 渲染头部
  _renderHeader(){
    {/* 分割线 */}
    return (
      <View  style={styles.header}>
        <Text  style={styles.header_text}>这是HeaderView</Text>
        <View  style={styles.separator}></View>
      </View>
    );
  }

  // 渲染分割线
  _renderSeparator(sectionID:number, rowID: number){
    return (
      <View  style={styles.separator}
        key={sectionID+rowID}></View>
    );
  }

  render() {
    {/*  initialListSize 一开始的时候创建对象

      (sectionID, rowID, adjacentRowHighlighted)

      */}
    return (
      <ListView
        style={styles.listView}
        dataSource= {this.state.dataSource}
        renderRow = {this._renderRow}
        renderHeader =  {this._renderHeader}
        renderSeparator = {this._renderHeader}
        initialListSize={10}
      />
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    marginTop:25,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  // 行样式
  row: {
    flexDirection:"row",
    // fontSize: 20,
    // textAlign: 'center',
    alignItems:"center",
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width:53,
    height:81,
    backgroundColor: 'gray',
  },
  title:{
    fontSize:18,
    marginTop:3,
    marginBottom:3,
    textAlign:"center",
  },
  year:{
    marginBottom:3,
    textAlign:"center",
  },

  // header样式
  header:{
    height:44,
    backgroundColor: '#F5FCFF',
  },
  header_text:{
    flex:1,
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    lineHeight:44,
  },
  // 分割线样式
  separator:{
    height:1,
    backgroundColor:"#CCCCCC",
  },


});

module.exports = MovieList;
