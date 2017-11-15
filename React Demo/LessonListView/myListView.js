import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

/*
  ListView 数据列表
  最重要的是设置每行的样式
  section, header

  使用 ListView.DataSource ，给它一个普通的数组，再使用 DataSource实例化一个ListView组件

  ListView 实现，row/section组件定义，设置数据

  设置ListView数据源
  将DataSource对象设置为 state属性

*/
// 原始数据，简单的字符串
var contents = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",

];


export default class MyListView extends Component<{}> {


  // getInitialState(){
  //   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   return {
  //     dataSource: ds.cloneWithRows(contents),
  //   };
  // }

  // 构造方法
  constructor(props){
    super(props);

    // 创建DataSource对象
    var ds = new ListView.DataSource({
      rowHasChanged:(oldRow, newRow) => oldRow != newRow
    });

    this.state = {
      // 设置数据源时，不直接使用提供的原始数据，使用 cloneWithRows 对数据源进行复制
      // 使用复制后的数据源实例化ListView。优势：当数据源发生改变时，ListView组件的Datasouce不会改变
      dataSource: ds.cloneWithRows(contents)
    };
  }

  // 也可以这么初始化 state
  // state = {
  //
  // };

  _renderRow(rowData:string){
    return(
      <View style={styles.row}>
        <Text style={styles.content}>
          {rowData}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <ListView dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        style={styles.container}
        >
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:25,
  },

  row:{
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    height:100,
    borderColor:"gray",
    borderBottomWidth:1,
  },
  content:{
    flex:1,
    fontSize:20,
    color:"blue",
    lineHeight:100,
  },






});


module.exports = MyListView;
