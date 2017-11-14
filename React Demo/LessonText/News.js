
// 引入
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


// 组件
export default class News extends Component<{}>{

  // 注意，每个方法之间，不使用 , 隔开

  // 弹出方法
  show(title){
    alert(title);
  }
  render(){
    // 定义数组，用于储存设置好的Text组件
    var newsComponents = [];

    // for  forin 两种写法

    // 遍历储存信息中的数组，从外部传入
    // for (var i in this.props.news) {
    //   if (this.props.news.hasOwnProperty(i)) {
    //     var text = (
    //       <Text
    //         onPress={this.show.bind(this, this.props.news[i])}
    //         style={styles.news_item}
    //         numberOfLines = {2}
    //         key={i}>
    //         {this.props.news[i]}
    //       </Text>
    //     );
    //     // 将设置好的Text存入数组
    //     newsComponents.push(text);
    //   }
    // }

    for (var i = 0; i < this.props.news.length; i++) {
      var textString = this.props.news[i];
      var text = (
        <Text
        onPress={this.show.bind(this, textString)}
        style={styles.news_item}
        numberOfLines = {2}>
          {textString}
        </Text>
      );
      newsComponents.push(text);
    }


    return (
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日要闻</Text>
        {newsComponents}
      </View>
    );
  }
}

// 样式
const styles = StyleSheet.create({
  // 父层
  flex:{
    flex:1,
  },
  // 字体设置的公共部分
  news_title:{
    fontSize:20,
    fontWeight:"bold",
    color:"#CD1D1C",
    marginLeft:10,
    marginTop:15,
  },
  news_item:{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:30,
  },

});

// 样式

// 导入 组件名称
module.exports = News;
