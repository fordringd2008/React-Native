
/*
*   实现功能，封装搜索栏组件，包括文本输入和搜索按钮
*
*   包含组件：
*
*
*   外部传入：
*     输入框和按钮的属性设置由外部传入，placeHolder, onPress, onChangeText
*     使用 ...this.props将外部传入的属性设置给 TextInput 和 TouchableOpacity
*
*   公用属性：
*     指定高度，边框颜色，边框宽度
*
* */


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';



export default class SearchBar extends Component<{}> {

  /*
  *    {...this.props} 由外部传入
  * */

  render() {
    return (
      <View style={styles.container}>
        <TextInput  style={ styles.input }
                    placeholder={ this.props.placeHolder }
                      {...this.props} />
        <TouchableOpacity style={styles.btn} {...this.props}>
          <Text style={styles.search} >搜索</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height:44,
    marginTop:10,
  },
  inputContainer: {
    flex:1,
    marginLeft:5,
  },
  input: {
    marginLeft:5,
    flex:1,
    height:44,
    borderWidth:1,
    borderRadius:4,
    borderColor:'#CCC',
    paddingLeft:5,
  },
  btn:{
    width:55,
    height:44,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'#23BEFF',
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center'
  },
  search:{
    flex:1,
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    lineHeight:44,
  },
});

module.exports = SearchBar;