/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

var MovieList = require('./movieList');

let REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class App extends Component<{}> {

  constructor(props){
    super(props);

    this._renderLoadingView = this._renderLoadingView.bind(this);
    this._renderListView    = this._renderListView.bind(this);
    this._getData            = this._getData.bind(this);


    this.state = {
      loaded:false,
      movies: []
    };
  }

  componentDidMount() {
    this._getData();
  }

  // 加载数据
  _getData(){

    var opts = {
      Method:'Get'
    };

    fetch(REQUEST_URL, opts)
      .then((response)=>{
        return response.json();
      })
      .then((responseData)=>{

        var movies = responseData.movies;

        movies[0].title = '222222';
        movies[0].posters.thumbnail = 'http://127.0.0.1/picUrl.png';

        this.setState({
          loaded: true,
          dataSource: movies
        });

      })
      .catch((error)=>{
        alert('111' + error);
      });
  }

  // 渲染加载视图
  _renderLoadingView (){
    return (
      <View style={{ flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center' }} >
        <Text>正在加载中...</Text>
      </View>
    );
  }

  // <MovieList movies={this.state.dataSource} />
  // 渲染列表
  _renderListView(){

    {/*<View style={{ flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'red'}} >*/}
    {/*<Text>加载完成</Text>*/}
    {/*</View>*/}
    return (

      <MovieList movies={this.state.dataSource}></MovieList>
    );
  }


  render() {
    // 未加载
    if (!this.state.loaded){
      return this._renderLoadingView();
    }
    // 加载完成
    return this._renderListView();
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
