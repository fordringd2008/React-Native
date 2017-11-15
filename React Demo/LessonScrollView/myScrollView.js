
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';

export default class MyScrollView extends Component<{}> {
  _onScrollBeginDrag(){
    console.log("开始拖拽");
  };
  _onScrollEndDrag(){
    console.log("结束拖拽");
  };
  _onMomentumScrollBegin(){
    console.log("开始滑动");
  };

  _onMomentumScrollEnd(){
    console.log("结束滑动");
  };

  _onRefresh(){
    console.log("刷新");
  };

  /*
  refreshControl = {
    <RefreshControl
      refreshing = {false}
      tintColor = "red"
      title = "正在刷新..."
      onRefreshing = {this._onRefresh}
     />


       refreshing = {false}
       tintColor = "red"
       title = "正在刷新..."
       onRefreshing = {this._onRefresh}
  }
  */
  render() {
    return (
      <View style={styles.container}>

        <ScrollView style={styles.scrollView}
          showsVerticalScrollIndicator= {true}
          onScrollBeginDrag = {this._onScrollBeginDrag}
          onScrollEndDrag = {this._onScrollEndDrag}
          onMomentumScrollBegin = {this._onMomentumScrollBegin}
          onMomentumScrollEnd = {this._onMomentumScrollEnd}
          refreshControl = {
            <RefreshControl
              refreshing = {false}
              title = "正在刷新..."
              onRefresh={this._onRefresh.bind(this)}
              tintColor="#ff0000"
             />
          }
          >
          <View style={styles.view_1}></View>
          <View style={styles.view_2}></View>
          <View style={styles.view_3}></View>
        </ScrollView>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:375,
    backgroundColor: 'cyan',
  },
  scrollView: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#CCCCCC',
  },
  view_1: {
    flex:1,
    margin:15,
    height:400,
    backgroundColor: 'yellow',
  },
  view_2: {
    flex:1,
    margin:15,
    height:400,
    backgroundColor: 'blue',
  },
  view_3: {
    flex:1,
    margin:15,
    height:400,
    backgroundColor: 'green',
  },
});


// 导出模块
module.exports = MyScrollView;
