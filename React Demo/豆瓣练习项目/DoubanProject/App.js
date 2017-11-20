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
  StatusBar,
  TabBarIOS
} from 'react-native';

import BookList from './iOS_views/book/book_list';

let FirstNavTabTitle = '图书';
let SecondNavTabTitle = '电影';

// 隐藏电池栏
StatusBar.setHidden(true);

export default class App extends Component<{}> {

  constructor(props){
    super(props)
    this._tabBarPress = this._tabBarPress.bind(this);
    this.state = {
      selectedTab : FirstNavTabTitle
    };
  }

  // 单击事件
  _tabBarPress(){
    this.setState({
      selectedTab : (this.state.selectedTab === FirstNavTabTitle ? SecondNavTabTitle : FirstNavTabTitle)
    })
  }


render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title= {FirstNavTabTitle}
          selected={this.state.selectedTab === FirstNavTabTitle}
          onPress={this._tabBarPress }
        >
          <BookList />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={SecondNavTabTitle}
          selected={this.state.selectedTab === SecondNavTabTitle}
          onPress={this._tabBarPress }
        >
          <View style={{flex:1, backgroundColor:'yellow'}}></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
