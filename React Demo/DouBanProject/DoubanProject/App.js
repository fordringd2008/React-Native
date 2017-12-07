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
  TouchableHighlight,
  Image,
} from 'react-native';


import { StackNavigator, TabNavigator } from 'react-navigation';

import Navigation from './iOS_views/common/navigation';
import BookList from './iOS_views/book/book_list';
import BookDetail from './iOS_views/book/book_detail';
import MovieList from './iOS_views/movie/movie_list';
import MovieWebView from './iOS_views/common/customWebView';

const FirstNavTabTitle = '图书';
const SecondNavTabTitle = '电影';

// 隐藏电池栏
StatusBar.setHidden(false);

// 图书的导航器
export const BookNavigator = StackNavigator({
  BookList:{
    screen:BookList,
    navigationOptions: (({navigation}) => StackOptions(navigation, FirstNavTabTitle))
  },
  BookDetail:{
    screen:BookDetail,
    navigationOptions: (({navigation}) => StackOptions(navigation, ''))
  },
});

// 图书的导航器
const MovieNavigator = StackNavigator({
  MovieList:{
    screen:MovieList,
    navigationOptions: (({navigation}) => StackOptions(navigation, SecondNavTabTitle))
  },
  MovieWebView:{
    screen:MovieWebView,
    navigationOptions: (({navigation}) => StackOptions(navigation, ''))
  }
});

// 主控制tabar
const RootTabNavigator = TabNavigator({
  BookNav:{
    screen:BookNavigator,
    navigationOptions:{
      tabBarLabel:'One',
      tabBarIcon: ()=>(
        <Image
          source = { { uri: 'http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg' }}
          resizeMode='contain'
          style={ {  width:30, height:30 } }
        />
      ),
      tabBarPosition: 'bottom',
      swipeEnabled:false,
      animationEnabled:false,
      tabBarOptions: {
        style: {
          height:49
        },
        activeBackgroundColor:'white',
        // activeTintColor:'#4ECBFC',
        activeTintColor:'red',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#aaa',
        showLabel:false,
      }
    }
  },
  MovieNav:{
    screen:MovieNavigator,
    navigationOptions:{
      tabBarLabel:'Tow',
      tabBarIcon: ()=>(
        <Image
          source = { { uri: 'http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg' }}
          resizeMode='contain'
          style={ {  width:30, height:30 } }
        />
      ),
      tabBarPosition: 'bottom',
      swipeEnabled:false,
      animationEnabled:false,
      tabBarOptions: {
        style: {
          height:49
        },
        activeBackgroundColor:'white',
        // activeTintColor:'#4ECBFC',
        activeTintColor:'red',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#aaa',
        showLabel:false,
      }
    }
  },
});



// 自定义导航配置
const StackOptions = (navigation, title)=>{
  let {state, goBack} = navigation;

  let params = state.params;

  // 判断是否隐藏或显示header
  const visible = params ? params.isVisible : false;
  let header;
  if (visible === true){
    header = null;
  }

  const headerStyle = { backgroundColor:'blue' };
  var headerTitle = params ? params.title : null;

  headerTitle = headerTitle ? headerTitle : title;

  // const headerTitle = '11';
  const headerTitleStyle = { fontSize:20, color:'white', fontWeight:'500', };
  const headerBackTitle = false;
  const headerLeft = CustomNavBackButton('返回', goBack);
  return { headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header };
};

// 自定义导航返回按钮
const CustomNavBackButton = (title, callBack)=>{
  <TouchableHighlight onPress={ ()=> { callBack() } }>
    <Image source={ { uri:'http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg' } } />
    <Text style={ { width:60, height:44, marginLeft:10 } }>{title}</Text>
  </TouchableHighlight>
};

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

  /*
    <TabBarIOS>
        <TabBarIOS.Item
          title= {FirstNavTabTitle}
          selected={this.state.selectedTab === FirstNavTabTitle}
          onPress={this._tabBarPress }
          systemIcon='bookmarks'
        >
          <Navigation compoment={ BookList }
                      style={{ flex:1 }} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={SecondNavTabTitle}
          selected={this.state.selectedTab === SecondNavTabTitle}
          onPress={this._tabBarPress }
          systemIcon='favorites'
        >
          <Navigation compoment={ MovieList }
                      style={{ flex:1 }} />

        </TabBarIOS.Item>
      </TabBarIOS>

  * */

  render() {
    return (
      <RootTabNavigator />
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
