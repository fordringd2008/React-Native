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
  TouchableOpacity
} from 'react-native';



export default class BookItem extends Component<{}> {


  constructor(props){
    super(props);
    // this._pop = this._pop.bind(this);
  }

  render() {

    var book = this.props.book.item;

    console.log(book.image)
    console.log(book.title)
    console.log(book.publisher)
    console.log(book.price)
    console.log(book.pages)


    return (
      <TouchableOpacity style={ styles.item } {...this.props}>
        <View  style={ styles.imageContainer }>
          <Image style={ styles.image }
            source={{uri:book.image}}
          />
        </View>
        <View  style={ styles.contentContainer }>
          <View  style={ styles.textContainer }>
            <Text numberOfLines={ 1 }>{book.title}</Text>
          </View>
          <View style={ styles.textContainer }>
            <Text  numberOfLines={ 1 }
                   style={ styles.publisher_auther }
            >{book.publisher}</Text>
          </View>
          <View style={ styles.textContainer }>
            <Text style={ styles.publisher_auther }
            >{book.auther}</Text>
          </View>
          <View style={ {flexDirection:'row', flex:1,alignItems:'center'} }>
            <Text style={ styles.price }
              >{book.price}</Text>
            <Text style={ styles.pages }
              >{book.pages}页</Text>
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
    height:100,
  },
  contentContainer: {
    flex:1,
    marginLeft:15,
  },
  textContainer: {
    flex:1,
    justifyContent: 'center',
  },
  publisher_auther: {
    color:'#a3a3a3',
    fontSize:13,
  },
  price:{
    color:'#2bb2a3',
    fontSize:16,
  },
  pages:{
    marginLeft:10,
    color:'#a7a0a0',
  },
});


module.exports = BookItem;
