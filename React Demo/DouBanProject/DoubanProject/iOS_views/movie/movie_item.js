/*
*   展示图书详情，点击item进入图书详情页面
*
*   外部传入，
*
*   movie    电影对象
*   onPress  事件处理对象，通过 {...this.props}绑定，需要设置参数，即 movieid
*
    需要使用的字段

    images.medium 电影图像
    title   电影名称
    casts	电影演员 （数据需要再处理）
    rating.average 电影评分
    year	电影上映时间
    genres	电影标签
    alt	电影详情url
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
  TouchableOpacity
} from 'react-native';



export default class MovieItem extends Component<{}> {


  constructor(props){
    super(props);
    // this._pop = this._pop.bind(this);
  }

  render() {


    var movie = this.props.movie.item;

    // movie = movie ? movie : this.props.movie;

    // 提取演员姓名
    // 原始数据结构，数组元素是描述演员对象，包含演员名字

    var actors = [];
    for (var i in movie.casts){
      actors.push(movie.casts[i].name);
    }


    return (
      <TouchableOpacity style={ styles.item } {...this.props}>
        <View  style={ styles.imageContainer }>
          <Image style={ styles.image }
                 source={{uri:movie.images.medium}}
                 resizeMode='contain'
          />
        </View>
        <View  style={ styles.contentContainer }>
          <View  style={ styles.textContainer }>
            <Text numberOfLines={ 1 }
                  style={ styles.text }
            >名称：{movie.title}</Text>
          </View>
          <View style={ styles.textContainer }>
            <Text  numberOfLines={ 1 }
                   style={ styles.text }
            >演员：{actors}</Text>
          </View>
          <View style={ styles.textContainer }>
            <Text style={ styles.text }
            >评分：{movie.rating.average}</Text>
          </View>
          <View style={ {flexDirection:'row', flex:1,alignItems:'center'} }>
            <Text style={ styles.text }
            >标签：{movie.genres}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
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


module.exports = MovieItem;
