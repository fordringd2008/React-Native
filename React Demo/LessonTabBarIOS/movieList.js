import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

/*
  测试json地址
  https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json
*/


// 从文件中读取数据，内部执行了 JSon.parse() 方法，将JSON字符串转化为JSon格式对象
var movieData = require("./data.json");

// 获取需要的数组对象
var movies    = movieData.movies;

export default class MovieList extends Component<{}> {
  render() {

    var moviesRows = [];
    for (var i in movies){
      var movie = movies[i];

      // 创建组件
      var row = (
        <View key={i} style={styles.row}>
          <Image source={{uri:movie.posters.thumbnail}}
             style={styles.thumbnail}></Image>
          <View  style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
      moviesRows.push(row);
    }

    return (
      <View style={styles.container}>
        <ScrollView  style={styles.scrollView}>
            {
              moviesRows
            }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  scrollView:{
    flex:1,
    width:375,
    marginTop:25,
  },
  row:{
    flexDirection:"row",
    padding:5,
    alignItems:"center",
    backgroundColor:"#F5FCFF",
  },
  thumbnail: {
    width:53,
    height:81,
    backgroundColor:"gray",
  },
  rightContainer:{
    flex:1,
    marginLeft:10,
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



});
module.exports = MovieList;
