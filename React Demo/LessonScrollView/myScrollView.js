
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class MyScrollView extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      {/*
        <ScrollView style={styles.scrollView}>
          <View style={styles.view_1}></View>
          <View style={styles.view_2}></View>
          <View style={styles.view_3}></View>
        </ScrollView>
        */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  scrollView: {
    marginTop: 25,
    backgroundColor: '#CCCCCC',
  },
  view_1: {
    flex:1,
    margin:15,
    height:300,
    backgroundColor: 'yellow',
  },
  view_2: {
    flex:1,
    margin:15,
    height:300,
    backgroundColor: 'blue',
  },
  view_3: {
    flex:1,
    margin:15,
    height:300,
    backgroundColor: 'green',
  },
});


// 导出模块
module.exports = MyScrollView;
